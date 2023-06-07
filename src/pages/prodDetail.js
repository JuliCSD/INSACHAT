
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
  }, []);
  
  const product = {
    name: "Test",
    price: id, //test to see if the id is passed
    rating: 4.7,
    reviewsNbr: 944,
    href: "#link",
    hrefTwitter: "#twitter",
    hrefEmail: "#email",
    picture: "https://fancytailwind.com/static/bag2-cdb5c6c8fd6ebc9e7570c926667406d3.webp",
    alt: "Bag Elite Black",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, id tenetur consectetur, rem vel repudiandae, obcaecati autem corporis maxime laborum debitis ullam. Similique nisi, porro perspiciatis vel ipsam aliquam repudiandae. Facilis dolorem incidunt nobis quaerat exercitationem quos eaque ducimus aut possimus, aperiam, enim nulla provident! Ad necessitatibus atque pariatur, iste dignissimos ex.",
    inStock: true,
    sizes: [
      { capacity: "24L", details: "Lorem ipsum dolor sit, amet consectetur adipisicing elit." },
      { capacity: "50L", details: "Similique nisi, porro perspiciatis vel ipsam aliquam repudiandae." },
      { capacity: "100L", details: "Facilis dolorem incidunt nobis quaerat exercitationem quos eaque ducimus aut possimus, aperiam, enim nulla provident!" },
      
    ],
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
        <div className="order-first lg:order-last col-span-full lg:col-span-1 relative rounded-sm border-2 border-gray-200">
          <img src={prod.imageSrc} alt={prod.imageAlt} className="object-contain w-full h-80 lg:h-full" />
        </div>



        {/* :PRODUCT DETAILS */}
        <div className="order-last lg:order-first col-span-full lg:col-span-1 lg:max-w-xl flex flex-col items-start">
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
                    <svg className="w-4 h-4 text-gray-300 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z"/></svg>
                  </span>
                ))
                }
              </div>
              {/* ::::all reviews */}
              <span className="ml-2 text-sm text-gray-400 font-medium">{`${product.reviewsNbr} reviews`}</span>
            </div>
          </div>
          {/* ::Description */}
          <p className="mt-10 text-sm text-gray-500 font-medium">{product.description}</p>
          {/* ::Availability */}
          <div className="mt-5">
            {product.inStock ?
              <p className="flex items-center space-x-1 text-sm text-gray-700 font-semibold">
                <CheckIcon className="mr-2 w-5 h-5 text-green-500" />
                In stock and ready to ship
              </p>
              : <p className="flex items-center space-x-1 text-sm text-gray-700 font-semibold">
                  <XIcon className="mr-2 w-5 h-5 text-red-500" />
                  Unavailable for the moment
                </p>
            }
          </div>
          {/* ::Sizes */}
          <div className="mt-10">
            <h3 className="text-sm text-gray-700 font-semibold">Size</h3>
            <div className="mt-2 grid grid-flow-col auto-cols-fr gap-5">
              {product.sizes.map(size => (
                <button key={size.capacity} type="button" className={`col-span-full lg:col-auto pt-3 pb-5 px-4 inline-flex flex-col items-start space-y-2 rounded-lg border-2 ${selectedSize === size.capacity ? "border-red-400" : "border-gray-200"} text-left`} onClick={() => setSelectedSize(size.capacity)}>
                  <span className="text-base text-gray-700 font-semibold">{size.capacity}</span>
                  <span className="text-sm text-gray-500 font-medium">{size.details}</span>
                </button>
              ))
              }
            </div>
            <a href="#sizeGuide" className="mt-5 inline-flex items-center text-sm text-gray-400 font-medium hover:text-gray-700">
              What size should I buy?
              <QuestionMarkCircleIcon className="ml-2 w-4 h-4" />
            </a>
          </div>
          {/* ::Add to Cart Button */}
          <button className="mt-10 py-2 w-full inline-block rounded-md bg-red-500 text-base text-white font-semibold tracking-wide hover:bg-red-600">Add to cart</button>
          {/* ::Lifetime Guarantee */}
          <p className="mt-3 w-full inline-flex justify-center items-center text-sm text-gray-500 font font-semibold">
            <ShieldCheckIcon className="mr-2 w-4 h-4" />
            Lifetime Guarantee
          </p>
        </div>

      </div>
    </div>
    <Footer />
    </>
  )
}

export default ProdDetail
