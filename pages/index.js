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
        <Header title="¡Bienvenido a mi portafolio inicial!" />
        <p className="description">
          Por el momento colabore en <a href="https://cracks-dao.netlify.app/" target="_blank" rel="noopener noreferrer">Agro Economy</a>
        </p>
      </main>

      <Footer />
    </div>
  )
}
