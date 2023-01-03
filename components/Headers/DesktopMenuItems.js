import Link from 'next/link'
import { solutions } from './MenuItems'
import { useRouter } from 'next/router';
import cssStyle from './Header.module.css'
const DesktopMenu = () => {
    const router = useRouter();

    return (

        <>
        <div className='text-white'>
            <button className="peer items-center bg-athinia-dark text-white">
                <Link href="/data-collaboration" className="text-white  text-sm-menu">
                    Data Collaboration
                </Link>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" fontWeight={900} className="w-5 h-5 text-white inline pl-1 mb-1">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                </svg>   
            </button>
            <div className="hidden peer-hover:flex hover:flex w-[200px] flex-col bg-athinia-dark drop-shadow-lg z-50 absolute">
                {solutions.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`items-start mt-2 p-3 hover:bg-athinia-blue ${cssStyle['header-item']} ${router.pathname === item.href ?  cssStyle['selected-item'] : ''}`}
                    >
                        <div className="ml-4">
                            <p className="text-white text-sm-menu">{item.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>

        <Link href="/faq" className={`text-sm-menu text-white ${cssStyle['header-item']}  ${router.pathname === '/faq' ?  cssStyle['selected-item'] : ''}`}>   {/* TODO add a blue line in the center of text and then translate down a few pixels*/}
        FAQ
        </Link>
        <Link href="/about" className={`text-sm-menu text-white ${cssStyle['header-item']} ${router.pathname === "/about" ?  cssStyle['selected-item'] : ''}`}>
        About Us
        </Link>
        <Link href="/careers" className={`text-sm-menu text-white  ${cssStyle['header-item']} ${router.pathname === "/careers" ?  cssStyle['selected-item'] : ''}`}>
        Careers
        </Link>
        <Link href="/contact" className={`text-sm-menu text-white ${cssStyle['header-item']}  ${router.pathname === "/contact" ?  cssStyle['selected-item'] : ''}`}>
        Contact & News
        </Link>

        </>

    )

}

export default DesktopMenu