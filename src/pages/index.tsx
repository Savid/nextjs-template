import Checkbox from '@components/Checkbox';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className="relative overflow-hidden">
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="px-4 mx-auto mt-16 max-w-7xl sm:mt-24">
          <div className="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200">
            <Checkbox id="checkbox-id-1" label="this is a checkbox" />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
