import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-background text-foreground py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-xl font-semibold mb-4">Company</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about-us" className="hover:underline">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/careers" className="hover:underline">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href="/press" className="hover:underline">
                                    Press
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:underline">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-xl font-semibold mb-4">Resources</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/docs" className="hover:underline">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link href="/api" className="hover:underline">
                                    API Reference
                                </Link>
                            </li>
                            <li>
                                <Link href="/support" className="hover:underline">
                                    Support
                                </Link>
                            </li>
                            <li>
                                <Link href="/community" className="hover:underline">
                                    Community
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 md:mb-0">
                        <h2 className="text-xl font-semibold mb-4">Legal</h2>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/privacy-policy" className="hover:underline">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms-of-service" className="hover:underline">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link href="/cookie-policy" className="hover:underline">
                                    Cookie Policy
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 border-t border-border pt-4">
                    <p className="text-center text-sm">
                        &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
