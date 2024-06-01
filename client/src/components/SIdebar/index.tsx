import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FlexBeetween } from '../styled/flexBetween'
import {
  AdminPanelSettingsOutlined,
  CalendarMonthOutlined,
  ChevronLeft,
  Groups2Outlined,
  HomeOutlined,
  PieChartOutline,
  PointOfSaleOutlined,
  PublicOffOutlined,
  ReceiptLongOutlined,
  ShopOutlined,
  TodayOutlined,
  TrendingUpOutlined,
} from '@mui/icons-material'

const NavItems = [
  {
    text: 'Dashboard',
    icon: <HomeOutlined />,
  },
  {
    text: 'Clients',
    icon: null,
  },
  {
    text: 'Products',
    icon: <ShopOutlined />,
  },
  {
    text: 'Customers',
    icon: <Groups2Outlined />,
  },
  {
    text: 'Transactions',
    icon: <ReceiptLongOutlined />,
  },
  {
    text: 'Geography',
    icon: <PublicOffOutlined />,
  },
  {
    text: 'Sales',
    icon: null,
  },
  {
    text: 'Overview',
    icon: <PointOfSaleOutlined />,
  },
  {
    text: 'Daily',
    icon: <TodayOutlined />,
  },
  {
    text: 'Monthly',
    icon: <CalendarMonthOutlined />,
  },
  {
    text: 'Breakdown',
    icon: <PieChartOutline />,
  },
  {
    text: 'Management',
    icon: null,
  },
  {
    text: 'Admin',
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: 'Perfomance',
    icon: <TrendingUpOutlined />,
  },
]

interface SidebarProps {
  isNonMobile: boolean
  isSidebarOpen: boolean
  setIsSidebarOpen: (value: boolean) => void
}

const SideBar: React.FC<SidebarProps> = ({
  isNonMobile,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const { pathname } = useLocation()
  const [active, setActive] = useState('')
  const navigate = useNavigate()
  const theme = useTheme()

  useEffect(() => setActive(pathname.substring(1)), [pathname])
  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          // transitionDuration={500}
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={theme => ({
            width: '250px',
            '& .MuiDrawer-paper': {
              backgroundColor: theme.palette.background.default,
              boxSizing: 'border-box',
              borderWidth: isNonMobile ? '2px' : '4px',
              borderColor: theme.palette.divider,
              width: '250px',
            },
          })}>
          <Box width="100%">
            <Box sx={{ m: '1rem 0 1rem 3rem' }}>
              <FlexBeetween color={theme.palette.text.primary}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Typography variant="h4" fontWeight={700}>
                    ortima BOARD
                  </Typography>
                  <IconButton
                    sx={{ ml: '1rem' }}
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                </Box>
              </FlexBeetween>
            </Box>
            <List>
              {NavItems.map(({ text, icon }) => {
                if (!icon) {
                  return (
                    <Box key={text}>
                      <Divider />
                      <Typography
                        color={theme.palette.text.primary}
                        sx={{ m: '0.5rem 0 0.5rem 3rem', fontWeight: 600 }}>
                        {text}
                      </Typography>
                      <Divider />
                    </Box>
                  )
                }
                const lcText = text.toLowerCase()

                return (
                  <ListItem key={text} disableGutters>
                    <ListItemButton
                      sx={{
                        borderRadius: '5px',
                        py: '0.3rem',
                        mx: '1rem',
                        backgroundColor:
                          lcText === active
                            ? theme.palette.action.selected
                            : 'transparent',
                        color:
                          active === lcText
                            ? theme.palette.common.white
                            : theme.palette.action.disabled,
                      }}
                      onClick={() => {
                        navigate(`/${lcText}`)
                        setActive(lcText)
                      }}>
                      <ListItemIcon
                        sx={{
                          color:
                            lcText === active
                              ? theme.palette.common.white
                              : theme.palette.action.disabled,
                        }}>
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItemButton>
                  </ListItem>
                )
              })}
            </List>
          </Box>
        </Drawer>
      )}
    </Box>
  )
}

export default SideBar
