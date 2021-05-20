import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Halyard</title>
        <meta
          name="description"
          content="Halyard is an Australia-based software solutions consultancy"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="title">
          <img src="/logo.svg" alt="Halyard Logo" />
          <h1>Halyard Software Solutions</h1>
        </div>
      </main>
      <footer />
    </>
  )
}
