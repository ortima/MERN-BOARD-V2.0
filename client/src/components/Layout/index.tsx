import { Box } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'

const Layout = () => {
  return (
    <Box width="100%" height="100vdh">
      <Navbar />
      <Outlet />
    </Box>
  )
}

export default Layout
