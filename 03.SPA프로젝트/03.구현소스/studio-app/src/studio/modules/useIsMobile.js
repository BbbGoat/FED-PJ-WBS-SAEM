import { useEffect, useRef, useState } from 'react'

const getIsMobile = () => window.innerWidth <= 768;

export default function useIsMobile() {

    const [isMobile, setIsMobile] = useState(getIsMobile());

    useEffect(() => {

        const onResize = () => {
            if (window.innerWidth <= 768) {
                console.log(getIsMobile,"호");
                setIsMobile(getIsMobile());
            }
        }

        window.addEventListener("resize", onResize);
    
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);
    
    
    return isMobile;
}