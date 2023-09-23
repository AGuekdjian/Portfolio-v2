import Routing from "./routes/Routing"
import { useAppContext } from './hooks/useAppContext'
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import { Global } from "./helpers/Global"

function App() {
  const { state } = useAppContext()
  return (
    <>
      <div className={`${state.theme ? '' : Global.themeType.DARK}`}>
        <Header />
        <Routing />
        <Footer />
      </div>
    </>
  )
}

export default App
