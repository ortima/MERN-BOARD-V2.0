import { Box, useMediaQuery } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import SideBar from '../SIdebar'
import { useState } from 'react'

const Layout = () => {
  const inNonMobile = useMediaQuery('(min-width:600px)')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  return (
    <Box width="100%" height="100%" display={inNonMobile ? 'flex' : 'block'}>
      <SideBar
        isNonMobile={inNonMobile}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <Box flexGrow={1}>
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  )
}

export default Layout
