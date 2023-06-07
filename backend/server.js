const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');
const { ObjectId } = require('mongodb');

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
      console.log(annonces);
      
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

app.listen(5000, () => console.log('Server is running on port 5000'));