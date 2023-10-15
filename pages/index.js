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
        <Header title="Hoş Geldiniz" />
        <p className="description">
          Merhaba, ben Arda.

Uzun yıllardır yazılım alanında serbest çalışıyorum. Back-end ve front-end geliştirme konusunda uzmanım. Python, Java, C++, C#, Javascript, TypeScript, PHP, React, Svelte, Vue gibi programlama dillerini ve teknolojilerini kullanıyorum.

Siber güvenlik alanında da akademik sertifikam bulunmaktadır. Bu alandaki bilgi ve deneyimlerimi kullanarak, web sitelerinizi ve uygulamalarınızı güvenli hale getirmenize yardımcı olabilirim.

Sizin için yapabileceklerimin sınırı yok. Siz hayal edin, ben geliştireyim.

İşte size sunabileceğim bazı hizmetler:

Web siteleri ve mobil uygulamalar geliştirme
Yazılım sistemleri ve uygulamaları geliştirme
Otomasyon sistemleri geliştirme
Veri analizi ve makine öğrenimi
Siber güvenlik
Benimle çalışmanın faydaları:

Deneyimli ve uzman bir ekip
Kaliteli ve güvenilir hizmet
Esnek ve uygun fiyatlı çözümler
Sizi daha iyi tanımak isterim. Birlikte harika şeyler başarabiliriz.</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
