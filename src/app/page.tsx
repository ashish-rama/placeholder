import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    // <div className="px-8 py-32">
    //   <div className="grid gap-8 items-start justify-center">
    //     <Image
    //       src="/PGP-logo-on-dark.png"
    //       alt="PGP Logo"
    //       width={500}
    //       height={250}
    //     />
    //     <div className="relative group">
    //       <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
    //       <button className="relative px-7 py-4 bg-black rounded-lg leading-none flex items-center divide-x divide-gray-600">
    //         <span className="flex items-center space-x-5">
    //           {/* <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-6 w-6 text-pink-600 -rotate-6"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
    //             />
    //           </svg> */}
    //           <span
    //             className={`${inter.className} text-2xl p-12 text-gray-100`}
    //           >
    //             Coming soon...
    //           </span>
    //         </span>
    //         {/* <span className="pl-6 text-indigo-400 group-hover:text-gray-100 transition duration-200">
    //           See what's new &rarr;
    //         </span> */}
    //       </button>
    //     </div>
    //   </div>
    // </div>

    <main className="flex flex-col items-center justify-between p-24">
      <Image
        src="/PGP-logo-on-dark.png"
        alt="PGP Logo"
        width={500}
        height={250}
      />
      <div className="mt-20 z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"></div>
      <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px]">
        <div className="logo-div"></div>
        <div className="box-wrap actual-box">
          {/* <div className="box-anim">hi</div> */}
          <div className={`${inter.className} text-2xl text-center`}>
            Launching soon...
          </div>
        </div>
      </div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left"></div>
    </main>
    //     <div className="min-h-screen bg-New-gray text-white">
    //       <Head>
    //         <title>New Studio Inspired App</title>
    //         <link rel="icon" href="/favicon.ico" />
    //       </Head>

    //       <div className="flex h-screen">
    //         <Sidebar />
    //         <div className="flex flex-col w-full">
    //           <TopNavbar />
    //           <main className="flex-grow p-4">
    //             <h1 className="text-4xl font-bold mb-8 text-New-gray">
    //               New Studio Inspired App
    //             </h1>
    //             {/* Your application content goes here */}
    //           </main>
    //         </div>
    //       </div>
    //     </div>
  );
}

// function Sidebar() {
//   return (
//     <div className="bg-New-blue w-64">
//       <div className="p-4">
//         <h2 className="text-xl font-semibold">New</h2>
//       </div>
//       <nav className="space-y-2">
//         {/* Add sidebar navigation items here */}
//         <a href="#" className="block px-4 py-2 hover:bg-blue-600">
//           Dashboard
//         </a>
//         <a href="#" className="block px-4 py-2 hover:bg-blue-600">
//           Tables
//         </a>
//         <a href="#" className="block px-4 py-2 hover:bg-blue-600">
//           API
//         </a>
//       </nav>
//     </div>
//   );
// }

// function TopNavbar() {
//   return (
//     <div className="bg-white border-b border-gray-200 py-2">
//       <div className="container mx-auto">
//         {/* Add top navigation content here */}
//         <p className="text-gray-600">Welcome, user@example.com</p>
//       </div>
//     </div>
//   );
// }
