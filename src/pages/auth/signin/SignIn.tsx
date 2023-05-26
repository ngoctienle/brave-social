import { z } from 'zod'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from 'src/components/ui/form'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'src/components/ui/card'
import { Input } from 'src/components/ui/input'
import { AsyncButton, Button } from 'src/components/ui/button'
import { Checkbox } from 'src/components/ui/checkbox'

import { signInSchema } from 'src/services/utils/rules'
import { authService } from 'src/services/api/auth/auth.service'
import { Utils } from 'src/services/utils/utils.service'

import { IRequestSignIn, ResponseError } from 'src/types/request.type'

const SignIn = () => {
  const [hasError, setHasError] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string>('')

  const signInForm = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      username: '',
      password: ''
    }
  })

  const signInMutation = useMutation({
    mutationFn: (body: IRequestSignIn) => authService.signIn(body)
  })

  function onSubmit(values: z.infer<typeof signInSchema>) {
    const { username, password } = values
    signInMutation.mutateAsync(
      { username, password },
      {
        onSuccess: () => {
          /* Todo */
        },
        onError: (error) => {
          if (Utils.isAxiosError<ResponseError>(error)) {
            setHasError(true)
            setErrorMsg(error.response?.data.message as string)
          } else {
            setHasError(true)
            setErrorMsg('Something is wrong! Try again later!')
          }
        }
      }
    )
  }
  return (
    <Card>
      <CardHeader className='items-center'>
        <CardTitle className='tracking-wide'>Sign In</CardTitle>
        <CardDescription>Welcome back, you’ve been missed!</CardDescription>
      </CardHeader>
      <CardContent>
        {hasError && (
          <div
            role='alert'
            className='mb-3 rounded-md bg-destructive/10 px-4 py-1 text-center text-sm text-destructive/50'>
            {errorMsg}
          </div>
        )}
        <Form {...signInForm}>
          <form onSubmit={signInForm.handleSubmit(onSubmit)} className='space-y-3'>
            <FormField
              control={signInForm.control}
              name='username'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input type='text' placeholder='Please enter your username' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={signInForm.control}
              name='password'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type='password' placeholder='Please enter your password' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={signInForm.control}
              name='checkbox'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <div className='flex items-center space-x-2'>
                    <FormControl>
                      <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                    </FormControl>
                    <FormLabel className='font-normal'>Remember me</FormLabel>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <AsyncButton
              size='lg'
              type='submit'
              isLoading={signInMutation.isLoading}
              isError={
                signInForm.getValues('username') === '' || signInForm.getValues('password') === ''
              }
              className='ml-auto flex'>
              Sign In
            </AsyncButton>
          </form>
        </Form>
        <Button variant='link' asChild className='mx-auto flex font-normal text-muted-foreground'>
          <Link to='/forgot-password'>Forgot your password?</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export default SignIn
