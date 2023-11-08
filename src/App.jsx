import { Outlet } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout"

function App() {

  return (
    <>
      <div className="2xl:container mx-auto">
       <MainLayout>
        <Outlet></Outlet>
       </MainLayout>
      </div>
    </>
  )
}

export default App
