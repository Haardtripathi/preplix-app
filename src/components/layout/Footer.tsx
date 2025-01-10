export function Footer() {
    return (
        <footer className="border-t">
            <div className="container mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Preplix. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
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