import Link from "next/link"
import { useRouter } from 'next/router';
import cssClasses from './Footer.module.css'
import ScrollButton from "../Buttons/ScrollToTop";
export default function Footer() {
    const router = useRouter();
    return (

<footer className="px-4 bg-white rounded-lg shadow md:px-6 py-5 md:py-[10px] ">
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 max-w-[1400px] mx-auto">

        <div className="flex  md:col-span-1 lg:col-span-1  justify-center md:justify-start">
        <a href="https://athinia.com/" className="flex items-center mb-[1.75rem] sm:mb-0">
            <img src="/images/Athinia-icon.svg" className="h-[70px] md:h-[60px] mx-1" alt="Athinia Logo" />
            <span className="self-center text-2xl font-light whitespace-nowrap ml-3">© Athinia 2022</span>
        </a>
        </div>

        <div className="flex md:col-span-2 lg:col-span-1 justify-center md:justify-end lg:mr-[3rem]">

        <ul className=" flex flex-wrap items-center mb-6 text-[12px] md:text-[100%] text-sm text-athinia-blue sm:mb-0 dark:text-gray-400  ">

            <li>
                <Link href="/terms" className={` py-3 mr-4  hover:text-athinia-purple md:mr-8 ${cssClasses['footer-item']} ${router.pathname === '/terms' ? 'border-b-4' : ''}`}>Terms of Use</Link>
            </li>
            <li>
                <Link href="/legal" className={`py-3 mr-4  hover:text-athinia-purple md:mr-8 ${cssClasses['footer-item']} ${router.pathname === '/legal' ? 'border-b-4' : ''}`}>Legal Disclaimer</Link>
            </li>
            <li>
                <Link  href="/privacy" className={`py-3 mr-4  hover:text-athinia-purple md:mr-6 ${cssClasses['footer-item']} ${router.pathname === '/privacy' ? 'border-b-4' : ''}`}>Privacy Statement</Link>
            </li>
        </ul>
        </div>
    </div>
    <ScrollButton/>
</footer>

    )
}