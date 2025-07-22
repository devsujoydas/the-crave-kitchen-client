import React from 'react'

const ChefRecommends = () => {

     const menuItems = [
        {
            id: 1,
            img: "",
            title: "",
            ingredients : "",
            price: "",
        },
        {
            id: 2,
            img: "",
            title: "",
            ingredients : "",
            price: "",
        },
        {
            id: 3,
            img: "",
            title: "",
            ingredients : "",
            price: "",
        },
    ]
    return (
        <div className='max-w-7xl md:mx-auto mx-5 py-20 space-y-9'>

            <div className='flex justify-center items-center flex-col gap-5'>
                <h1 className='text-[#d99940] italic text-lg'>---Should Try---</h1>
                <div className='border-t-4 border-b-4 border-zinc-300 w-fit py-5 px-10'>
                    <h1 className='font-family-cinzel text-4xl'>CHEF RECOMMENDS</h1>
                </div>
            </div>


            <div className='grid md:grid-cols-3 gap-5'>
                {
                    menuItems.map(item => (
                        <div className='flex justify-center flex-col items-center gap-2 border  border-zinc-200 rounded-md p-3 shadow-md  transition-all'>
                            <div className=''>
                                <img className='w-full h-full rounded-md object-cover object-center' src="https://images.unsplash.com/photo-1515683359900-6922e4964be1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D%3D" alt="" />
                            </div>
                            <div className=' text-center p-5 space-y-2'>
                                <h1 className='text-2xl font-semibold'>Caeser Salad</h1>
                                <p className='font-family-inter'>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                                <button className='text-[#d99940] active:scale-95 bg-[#f8f8ec] hover:bg-zinc-900 hover
                                active:border-transparent font-medium text-lg  border-b-4 px-6 py-3 rounded-lg mt-2 cursor-pointer transition-all'>ADD TO CART </button>
                            </div>
                        </div>

                    ))
                }


            </div>

        </div>
    )
}

export default ChefRecommends