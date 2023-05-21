import { useState } from 'react'
import { Link } from 'react-router-dom'

import { SignIn, SignUp } from 'src/pages/auth'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'src/components/ui/tabs'
import { Button } from 'src/components/ui/button'

const AuthTabs = () => {
  const [type, setType] = useState<string>('Sign In')
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
        <div className='mt-[150px] flex items-center justify-center'>
          <Tabs defaultValue={type} className='w-[500px]'>
            <TabsList className='grid w-full grid-cols-2'>
              <TabsTrigger value='Sign In' onClick={() => setType('Sign In')}>
                Sign In
              </TabsTrigger>
              <TabsTrigger value='Sign Up' onClick={() => setType('Sign Up')}>
                Sign Up
              </TabsTrigger>
            </TabsList>
            <TabsContent value='Sign In'>
              <SignIn />
            </TabsContent>
            <TabsContent value='Sign Up'>
              <SignUp />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

export default AuthTabs
