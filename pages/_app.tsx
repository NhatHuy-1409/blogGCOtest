import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { AppPropsWithLayout } from '../models'
import { EmptyLayout, MainLayout } from '../components/layout'
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const Layout = Component.Layout ?? EmptyLayout

  return <Layout>
      <Component {...pageProps} />
    </Layout>
}

export default MyApp
