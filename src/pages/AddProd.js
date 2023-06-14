    import React, { useState } from 'react';
    import { ChevronLeftIcon } from '@heroicons/react/solid'
    import axios from 'axios';
    import { useNavigate } from 'react-router-dom';
    import { useEffect } from 'react';

    function AddProd() { 

        const [formData, setFormData] = useState({
            name: '',
            price: '',
            color: '',
            size: '',
            description: '',
            owner:'',
            photos: null,
          });

        const navigate = useNavigate();


          
        useEffect(() => {
            const token = localStorage.getItem('token');
            if (!token) {
              console.log('no token');
              navigate('/SignIn');
            }else{
            const headers = {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
                },
              }
            axios.get(`http://localhost:5000/VerifyExpire`,headers)
                .then(response => {
                    if(response.data === 'expired'){
                        console.log('expired');
                        localStorage.removeItem('token');
                        navigate('/SignIn');
                    }
                })
        }}, []);
        
          const handleInputChange = (event) => {
            setFormData({
              ...formData,
              [event.target.name]: event.target.value,
            });
          };

          const addProduct = (event) => {
            const token = localStorage.getItem('token');
            event.preventDefault(); 
            // Perform form submission logic here
            console.log(formData);
            const product = {
              ...formData,
            };
            const headers = {
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`,
                },
              }
            axios.post('http://localhost:5000/addProduct', product,headers)
              .then(response => {
                console.log(response);
                setFormData({
                    name: '',
                    price: '',
                    color: '',
                    size: '',
                    description: '',
                    owner:'',
                    photos: null,
                });
              })
              .catch(error => console.log(error));
          }
        
          const handleFileUpload = (event) => {
            setFormData({
              ...formData,
              photos: event.target.files[0],
            });
          };
        
        
        return ( 

        <body class="w-full py-10 px-1 sm:px-5 flex flex-col items-center bg-gradient-to-t from-white via-rose to-rose-200 font-body">
            <div class="container mx-auto" >  
            
                <div class="flex justify-center px-6 my-12">
                    
                    <div class="w-full flex justify-center overflow-hidden  ">


                        
                        <div class="w-1/2 bg-white p-5 rounded-2xl flex justify-center shadow-2xl ">
            

                        <a href="/" 
                        class="justify-start">
                            <button className="flex items-center space-x-1 text-gray-600 hover:text-rose-800 py-4 px-6">
                            <ChevronLeftIcon className="w-5 h-5" />
                            <span>Back</span>
                        
                            </button>
                             </a>

                        
 

                            <form class="w-full max-w-sm " onSubmit={addProduct}>
                                <div>
                                    <div>
                                        <label class="block text-gray-500 font-bold md:text-left mb-1 pr-4" >
                                            Nom
                                        </label>
                                    </div>

                                    <div class=" ">
                                    <input
                                    className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                                    name="name"
                                    type="text"
                                    placeholder="Baskets adidas - 39.5"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    />
                                    </div>
                                </div>
                                <br></br>

                                <div>
                                    <div>
                                        <label class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" >
                                            Prix
                                        </label>
                                    </div>
                                    <div class="md:w-2/3 grid grid-cols-2 gap-2">
                                        <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
                                        id="inline-number" 
                                        type="number" 
                                        placeholder="10"
                                        name="price"
                                        value={formData.price}
                                        onChange={handleInputChange}
                                        />
                                        <div class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">€</div>
                                    </div>
                                </div>
                                <br></br>

                                <div>
                                    <div>
                                        <label class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" >
                                            Couleur
                                            
                                        </label>
                                    </div>
                                    <div class="md:w-2/3 grid grid-cols-2 gap-2">
                                        
                                        <select 
                                        

                                        name="color"
                                        value={formData.color}
                                        onChange={handleInputChange}
                                        class=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder='Couleur'>
                                            <option></option>
                                            <option>Noir</option>
                                            <option>Jaune</option>
                                            <option>Blanc</option>
                                            <option>Bleu</option>
                                            <option>Vert</option>
                                            <option>Rouge</option>
                                        </select>
                                     
                                    </div>
                                </div>
                                <br></br>

                                <div>
                                    <div>
                                        <label class="block text-gray-500 font-bold mb-1 md:mb-0 pr-4" >
                                            Taille
                                            
                                        </label>
                                    </div>
                                    <div class="md:w-2/3 grid grid-cols-2 gap-2">
                                        <select 
                                        name="size"
                                        value={formData.size}
                                        onChange={handleInputChange}
                                        class=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" placeholder='Taille'>
                                            <option></option>
                                            <option>XS</option>
                                            <option>S</option>
                                            <option>M</option>
                                            <option>L</option>
                                            <option>XL</option>
                                            <option>XXL</option>
                                        </select>

                                    </div>
                                </div>
                                <br></br>


                                <div>
                                    <div>
                                        <label class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
                                            Description
                                        </label>
                                        <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" name="description" onChange={handleInputChange} value={formData.description} id="description" placeholder="Très peu portées, pas de défaut grave, en très bon état ... "></textarea>
                                    </div>
                                </div>
                                <br></br>

                                <div > 
                                    <div>
                                        <label class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
                                            Photos
                                        </label>
                                    </div>

                                    <form action="#" class="relative w-4/5 max-w-xs mb-10 bg-white bg-gray-100 rounded-lg shadow-inner">
                                        <input type="file" id="file-upload" class="hidden" onChange={handleFileUpload} />
                                        <label for="file-upload" class="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer">
                                            <p class="z-10 text-s font-light text-center text-gray-500">Téléchargez votre photo ici</p>
                                            <svg class="z-10 w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                                            </svg>
                                        </label>
                                    </form>


                                </div>   
                         

                                <div class="md:flex md:items-center">
                                    <div class=""></div>
                                        <div class="">
                                        <button
                                        className="shadow bg-rose-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                                        type="submit"
                                       
                                        >
                                            Valider
                                        </button>
                                    </div>
                                </div>

                            </form> 
                        </div>
                    </div>
                </div>
                
            </div>
        </body>
    

    );
    }

    export default AddProd;

