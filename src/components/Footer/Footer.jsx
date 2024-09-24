

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content p-10">
                <div className="footer max-w-screen-2xl mx-auto">
                    <aside>
                        
                        <div className="space-y-4">
                            <h1 className="text-3xl font-bold">
                                Academic Shelf
                            </h1>
                            <p className=""> Providing all in one academic organizer since 2024 </p>
                        </div>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Services</h6>
                        <a className="link link-hover">Branding</a>
                        <a className="link link-hover">Design</a>
                        <a className="link link-hover">Marketing</a>
                        <a className="link link-hover">Advertisement</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Company</h6>
                        <a className="link link-hover">About us</a>
                        <a className="link link-hover">Contact</a>
                        <a className="link link-hover">Jobs</a>
                        <a className="link link-hover">Press kit</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;