
import React, {useState} from 'react';
import Image from 'next/image';

  
const ScrollButton = () =>{
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  const hasWindow = typeof window !== 'undefined';
  if(hasWindow) window.addEventListener('scroll', toggleVisible);
  
  return (
  
     <Image className={` ${visible ? 'inline' : 'hidden'} fixed right-[1%] hover:cursor-pointer bottom-[3%] `} src={'/images/scroll.svg'} width={25} height={25} onClick={scrollToTop} 
/>

  );
}
  
export default ScrollButton;