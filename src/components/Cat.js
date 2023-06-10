import React, { useEffect, useState, useRef } from 'react';
import ListProduits from './ListProduits';
import axios from 'axios';

import { ChevronDownIcon } from '@heroicons/react/solid'

const CategoryFilter4 = () => {
  const dropdownRef = useRef(null);
  const [products, setProducts] = useState([]);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedPrice, setSelectedPrice] = useState({ min: '', max: '' });
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state

  const handleMinPriceChange = (e) => {
    setSelectedPrice({ min: e.target.value, max: selectedPrice.max });
  };

  const handleMaxPriceChange = (e) => {
    setSelectedPrice({ min: selectedPrice.min, max: e.target.value });
  };

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      console.log("click outside");
      setIsOpen(false);
    }
  };

  const filters = [
    {
      id: 'color',
      name: 'Color',
      type:'select',
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
      type:'select',
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
          type:'range',
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
  ];
  const readAnnonces = () => {
    axios
      .get('http://localhost:5000/readAnnonces')
      .then((response) => {
        setProducts(response.data);
        setIsLoading(false); // Set isLoading to false after data is fetched
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false); // Set isLoading to false on error as well
      });
  };

  useEffect(() => {
    readAnnonces();
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const filteredProducts = products.filter((product) => {
    
    return (
      (product.color === selectedColor || selectedColor === '') &&
      (product.size === selectedSize || selectedSize === '')
          && (parseInt(product.price.replace("$", "")) >= parseInt(selectedPrice.min) || selectedPrice.min === '')
          && (parseInt(product.price.replace("$", "")) <= parseInt(selectedPrice.max) || selectedPrice.max === '')
    );
  });

  return (
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
          {/* :FILTERS CONTAINER */}
          <div className="py-5 sm:px-4 flex flex-col-reverse md:flex-row items-center justify-between">
            {/* ::Filter Select Input */}
            <div className="flex-shrink-0 mt-5 md:mt-0 max-w-sm sm:max-w-none w-full md:w-auto grid sm:grid-flow-col grid-cols-1 sm:auto-cols-fr gap-8">
              {filters.map((filter) => (
                filter.type === 'select' && (
                <div key={filter.id}>
                  <select
                    name={filter.id}
                    id={filter.id}
                    defaultValue={''}
                    className="bg-rose-50 border border-white-300 text-sm rounded-lg focus:ring-rose-500 block w-full p-2 focus:border-rose-500 focus:ring-rose-500 hover:scale-105 cursor-pointer ease-in-out duration-200"
                    onChange={(e) => {
                      filter.setSelected(e.target.value);
                    }}
                  >
                    <option value="" className="font-semibold">
                      {filter.name}
                    </option>
                    {filter.options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              )))}
              <div className="relative select-none" ref={dropdownRef}>
        <div className={classNames("flex items-center justify-between bg-rose-50 border border-white-300 text-sm rounded-lg ${isOpen ? ring-rose-500 block w-full p-2 border-rose-500 ring-rose-500} hover:scale-105 cursor-pointer ease-in-out duration-200")} onClick={handleDropdownClick}>
        <span className="mr-2">Price Range</span>
        <ChevronDownIcon className="-mr-1 h-4 w-4" aria-hidden="true" />
        </div>
        {isOpen && (
          <div className="absolute z-10 bg-white border border-gray-300 p-4 mt-2">
            <div className="flex">
              <label htmlFor="minPriceSlider">Min</label>
              <input
                type="range"
                id="minPriceSlider"
                min={0}
                max={selectedPrice.max}
                value={selectedPrice.min}
                onChange={handleMinPriceChange}
              />
              {selectedPrice.min}$
            </div>
            <div className='flex'>
              <label htmlFor="maxPriceSlider">Max</label>
              <input
                type="range"
                id="maxPriceSlider"
                min={selectedPrice.min}
                max={1000}
                value={selectedPrice.max}
                onChange={handleMaxPriceChange}
              />
              {selectedPrice.max}$
            </div>
          </div>
        )}
      </div>  
            </div>
            <div className="flex-grow ml-5 w-full flex items-center justify-around md:justify-between space-x-4"></div>
          </div>

          <ListProduits products={filteredProducts} />
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter4;
