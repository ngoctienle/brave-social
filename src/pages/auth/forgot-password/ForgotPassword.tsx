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
import { Button, AsyncButton } from 'src/components/ui/button'

import { forgotSchema } from 'src/services/utils/rules'
import { authService } from 'src/services/api/auth/auth.service'
import { Utils } from 'src/services/utils/utils.service'

import { ResponseError } from 'src/types/request.type'

const ForgotPassword = () => {
  const [hasError, setHasError] = useState<boolean>(false)
  const [errorMsg, setErrorMsg] = useState<string>('')
  const [response, setResponse] = useState<string>('')

  const forgotForm = useForm<z.infer<typeof forgotSchema>>({
    resolver: zodResolver(forgotSchema),
    defaultValues: {
      email: ''
    }
  })

  const forgotMutation = useMutation({
    mutationFn: (email: string) => authService.forgotPassword(email)
  })

  function onSubmit(values: z.infer<typeof forgotSchema>) {
    const { email } = values
    forgotMutation.mutateAsync(email, {
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
    })
  }

  return (
    <section id='page-auth' className='h-screen'>
      <div className='container'>
        <div className='flex items-center py-2'>
          <Button asChild variant='ghost'>
            <Link to='/'>
              <img src='/logo.svg' alt='Brave Social App' title='Brave Social App' />
            </Link>
          </Button>
        </div>
        <div className='mt-[230px] flex items-center justify-center'>
          <div className='w-[500px]'>
            <Card>
              <CardHeader className='items-center'>
                <CardTitle className='tracking-wide'>Forgot Password?</CardTitle>
                <CardDescription>Enter your details to receive a rest link.</CardDescription>
              </CardHeader>
              <CardContent>
                {hasError && (
                  <div
                    role='alert'
                    className='mb-3 rounded-md bg-destructive/10 px-4 py-1 text-center text-sm text-destructive/50'>
                    {errorMsg}
                  </div>
                )}
                {response && (
                  <div
                    role='alert'
                    className='mb-3 rounded-md bg-green-100 px-4 py-1 text-center text-sm text-green-600'>
                    A
                  </div>
                )}
                <Form {...forgotForm}>
                  <form onSubmit={forgotForm.handleSubmit(onSubmit)} className='space-y-3'>
                    <FormField
                      control={forgotForm.control}
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
                    <AsyncButton
                      size='lg'
                      type='submit'
                      isLoading={forgotMutation.isLoading}
                      isError={forgotForm.getValues('email') === ''}
                      className='mx-auto !mt-5 flex'>
                      Submit
                    </AsyncButton>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword
