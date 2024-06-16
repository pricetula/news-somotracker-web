import Logo from "@/components/custom/Logo/Logo";
import { Typography } from "@/components/custom/Typography";

export default function Banner() {
    return (
        <header className="h-96 position-relative bg-gray-50">
            <div className="h-full flex flex-col items-center justify-center text-center">
                <Typography tag="h1" className="mb-4">Somotracker</Typography>
                <Typography tag="h2" className="text-xl">Current News Insight Engine</Typography>
            </div>
        </header>
    );
}