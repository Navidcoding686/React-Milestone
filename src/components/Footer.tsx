const Footer = () => {
    return (
        <footer className="bg-white text-black mt-12">

            <div className="max-w-7xl mx-auto px-6 py-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                    <div className="col-span-1">

                        <img src="/assets/logo-text.png" alt="DevStack" />

                        <p className="text-slate-400 text-sm leading-6 mt-3 max-w-md">
                            Build your perfect technology stack by exploring
                            modern tools and technologies for web development.
                        </p>

                        <div className="flex gap-4 mt-5">

                            <a
                                href="#"
                                className="text-slate-400 hover:text-black text-sm"
                            >
                                GitHub
                            </a>

                            <a
                                href="#"
                                className="text-slate-400 hover:text-black text-sm"
                            >
                                Twitter
                            </a>

                            <a
                                href="#"
                                className="text-slate-400 hover:text-black text-sm"
                            >
                                LinkedIn
                            </a>

                        </div>

                    </div>

                    <div>

                        <h3 className="font-semibold text-sm mb-4">
                            Product
                        </h3>

                        <div className="space-y-2">

                            <p className="text-slate-400 text-sm">
                                Technologies
                            </p>

                            <p className="text-slate-400 text-sm">
                                Your Stack
                            </p>

                            <p className="text-slate-400 text-sm">
                                Features
                            </p>

                        </div>

                    </div>

                    <div>

                        <h3 className="font-semibold text-sm mb-4">
                            Company
                        </h3>

                        <div className="space-y-2">

                            <p className="text-slate-400 text-sm">
                                About Us
                            </p>

                            <p className="text-slate-400 text-sm">
                                Contact
                            </p>

                            <p className="text-slate-400 text-sm">
                                Careers
                            </p>

                        </div>

                    </div>

                    <div>

                        <h3 className="font-semibold text-sm mb-4">
                            Legal
                        </h3>

                        <div className="space-y-2">

                            <p className="text-slate-400 text-sm">
                                Privacy Policy
                            </p>

                            <p className="text-slate-400 text-sm">
                                Terms of Service
                            </p>

                        </div>

                    </div>

                </div>

                <div className="border-t border-slate-800 mt-8 pt-5 flex flex-col sm:flex-row justify-between items-center gap-3">

                    <p className="text-slate-500 text-xs">
                        © 2026 DevStack. All rights reserved.
                    </p>

                    <div className="flex gap-4">

                        <a
                            href="#"
                            className="text-slate-500 text-xs hover:text-black"
                        >
                            Privacy
                        </a>

                        <a
                            href="#"
                            className="text-slate-500 text-xs hover:text-black"
                        >
                            Terms
                        </a>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default Footer;