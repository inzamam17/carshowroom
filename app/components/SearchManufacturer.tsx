"use client";

import Image from 'next/image';
import { Combobox, Transition } from '@headlessui/react';
import { searchManufacturerProps } from '../types';

const SearchManufacturer = ({manufacturer, setManufacturer} : searchManufacturerProps) => {
  return (
    <div className='search-manufacturer'>
      <Combobox>
        <div className='relative w-full'>
          <Combobox.Button className="absolute top-[14px]">
            <Image src="/car-logo.svg" width={20} height={20} className="ml-4" alt="Manufacturer"/>
          </Combobox.Button>
         </div>
      </Combobox>
    </div>
  )
}

export default SearchManufacturer