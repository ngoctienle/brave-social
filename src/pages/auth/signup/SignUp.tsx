import { z } from 'zod'
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
import { AsyncButton } from 'src/components/ui/button'

import { signUpSchema } from 'src/services/utils/rules'
import { authService } from 'src/services/api/auth/auth.service'
import { Utils } from 'src/services/utils/utils.service'

import { IRequestSignUp, ResponseError } from 'src/types/request.type'

const SignUp = () => {
  const [hasError, setHasError] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string>('')

  const signUpForm = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      password: '',
      email: ''
    }
  })

  const signUpMutation = useMutation({
    mutationFn: (body: IRequestSignUp) => authService.signUp(body)
  })

  function onSubmit(values: z.infer<typeof signUpSchema>) {
    setErrorMsg('')
    setHasError(false)
    const { username, password, email } = values
    const avatarColor = Utils.avatarColor()
    const avatarImage = Utils.generateAvatar(
      username.charAt(0).toUpperCase(),
      avatarColor
    ) as string

    signUpMutation.mutateAsync(
      { username, password, email, avatarColor, avatarImage },
      {
        onSuccess: () => {
          /* 1. Set Logged In in LocalStorage */
          /* 2. Set Username */
          /* 3. Dispatch User to Redux */
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
        <CardTitle className='tracking-wide'>Getting Started</CardTitle>
        <CardDescription>
          Create an account to continue and connect with the people.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {hasError && (
          <div
            role='alert'
            className='mb-3 rounded-md bg-destructive/10 px-4 py-1 text-center text-sm text-destructive/50'>
            {errorMsg}
          </div>
        )}
        <Form {...signUpForm}>
          <form onSubmit={signUpForm.handleSubmit(onSubmit)} className='space-y-3'>
            <FormField
              control={signUpForm.control}
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
              control={signUpForm.control}
              name='email'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type='text' placeholder='Please enter your email' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={signUpForm.control}
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
            <AsyncButton
              type='submit'
              size='lg'
              isLoading={signUpMutation.isLoading}
              isError={
                signUpForm.getValues('email') === '' ||
                signUpForm.getValues('password') === '' ||
                signUpForm.getValues('username') === ''
              }
              className='!mt-5 ml-auto flex'>
              Sign Up
            </AsyncButton>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default SignUp
