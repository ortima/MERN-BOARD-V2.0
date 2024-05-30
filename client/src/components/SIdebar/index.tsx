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
  ChevronRightOutlined,
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
              color: theme.palette.primary.contrastText,
              backgroundColor: theme.palette.background.default,
              boxSizing: 'border-box',
              borderWidth: isNonMobile ? '2px' : '4px',
              borderColor: theme.palette.grey[600],
              width: '250px',
            },
          })}>
          <Box width="100%">
            <Box sx={{ m: '1rem 0 1rem 3rem' }}>
              <FlexBeetween color={theme.palette.secondary.main}>
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
                        sx={{ m: '0.5rem 0 0.5rem 3rem', fontWeight: 600 }}>
                        {text}
                      </Typography>
                      <Divider />
                    </Box>
                  )
                }
                const lcText = text.toLowerCase()

                return (
                  <ListItem key={text} disablePadding>
                    <ListItemButton
                      sx={{
                        py: '0.3rem',
                        backgroundColor:
                          lcText === active
                            ? theme.palette.secondary.main
                            : 'transparent',
                        color:
                          active === lcText
                            ? theme.palette.primary.main
                            : theme.palette.primary.contrastText,
                      }}
                      onClick={() => {
                        navigate(`/${lcText}`)
                        setActive(lcText)
                      }}>
                      <ListItemIcon
                        sx={{
                          ml: '2rem',
                          color:
                            lcText === active
                              ? theme.palette.primary.main
                              : theme.palette.primary.contrastText,
                        }}>
                        {icon}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                      {active === lcText && (
                        <ChevronRightOutlined sx={{ ml: 'auto' }} />
                      )}
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
