import Image from "next/image";

export function Logo() {
    return (
        <a href="/">
            <Image src="/logo.svg" alt="logo" width={160} height={40} />
        </a>
    );

}