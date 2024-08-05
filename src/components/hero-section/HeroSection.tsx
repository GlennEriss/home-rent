'use client';
import Image from 'next/image';
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function HeroSection({ children }: { children: React.ReactNode }) {
    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });
    const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);

    return (
        <section className="-z-20 h-[372px] md:h-[400px] relative
        m-5" 
        
        ref={ref}>
            <motion.div
                style={{
                    y: backgroundY,
                }}
                className="w-full h-full -z-10"
            >
                <div className="absolute inset-0 bg-opacity-40 h-full"></div>
                <Image
                    src={'/assets/home.webp'}
                    alt=""
                    sizes="100vw"
                    width={0}
                    height={0}
                    className="rounded-b-xl w-full object-cover xl:object-cover h-full"
                    priority
                />
            </motion.div>
            <div className="absolute inset-0 flex flex-col gap-6">
                {children}
            </div>
        </section>
    );
}

export default HeroSection;