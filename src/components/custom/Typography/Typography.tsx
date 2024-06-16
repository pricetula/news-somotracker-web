import { cn } from "@/lib/utils"

export interface TypographyProps {
    children: React.ReactNode;
    tag?: "h1" | "h2" | "h3" | "h4" | "p" | "blockquote";
    className?: string;
}

export function Typography({ children, className, tag }: TypographyProps) {
    if (!tag) {
        tag = "p"
    }
    const cssClasses = (
        tag === "h1" && "scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl" ||
        tag === "h2" && "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0" ||
        tag === "h3" && "scroll-m-20 text-2xl font-semibold tracking-tight" ||
        tag === "h4" && "scroll-m-20 text-xl font-semibold tracking-tight" ||
        tag === "p" && "leading-7 [&:not(:first-child)]:mt-6" ||
        tag === "blockquote" && "mt-6 border-l-2 pl-6 italic"
    )
    const DynamicComponent = tag as keyof JSX.IntrinsicElements
    return (
        <DynamicComponent className={cn(className, cssClasses)}>
            {children}
        </DynamicComponent>
    )
}
