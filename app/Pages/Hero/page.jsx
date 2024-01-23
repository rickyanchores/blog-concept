import React from 'react'

const Hero = () => {
  return (
    <div className='Hero min-h-screen p-4 grid grid-cols-1 md:grid-cols-6 md:grid-rows-6 gap-4'>
        <div className="A md:col-span-4 md:row-span-6 rounded-md">
            <div className="container relative mt-96 p-4 bg-black bg-opacity-60">
                <div className="text-container">
                    <h5>Asian Artist of the Year</h5>
                    <h1>How to get the perfect look while also being practical</h1>
                </div>
                <div className="btn-containe">
                    <button className='Read'>Read article</button>
                    <button className='User'>
                        by Ricky A
                    </button>
                </div>
            </div>
        </div>
        <div className="B md:col-span-2 md:row-span-3 bg-green-400 rounded-md">
        <div className="container mt-96 p-4 bg-black bg-opacity-60">
                <div className="text-container">
                    <h5>Korean Pop</h5>
                    <h1>How to get the perfect look while also being practical</h1>
                </div>
                <div className="btn-container">
                    <button className='Read'>Read article</button>
                    <button className='User'>
                        by Ricky A
                    </button>
                </div>
            </div>
        </div>
        <div className="C md:col-span-2 md:row-span-3 bg-blue-600 rounded-md">
        <div className="container mt-96 p-4 bg-black bg-opacity-60">
                <div className="text-container">
                    <h5>Fashion</h5>
                    <h1>How to get the perfect look while also being practical</h1>
                </div>
                <div className="btn-container">
                    <button className='Read'>Read article</button>
                    <button className='User'>
                        by Ricky A
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero;