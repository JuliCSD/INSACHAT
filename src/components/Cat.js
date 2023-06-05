
import React, { useEffect, useState } from 'react'
import { Switch } from '@headlessui/react'
import { ViewGridIcon, ViewListIcon } from "@heroicons/react/solid"
import ListProduits from './ListProduits'
import axios from 'axios'


const CategoryFilter4 = () => {

  const [products, setProducts] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedPrice, setSelectedPrice] = useState({min: "",
                                                      max: ""});

  const handleMinPriceChange = (e) => {
    setSelectedPrice({min: e.target.value, max: selectedPrice.max});
  };

  const handleMaxPriceChange = (e) => {
    setSelectedPrice({min: selectedPrice.min, max: e.target.value});
  };
    
  const filters = [
    /*{
      id: 'brand',
      name: 'Brand',
      options: [
        { value: 'buliclo', label: 'Buliclo' },
        { value: 'carlotin', label: 'Carlotin' },
        { value: 'merguinez', label: 'Merguinez' },
        { value: 'swifty', label: 'Swifty' },
        { value: 'tamtam', label: 'TamTam' },
        { value: 'wakaflaca', label: 'WakaFlaca' },
        { value: 'zaram', label: 'Zaram' },
        { value: 'zebulus', label: 'Zebulus' },
      ],
      setSelected: () => {},
    },*/
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'black', label: 'Black' },
        { value: 'yellow', label: 'Yellow' },
        { value: 'white', label: 'White' },
        { value: 'blue', label: 'Blue' },
        { value: 'purple', label: 'Purple' },
        { value: 'green', label: 'Green' },
        { value: 'red', label: 'Red' },
      ],
      selected: selectedColor,
      setSelected: setSelectedColor,
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: 'xs', label: 'XS' },
        { value: 'sm', label: 'SM' },
        { value: 'm', label: 'M' },
        { value: 'l', label: 'L' },
        { value: 'xl', label: 'XL' },
        { value: 'xxl', label: 'XXL' },
      ],
      selected: selectedSize,
      setSelected: setSelectedSize,
    },
    {
      price: 'price',
      name: 'Price',
      options: [
        {
          value: selectedPrice.min,
          label:
            <input
              type="range"
              min={0}
              max={100}
              step={10}
              value={selectedPrice.min}
              onChange={handleMinPriceChange}
          />
        },
        {
          value: selectedPrice.max,
          label: "tests"
            /*<input
              type="range"
              min={0}
              max={100}
              step={10}
              value={selectedPrice.max}
              onChange={handleMaxPriceChange}
            />*/
        },

      ],
      selected: selectedPrice,
      setSelected: setSelectedPrice,
    }
  ]
  const readAnnonces = () => {
    axios.get('http://localhost:5000/readAnnonces')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => console.log(error));
  }
  useEffect(() => {
    readAnnonces();
  }, []);

  const filteredProducts = products.filter((product) => {
    return (product.color === selectedColor || selectedColor === '')
          && (product.size === selectedSize || selectedSize === '');
  });

  return (
    <div className="mx-auto py-8 px-4 w-full max-w-7xl bg-white">
      <div className="relative">

        {/* :HEAD TITLE */}
        <div className="pb-10 sm:py-10 flex flex-col items-center border-b-2 border-gray-200 text-center">
          {/* ::Title */}
          <h1 className="text-3xl sm:text-xl text-gray-700 font-extrabold">New Arrivals</h1>
          {/* ::Text */}
        <a href="/signin" >
            <p className="text-gray-500 text-lg sm:text-xl mt-2 hover:text-rose-500 hover:scale-110 ease-in-out duration-200">Tester la page de login et sign up !</p>
        </a>
        </div>


        {/* :FILTERS CONTAINER */}
        <div className="py-5 sm:px-4 flex flex-col-reverse md:flex-row items-center justify-between">
          {/* ::Filter Select Input */}
          <div className="flex-shrink-0 mt-5 md:mt-0 max-w-sm sm:max-w-none w-full md:w-auto grid sm:grid-flow-col grid-cols-1 sm:auto-cols-fr gap-8">
            {filters.map(filter => (
              <div>
                <select 
                  name={filter.id} 
                  id={filter.id}
                  defaultValue={''}
                  className="bg-rose-50 border border-white-300 text-sm rounded-lg focus:ring-rose-500 focus:border-rose-500 block w-full p-2 focus:border-rose-500 focus:ring-rose-500"
                  onChange={(e) => {filter.setSelected(e.target.value);
                    }}
                >
                  <option value="" className="font-semibold">{filter.name}</option>
                  {filter.options.map(option => (
                      <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>

              </div>
            ))
            }
          </div>
          <div className="flex-grow ml-5 w-full flex items-center justify-around md:justify-between space-x-4">
           
          
          </div>
        </div>
           
    
        < ListProduits products={filteredProducts}  />
      
   
      </div>
    </div>
  )
}

export default CategoryFilter4
