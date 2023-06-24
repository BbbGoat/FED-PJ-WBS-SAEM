import { useEffect, useRef, useState } from 'react'

const getIsMobile = () => window.innerWidth <= 960;

export default function useIsMobile() {

    const [isMobile, setIsMobile] = useState(getIsMobile());

    useEffect(() => {

        const onResize = () => {
            if (isMobile) {
                // console.log("true되는 조건:",getIsMobile);
                setIsMobile(true);
            }
            else setIsMobile(false);
        }

        window.addEventListener("resize", onResize);
    
        return () => {
            window.removeEventListener("resize", onResize);
        }
    }, []);
    
    
    return isMobile;
}