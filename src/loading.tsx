'use client';
import Navbar from '@/components/Navbar'

export default function Loading() {

  return (
    <main className="flex min-h-screen flex-col items-center p-24 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      
      <Navbar/>

      <div className="mb-32 w-full px-10 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left relative z-[1]">
        <div
          className="w-full group rounded-lg border border-transparent px-5 py-4 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 border-neutral-700 hover:dark:bg-neutral-800/30"
        >
          <p className={`m-0 text-sm opacity-50`}>
           Loading data....
          </p>

        </div>
      </div>
      
    </main>
  )
}
