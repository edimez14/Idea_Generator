import { FaDollarSign, FaUser, FaGithub } from 'react-icons/fa';

import LinkButton from '../components/LinkButton';

export default function Footer() {
    const currentYear = new Date().getFullYear(); 

    return (
        <>
            <footer className='flex justify-center items-center'>
                <div className='grid gap-2 items-center'>
                    <div className='flex gap-2 justify-center items-center'>
                        <LinkButton
                            icon={<FaDollarSign />}
                            text="Donate"
                            url="https://www.paypal.com/donate/?hosted_button_id=TLWPKXW745KHQ"
                            sm={true}
                        />
                        <LinkButton
                            icon={<FaUser />}
                            text="Portfolio"
                            url="https://edizon-leal.vercel.app/es"
                            sm={true}
                        />
                        <LinkButton
                            icon={<FaGithub />}
                            text="Github"
                            url="https://github.com/edimez14/Idea_Generator"
                            sm={true}
                        />
                    </div>
                    <div>
                        <p>
                            &copy; 2025 - {currentYear} all rights reserved v0.1
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}