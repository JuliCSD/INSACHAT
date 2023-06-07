    import React, { useState } from 'react';

    function AddProd() { 
        const [photosUp, setPhotosUp] = useState(false);

        const tooglePhotosUp = () =>{
            setPhotosUp(!photosUp)
        }

        const show = photosUp ? "visible absolute items-center":"invisible absolute items-center";  

        const handleFileUpload = (event) => {
            const file = event.target.files[0];
            console.log('File uploaded:', file);
        };

        return ( 

        <body class="w-full py-10 px-1 sm:px-5 flex flex-col items-center bg-gradient-to-t from-white via-rose to-rose-200 font-body">
            <div class="container mx-auto" >  
                <div class="flex justify-center px-6 my-12">
                    <div class="w-full xl:w-3/4 lg:w-11/12 flex justify-center overflow-hidden">
                        <div class="w-full lg:w-7/12 bg-white p-5 rounded-2xl rounded-l-none">
                            <h3 class="pt-4 text-2xl text-center">Vendre</h3>

                            <form class="w-full max-w-sm">
                                <div>
                                    <div>
                                        <label class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" >
                                            Nom
                                        </label>
                                    </div>

                                    <div class="md:w-2/3">
                                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-name" type="text" placeholder="Baskets adidas - 39.5"/>
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
                                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-number" type="number" placeholder="10"/>
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
                                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-number" type="number" placeholder="jaune"/>
                                    </div>
                                </div>
                                <br></br>

                                <div>
                                    <div>
                                        <label class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4" >
                                            Taille
                                            
                                        </label>
                                    </div>
                                    <div class="md:w-2/3 grid grid-cols-2 gap-2">
                                        <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-number" type="number" placeholder="xs"/>
                                    </div>
                                </div>
                                <br></br>


                                <div>
                                    <div>
                                        <label class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
                                            Description
                                        </label>
                                        <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="description" placeholder="Très peu portées, pas de défaut grave, en très bon état ... "></textarea>
                                        <p class="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
                                    </div>
                                </div>
                                <br></br>

                                <div > 
                                    <div>
                                        <label class="block text-gray-500 font-bold md:text-left mb-1 md:mb-0 pr-4">
                                            Photos
                                        </label>
                                    </div>

                                    <form action="#" class="relative w-4/5 h-32 max-w-xs mb-10 bg-white bg-gray-100 rounded-lg shadow-inner">
                                        <input type="file" id="file-upload" class="hidden" onChange={handleFileUpload} />
                                        <label for="file-upload" class="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer">
                                            <p class="z-10 text-xs font-light text-center text-gray-500">Drag & Drop your files here</p>
                                            <svg class="z-10 w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                                            </svg>
                                        </label>
                                    </form>

                                    <button class="shadow bg-rose-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button"  onClick={tooglePhotosUp}>
                                        Télécharger photos
                                    </button>
                                    

                                </div>   
                                <br></br>
                                <br></br>

                                <div class="md:flex md:items-center">
                                    <div class="md:w-1/3"></div>
                                        <div class="md:w-2/3">
                                            <button class="shadow bg-rose-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
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
