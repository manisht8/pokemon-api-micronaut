/**
 * This part can be improved by putting it into Home page as hooks using useState and pass it as props in the Pagination page.
 * But I have intentionally kept it to demonstrate the GlobalContext feature.
 */

import { createContext } from "react";

interface FetchingOffsetContextProps {
    fetchingOffset: number
    setFetchingOffset: (fetchingOffset: number) => void
}

export default createContext<FetchingOffsetContextProps>({
    fetchingOffset: 0,
    setFetchingOffset: () => {}
})