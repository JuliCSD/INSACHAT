import React, { useState } from 'react';

function AddProd() {
 
    const [photosUp, setPhotosUp] = useState(false);

    const tooglePhotosUp = () =>{
        setPhotosUp(!photosUp)
    }

    const show = photosUp ? "visible absolute items-center":"invisible absolute items-center";  

    return ( 

    <body class="w-full py-10 px-1 sm:px-5 flex flex-col items-center bg-gradient-to-t from-white via-rose to-rose-200 font-body">
        <div class="container mx-auto" >  
                <div class="flex justify-center px-6 my-12">
                    <div class="w-full xl:w-3/4 lg:w-11/12 flex justify-center overflow-hidden">
                        <div className="relative hidden lg:block lg:col-span-1 w-full h-full bg-gray-200 rounded-2xl rounded-r-none">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSguBrHalb_LqfqDkOK-zos1tJ5RFBPmwdMWueQrhjjnQ&s" alt="" className="absolute w-full h-full object-contain"/>
                        </div>
                                <div class="w-full lg:w-7/12 bg-white p-5 rounded-2xl rounded-l-none">
                                    <h3 class="pt-4 text-2xl text-center">Vendre</h3>

                                    <form class="w-full max-w-sm">
                                        <div class="md:flex md:items-center mb-6">
                                            <div class="md:w-1/3">
                                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
                                                Nom
                                            </label>
                                            </div>
                                            <div class="md:w-2/3">
                                            <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-name" type="text" placeholder="Baskets adidas - 39.5"/>
                                            </div>
                                        </div>

                                        <div class="md:flex md:items-center mb-6">
                                            <div class="md:w-1/3">
                                            <label class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
                                                Prix
                                            </label>
                                            </div>
                                            <div class="md:w-2/3 grid grid-cols-2 gap-2">
                                                <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-number" type="number" placeholder="10"/>
                                                <div class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">€</div>
                                            </div>
                                        </div>


                                        <div class="flex flex-wrap -mx-3 mb-6">
                                            <div class="w-full px-3">
                                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-password">
                                                    Description
                                                </label>
                                                <textarea class=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none" id="description" placeholder="Très peu portées, pas de défaut grave, en très bon état ... "></textarea>
                                                <p class="text-gray-600 text-xs italic">Re-size can be disabled by set by resize-none / resize-y / resize-x / resize</p>
                                            </div>
                                        </div>
    
                                        {/* <div class="flex flex-wrap -mx0 mb-6" > */}
                                        <div class="flex flex-wrap -mx0 mb-6" > 
                                            <button class="shadow bg-rose-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button"  onClick={tooglePhotosUp}>
                                                Télécharger photos
                                            </button>
                                        </div>   





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

        <div class={show}>
             
                <div class="flex justify-center w-full mx-auto sm:max-w-lg">

                    <div class="flex flex-col items-center justify-center w-full h-auto my-20 bg-white sm:w-3/4 sm:rounded-lg sm:shadow-xl">
                        <div class="mt-10 mb-10 text-center">
                            <h2 class="text-2xl font-semibold mb-2">Upload your files</h2>
                            <p class="text-xs text-gray-500">File should be of format .mp4, .avi, .mov or .mkv</p>
                        </div>
                        <form action="#" class="relative w-4/5 h-32 max-w-xs mb-10 bg-white bg-gray-100 rounded-lg shadow-inner">
                            <input type="file" id="file-upload" class="hidden"/>
                            <label for="file-upload" class="z-20 flex flex-col-reverse items-center justify-center w-full h-full cursor-pointer">
                                <p class="z-10 text-xs font-light text-center text-gray-500">Drag & Drop your files here</p>
                                <svg class="z-10 w-8 h-8 text-indigo-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"></path>
                                </svg>
                            </label>
                        </form>
                    </div> 
            </div>
        </div>
    </body>
    

  );
}

export default AddProd;