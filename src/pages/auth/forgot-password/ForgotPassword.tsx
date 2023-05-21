import { Link } from 'react-router-dom'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'src/components/ui/card'
import { Input } from 'src/components/ui/input'
import { Button } from 'src/components/ui/button'
import { Label } from 'src/components/ui/label'

const ForgotPassword = () => {
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
              <CardContent className='space-y-3'>
                <div className='space-y-1'>
                  <Label htmlFor='username'>Username</Label>
                  <Input
                    id='username'
                    name='username'
                    type='text'
                    placeholder='Please enter your username'
                  />
                </div>
                <Button size='lg' className='mx-auto !mt-5 flex'>
                  Submit
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ForgotPassword
