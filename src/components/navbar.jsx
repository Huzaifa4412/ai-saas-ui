import { useState } from "react";
import Button from "./button";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "motion/react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="px-6 absolute top-6 z-99 left-1/2 -translate-x-1/2 max-w-[1200px] w-full">
            <div className="flex items-center justify-between">
                <img src="/Logo.png" alt="Logo" className="h-10" />

                <ul className="hidden md:flex gap-8 [&>li]:text-lg lg:[&>li]:text-xl [&>li]:cursor-pointer [&>li]:hover:text-(--primary-color) [&>li]:duration-200 ">
                    <li>Home</li>
                    <li>Services</li>
                    <li>Contact</li>
                    <li>About us</li>
                </ul>

                <div className="hidden md:block">
                    <Button text="Get Started" />
                </div>

                <button onClick={() => setOpen(!open)} className="md:hidden text-3xl">
                    ☰
                </button>
            </div>

            {/* animated mobile menu */}
            <AnimatePresence>

                {open && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden overflow-hidden mt-3 bg-black/80 backdrop-blur-lg p-5 rounded-xl border border-white/10"
                    >
                        <ul className="flex flex-col gap-4 text-lg">
                            <li>Home</li>
                            <li>Services</li>
                            <li>Contact</li>
                            <li>About us</li>
                        </ul>

                        <div className="mt-4">
                            <Button text="Get Started" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </nav>
    );
};

export default Navbar;
