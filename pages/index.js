import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Joseph app!" />
        <p className="Software Developer Graduate">
          I am glad, because i know how to make app <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
