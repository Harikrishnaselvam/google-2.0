

import ImageSearchResults from '@/components/ImageSearchResults';
import Link from 'next/link';
import React from 'react'


const ImageSearch = async ({searchParams}) => {
  await new Promise((resolve) => setTimeout(resolve,10000))
  const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBVeV89nj7sjzf0C_4MIpmitoQ-pFRnAyA&cx=213a996335d21426e&q=${searchParams.searchTerm}&searchType=image`)
  const data = await response.json();

  if(!response.ok){
    throw new Error("Something Went Wrong")
  }
  const results = data.items;
  if(!results){
    return <div className="flex flex-col justify-center items-center pt-10">
    <h1 className='text-3xl mb-4 '>No Results Found</h1>
    <p className='text-lg'>Try searching for something else or go back to the home page{" "}
    <Link href='/' className='text-blue-500'>
      Home.
    </Link>
    </p>
    </div>
  }
  console.log(data)
  return (
    <>
      {results && <ImageSearchResults results={data}/>}
    </>
  )
}

export default ImageSearch
