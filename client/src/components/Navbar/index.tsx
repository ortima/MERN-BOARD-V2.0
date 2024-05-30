import { useDispatch } from 'react-redux'
import { AppBar, IconButton, InputBase, Toolbar, useTheme } from '@mui/material'
import { GridMenuIcon, GridSearchIcon } from '@mui/x-data-grid'
import { setMode } from '../../slices/themeSlice'
import {
  DarkModeOutlined,
  LightModeOutlined,
  Settings,
} from '@mui/icons-material'
import { FlexBeetween } from '../styled/flexBetween'

interface NavbarProps {
  isSidebarOpen: boolean
  setIsSidebarOpen: (value: boolean) => void
}
const Navbar: React.FC<NavbarProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch()
  const theme = useTheme()

  return (
    <AppBar sx={{ position: 'static', background: 'none', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* LEFT SIDE */}
        <FlexBeetween>
          <FlexBeetween>
            {!isSidebarOpen && (
              <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                <GridMenuIcon />
              </IconButton>
            )}
          </FlexBeetween>
          <FlexBeetween
            bgcolor={theme.palette.background.paper}
            borderRadius="9px"
            gap="3rem"
            p="0.1rem 0.5rem">
            <InputBase placeholder="Search..." />
            <IconButton>
              <GridSearchIcon />
            </IconButton>
          </FlexBeetween>
        </FlexBeetween>

        {/* RIGTH SIDE */}
        <FlexBeetween>
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === 'light' ? (
              <LightModeOutlined sx={{ fontSize: '25px' }} />
            ) : (
              <DarkModeOutlined sx={{ fontSize: '25px' }} />
            )}
          </IconButton>
          <IconButton>
            <Settings sx={{ fontSize: '25px' }} />
          </IconButton>
        </FlexBeetween>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
