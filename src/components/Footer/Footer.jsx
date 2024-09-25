import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="footer bg-base-200 text-base-content p-10">
                <div className="footer max-w-screen-2xl mx-auto">
                    <aside>
                        
                        <div className="space-y-4">
                            <h1 className="text-lg lg:text-3xl font-bold">
                                Academic Shelf
                            </h1>
                            <p className=""> Providing all in one academic organizer since 2024 </p>
                        </div>
                    </aside>
                    <nav>
                        <h6 className="footer-title">Quick Links</h6>
                        <a className="link link-hover">Home</a>
                        <a className="link link-hover">About Us</a>
                        <a className="link link-hover">Resources</a>
                        <a className="link link-hover">Category</a>
                        <a className="link link-hover">Discussion</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Help & Support</h6>
                        <a className="link link-hover">Technical Support</a>
                        <a className="link link-hover">Student Resources
                        </a>
                        <a className="link link-hover">Help Center</a>
                        <a className="link link-hover">Contact Us</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Legal</h6>
                        <a className="link link-hover">Terms of use</a>
                        <a className="link link-hover">Privacy policy</a>
                        <a className="link link-hover">Cookie policy</a>
                    </nav>
                    <nav>
                        <h6 className="footer-title">Social Links</h6>
                        <div className="flex flex-row items-center gap-3 text-xl">
                            <div> <FaFacebookF /></div>
                            <div> <FaInstagram /> </div>
                            <div> <BsTwitterX /></div>
                        </div>
                    </nav>
                </div>
            </footer>
        </div>
    );
};

export default Footer;