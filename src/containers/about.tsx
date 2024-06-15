import {SectionTitle} from "@/components/section-title";
import { buttonVariants } from "@/components/ui/button";
import { getStatistics } from "@/constants/statistics";
import { cn } from "@/lib/utils";
import { ArrowRightCircle } from "lucide-react";
import React from "react";

export async function AboutSection () {
    const { statistics } = await getStatistics();
    return(
        <section id="about" className="relative">
            <article className="relative max-w-[50rem] mx-auto bg-background/90 border rounded-lg p-6 flex flex-col gap-y-6">
                <SectionTitle
                    title="About me"
                    description="A quick introduction about me"
                    className="items-start"
                />
                <p className="text-lg">
                    I&apos;m Ibrahim, a software developer with a keen interest in combining technology and economie to
                    solve problems. My journey into software development started from my fascination with how
                    technology can transform industries and improve lives. I have honed my skills in a variety of
                    programming languages and frameworks, constantly seeking to learn and grow in this ever-evolving field.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 items-end">
                    {statistics.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center md:items-start"
                        >
                            <p className="text-foreground text-2xl md:text-4xl font-bold">
                                +{item.value}
                            </p>
                            <p className="whitespace-nowrap text-sm md:text-lg">
                                {item.label}
                            </p>
                        </div>
                    ))}
                    <a
                        href="#skills"
                        className={cn(
                            buttonVariants({ size: "lg" }),
                            "col-span-2 md:col-span-1"
                        )}
                    >
                        <span>Discover my skills</span>
                        <ArrowRightCircle className="size-4" />
                    </a>
                </div>
            </article>
        </section>
    )
}