import { Link } from 'react-router-dom'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'src/components/ui/card'
import { Input } from 'src/components/ui/input'
import { Button } from 'src/components/ui/button'
import { Label } from 'src/components/ui/label'
import { Checkbox } from 'src/components/ui/checkbox'

const SignIn = () => {
  return (
    <Card>
      <CardHeader className='items-center'>
        <CardTitle className='tracking-wide'>Sign In</CardTitle>
        <CardDescription>Welcome back, you’ve been missed!</CardDescription>
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
        <div className='space-y-1'>
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            name='password'
            type='password'
            placeholder='Please enter your password'
          />
        </div>
        <div className='flex items-center space-x-2'>
          <Checkbox id='checkbox' name='checkbox' />
          <Label htmlFor='checkbox' className='font-normal'>
            Remember me
          </Label>
        </div>
        <Button size='lg' className='ml-auto flex'>
          Sign In
        </Button>
        <Button variant='link' asChild className='mx-auto flex font-normal text-muted-foreground'>
          <Link to='/forgot-password'>Forgot your password?</Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export default SignIn
