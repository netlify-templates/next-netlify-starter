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
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
    <form action="/new_url" method="POST">
   <input name="username">
   <input type="password" name="password">
   <button type="submit">Submit</button>
</form>
      </main>

      <Footer />
    </div>
  )
}
