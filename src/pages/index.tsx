import type { NextPage } from 'next';
import Head from 'next/head';
import { useState } from 'react';
import { NextSeo } from 'next-seo';
import { uniqueId } from 'lodash';
import { AsciiTree } from '../components/AsciiTree';
import { TreeContainer } from '../components/TreeContainer';
import { VisualTree } from '../components/VisualTree';
import { FileNode, FileType } from '../lib/FileNode';

/** example */
const myApp = new FileNode('my_app', FileType.folder, null);
const src = new FileNode('src', FileType.folder, myApp);
const node = new FileNode('node_modules', FileType.folder, myApp);
const components = new FileNode('components', FileType.folder, src);
const pages = new FileNode('pages', FileType.folder, src);
const home = new FileNode('Home.tsx', FileType.file, pages);
const index = new FileNode('index.tsx', FileType.file, src);
const form = new FileNode('Form.tsx', FileType.file, components);
const nav = new FileNode('Navbar.tsx', FileType.file, components);
const button = new FileNode('Button.tsx', FileType.file, components);
const pack = new FileNode('package.json', FileType.file, myApp);
const readme = new FileNode('README.md', FileType.file, myApp);
/** end */

const Home: NextPage = () => {
  // force re-render of the page
  const [_, setKey] = useState('');
  const update = () => setKey(uniqueId());

  return (
    <>
      <NextSeo
        title="Nextree"
        description="Next gen tree-like app to visualize folder structure"
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: 'https://nextree.vercel.app/',
          title: 'Nextree',
          description: 'Next gen tree-like app to visualize folder structure',
        }}
        twitter={{
          handle: '@batatapalhaco',
          site: '@batatapalhaco',
          cardType: 'summary_large_image',
        }}
      />

      <Head>
        <title>Nextree</title>
        <meta name="description" content="Next gen tree-like app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex min-h-screen flex-col py-8 px-12 lg:px-32 xl:px-12">
        <h1 className="my-8 text-5xl font-extrabold leading-normal text-gray-600 md:text-7xl">
          Nex<span className="text-teal-400">tree</span>
        </h1>

        <div className="my-4 flex w-full flex-col gap-2 text-justify xl:w-[calc(50%-24px)]">
          <p>
            A next-gen tree-like app that helps you visualize and create your perfect folder structure for your next
            project.
          </p>
          <p>
            With <span className="font-bold">Nextree</span>, you can easily convert your folder structure to an ASCII
            format to save to your documentation.
          </p>
        </div>

        <div className="my-4 flex w-full flex-1 flex-col gap-12 xl:flex-row">
          <TreeContainer>
            <VisualTree node={myApp} update={update} />
          </TreeContainer>
          <TreeContainer>
            <AsciiTree node={myApp} />
          </TreeContainer>
        </div>
      </main>
    </>
  );
};

export default Home;
