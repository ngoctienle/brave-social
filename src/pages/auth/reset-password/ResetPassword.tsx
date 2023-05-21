import { Link } from 'react-router-dom'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'src/components/ui/card'
import { Input } from 'src/components/ui/input'
import { Button } from 'src/components/ui/button'
import { Label } from 'src/components/ui/label'

const ResetPassword = () => {
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
        <div className='mt-[200px] flex items-center justify-center'>
          <div className='w-[500px]'>
            <Card>
              <CardHeader className='items-center'>
                <CardTitle className='tracking-wide'>Reset Your Password</CardTitle>
                <CardDescription>
                  Enter your new information to start again new journey.
                </CardDescription>
              </CardHeader>
              <CardContent className='space-y-3'>
                <div className='space-y-1'>
                  <Label htmlFor='password'>Password</Label>
                  <Input
                    id='password'
                    name='password'
                    type='password'
                    placeholder='Please enter your password'
                  />
                </div>
                <div className='space-y-1'>
                  <Label htmlFor='cpassword'>Confirm Password</Label>
                  <Input
                    id='cpassword'
                    name='cpassword'
                    type='password'
                    placeholder='Please enter your password'
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

export default ResetPassword
