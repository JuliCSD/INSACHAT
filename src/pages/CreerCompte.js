import axios from 'axios';
import React, { useState } from 'react';

function CreerCompte() {
  const [userInput, setUserInput] = useState({
    _id: '',
    name: '',
    email: '',
    favoris: '',
  });

  const [users, setUsers] = useState([]);
  const [annonces, setAnnonces] = useState([]);
  const [displayDatabase, setDisplayDatabase] = useState(false);
  const [displayAnnonces, setDisplayAnnonces] = useState(false);

  const handleInputChange = (event) => {
    setUserInput({
      ...userInput,
      [event.target.name]: event.target.value
    });
  }

  const addUser = () => {
    const user = {
      ...userInput,
      "favoris": userInput.favoris.split(',')
    };
    axios.post('http://localhost:5000/addUser', user)
      .then(response => {
        console.log(response);
        setUserInput({
          _id: '',
          name: '',
          email: '',
          favoris: ''
        });
      })
      .catch(error => console.log(error));
  }

  const readDatabase = () => {
    axios.get('http://localhost:5000/readDatabase')
      .then(response => {
        setUsers(response.data);
        setDisplayDatabase(true);
      })
      .catch(error => console.log(error));
  }

  const readAnnonces = () => {
    axios.get('http://localhost:5000/readAnnonces')
      .then(response => {
        setAnnonces(response.data);
        setDisplayAnnonces(true);
      })
      .catch(error => console.log(error));
  }

  return (
    <div>
      <h1>Hello world</h1>
      <input name="_id" placeholder="ID" value={userInput._id} onChange={handleInputChange} />
      <input name="name" placeholder="Name" value={userInput.name} onChange={handleInputChange} />
      <input name="email" placeholder="Email" value={userInput.email} onChange={handleInputChange} />
      <input name="favoris" placeholder="Favoris (comma-separated)" value={userInput.favoris} onChange={handleInputChange} />
      <button onClick={addUser}>Add User</button>
      <button onClick={readDatabase}>Read Database</button>
      <button onClick={readAnnonces}>Read annonces</button>

      {displayDatabase && (
        <>
          <h2>Database Content:</h2>
          {users.map(user => (
            <div key={user._id}>
              <p>ID: {user._id}</p>
              <p>Name: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Favoris: {user.favoris.join(', ')}</p>
            </div>
          ))}
        </>
      )}

      {displayAnnonces && (
        <>
          <h2>Annonces Content:</h2>
          {annonces.map(annonce => (
            <div key={annonce._id}>
              <p>Name: {annonce.name}</p>
              <p>Price: {annonce.price}</p>
              <p>Color: {annonce.color}</p>
            </div>
          ))}
        </>
      )}
    </div>
  )
}

export default CreerCompte;