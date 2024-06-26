import Head from 'next/head'
import Link from 'next/link'
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
        <Header title="Wepage 11pp!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
        <Link href="/page1">
          <a>Go to Page 1</a>
        </Link>
        <br />
        <Link href="/page2">
          <a>Go to Page 2</a>
        </Link>
      </main>

      <Footer />
    </div>
  )
}
