import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

const AdvancedLoadingPage = ({ onComplete }) => {
    const containerRef = useRef(null);
    const logoRef = useRef(null);
    const dotsRef = useRef([]);
    const progressBarRef = useRef(null);
    const particlesRef = useRef([]);

    useGSAP(() => {
        const tl = gsap.timeline();

        // Logo entrance animation
        tl.fromTo(logoRef.current,
            {
                scale: 0,
                rotation: -360,
                opacity: 0
            },
            {
                scale: 1,
                rotation: 0,
                opacity: 1,
                duration: 1.2,
                ease: 'back.out(1.7)'
            }
        );

        // Dots sequential animation
        dotsRef.current.forEach((dot) => {
            tl.fromTo(dot,
                {
                    scale: 0,
                    opacity: 0,
                    y: 10
                },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 0.4,
                    ease: 'power2.out'
                },
                `-=0.3`
            );
        });

        // Progress bar animation
        tl.to(progressBarRef.current, {
            width: '100%',
            duration: 2,
            ease: 'power2.inOut'
        }, '-=1');

        // Particle animations
        particlesRef.current.forEach((particle, index) => {
            gsap.fromTo(particle,
                {
                    scale: 0,
                    opacity: 0,
                    x: gsap.utils.random(-100, 100),
                    y: gsap.utils.random(-100, 100)
                },
                {
                    scale: 1,
                    opacity: gsap.utils.random(0.3, 0.8),
                    x: 0,
                    y: 0,
                    duration: 1.5,
                    delay: index * 0.1,
                    ease: 'power2.out'
                }
            );
        });

        // Exit animation
        tl.to(containerRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: 'power2.inOut',
            onComplete: onComplete
        });

    }, { scope: containerRef, dependencies: [onComplete] });

    const addToRefs = (refArray) => (el) => {
        if (el && !refArray.current.includes(el)) {
            refArray.current.push(el);
        }
    };

    const addToDots = addToRefs(dotsRef);
    const addToParticles = addToRefs(particlesRef);

    return (
        <div
            ref={containerRef}
            className="fixed inset-0 bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 z-50 flex items-center justify-center overflow-hidden"
        >
            {/* Animated Particles */}
            <div className="absolute inset-0">
                {[...Array(12)].map((_, i) => (
                    <div
                        key={i}
                        ref={addToParticles}
                        className="absolute w-2 h-2 bg-orange-400 rounded-full opacity-0"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <div className="text-center relative z-10">
                {/* Animated Logo/Icon */}
                <div
                    ref={logoRef}
                    className="text-8xl mb-8 opacity-0"
                >
                    <img src="/logo.svg" alt="Logo" className="size-24 mx-auto" />
                </div>

                {/* Loading Text with Animated Dots */}
                <div className="flex items-center justify-center mb-8 space-x-1">
                    <span className="text-white text-2xl font-light">Loading</span>
                    {[1, 2, 3].map((dot) => (
                        <span
                            key={dot}
                            ref={addToDots}
                            className="text-orange-800 text-2xl opacity-0"
                        >
                            .
                        </span>
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="w-80 h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
                    <div
                        ref={progressBarRef}
                        className="h-full bg-gradient-to-r from-black/40 via-orange-500 to-black/60 rounded-full w-0 shadow-lg shadow-orange-500/25"
                    />
                </div>
            </div>
        </div>
    );
};

export default AdvancedLoadingPage;