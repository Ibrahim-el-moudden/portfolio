"use client";

import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpCircle } from "lucide-react";

export function ScrollToTop() {
    const [isOverScreen, setIsOverScreen] = React.useState<boolean>(false);

    React.useEffect(() => {
        window.addEventListener("scroll", () => {
            setIsOverScreen(window.scrollY > 100);
        });
    }, []);

    return (
        <Button
            size="icon"
            className={cn(
                "fixed bottom-12 md:bottom-8 end-6 md:end-12 transition-all duration-300 z-[99]",
                !isOverScreen && "opacity-0 translate-y-6 pointer-events-none"
            )}
            onClick={() => window.scrollTo(0, 0)}
        >
            <ArrowUpCircle />
        </Button>
    )
}