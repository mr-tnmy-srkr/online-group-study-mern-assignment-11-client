import { Outlet } from "react-router-dom"
import MainLayout from "./Layouts/MainLayout"

function App() {

  return (
    <>
      <div className="max-w-7xl mx-auto">
       <MainLayout>
        <Outlet></Outlet>
       </MainLayout>
      </div>
    </>
  )
}

export default App
