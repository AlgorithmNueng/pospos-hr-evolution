import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useTranslation } from 'react-i18next'
import i18n from '@/i18n'

interface LayoutProps {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation(['common'])

  const handleToggleLanguage = (lang: string) => {
    i18n.changeLanguage(lang)
  }

  // const handleClickSignOut = () => {}

  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <AppBar position='static' style={{ height: 65 }}>
          <Toolbar>
            <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
              News
            </Typography>
            <Button color='inherit' onClick={() => handleToggleLanguage('th')}>
              TH
            </Button>
            <Button color='inherit' onClick={() => handleToggleLanguage('en')}>
              EN
            </Button>
            <Button color='inherit'>{t('global.login')}</Button>
            <Button color='inherit'>{t('global.logout')}</Button>
          </Toolbar>
        </AppBar>
      </Box>
      <main>{children}</main>
    </>
  )
}

export default Layout
