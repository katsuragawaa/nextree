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

      <main className="container mx-auto flex min-h-screen flex-col items-center p-8">
        <h1 className="m-8 text-5xl font-extrabold leading-normal text-gray-600 md:text-7xl">
          Nex<span className="text-teal-400">tree</span>
        </h1>

        <div className="w-4/5 my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Sit amet tellus cras adipiscing
          enim.
        </div>

        <div className="flex h-96 my-4 w-4/5 gap-12">
          <div className="flex-1 rounded-lg border-2 border-teal-400">
            <div className="flex h-full items-center justify-center">left container</div>
          </div>
          <div className="flex-1 rounded-lg border-2 border-teal-400">
            <div className="flex h-full items-center justify-center">right container</div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
