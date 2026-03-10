import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';

const Hero = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900 ">
            {/* Hero Content */}
            <main className="max-w-7xl mx-auto px-12 py-16 flex flex-col lg:flex-row items-center gap-12">
                {/* Left Side: Images Grid */}
                <div className="w-full lg:w-1/2 flex items-center justify-center gap-4 h-125">

                    {/* Image 1 */}
                    <div className="w-32 h-87.5 relative rounded-full overflow-hidden self-center">
                        <div className="bg-gray-200 w-full h-full relative">

                            <img src="/student1.png" alt="Interior 1" className="object-cover h-full w-full" />
                        </div>
                    </div>

                    {/* Image 2 (Higher) */}
                    <div className="w-32 h-112.5 relative rounded-full overflow-hidden self-start ">
                        <div className="bg-gray-300 w-full h-full relative">
                            <img src="/student.png" alt="Interior 2" className="object-cover h-full w-full" />
                        </div>
                    </div>

                    {/* Image 3 (Lower) */}
                    <div className="w-32 h-112.5 relative rounded-full overflow-hidden self-end">
                        <div className="bg-gray-400 w-full h-full relative">
                            <img src="/student.jpg" alt="Interior 3" className="object-cover h-full w-full" />
                        </div>
                    </div>

                    {/* Image 4 */}
                    <div className="w-32 h-87.5 relative rounded-full overflow-hidden self-center">
                        <div className="bg-gray-200 w-full h-full relative">
                            <img src="/student.png" alt="Interior 4" className="object-cover h-full w-full" />
                        </div>
                    </div>
                </div>

                {/* Right Side: Text */}
                <div className="w-full lg:w-1/2 space-y-8">
                    <h1 className="text-6xl md:text-7xl font-bold leading-[1.1] tracking-tight text-gray-900">
                        Crafting spaces <br />
                        with purpose <br />
                        and personality
                    </h1>
                    <p className="text-gray-500 max-w-md text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipiscing elit.
                        Maecenas vel facilisis enim auris id hendrerit nunc.
                    </p>
                    <button className="bg-[#FF7A5C] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e66d52] transition-all flex items-center group">
                        Get In touch
                        <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </button>
                </div>

            </main>
        </div>
    );
};

export default Hero;