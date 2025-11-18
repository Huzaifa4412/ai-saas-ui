import { useState, useEffect } from "react";
import Button from "./button";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    // Close mobile menu when window resizes to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="w-full px-3 sm:px-4 lg:px-6">
            <nav className="fixed bg-black/10 backdrop-blur-md top-3 z-50 mx-auto rounded-3xl py-3 px-4 sm:py-4 left-1/2 -translate-x-1/2">
                <div className="flex items-center justify-evenly! md:gap-30 gap-40! ">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <img
                            src="/logo.svg"
                            alt="Logo"
                            className="h-10 sm:h-12 md:h-14 w-auto max-w-[150px]"
                        />
                    </div>

                    {/* Desktop Navigation - More compact */}
                    <div className="hidden md:flex items-center">
                        <ul className="flex items-center gap-3 lg:gap-5 xl:gap-6 mr-4 lg:mr-6">
                            {['Home', 'Services', 'Contact', 'Faqs'].map((item, i) => (
                                <li key={i}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="text-white hover:text-(--primary-color) transition-colors duration-200 text-sm lg:text-base whitespace-nowrap px-2 py-1"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <Button text="Get Started" className="text-sm lg:text-base" />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden text-2xl p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                        aria-label="Toggle menu"
                    >
                        {open ? '✕' : '☰'}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {open && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.25 }}
                            className="md:hidden min-w-[330px] overflow-hidden mt-3 bg-black/90 backdrop-blur-lg p-4 rounded-xl border border-white/10"
                        >
                            <ul className="flex flex-col gap-2">
                                {['Home', 'Services', 'Contact', 'Faqs'].map((item, i) => (
                                    <li key={i}>
                                        <a
                                            href={`#${item.toLowerCase()}`}
                                            className="block py-3 px-3 text-white hover:text-(--primary-color) transition-colors duration-200 rounded-lg hover:bg-white/5 text-base"
                                            onClick={() => setOpen(false)}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-4 pt-4 border-t border-white/10">
                                <Button
                                    text="Get Started"
                                    onClick={() => setOpen(false)}
                                    className="w-full justify-center"
                                />
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </nav>
        </div>
    );
};

export default Navbar;