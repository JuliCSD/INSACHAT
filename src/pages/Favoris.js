import React, { useEffect, useState } from 'react';
import ListProduits from '../components/ListProduits';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import axios from 'axios';


const Favoris= () => {

    const [listFavs, setFavs] = useState([])
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const readFavs = (token) =>{
        console.log(`Getting favorites of id:${token}`)

        axios
      .get(`http://localhost:5000/readFavs/`,{
        headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
        },
        },)
      .then((response) => {
        setFavs(response.data);
        setIsLoading(false); // Set isLoading to false after data is fetched
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false); // Set isLoading to false on error as well
      });
  };


  const readAnnonces = () => {
    axios
      .get('http://localhost:5000/readAnnonces')
      .then((response) => {
        setProducts(response.data);
        console.log(listFavs)
        setIsLoading(false); // Set isLoading to false after data is fetched
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false); // Set isLoading to false on error as well
      });
  };  
    
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
        console.log('no token');
        } else {
        console.log('token found');
        console.log(token);
        axios.get(`http://localhost:5000/getName`,{
            headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
            },
        })
        .then(response => {
            console.log(`Response from server: ${JSON.stringify(response.data)}`);
        })
        .catch(error => console.log(`Error getting name: ${error}`));
        }

        readFavs(token);
        readAnnonces();

        }, []);
        const filteredProducts = products.filter((product) => listFavs.includes(product._id));
        console.log(filteredProducts);



    return (

        <>
        <Navbar />

        <body>
            <div className="relative">
            {isLoading && (
            <div className="absolute bg-white bg-opacity-60 z-10 h-full w-full flex items-center justify-center">
                <div className="flex items-center">
                <span className="text-3xl mr-4">Loading</span>
                <svg className="animate-spin h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                </div>
            </div>
            )}
    
            <div className="mx-auto py-8 px-4 w-full max-w-7xl bg-white">
            <div className="relative">
              <ListProduits products={filteredProducts} />
            </div>
            </div>
        </div>
        </body>

        <Footer />
        </>
        
        )
}
    
export default Favoris;
    