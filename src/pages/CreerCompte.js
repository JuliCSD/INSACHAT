import axios from 'axios';
import React, { Component } from 'react';

class App extends Component {
  state = {
    _id: '',
    name: '',
    email: '',
    favoris: ''
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
      "favoris": this.state.favoris.split(',') // This allows favoris to be entered as a comma-separated list
    };
    axios.post('http://localhost:5000/addUser', user)
      .then(response => {
        console.log(response);
        this.setState({
          _id: '',
          name: '',
          email: '',
          favoris: ''
        }); // Reset the form
      })
      .catch(error => console.log(error));
  }

  readDatabase = () => {
    axios.get('http://localhost:5000/readDatabase')
      .then(response => console.log(response.data))
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
      </div>
    )
  }
}

export default App;