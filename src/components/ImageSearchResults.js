import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ImageSearchResults({results}) {
  return (
    <div>
      <div className=''>
        {results.items.map((result) => {
            <div  key={result.link} className=''>
            <div className='group'>
                <Link href={result.image.contextLink}>
                    <Image src={result.link} alt='no internet'/>
                </Link>
            </div>
            </div>
        })}
      </div>
    </div>
  )
}

export default ImageSearchResults
