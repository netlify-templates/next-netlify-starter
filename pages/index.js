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
        <Header title="Welcome! This is my developer website." />
        <p className="description">
          My website is at https://hypercraftermc.wixsite.com/home . </code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
