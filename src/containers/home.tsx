import { buttonVariants } from "@/components/ui/button";
import { socialLinks } from "@/constants/social-links";
import { cn } from "@/lib/utils";
import { ArrowRightCircle, Download } from "lucide-react";
import Image from "next/image";
import React from "react";

export function HomeSection() {
    return (
        <section id="home" className="grid md:grid-cols-12 items-center gap-6">
            {/* Social links */}
            <ul className="flex md:flex-col gap-4 items-center size-fit mx-auto py-2 md:py-8 px-8 md:px-2 border rounded-3xl">
                {socialLinks.map((link, index) => {
                    const { href, icon: Icon } = link;
                    return (
                        <li key={index} className="hover:text-primary">
                            <a href={href} target="_blank">
                                <Icon className="size-5" />
                            </a>
                        </li>
                    );
                })}
            </ul>
            {/* Presentation */}
            <div className="md:col-span-6 flex flex-col items-center md:items-start gap-y-4">
                <h2 className="text-3xl md:text-5xl font-bold text-foreground capitalize">
                    Hi, I&apos;m Ibrahim
                </h2>
                <h5 className="text-xl md:text-2xl font-semibold capitalize">
                    Software developer
                </h5>
                <p className="leading-7 md:text-lg md:max-w-[85%] text-center md:text-start">
                    I am a passionate software developer with a background in economie. With experience in various programming languages
                    and frameworks, I love creating intuitive and responsive web applications. When I&apos;m not coding,
                    I enjoy learning about new technologies and improving my skills.
                </p>
                <div className="flex items-center gap-2 py-4">
                    <a
                        href="#projects"
                        className={cn(buttonVariants({ size: "lg" }), "px-4 md:px-8")}
                    >
                        <span>My projects</span>
                        <ArrowRightCircle className="size-4" />
                    </a>
                    <a
                        href="/CV.pdf"
                        className={cn(
                            buttonVariants({ variant: "outline", size: "lg" }),
                            "px-4 md:px-8"
                        )}
                        target="_blank"
                        download
                    >
                        <span>Download my CV</span>
                        <Download className="size-4" />
                    </a>
                </div>
            </div>
            {/* Image */}
            <div className="md:col-span-5 grid place-content-center">
                <div className="relative flex items-center justify-center size-80 md:size-96">
                    <Image
                        width={420}
                        height={420}
                        alt="profile"
                        src="/img.jpeg"
                        className="object-fill size-[80%] border-2 rounded-full ring-4 ring-primary ring-offset-4 ring-offset-background"
                    />
                </div>
            </div>
        </section>
    );
}