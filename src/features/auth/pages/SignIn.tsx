import React, { useEffect } from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { useForm } from 'react-hook-form'

import { useAppDispatch } from '@/store'
import { signIn } from '@/features/auth/auth.slice'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'

export interface FormInputs {
  username: string
  password: string
}

const SignIn: React.FC = () => {
  const navigate = useNavigate()
  const { t } = useTranslation(['auth', 'common'])
  const dispatch = useAppDispatch()

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>()

  useEffect(() => {
    setValue('username', 'mynung.comsci@gmail.com')
    setValue('password', 'n0u4e1n1g')
  }, [setValue])

  const onSubmit = (data: FormInputs) => {
    dispatch(signIn(data)).then((item) => {
      navigate('/article')
    })
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <Card sx={{ width: 345 }}>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2' style={{ textAlign: 'center' }}>
            {t('signIn.title')}
          </Typography>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              {...register('username', { required: true })}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              type='email'
              autoComplete='email'
              autoFocus
            />
            {errors?.username && <FormHelperText style={{ color: 'red' }}>please input username!</FormHelperText>}
            <TextField
              {...register('password', { required: true })}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              type='password'
              autoComplete='current-password'
            />
            {errors?.username && <FormHelperText style={{ color: 'red' }}>please input password!</FormHelperText>}
            <Button sx={{ marginTop: 4 }} type='submit' fullWidth variant='contained' color='primary'>
              SignIn
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  )
}

export default SignIn
