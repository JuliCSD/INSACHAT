import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import logo from '../images/logo.png';
import fav from '../images/fav.png';


export default () => {

    const [menuState, setMenuState] = useState(false)
    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
      };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            navigate(`/?query=${encodeURIComponent(searchValue)}`);
        }
    };

  const navigation = [
      { title: "Vendre un objet", path: "/AddProd" },
      { title: "Voir ses produits", path: "/GestionAnnonces" },
  ]
    return (
        <nav className="bg-white border-b py-0">
            <div className="flex items-center space-x-0 py-1 px-0 max-w-screen-xl mx-auto md:px-8">
                <div className="flex-none lg:flex-initial">
                    <a href="/">
                        <img
                            src={logo}
                            width={243} 
                            height={114}
                        />
                    </a>
                </div>
                <div className="flex-1 flex items-center justify-between">
                    <div className={` z-20 w-full top-16 left-0 p-4 border-b lg:static  lg:block lg:border-none ${menuState ? '' : 'hidden'}`}>
                        <ul className="mt-12 space-y-5 lg:flex lg:space-x-6 lg:space-y-0 lg:mt-0">
                            {
                                navigation.map((item, idx) => (
                                    <li key={idx} className="text-xl text-gray-600 hover:text-rose-500">
                                        <a href={item.path}>
                                            {item.title}
                                        </a>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    
                        <form onSubmit={handleSubmit} className="flex items-center space-x-2 border rounded-md p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-none text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <input
                                className="w-full outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                                type="text"
                                value={searchValue}
                                onChange={handleChange}
                                onKeyDown={handleKeyPress}
                                placeholder="Search"
                            />
                        </form>
                        <div className="flex-1 flex items-center justify-end space-x-4 sm:space-x-6 px-4 ">
                            <div className="flex-none w-10 h-10 lg:flex-initial hover:animate-bounce">
                                <a href="/favoris">
                                    <img
                                    src={fav}
                    
                                    className="w-full h-full rounded-xl hover:transparency-50"
                                    />
                                </a>
                            </div>
                            <div className="w-10 h-10 hover:animate-spin outline-none rounded-full ring-offset-2 ring-rose-500 ring-2 lg:focus:ring-rose-600">
                                <a href={!localStorage.getItem('token') ? "/signin" : "/AccountPage"}>
                                    <img
                                    src="https://randomuser.me/api/portraits/men/78.jpg"
                                    className="w-full h-full rounded-full"
                                    />
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}