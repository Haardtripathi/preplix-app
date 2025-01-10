export function Footer() {
    return (
        <footer className="border-t">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground text-center sm:text-left">
                        © {new Date().getFullYear()} Preplix. All rights reserved.
                    </p>
                    <div className="flex flex-wrap justify-center sm:justify-end gap-4 sm:gap-6">
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                            Privacy Policy
                        </a>
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                            Terms of Service
                        </a>
                        <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

