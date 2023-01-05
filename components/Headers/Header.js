import { Fragment, use, useState} from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

import Link from 'next/link'

import { useScrollPosition } from '../../hooks/useScrollPosition'
import { solutions } from "../Headers/MenuItems"
import DesktopMenuItems from './DesktopMenuItems'


export default function Header() {
  const [isSubPageShow, SetIsSubPageShow] = useState(false)

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

  const scrollPosition = useScrollPosition()
  const scrollBoundary = 100.3

  return (
    <Popover className={classNames(
      scrollPosition > scrollBoundary ? "" : "",
      "bg-athinia-dark z-50 w-full lg:sticky lg:top-0 transition-all duration-300 ease-in-out delay-300"
    )}>
      <div className="mx-auto max-w-[1400px] md:px-[10px] sm:px-6">
        <div className={classNames(
          scrollPosition > scrollBoundary ? "py-[0.5px]" : "py-[10px]",
          "flex items-center justify-between  lg:justify-start md:space-x-5 lg:space-x-10 transition-all duration-300 ease-in-out delay-300"
        )}>
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Athinia</span>
              <img 
                className={classNames(
                  scrollPosition > scrollBoundary ? "lg:scale-75 lg:ml-[-20px]" : "",
                  "w-[100px] lg:w-[175px] h-16 md:h-[69px] md:w-[140px] transition-all duration-300 ease-in-out delay-300 ml-5 md:ml-0"
                )}
                src="/Athinia-logo-light.svg" 
                alt="Athinia Logo" 
               />
            </Link>
          </div>
          <div className="md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-athinia-dark p-2 text-white">
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-8 w-8" color='white' stroke='white'  aria-hidden="true" />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-11 md:flex md:mt-1">
            <DesktopMenuItems />
          </Popover.Group>

        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel focus className="bg-athinia-dark z-[100] fixed w-full inset-x-0 top-0 origin-top-right transform  transition md:hidden">
    
        <div className="mt-6 px-3">
                <div className="h-8 w-auto">
                <div className="-mr-2 flex justify-end px-10">
                  <Popover.Button className=" justify-center rounded-md text-athinia-green text-[45px] bg-athinia-dark p-2 text-white">
                  &#10006;
                  </Popover.Button>
                </div>
                </div>
         
              </div>
          <div className="w-full flex flex-col justify-center w-inherit min-h-screen bg-athinia-dark shadow-lg px-10 text-[1.3em]">
            
          
              <div className="mb-10">
                <nav className="grid gap-y-8">
           {/* <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={classNames(
                      'text-white',
                      'group inline-flex items-center rounded-md bg-athinia-dark focus:outline-none'
                    )}
                  >
                    <Link href='/data-collaboration' >
                      <span className=''>Data Collaboration</span>
                    </Link>
                    
                    <ChevronDownIcon
                      className="text-white ml-2 h-4 w-4"
                      aria-hidden="true"
                    />
                  </Popover.Button>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute z-10 -ml-4 mt-3 w-screen max-w-md transform px-2 sm:px-0 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2">
                      <div className="overflow-hidden">
                        <div className="relative grid gap-6 bg-athinia-dark px-5 py-6 sm:gap-8 sm:p-8">
                          {solutions.map((item) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="-m-3 flex items-start p-3 hover:bg-athinia-blue"
                            >
                              <div className="ml-4">
                                <p className="text-sm-menu text-white">{item.name}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover> */}
            <div className='text-white'>
            <button onClick={() => SetIsSubPageShow(prevState => !prevState)} className={`peer items-center bg-athinia-dark ${isSubPageShow ? 'text-athinia-green' :  'text-white'} `}>
                    Data Collaboration
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" fontWeight={900} className="w-5 h-5 text-white inline pl-1 mb-1">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                </svg>   
            </button>

         {isSubPageShow &&    <div className="flex w-[200px] flex-col bg-athinia-dark drop-shadow-lg z-50">
                {solutions.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        className={`items-start mt-2 p-3 hover:bg-athinia-blue`}
                    >
                        <div className="ml-4">
                            <p className="text-white text-sm-menu">{item.name}</p>
                        </div>
                    </Link>
                ))}
            </div>}
   
        </div>
                  <Link href="/faq" className="text-base  text-white">
                    FAQ
                  </Link>
                  <Link href="/about" className="text-base  text-white">
                    About Us
                  </Link>
                  <Link href="careers" className="text-base  text-white">
                    Careers
                  </Link>
                  <Link href="contact" className="text-base  text-white">
                    Contact & News
                  </Link>
                </nav>
              </div>
          
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
