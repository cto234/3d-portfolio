import { Outlet } from 'react-router-dom'
import Header from '../Header/Header'
import './layout.scss'

const Layout = ({ showHeader = true, children}) => {
  return(
    <>
    <div className='App'>
      { showHeader && <Header /> } {/* conditionally show header only when showHeader = true */}
      <div className='page'>

        <Outlet />   {/* Outlet = child components defined in App.js. Header is static. */}

      </div>
    </div>
    </>

  )
}

export default Layout