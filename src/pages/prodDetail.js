
import React, { useState,useEffect } from 'react'
import { CheckIcon, QuestionMarkCircleIcon, ShieldCheckIcon, XIcon } from '@heroicons/react/solid'
import { useParams } from 'react-router-dom'
import Footer from "../components/Footer.js"
import Navbar from '../components/Navbar.js'
import axios from 'axios'

//il faudra implémenter la DB ici

const ProdDetail = () => {

  const { id } = useParams();


  const [prod, setProd] = useState({
    _id: "",
    name: "",
    href: "",
    price: "",
    imageSrc: "",
    imageAlt: "",
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
  
  const product = {
    name: "",
    price: id, //test to see if the id is passed
    rating: 3.1,
    reviewsNbr: 200,
    alt: "Bag Elite Black",
    decription: "Ceci est une description de produit.",
    Couleur: "Noir",
    Taille: "M",

  }

  const [selectedSize, setSelectedSize] = useState(null)
  const starsNumber = Math.floor(product.rating)
  const isHalfStar = !Number.isInteger(product.rating)
  const emptyStars = 5 - Math.ceil(product.rating)

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
         
                  
            <div class="w-full xl:w-11/12 lg:w-11/12 flex justify-center overflow-hidden shadow-2xl rounded-2xl"> 
              <div class="w-full lg:w-7/12 bg-white p-5 "> 
                      {/* ::Name */}
                <h1 className="text-3xl sm:text-4xl text-gray-700 font-extrabold tracking-wide">{prod.name}</h1>
                {/* ::Price & Rating */}
                <div className="mt-5 flex items-center">
                  {/* :::Price */}
                  <p className="pr-5 border-r border-gray-200 text-2xl text-gray-700 font-normal">{` ${prod.price}`}</p>
                  {/* :::Reviews */}
                  <div className="pl-5 pr-3 flex items-center">
                    {/* ::::rating stars */}
                    <div className="flex items-center space-x-1">
                      {/* full stars */}
                      {[...Array(starsNumber)].map((star, index) =>(
                        <span key={index} className="flex-shrink-0">
                          <svg className="w-4 h-4 text-yellow-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        </span>
                      ))
                      }
                      {/* half star */}
                      {isHalfStar &&
                        <span className="flex-shrink-0">
                          <svg className="w-4 h-4 text-yellow-400 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 5.173l2.335 4.817 5.305.732-3.861 3.71.942 5.27-4.721-2.524v-12.005zm0-4.586l-3.668 7.568-8.332 1.151 6.064 5.828-1.48 8.279 7.416-3.967 7.416 3.966-1.48-8.279 6.064-5.827-8.332-1.15-3.668-7.569z"/></svg>
                        </span>
                      }
                      {/* empty stars */}
                      {[...Array(emptyStars)].map((star, index) =>(
                        <span key={index} className="flex-shrink-0">
                          <svg className="w-4 h-4 text-gray-200 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                        </span>
                      ))
                      }
                    </div>
                    {/* ::::all reviews */}
                    <span className="ml-2 text-sm text-gray-400 font-medium">{`${product.reviewsNbr} revues`}</span>
                  </div>
                </div>
                {/* ::Description */}
                <p className="mt-5 text-gray-700 text-sm">{product.decription}</p>
                {/* ::Color */}
                <div className="mt-5 flex items-center">
                  <p className="pr-5 border-gray-200 text-gray-700 font-medium">Couleur: {product.Couleur}</p>
                </div>
                {/* ::Size */}
                <div className="mt-5 flex items-center">
                  <p className="pr-5 border-gray-200 text-gray-700 font-medium">Taille: {product.Taille}</p>
                </div>
                  
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
