"use client"

import React from 'react'
import { AiOutlineCamera, AiOutlineSearch } from 'react-icons/ai'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

const SearchHeaderOptions = () => {
  const pathname = usePathname()
  const router = useRouter()
  const searchParams = useSearchParams()
  const searchTerm  = searchParams.get("searchTerm")
  function selectTab(tab){
      router.push(`/search/${tab === "Image" ? "image" : "web"}?searchTerm=${searchTerm}`)
  }
    return (
    <div className='flex space-x-2 select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700 text-sm'>
      <div className={`flex space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 items-center ${pathname === "/search/web"  && "!text-blue-600 !border-blue-600"}`} onClick={() => selectTab("All")}>
        <AiOutlineSearch className='text-md'/>
        <p>All</p>
        </div>
      <div className={`flex space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2 items-center ${pathname === "/search/image"  && "!text-blue-600 !border-blue-600"}`} onClick={() => selectTab("Image")}>
        <AiOutlineCamera className='text-md'/>
        <p>Image</p>
      </div>
    </div>
  )
}

export default SearchHeaderOptions
