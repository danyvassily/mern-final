import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";

export default function FooterCom() {
    return (
        <Footer container className="border border-t-4 border-teal-800 grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
            <Footer.Copyright href="#" by="Dany.M™" year={2024} />
            <div className=''>
                <Link
                    to='/'
                    className='self-center whitespace-nowrap text-sm sm:text-xl font-bold dark:text-white'
                >
                    <span className='px-2 py-1 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg text-white'>SOCIAL</span>
                    Link
                </Link>
            </div>
            <Footer.LinkGroup>
                <Footer.Link href="https://github.com/danyvassily/mern-final.git">Github</Footer.Link>
                <Footer.Link href="mailto:danyvassiliakos@gmail.com">Contact</Footer.Link>
            </Footer.LinkGroup>
        </Footer>
    )
}