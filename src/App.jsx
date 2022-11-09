import { useState } from 'react'

function App() {
   const [number, setNumber] = useState(0)

  return (
   <>
   { number }
   </>
  )
}

export default App
