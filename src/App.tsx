import { AllRoutes } from "./routes/routes"
import { GlobalStyled } from "./styles/globalStyled"
import { UserContext } from "./context/userContext"
import { useContext } from "react"

function App() {

  const { isThePhotoOpen } = useContext(UserContext)

  return (
    <>
      <GlobalStyled isThePhotoOpen={isThePhotoOpen} />
      <AllRoutes />
    </>

  )
}

export default App
