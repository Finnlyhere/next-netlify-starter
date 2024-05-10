import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>hey</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="hi" />
        <p className="description">
          how you doing?
        </p>
      </main>

      <Footer />
    </div>
  )
}
