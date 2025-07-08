import { ArrowUp } from "lucide-react"

export const Footer = () => {
    return (
        <footer className="px-4 py-4 bg-card relative border-t border-border mt-12 pt-4 flex flex-wrap justify-center items-center">
            <div className="container mx-auto text-center">
                <p className="text-muted-foreground text-sm">
                    &copy; {new Date().getFullYear()} Douglas Ribeiro. All rights reserved.
                </p>
                <p className="text-muted-foreground text-xs mt-2">
                    Built with ❤️ using React and Tailwind CSS.
                </p>
            </div>
            <a href="#hero">
                <ArrowUp className="h-6 w-6 text-primary absolute top-4 right-4 hover:text-primary/80 transition-colors duration-300" />
            </a>
        </footer>
    )
}