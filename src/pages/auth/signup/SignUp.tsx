import { Card, CardContent, CardDescription, CardHeader, CardTitle } from 'src/components/ui/card'
import { Input } from 'src/components/ui/input'
import { Button } from 'src/components/ui/button'
import { Label } from 'src/components/ui/label'

const SignUp = () => {
  return (
    <Card>
      <CardHeader className='items-center'>
        <CardTitle className='tracking-wide'>Getting Started</CardTitle>
        <CardDescription>
          Create an account to continue and connect with the people.
        </CardDescription>
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
          <Label htmlFor='email'>Email</Label>
          <Input id='email' name='email' type='text' placeholder='Please enter your email' />
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
        <Button size='lg' className='!mt-5 ml-auto flex'>
          Sign Up
        </Button>
      </CardContent>
    </Card>
  )
}

export default SignUp
