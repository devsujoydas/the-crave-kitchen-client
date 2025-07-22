
const FromOurMenu2 = () => {
    return (
        <div className=' space-y-9 min-h-[90vh] text-white bg-cover bg-center' style={{ backgroundImage: ` url(${`./FromOurMenu2.jpg`})` }}>

            <div className="w-full h-[90vh] p-20 bg-[#000000a6] backdrop-blur-xs space-y-10">

                <div className='flex justify-center items-center flex-col gap-5'>
                    <h1 className='text-[#d99940] italic text-lg'>---Check it out---</h1>
                    <div className='border-t-4 border-b-4 border-zinc-300 w-fit py-5 px-10'>
                        <h1 className='font-family-cinzel text-4xl'>FROM OUR MENU</h1>
                    </div>
                </div>


                <div className="flex justify-center items-center gap-20 max-w-7xl mx-auto">
                    <div>
                        <img className="rounded-lg" src="./FromOurMenu2.jpg" alt="" />
                    </div>
                    <div className="text-2xl font-family-inter space-y-2">
                        <h1>March 20, 2023</h1>
                        <h1>WHERE CAN I GET SOME?</h1>
                        <p className="text-lg font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>

                        <button className="text-lg border-2 border-transparent border-b-white rounded-lg px-6 py-3 cursor-pointer hover:bg-white hover:text-black hover:border-b-transparent active:scale-95 transition-all">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FromOurMenu2