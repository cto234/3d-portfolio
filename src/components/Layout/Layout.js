import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import './layout.scss'

const Layout = () => {
  return(
    <>
    <div className='App'>
      <Header />  
      <div className='page'>

        <Outlet />  {/* Outlet = child components defined in App.js. Header is static. */}

      </div>
    </div>
    </>

  )
}

export default Layout