import { useRoutes } from 'react-router-dom'

import { AuthTabs, ForgotPassword, ResetPassword } from 'src/pages/auth'

export const useAppRouter = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: <AuthTabs />
    },
    {
      path: '/forgot-password',
      element: <ForgotPassword />
    },
    {
      path: '/reset-password',
      element: <ResetPassword />
    }
  ])

  return elements
}
