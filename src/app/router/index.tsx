import AuthRouter from './AuthRouter'
import AppRouter from './AppRouter'
import { Layout } from 'antd'

function Router() {
  const isLoggedIn = false

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {isLoggedIn === false ? (
        <AuthRouter />
      ) : (
        <>
          {/* <Navigation /> */}
          <Layout style={{ minHeight: '100vh' }}>
            <AppRouter />
          </Layout>
        </>
      )}
    </Layout>
  )
}

export { Router }
