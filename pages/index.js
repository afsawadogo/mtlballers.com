import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Montreal Ballers</title>
      </Head>

      <main>
        <Header title="Welcome to MTL ballers" />
      </main>

      <Footer />
    </div>
  )
}
