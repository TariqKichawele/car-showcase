'use client';

import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'
import Image from 'next/image'
import { useRouter } from 'next/navigation';

const SearchButton = ({ otherClasses } : { otherClasses: string}) => {
  return (
    <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
        <Image 
          src='/magnifying-glass.svg'
          width={40}
          height={40}
          alt='search icon'
          className='object-contain'
        />
    </button>
  
  )
}

const SearchBar = ({ setManufacturer, setModel }) => {
    const [ searchManufacturer, searchSetManufacturer ] = useState('');
    const [ searchModel, searchSetModel ] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
       e.preventDefault();

      if(!searchModel && !searchManufacturer) {
        return alert('Please enter a model or manufacturer');
      };

      setModel(searchModel)
      setManufacturer(searchManufacturer);
    }


  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufacturer 
              selected={searchManufacturer}
              setSelected={searchSetManufacturer}
            />
            <SearchButton otherClasses="sm:hidden"/>
        </div>
        <div className='searchbar__item'>
          <Image 
            src={'/model-icon.png'}
            width={25}
            height={25}
            alt='model icon'
            className='absolute w-[20px] h-[20px] ml-4'
          />
          <input 
            type='text'
            name='model'
            value={searchModel}
            onChange={(e) => searchSetModel(e.target.value)}
            placeholder='Model'
            className='searchbar__input'
          />
          <SearchButton otherClasses="sm:hidden"/>
        </div>
        <SearchButton otherClasses="max-sm:hidden"/>
    </form>
  )
}

export default SearchBar