import React from 'react';

const OrderNow = () => {
    return (
        <section>
            <div class="container mx-auto flex  px-5 py-5 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/4 lg:pr-24 md:pr-16 flex flex-col md:items-center md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Order now to skip the line</h1>

                    <div class="flex justify-center pt-4">
                        <button class="inline-flex text-black bg-white border-2 border-black py-2 px-8 focus:outline-none hover:bg-gray-200 rounded text-lg">Menu</button>
                        <button class="border-2 border-black ml-4 inline-flex text-gray-700 bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-100 rounded text-lg">Order Now</button>


                    </div>

                    <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 sm:-mt-36 sm:ml-96 sm:pl-44 ">
                        <img class=" object-cover object-center hidden? invisible sm:visible " alt="hero" src="https://i.ibb.co/H7LcCWQ/Arrow-Arc-Right.png" />
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ">
                    <img class="object-cover object-center rounded sm:-mt-64" alt="hero" src="https://i.ibb.co/vdRjRgB/casual-life-3d-green-coffee-cup-1.png" />

                    <div className="sm:-ml-52 sm:-mt-5">
                        <button className="border-2 border-pink-500   text-gray-700 bg-gray-100  py-2 px-10 focus:outline-none hover:bg-red-200 rounded text-lg"> <span><img className='mx-auto' src="https://i.ibb.co/8zPzhZ7/Coffee.png" alt="" /></span>CUSTOMIZE 
                        
                        </button>
                    </div>
                </div>

            </div>

        </section>
    );
};

export default OrderNow;