"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
    to: number;
    suffix?: string;
    duration?: number;
    className?: string;
}

export default function StatCounter({ to, suffix = "", duration = 2, className = "" }: StatCounterProps) {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    const startTime = Date.now();
                    const tick = () => {
                        const elapsed = (Date.now() - startTime) / 1000;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        setCount(Math.floor(eased * to));
                        if (progress < 1) requestAnimationFrame(tick);
                        else setCount(to);
                    };
                    requestAnimationFrame(tick);
                }
            },
            { threshold: 0.4 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [to, duration, hasAnimated]);

    return (
        <span ref={ref} className={className}>
            {count}{suffix}
        </span>
    );
}
