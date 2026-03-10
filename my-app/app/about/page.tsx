"use client"
const About = () => {
    return (
        <>
            <section className="relative py-24 md:py-32 overflow-hidden bg-white">
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-150 h-150 bg-[#FF7A5C]/5 rounded-full blur-3xl font-inter"></div>
                <div className="container mx-auto px-6 md:px-12 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

                        {/* Image1 */}
                        <div className="lg:col-span-6 relative">
                            <div className="relative z-20 w-4/5 rounded-2xl overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-transform hover:scale-[1.02] duration-500">
                                <img
                                    src="/student.png"
                                    alt="Premium Workspace"
                                    className="w-full h-full object-cover aspect-3/4"
                                />
                            </div>

                            {/* Image2*/}
                            <div className="absolute -bottom-12 -right-4 z-30 w-3/5 rounded-2xl overflow-hidden border-12 border-white shadow-[0_24px_48px_-12px_rgba(0,0,0,0.15)] hidden md:block">
                                <img
                                    src="student1.png"
                                    alt="Collaborative Environment"
                                    className="w-full h-full object-cover aspect-square"
                                />
                            </div>

                            {/* (Experience Badge) */}
                            <div className="absolute -top-6 -left-6 z-40 bg-black text-white p-8 rounded-2xl hidden lg:block shadow-xl">
                                <div className="text-4xl font-bold italic tracking-tighter">10+</div>
                                <div className="text-[10px] uppercase tracking-[0.2em] opacity-60 leading-tight">Years of<br />Excellence</div>
                            </div>
                        </div>

                        {/* Title */}
                        <div className="lg:col-span-6 space-y-10">
                            <div className="space-y-4">
                                <span className="text-[#FF7A5C] font-bold tracking-[0.3em] text-xs uppercase block">
                                    Exclusive Digital Agency
                                </span>
                                <h2 className="text-5xl lg:text-7xl font-extrabold tracking-tighter text-gray-900 leading-[1.1]">
                                    Crafting <span className="text-transparent bg-clip-text bg-linear-to-r from-[#FF7A5C] to-[#ff9b85]">Vision</span> <br />
                                    Into Reality.
                                </h2>
                            </div>

                            <p className="text-xl text-gray-500 leading-relaxed font-light max-w-xl">
                                ما در نقطه تلاقی استراتژی و هنر ایستاده‌ایم. هدف ما فراتر از طراحی است؛ ما هویت‌های دیجیتالی می‌سازیم که در مقیاس جهانی می‌درخشند.
                            </p>

                            {/* (Features) */}
                            <div className="grid grid-cols-2 gap-8 border-t border-gray-100 pt-10">
                                <div className="group cursor-default">
                                    <h4 className="text-gray-900 font-bold text-lg group-hover:text-[#FF7A5C] transition-colors">Bespoke Design</h4>
                                    <p className="text-sm text-gray-400 mt-2">طراحی‌های کاملاً اختصاصی و متناسب با DNA برند شما.</p>
                                </div>
                                <div className="group cursor-default">
                                    <h4 className="text-gray-900 font-bold text-lg group-hover:text-[#FF7A5C] transition-colors">Global Standards</h4>
                                    <p className="text-sm text-gray-400 mt-2">استفاده از آخرین تکنولوژی‌های روز دنیا در پیاده‌سازی.</p>
                                </div>
                            </div>

                            {/*(CTA) */}
                            <div className="pt-4">
                                <a href="#portfolio" className="inline-flex items-center group">
                                    <span className="h-14 px-8 flex items-center justify-center bg-gray-900 text-white rounded-full font-bold transition-all group-hover:bg-[#FF7A5C] group-hover:pr-12">
                                        Our Methodology
                                    </span>
                                    <span className="w-14 h-14 -ml-7 flex items-center justify-center bg-white border-2 border-gray-900 text-gray-900 rounded-full transition-all group-hover:border-[#FF7A5C] group-hover:text-[#FF7A5C]">
                                        →
                                    </span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>

    )
}

export default About

