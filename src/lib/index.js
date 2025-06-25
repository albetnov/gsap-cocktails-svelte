// place files you want to import through the `$lib` alias in this folder.

/**
 * Checks if the current media query matches the provided query.
 * @param {string} query 
 * 
 * @return boolean
 */
export function isMediaQueryMatch(query) {
    if (typeof window === 'undefined') {
        return false;
    }
    
    if (typeof window.matchMedia === 'undefined') {
        return false;
    }
    
    const mediaQueryList = window.matchMedia(query);

    return mediaQueryList.matches;
}