import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nextree</title>
        <meta name="description" content="Next gen tree-like app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-600">
          Nex<span className="text-teal-400">tree</span>
        </h1>
      </main>
    </>
  );
};

export default Home;
