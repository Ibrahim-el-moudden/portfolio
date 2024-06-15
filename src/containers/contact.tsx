import {SectionTitle} from "@/components/section-title";
import { buttonVariants } from "@/components/ui/button";
import { Mail } from "lucide-react";
import React from "react";

export function ContactSection() {
    return (
        <section
            id="contact"
            className="relative bg-card bg-opacity-80 backdrop-blur-md border rounded-xl p-6 flex flex-col items-center gap-y-6 md:gap-y-12"
        >
            <SectionTitle title="Get in touch" description="Let's work together" />
            <a href="mailto:elmouddenibrahim@gmail.com" className={buttonVariants({ size: "lg" })}>
                <Mail className="size-4" />
                <span>Si hello</span>
            </a>
        </section>
    )
}