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
        <Header title="Đang Bảo Trì!" />
        <p className="description">
          hệ thống Rocket chat đang nâng cấp, các Bạn tạm thời trao đổi thông tin dự án qua mail nội bộ. Cảm ơn</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
