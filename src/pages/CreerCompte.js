import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  state = {
    _id: '',
    name: '',
    email: '',
    favoris: '',
    users: [], // Here we add a users array to the state
    annonces: [], // Here we add a users array to the state
    displayDatabase: false, // And a displayDatabase state to control the visibility of the database content
    displayAnnonces: false
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  addUser = () => {
    let user = {
      "_id": this.state._id,
      "name": this.state.name,
      "email": this.state.email,
      "favoris": this.state.favoris.split(',')
    };
    axios.post('http://localhost:5000/addUser', user)
      .then(response => {
        console.log(response);
        this.setState({
          _id: '',
          name: '',
          email: '',
          favoris: ''
        });
      })
      .catch(error => console.log(error));
  }

  readDatabase = () => {
    axios.get('http://localhost:5000/readDatabase')
      .then(response => {
        this.setState({
          users: response.data,
          displayDatabase: true // Set the displayDatabase to true when the data is fetched
        });
      })
      .catch(error => console.log(error));
  }

  readAnnonces = () => {
    axios.get('http://localhost:5000/readAnnonces')
      .then(response => {
        this.setState({
          annonces: response.data,
          displayAnnonces: true // Set the displayDatabase to true when the data is fetched
        });
      })
      .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
        <h1>Hello world</h1>
        <input name="_id" placeholder="ID" value={this.state._id} onChange={this.handleInputChange} />
        <input name="name" placeholder="Name" value={this.state.name} onChange={this.handleInputChange} />
        <input name="email" placeholder="Email" value={this.state.email} onChange={this.handleInputChange} />
        <input name="favoris" placeholder="Favoris (comma-separated)" value={this.state.favoris} onChange={this.handleInputChange} />
        <button onClick={this.addUser}>Add User</button>
        <button onClick={this.readDatabase}>Read Database</button>
        <button onClick={this.readAnnonces}>Read annonces</button>

        {/* Show the database content only when displayDatabase is true */}
        {this.state.displayDatabase && (
          <>
            <h2>Database Content:</h2>
            {this.state.users.map(user => (
              <div key={user._id}>
                <p>ID: {user._id}</p>
                <p>Name: {user.name}</p>
                <p>Email: {user.email}</p>
                <p>Favoris: {user.favoris.join(', ')}</p>
              </div>
            ))}
          </>
        )}

        {this.state.displayAnnonces && (
                  <>
                    <h2>Annonces Content:</h2>
                    {this.state.annonces.map(annonces => (
                      <div key={annonces._id}>
                        <p>Name: {annonces.name}</p>
                        <p>Email: {annonces.price}</p>
                        <p>Color: {annonces.color}</p>
                      </div>
                    ))}
                  </>
                )}
      </div>
    )
  }
}

export default App;