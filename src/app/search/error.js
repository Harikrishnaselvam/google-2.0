'use client'


export default function Error() { 
    return <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">Something Went Wrong</h1>
        <button className="text-blue-500" onClick={()=> window.history.back()}>Try Again</button>
    </div>;
}