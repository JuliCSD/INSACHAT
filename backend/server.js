const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/readDatabase', async (req, res) => {
    const uri = "mongodb+srv://mathias:Tu07mLbgapte2C1d@cluster0.eauxg6l.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
      const database = client.db('insachat');
      const collection = database.collection('users');
  
      const users = await collection.find().toArray();
      
      res.status(200).send(users);
    } catch (error) {
      console.error('An error occurred while attempting to connect to MongoDB', error);  // Log the error
      res.status(500).send(error);
    } finally {
      await client.close();
    }
  });

  app.get('/readAnnonces', async (req, res) => {
    const uri = "mongodb+srv://mathias:Tu07mLbgapte2C1d@cluster0.eauxg6l.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
      const database = client.db('insachat');
      const collection = database.collection('annonces');
  
      const annonces = await collection.find().toArray();
      //console.log(annonces);
      
      res.status(200).send(annonces);
    } catch (error) {
      console.error('An error occurred while attempting to connect to MongoDB', error);  // Log the error
      res.status(500).send(error);
    } finally {
      await client.close();
    }
  });

  app.get('/readProduct/:id', async (req, res) => {
    const uri = "mongodb+srv://mathias:Tu07mLbgapte2C1d@cluster0.eauxg6l.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri);
  
    console.log(`Received request to get product with id: ${req.params.id}`);
    
    try {
      await client.connect();
      const database = client.db('insachat');
      const collection = database.collection('annonces');
      
      const query = { _id: new ObjectId(req.params.id) };  // Create a query with the hardcoded ID
  
      const produit = await collection.findOne(query);
      console.log(`Found product in database: ${JSON.stringify(produit)}`);
      
      res.status(200).send(produit);
    } catch (error) {
      console.error('An error occurred while attempting to connect to MongoDB', error);  // Log the error
      res.status(500).send(error);
    } finally {
      await client.close();
    }
  });
  

app.post('/addUser', async (req, res) => {
  const user = req.body;

  console.log('Received a request to add a user'); // Logs when a request is received

  const uri = "mongodb+srv://mathias:Tu07mLbgapte2C1d@cluster0.eauxg6l.mongodb.net/?retryWrites=true&w=majority"
  //const uri = 'mongodb+srv://mathias:Tu07mLbgapte2C1d@cluster0.eauxg6l.mongodb.net/';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('insachat');
    const collection = database.collection('users');

    const result = await collection.insertOne(user);
    
    res.status(200).send(`New user added with the following id: ${result.insertedId}`);
  } catch (error) {
    res.status(500).send(error);
  } finally {
    await client.close();
  }
});

app.post('/login', async (req, res) => {
  const uri = "mongodb+srv://mathias:Tu07mLbgapte2C1d@cluster0.eauxg6l.mongodb.net/?retryWrites=true&w=majority"
  const client = new MongoClient(uri);
  console.log('Received a request to login a user');

  try {
      await client.connect();
      const database = client.db('insachat');
      const collection = database.collection('users');
      console.log(req.body.email);
      const user = await collection.findOne({ email: req.body.email });
    
      if (!user) {
          return res.status(404).send('No user found.');
          console.log("No user found");
      }
      const passwordIsValid = user.password == req.body.password;
      //const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) {
          return res.status(401).send({ auth: false, token: null });
          console.log("Password is not valid");
      }
      const token = jwt.sign({ id: user._id }, 'your_secret_key_here', {
          expiresIn: 86400 // expires in 24 hours
      });

      console.log(`User ${user.email} logged in successfully`);
    
      res.status(200).send({ auth: true, token: token });
  } catch (error) {
      console.error('An error occurred while attempting to connect to MongoDB', error);
      res.status(500).send(error);
  } finally {
      await client.close();
  }
});

function verifyToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  //const token = req.headers['x-access-token'];
  console.log(token);
  if (!token)
      return res.status(403).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, 'your_secret_key_here', function(err, decoded) {
      if (err)
          return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
      // if everything good, save to request for use in other routes
      req.userId = decoded.id;
      console.log(`User id decoded : ${req.userId}`);
      next();
  });
}

app.post('/addProduct', verifyToken, async (req, res) => {
  const product = req.body;

  console.log('Received a request to add a product'); // Logs when a request is received
  console.log("requesting name from",req.userId);
  product.owner = req.userId;

  const uri = "mongodb+srv://mathias:Tu07mLbgapte2C1d@cluster0.eauxg6l.mongodb.net/?retryWrites=true&w=majority"
  //const uri = 'mongodb+srv://mathias:Tu07mLbgapte2C1d@cluster0.eauxg6l.mongodb.net/';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('insachat');
    const collection = database.collection('annonces');

    const result = await collection.insertOne(product);
    
    res.status(200).send(`New product added with the following id: ${result.insertedId}`);
  } catch (error) {
    res.status(500).send(error);
  } finally {
    await client.close();
  }
});

app.get('/getName', verifyToken, async (req, res) => {
  
  const uri = "mongodb+srv://mathias:Tu07mLbgapte2C1d@cluster0.eauxg6l.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('insachat');
    const collection = database.collection('users');

    //console.log("requesting name from",req.userId);
    const query = { _id: new ObjectId(req.userId) };  // Create a query with the hardcoded ID
  
    const user = await collection.findOne(query);
    if (!user) {
      return res.status(404).send('No user found.');
    }

    // Assume 'favorites' is an array of favorite items stored in the user document
    res.status(200).send(user.nom);
  } catch (error) {
    console.error('An error occurred while attempting to connect to MongoDB', error);
    res.status(500).send(error);
  } finally {
    await client.close();
  }
});


app.listen(5000, () => console.log('Server is running on port 5000'));