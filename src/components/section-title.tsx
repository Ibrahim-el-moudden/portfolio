import { cn } from "@/lib/utils";
import { FC } from "react";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    description: string;
}

export function SectionTitle({title, description, className, ...props} : FC<SectionTitleProps>)  {

    return (
        <div
            className={cn(
                "flex flex-col gap-y-1 md:gap-y-2 items-center",
                className
            )}
            {...props}
        >
            <h5 className="text-primary font-bold tracking-wide">{title}</h5>
            <h3 className="text-foreground font-semibold text-xl md:text-2xl">
                {description}
            </h3>
        </div>
    );
}