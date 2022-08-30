import type { NextPage } from 'next';
import Head from 'next/head';
import { DirectoryItem } from '../components/DirectoryItem';
import { FileNode, FileType } from '../lib/FileNode';

/** example */
const myApp = new FileNode('my_app', FileType.folder, null);
const src = new FileNode('src', FileType.folder, myApp);
const node = new FileNode('node_modules', FileType.folder, myApp);
const components = new FileNode('components', FileType.folder, src);
const index = new FileNode('index.tsx', FileType.file, src);
const form = new FileNode('Form.tsx', FileType.file, src);

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Nextree</title>
        <meta name="description" content="Next gen tree-like app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col items-center py-8 px-48">
        <h1 className="m-8 text-5xl font-extrabold leading-normal text-gray-600 md:text-7xl">
          Nex<span className="text-teal-400">tree</span>
        </h1>

        <div className="my-4 w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Nunc mattis enim ut tellus elementum sagittis vitae et leo. Sit amet tellus cras adipiscing
          enim.
        </div>

        <div className="my-4 flex h-[500px] w-full gap-12">
          <div className="flex-1 rounded-lg border-2 border-teal-400">
            <div className="flex h-full items-center justify-center">
              <DirectoryItem item={myApp} />
            </div>
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
