import React, { useEffect, useState } from "react";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Services from "./components/services";
import Story from "./components/story";
import Plans from "./components/plans";
import Faqs from "./components/faqs";
import Footer from "./components/footer";
import Contact from "./components/form";
import SmoothScroll from "./SmoothScroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import LoadingPage from "./components/loading_animation";
import MorphLoadingPage from "./components/loading_animation";
import AdvancedLoadingPage from "./components/loading_animation";

const App = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [contentReady, setContentReady] = useState(false);

    // Simulate loading assets and data
    useEffect(() => {
        // Simulate minimum loading time
        const loadingTimer = setTimeout(() => {
            setContentReady(true);
        }, 3000);

        return () => clearTimeout(loadingTimer);
    }, []);

    const handleLoadingComplete = () => {
        setIsLoading(false);
    };

    // Animate content entrance after loading
    useGSAP(() => {
        if (!isLoading) {
            const tl = gsap.timeline();

            tl.fromTo('.hero-section',
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
            );

            tl.fromTo('.content-section',
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' },
                '-=0.5'
            );
        }
    }, { dependencies: [isLoading] });

    // Show loading page until content is ready and loading completes
    if (isLoading) {
        return contentReady ? (
            <AdvancedLoadingPage onComplete={handleLoadingComplete} />
        ) : (
            <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
                <div className="text-white text-xl">Loading...</div>
            </div>
        );
    }


    return (
        <>

            {/* <SmoothScroll /> */}
            <Navbar />
            <Hero />
            <Services />
            <Story />
            {/* <Plans /> */}
            <Contact />
            <Faqs />
            <Footer />
        </>
    );
};

export default App;
