'use client'

import { useSearchParams } from 'next/navigation'

export default  async  function fetchData ()  {
  const searchParams = useSearchParams()
  const search = searchParams.get('searchTerm')
    // Your data fetching logic here
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=AIzaSyBVeV89nj7sjzf0C_4MIpmitoQ-pFRnAyA&cx=213a996335d21426e&q=${search}`)
    const data = await response.json();
    return data;
  }

