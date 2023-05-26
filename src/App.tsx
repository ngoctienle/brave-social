import { Fragment } from 'react'

import { useAppRouter } from './routes.tsx'

function App() {
  const routeElements = useAppRouter()
  return <Fragment>{routeElements}</Fragment>
}

export default App
