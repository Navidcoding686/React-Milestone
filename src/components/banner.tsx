const Banner = () => {
    return (
        <div className="bg-white">
            <div className="mx-2 px-4 py-8 md:py-4 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-10 items-center">

                <div className="text-center md:text-left">

                    <h1 className="text-4xl md:text-4xl font-bold text-[#0f172a]">
                        Build Your Ideal
                    </h1>

                    <h1 className="text-4xl md:text-4xl font-bold brand-gradient-text">
                        Development Stack
                    </h1>

                    <p className="py-5 text-[#475569] font-sans leading-8 md:leading-normal">
                        Explore frontend, backend, database, and tooling options,
                        compare them side by side, and put together the stack that fits your
                        next project.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-2.5">

                        <button className="brand-gradient text-white rounded-lg px-4 py-2 shadow-[0_1px_2px_#0000000D]">
                            Explore Technologies
                        </button>

                        <button className="border-2 px-4 py-2 rounded-lg text-[#475569]">
                            Learn More
                        </button>

                    </div>

                </div>

                <div className="flex justify-center">
                    <img
                        src="/assets/banner-stack.png"
                        className="w-full max-w-125 object-contain"
                    />
                </div>

            </div>
        </div>
    );
};

export default Banner;