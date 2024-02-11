import { useState, type ReactElement } from 'react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './router/Routes'
import FetchingOffsetContext from './contexts/FetchingOffsetContext'

const App = (): ReactElement => {
  const [fetchingOffset, setFetchingOffset] = useState<number>(0)
  return (
    <>
      <FetchingOffsetContext.Provider value={{ fetchingOffset, setFetchingOffset }} >
        <RouterProvider router={routes} />
      </FetchingOffsetContext.Provider>
    </>
  )
}

export default App
