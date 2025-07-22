import React from 'react'

const OrderOnline = () => {


    const categories = [
        {
            name: 'SALADS',
            imageUrl: 'https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'PIZZAS',
            imageUrl: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'SOUPS',
            imageUrl: 'https://images.unsplash.com/photo-1679844795701-4c7864627456?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'DESSERTS',
            imageUrl: 'https://images.unsplash.com/photo-1517084166762-9edca41416e6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    ];
    return (
        <div className='max-w-7xl md:mx-auto mx-5 py-20 space-y-8'>
            <div className='flex justify-center items-center flex-col gap-5'>
                <h1 className='text-[#d99940] italic text-lg'>---From 11:00am to 10:00pm---</h1>
                <div className='border-t-4 border-b-4 border-zinc-300 w-fit py-5 px-10'>
                    <h1 className='font-family-cinzel text-4xl'>ORDER ONLINE</h1>
                </div>
            </div>




            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {categories.map((category, index) => (
                    <div key={index}
                        className="h-96 flex justify-center items-end border border-zinc-300 rounded-lg overflow-hidden
                       hover:shadow-xl hover:scale-105 active:scale-100 transition-all duration-300 ease-in-out cursor-pointer
                       relative group"
                        style={{
                            backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 50%), url(${category.imageUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        {/* Overlay to darken image on hover */}
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                        {/* Category Name */}
                        <h2 className="font-family-cinzel pb-5 text-2xl sm:text-3xl font-semibold text-white z-10
                           group-hover:text-amber-300 transition-colors duration-300">
                            {category.name}
                        </h2>
                    </div>
                ))}
            </div>





        </div>
    )
}

export default OrderOnline