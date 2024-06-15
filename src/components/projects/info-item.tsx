import { LucideIcon } from "lucide-react";
import { FC } from "react";

interface InfoItemProps {
    icon: LucideIcon;
    label: string;
    children: React.ReactNode;
}

export function InfoItem({ icon: Icon, label, children }: FC<InfoItemProps>) {
    return (
        <div className="grid grid-cols-3 items-start gap-2 capitalize text-sm">
            <div className="flex items-center gap-2">
                <Icon className="size-5" />
                <span>{label}:</span>
            </div>
            <div className="col-span-2 text-foreground">{children}</div>
        </div>
    )
}