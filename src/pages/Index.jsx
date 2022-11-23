import Main from "../components/Main/Main.jsx"
import Nav from "../components/Nav/Nav.jsx"
import Steps from "../components/Steps/Steps.jsx"

function Index() {
  return (
    <div className="w-11/12 h-screen m-auto lg:w-10/12">
      <Nav />
      <Main />
      <Steps />
    </div>
  )
}

export default Index
