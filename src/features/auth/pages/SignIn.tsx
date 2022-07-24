import React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/material'
import { useForm } from 'react-hook-form'

export interface FormInputs {
  username: string
  password: string
}

const classes: any = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20
  },
  submitBtn: { marginTop: 4 },
  canelBtn: { marginTop: 2 }
}

const SignIn: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormInputs>()

  const onSubmit = (data: FormInputs) => {
    console.log(data)
  }

  return (
    <Box sx={classes.root}>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            SignIn
          </Typography>
          <form noValidate onSubmit={handleSubmit(onSubmit)}>
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
            {/* {errors?.username && <Form.Text className='text-danger'>{errors.username.message}</Form.Text>} */}
            <TextField
              {...register('password', { required: true })}
              variant='outlined'
              margin='normal'
              required
              fullWidth
              type='password'
              autoComplete='current-password'
            />
            {/* {errors?.username && <Form.Text className='text-danger'>{errors.username.message}</Form.Text>} */}
            <Button sx={classes.submitBtn} type='submit' fullWidth variant='contained' color='primary'>
              SignIn
            </Button>
          </form>
        </CardContent>
      </Card>
    </Box>
  )
}

export default SignIn
