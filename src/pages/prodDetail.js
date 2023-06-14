
import React, { useState,useEffect } from 'react'
import { CheckIcon, QuestionMarkCircleIcon, ShieldCheckIcon, XIcon } from '@heroicons/react/solid'
import { useParams } from 'react-router-dom'
import Footer from "../components/Footer.js"
import Navbar from '../components/Navbar.js'
import axios from 'axios'
import fav from '../images/fav.png';

//il faudra implémenter la DB ici

const ProdDetail = () => {

  const { id } = useParams();


  const [prod, setProd] = useState({
    _id: "",
    name: "",
    owner: "",
    price: "",
    imageSrc: "",
    imageAlt: "",
    description: "",
    color: "",
  });

  const readProduct = () => {
    console.log(`Getting product with id: ${id}`);
    
    axios.get(`http://localhost:5000/readProduct/${id}`)
      .then(response => {
        setProd(response.data);
        console.log(`Response from server: ${JSON.stringify(response.data)}`);
        console.log(`Product in state: ${JSON.stringify(prod)}`);
      })
      .catch(error => console.log(`Error getting product: ${error}`));
  }
  
  useEffect(() => {
    readProduct();
    const token = localStorage.getItem('token');
    if (!token) {
      console.log('no token');
    } else {
      console.log('token found');
      console.log(token);
    }
  }, []);
  


  const [selectedSize, setSelectedSize] = useState(null)

  return (
    <>
    <Navbar />
    <div className="mx-auto py-8 px-4 w-full max-w-7xl bg-white">
      <div className="mx-auto max-w-2xl lg:max-w-none grid grid-cols-2 gap-x-5">

        {/* :PRODUCT PICTURE */}
        <div className="order-first lg:order-last col-span-full lg:col-span-1 relative shadow-2xl rounded-2xl ">
          <img src={prod.imageSrc} alt={prod.imageAlt} className="object-contain w-full h-80 lg:h-full rounded-2xl hover:scale-110 ease-in-out duration-300" />
        </div>



        {/* :PRODUCT DETAILS */}
        <div className="order-last lg:order-first col-span-full lg:col-span-1 lg:max-w-xl flex flex-col items-start">
         
                  
            <div class="w-full flex justify-center overflow-hidden shadow-2xl rounded-2xl py-8"> 
              <div class="w-full lg:w-7/12 bg-white p-5 "> 
                      {/* ::Name */}
                <h1 className="text-3xl sm:text-4xl text-gray-700 font-extrabold tracking-wide">{prod.name}</h1>
                {/* ::Price & Rating */}
                <div className="mt-5 flex items-center">
                  {/* :::Price */}
                  <p className="pr-5 border-r border-gray-200 text-2xl text-gray-700 font-normal">{prod.price} €  </p>
                  {/* :::Reviews */}
                  <div className="pl-5 pr-3 flex items-center">
                      {/* :: Owner */}
                    <div className="flex items-center">
                      <p className="pr-5 border-gray-200 text-gray-700 font-medium">Vendeur: </p>
                      </div>

                  </div>

                  <div className="mt-8" />
                </div>
                {/* ::Description */}
                <p className="mt-5 text-gray-700 text-sm">{prod.description}</p>
                {/* ::Color */}
                <div className="mt-5 flex items-center">
                  <p className="pr-5 border-gray-200 text-gray-700 font-medium">Couleur: {prod.color}</p>
                </div>
                {/* ::Size */}
                <div className="mt-5 flex items-center">
                  <p className="pr-5 border-gray-200 text-gray-700 font-medium">Taille: {prod.size}</p>
                </div>
                {/* ::additional info owner */}
                <div className="mt-5 flex items-center">
                  <p className="pr-5 border-gray-200 text-gray-700 font-medium">Contact email: </p>
                </div>
              

              </div>
              <div className='py-10'>
                <button>
                  <img src={fav}
                    
                    className="w-14 h-14 hover:transparency-50"
                    />
                </button>
              </div>
            </div>  
            

        </div>


      </div>
    </div>   



    <Footer />
    </>
  )
}

export default ProdDetail
