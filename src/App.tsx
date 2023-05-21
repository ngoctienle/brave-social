import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from './routes.tsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  )
}

export default App
