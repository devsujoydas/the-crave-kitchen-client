import React from 'react'

const FromOurMenu = () => {

    const menuItems = [
        {
            id: 1,
            img: "",
            title: "",
            description: "",
            price: "",
        },
        {
            id: 2,
            img: "",
            title: "",
            description: "",
            price: "",
        },
        {
            id: 3,
            img: "",
            title: "",
            description: "",
            price: "",
        },
        {
            id: 4,
            img: "",
            title: "",
            description: "",
            price: "",
        },
        {
            id: 5,
            img: "",
            title: "",
            description: "",
            price: "",
        },
        {
            id: 6,
            img: "",
            title: "",
            description: "",
            price: "",
        },
    ]

    return (
        <div className='max-w-7xl md:mx-auto mx-5 py-10 space-y-9'>

            <div className='flex justify-center items-center flex-col gap-5'>
                <h1 className='text-[#d99940] italic text-lg'>---Check it out---</h1>
                <div className='border-t-4 border-b-4 border-zinc-300 w-fit py-5 px-10'>
                    <h1 className='font-family-cinzel text-4xl'>FROM OUR MENU</h1>
                </div>
            </div>


            <div className='grid md:grid-cols-2 gap-5'>
                {
                    menuItems.map(item => (
                        <div className='flex justify-center items-center gap-6 border border-transparent hover:border-zinc-200 rounded-md p-3 cursor-pointer hover:shadow-md active:shadow-none transition-all'>
                            
                            <div className=' bg-zinc-300 h-24 w-30 rounded-r-full rounded-b-full overflow-hidden'>
                                <img className='w-full h-full object-cover object-center' src="https://images.unsplash.com/photo-1517084166762-9edca41416e6?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                            </div>
                            
                            <div className='flex gap-5'>
                                <div className='space-y-3'>
                                    <h1 className='text-xl font-family-cinzel'>ROAST DUCK BREAST ---------------------</h1>
                                    <p className='text-sm text-zinc-400 font-family-inter'>Roasted duck breast (served pink) with gratin potato and a griottine cherry sauce</p>
                                </div>
                                <div>
                                    <p className='text-[#d99940] font-medium text-xl'>$14.5</p>
                                </div>
                            </div>
                        </div>

                    ))
                }


            </div>

        </div>
    )
}

export default FromOurMenu