const addToFav =() => {

    axios.post(`http://localhost:5000/addFav/${token}`, id)
        .then(response =>{
        console.log(response)
        
        })
}