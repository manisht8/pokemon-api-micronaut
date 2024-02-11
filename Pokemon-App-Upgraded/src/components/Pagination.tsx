import { ReactElement, useContext, useEffect } from "react"
import FetchingOffsetContext from "../contexts/FetchingOffsetContext"

interface PaginationProps {
    pages: number[]
    setPages: (pages: number[]) => void
    fetchingLimit: number
}

const Pagination = ({ pages, setPages, fetchingLimit }: PaginationProps): ReactElement => {
    const { setFetchingOffset } = useContext(FetchingOffsetContext)

    const incrementPage = () => {
        const currentPages = [...pages]
        currentPages.push(currentPages.length + (currentPages.shift() ?? 1))
        setPages(currentPages)
        console.log("Hook: Pages:", pages);

    }
    const decrementPage = () => {
        const currentPages = [...pages]
        if (currentPages[0] > 0) {
            currentPages.unshift(-(currentPages.length - (currentPages.pop() ?? 0)))
            setPages(currentPages)
            console.log(pages);
        }
    }

    useEffect(() => {
        setFetchingOffset((pages[1] - 1) * fetchingLimit)
    }, [pages, setFetchingOffset, fetchingLimit])


    return (
        <nav className="flex justify-center" aria-label="Page navigation example">
            <ul className="list-none mb-6 flex">
                <li>
                    <button type="button" onClick={() => decrementPage()} className={`${pages[0] === 0 ? 'pointer-events-none text-neutral-500 ' : 'text-white dark:hover:bg-neutral-700 dark:hover:text-white'} relative block rounded bg-transparent px-3 py-1.5 text-sm  transition-all duration-300`}>
                        Previous
                    </button>
                </li>
                <li>
                    <button type="button" onClick={() => decrementPage()} className={`${pages[0] === 0 ? 'pointer-events-none' : 'hover:bg-neutral-100 dark:hover:bg-neutral-700'} relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 dark:text-white dark:hover:text-white`}>
                        {pages[0] === 0 ? null : pages[0]}
                    </button>
                </li>
                <li aria-current="page">
                    <button type="button" className="relative block rounded bg-white px-3 py-1.5 text-sm font-medium text-primary-700 transition-all duration-300">
                        {pages[1]}
                        <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                            (current)
                        </span>
                    </button>
                </li>
                <li>
                    <button type="button" onClick={() => incrementPage()} className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">
                        {pages[2]}
                    </button>
                </li>
                <li>
                    <button type="submit" onClick={() => incrementPage()} className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white">
                        Next
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default Pagination