import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>InvisiDoods!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to the World of InvisiDoods!" />
        <p className="description">
          Mint Price xyz<code>Launching Soon</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
