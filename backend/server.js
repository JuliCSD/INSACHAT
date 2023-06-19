const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


const app = express();
app.use(cors());
app.use(express.json());

  app.get('/readAnnonces', async (req, res) => {
    const uri = "mongodb+srv://mathias:Tu07mLbgapte2C1d@cluster0.eauxg6l.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
      const database = client.db('insachat');
      const collection = database.collection('annonces');
  
      const annonces = await collection.find().toArray();
      
      res.status(200).send(annonces);
    } catch (error) {
      console.error('An error occurred while attempting to connect to MongoDB', error);  // Log the error
      res.status(500).send(error);
    } finally {
      await client.close();
    }
  });

  app.get('/readAnnoncesPostees', verifyToken, async (req, res) => {
    const uri = "mongodb+srv://mathias:Tu07mLbgapte2C1d@cluster0.eauxg6l.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
      const database = client.db('insachat');
      const collection = database.collection('annonces');
      owner=req.userId;

      const annonces = await collection.find({owner : owner}).toArray();      
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
    try {
      await client.connect();
      const database = client.db('insachat');
      const collection = database.collection('annonces');
      
      const query = { _id: new ObjectId(req.params.id) };  // Create a query with the hardcoded ID
      const produit = await collection.findOne(query);
      
      res.status(200).send(produit);
    } catch (error) {
      console.error('An error occurred while attempting to connect to MongoDB', error);  // Log the error
      res.status(500).send(error);
    } finally {
      await client.close();
    }
  });
  
  app.get('/deleteProduct/:id', async (req, res) => {
    const uri = "mongodb+srv://mathias:Tu07mLbgapte2C1d@cluster0.eauxg6l.mongodb.net/?retryWrites=true&w=majority"
    const client = new MongoClient(uri);
    
    try {
      await client.connect();
      const database = client.db('insachat');
      const collection = database.collection('annonces');
      
      const query = { _id: new ObjectId(req.params.id) };  // Create a query with the hardcoded ID
  
      const result = await collection.deleteOne(query);      
      res.status(200).send(result);
    } catch (error) {
      console.error('An error occurred while attempting to connect to MongoDB', error);  // Log the error
      res.status(500).send(error);
    } finally {
      await client.close();
    }
  });

  app.get('/getInfo/:id', async (req, res) => {
    console.log('Received a request to get a owner info'); // Logs when a request is received
    const uri = "mongodb+srv://mathias:Tu07mLbgapte2C1d@cluster0.eauxg6l.mongodb.net/?retryWrites=true&w=majority";
    const client = new MongoClient(uri);
  
    try {
      await client.connect();
      const database = client.db('insachat');
      const collection = database.collection('users');
      
      const query = { _id: new ObjectId(req.params.id) };  // Create a query with the hardcoded ID  
      const user = await collection.findOne(query);
      if (!user) {
        return res.status(404).send('No user found.');
      }
      const owner= {
        prenom: user.prenom,
        nom: user.nom,
        email: user.email,
      }
      res.status(200).send(owner);
    } catch (error) {
      console.error('An error occurred while attempting to connect to MongoDB', error);
      res.status(500).send(error);
    } finally {
      await client.close();
    }
  });

app.post('/addUser', async (req, res) => {
  const user = req.body;
  const uri = "mongodb+srv://mathias:Tu07mLbgapte2C1d@cluster0.eauxg6l.mongodb.net/?retryWrites=true&w=majority"
  const client = new MongoClient(uri);

  try {
    await client.connect();
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Hash the password with the salt
    const hash = await bcrypt.hash(user.password, salt);
    user.password=hash;
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
  try {
      await client.connect();
      const database = client.db('insachat');
      const collection = database.collection('users');
      const user = await collection.findOne({ email: req.body.email });
    
      if (!user) {
          return res.status(404).send('No user found.');
      }

      const passwordIsValid = await bcrypt.compare(req.body.password, user.password);
      //const passwordIsValid = user.password == req.body.password;
      //const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
      if (!passwordIsValid) {
          return res.status(401).send({ auth: false, token: null });
      }

      const token = jwt.sign({ id: user._id }, 'your_secret_key_here', {
          expiresIn: 7200 // expires in 24 hours
      });    
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

  if (!token)
      return res.status(403).send({ auth: false, message: 'No token provided.' });

  jwt.verify(token, 'your_secret_key_here', function(err, decoded) {
      if (err)
          return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
      // if everything good, save to request for use in other routes
      req.userId = decoded.id;
      next();
  });
}

app.post('/addProduct', verifyToken, async (req, res) => {
  const product = req.body;

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

app.get('/VerifyExpire', async (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const decodedToken = jwt.decode(token, { complete: true });

  const dateNow = new Date();

  if (decodedToken.payload.exp < dateNow.getTime()/1000) {
    res.status(200).send('expired');
    //console.log("token expired");
  } else {
    res.status(200).send('not expired');
    //console.log("token not expired");
  }
});


app.get('/readFavs', verifyToken, async (req, res) => {
  
  const uri = "mongodb+srv://mathias:Tu07mLbgapte2C1d@cluster0.eauxg6l.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('insachat');
    const collection = database.collection('users');

    console.log("requesting favs from",req.userId);
    const query = { _id: new ObjectId(req.userId) };  // Create a query with the hardcoded ID
  
    const user = await collection.findOne(query);
    if (!user) {
      return res.status(404).send('No user found.');
    }
    console.log(`Found user in database: ${JSON.stringify(user)}`);

    // Assume 'favorites' is an array of favorite items stored in the user document
    res.status(200).send(user.favoris);
  } catch (error) {
    console.error('An error occurred while attempting to connect to MongoDB', error);
    res.status(500).send(error);
  } finally {
    await client.close();
  }
});

app.post('/addFavorite/:id', verifyToken, async (req, res) => {
  const uri = "mongodb+srv://mathias:Tu07mLbgapte2C1d@cluster0.eauxg6l.mongodb.net/?retryWrites=true&w=majority";
  const client = new MongoClient(uri);

  try {
    await client.connect();

    const database = client.db('insachat');
    const collection1 = database.collection('annonces');
    const collection2 = database.collection('users');

    const queryProd = { _id: new ObjectId(req.params.id) };
    const prod = await collection1.findOne(queryProd);
    if (!prod) {
      return res.status(404).send('No user found.');
    }

    const queryUser = { _id: new ObjectId(req.userId) }; 
    const user = await collection2.findOne(queryUser);
    if (!user) {
      return res.status(404).send('No user found.');
    }

    //$addToSet pour pas avoir de doublons
    const result = await collection2.updateOne(
      { _id: new ObjectId(user._id) },
      { $addToSet: { favoris: req.params.id } }
    );

    res.status(200).send(`Product added to favorites for user with id: ${queryUser}`);
  } catch (error) {
    res.status(500).send(error);
  } finally {
    await client.close();
  }
});


app.listen(5000, () => console.log('Server is running on port 5000'));
