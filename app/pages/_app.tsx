import '../styles/globals.css'
import App from 'next/app'
import type { AppProps, AppContext } from 'next/app'
import Layout from '../components/Layout'
import { getSelectorsByUserAgent } from 'react-device-detect'

export default function TesabApp({ Component, pageProps }: AppProps) {
  return <Layout {...pageProps}>
    <Component {...pageProps} />
  </Layout>
}

TesabApp.getInitialProps = async (context: AppContext) => {
  const props = await App.getInitialProps(context)

  if (context.ctx.req) {
    const userAgent: string = context.ctx.req!.headers['user-agent'] as string

    const { isMobile } = getSelectorsByUserAgent(userAgent)

    const newProps = { ...props }

    newProps.pageProps = { ...props.pageProps, isMobile }

    return newProps
  } else {
    const { userAgent } = window.navigator

    const { isMobile } = getSelectorsByUserAgent(userAgent)

    const newProps = { ...props }

    newProps.pageProps = { ...props.pageProps, isMobile }

    return newProps
  }
}
