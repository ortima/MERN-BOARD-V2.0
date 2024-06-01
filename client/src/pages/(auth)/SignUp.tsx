import * as React from 'react'
import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Link from '@mui/material/Link'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import LoadingButton from '@mui/lab/LoadingButton'
import { IconButton, useTheme } from '@mui/material'
import { DarkModeOutlined, LightModeOutlined } from '@mui/icons-material'
import { useDispatch } from 'react-redux'
import { setMode } from '../../slices/themeSlice'

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}>
      {'Copyright © '}
      ortima MERN
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

export default function SignUp() {
  const dispatch = useDispatch()
  const theme = useTheme()

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    })
  }

  return (
    <Box sx={{ height: '100%' }}>
      <Box display={'flex'} justifyContent={'flex-end'}>
        <IconButton onClick={() => dispatch(setMode())}>
          {theme.palette.mode === 'light' ? (
            <LightModeOutlined
              htmlColor={theme.palette.primary.light}
              sx={{ fontSize: '25px' }}
            />
          ) : (
            <DarkModeOutlined
              htmlColor={theme.palette.primary.light}
              sx={{ fontSize: '25px' }}
            />
          )}
        </IconButton>
      </Box>
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Avatar sx={{ m: 1 }}>
            <LockOutlinedIcon
              fill={theme.palette.primary.main}
              htmlColor={theme.palette.secondary.light}
            />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                color: 'white',
                backgroundColor: theme.palette.action.selected,
                '&:hover': {
                  backgroundColor: theme.palette.action.selected,
                },
              }}>
              Sign Up
            </LoadingButton>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Box>
      </Container>
    </Box>
  )
}
