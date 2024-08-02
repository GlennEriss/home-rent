// components/Footer.tsx
import { FC } from 'react';
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineInstagram } from 'react-icons/ai';

const Footer: FC = () => {
    return (
        <footer className="bg-gray-800 text-gray-200 py-10 w-full">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-lg font-bold mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} MyCompany. All rights reserved.
                </p>
                <div className="flex space-x-6 mb-4 md:mb-0">
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <AiOutlineTwitter size={30} className="text-gray-400 hover:text-white" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <AiOutlineFacebook size={30} className="text-gray-400 hover:text-white" />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <AiOutlineInstagram size={30} className="text-gray-400 hover:text-white" />
                    </a>
                </div>
                <div className="flex space-x-6">
                    <a href="#" className="text-gray-400 hover:text-white">
                        Privacy Policy
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white">
                        Terms of Service
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;