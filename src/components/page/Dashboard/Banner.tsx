import Logo from "@/components/custom/Logo/Logo";
import { H1, H2 } from "@/components/custom/Typography";

export default function Banner() {
    return (
        <header className="h-96 position-relative bg-gray-50">
            <div className="h-full flex flex-col items-center justify-center text-center">
                <H1 className="mb-4">Somotracker</H1>
                <H2 className="text-xl">Current News Insight Engine</H2>
            </div>
        </header>
    );
}