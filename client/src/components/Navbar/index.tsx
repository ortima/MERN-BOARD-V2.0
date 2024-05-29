import { useDispatch } from 'react-redux'
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  useTheme,
} from '@mui/material'
import { GridMenuIcon, GridSearchIcon } from '@mui/x-data-grid'
import styled from '@emotion/styled'
import { setMode } from '../../slices/themeSlice'
import {
  DarkModeOutlined,
  LightModeOutlined,
  Settings,
} from '@mui/icons-material'

const Navbar = () => {
  const dispatch = useDispatch()
  const theme = useTheme()

  const FlexBeetween = styled(Box)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  })

  return (
    <AppBar sx={{ position: 'static', background: 'none', boxShadow: 'none' }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        {/* LEFT SIDE */}
        <FlexBeetween>
          <FlexBeetween>
            <IconButton onClick={() => console.log('open sidebar')}>
              <GridMenuIcon />
            </IconButton>
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
