'use client'

import { useNavigate } from "react-router-dom";

export default function Error() { 
  const navigate = useNavigate()
    return <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">Something Went Wrong</h1>
        <button className="text-blue-500" onClick={()=>navigate(-1)}>Try Again</button>
    </div>;
}