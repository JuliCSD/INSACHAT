import axios from 'axios';
import React, { useState } from 'react';

const SignUp = () => {
    const [userInput, setUserInput] = useState({
        prenom: '',
        nom: '',
        email: '',
        password : '',
  });


    const handleInputChange = (event) => {
        setUserInput({
        ...userInput,
        [event.target.name]: event.target.value
        });
    }

    const addUser = () => {
        const user = {
          ...userInput,
        };
        axios.post('http://localhost:5000/addUser', user)
          .then(response => {
            console.log(response);
            setUserInput({
              prenom: '',
              nom: '',
              email: '',
              password: '',
            });
          })
          .catch(error => console.log(error));
      }
    return (
        <body class="w-full py-10 px-1 sm:px-5 flex flex-col items-center bg-gradient-to-t from-white via-rose to-rose-200 font-body">

            <div class="container mx-auto">
                <div class="flex justify-center px-6 my-12">

                    <div class="w-full xl:w-3/4 lg:w-11/12 flex justify-center overflow-hidden">
                        <div className="relative hidden lg:block lg:col-span-1 w-full h-full bg-gray-200 rounded-2xl rounded-r-none">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSguBrHalb_LqfqDkOK-zos1tJ5RFBPmwdMWueQrhjjnQ&s" alt="" className="absolute w-full h-full object-contain"/>
                        </div>
                        <div class="w-full lg:w-7/12 bg-white p-5 rounded-2xl rounded-l-none">
                            <h3 class="pt-4 text-2xl text-center">Crée ton compte !</h3>
                            <form class="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                                <div class="mb-4 md:flex md:justify-between">
                                    <div class="mb-4 md:mr-2 md:mb-0">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="firstName">
                                            Prénom
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="Prénom"
                                            type="text"
                                            name="prenom"
                                            placeholder="Prénom"
                                            value={userInput.prenom}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div class="md:ml-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="lastName">
                                            Nom
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="Nom"
                                            name="nom"
                                            type="text"
                                            placeholder="Nom"
                                            value={userInput.nom}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div class="mb-4">
                                    <label class="block mb-2 text-sm font-bold text-gray-700" for="email">
                                        Email
                                    </label>
                                    <input
                                        class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        name="email"
                                        type="email"
                                        placeholder="Email"
                                        value={userInput.email}
                                        onChange={handleInputChange}
                                    />
                                </div>
                                <div class="mb-4 md:flex md:justify-between">
                                    <div class="mb-4 md:mr-2 md:mb-0">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="password">
                                            Password
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="password"
                                            name="password"
                                            type="password"
                                            placeholder="******************"
                                            value={userInput.password}
                                            onChange={handleInputChange}
                                        />
                                        <p class="text-xs italic text-red-500">Choisissez un mot de passe !</p>
                                    </div>
                                    <div class="md:ml-2">
                                        <label class="block mb-2 text-sm font-bold text-gray-700" for="c_password">
                                            Confirmer Password
                                        </label>
                                        <input
                                            class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                            id="c_password"
                                            type="password"
                                            placeholder="******************"
                                        />
                                    </div>
                                </div>
                                <div class="mb-6 text-center">
                                    <button
                                        class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                                        type="button"
                                        onClick={addUser}
                                    >
                                        Créer son compte
                                    </button>
                                </div>
                                <hr class="mb-6 border-t" />
                                <div class="text-center">
                                    <a
                                        class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="#"
                                    >
                                        Mot de passe oublié ?
                                    </a>
                                </div>
                                <div class="text-center">
                                    <a
                                        class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                                        href="/signin"
                                    >
                                        Déjà un compte ? Connecte toi !
                                    </a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default SignUp