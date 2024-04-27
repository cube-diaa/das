import {useMediaQuery} from 'react-responsive';

export function useViewType() {
    const isMobile = useMediaQuery({
        minWidth: 320,
        maxWidth: 767
    });
    const isIpad = useMediaQuery({
        minWidth: 768,
        maxWidth: 1023
    });
    const isLaptop = useMediaQuery({
        minWidth: 1024,
        maxWidth: 1199
    });
    const isDesktop = useMediaQuery({
        minWidth: 1200,
        maxWidth: 4000
    });
    return {
        isMobile,
        isIpad,
        isLaptop,
        isDesktop,
    }
}