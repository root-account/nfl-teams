import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/Navbar'

export const getTeamsData = async () => {
  const apiRes = await fetch('https://delivery.chalk247.com/team_list/NFL.JSON?api_key=74db8efa2a6db279393b433d97c2bc843f8e32b0', {cache:"no-store"});
  const data = await apiRes.json();
  const teamsData = await data.results
  
  return teamsData;
}

export default async function Home() {

  const teamsData = await getTeamsData();

  return (
    <main className="flex min-h-screen flex-col items-center p-24 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      
      <Navbar/>

      <div className="mb-15 grid w-full px-10 text-center lg:grid-cols-3 gap-5 lg:text-left relative z-[1]">

        <form className='w-50 mb-10 block' action="">
          
          <label className='mb-2 block' htmlFor="">Filter By</label>
          <div className='grid w-full lg:grid-cols-2 gap-5 '>
            <select name="" id="" className='bg-transparent border border-neutral-700 rounded-lg p-2 outline-0'>
              <option value="">All</option>
              <option value="">Conference</option>
              <option value="">Division</option>
            </select>
            {/* <select name="" id="" className='bg-transparent border border-neutral-700 rounded-lg p-2 outline-0'>
              <option value="">Testing</option>
            </select> */}
          </div>
          
        </form>

      </div>

      <div className="mb-32 grid w-full px-10 text-center lg:mb-0 lg:grid-cols-3 gap-5 lg:text-left relative z-[1]">
      
        {teamsData && teamsData?.data?.team?.map((team: any, index: any) => (
            <Link
              key={index}
              href={`/team/${team?.id}`}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <h2 className={`mb-3 relative text-2xl font-semibold`}>
                {team?.name} - {team?.nickname}
                <span className="inline-block absolute right-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
           
              <p className={`my-2 max-w-[30ch] text-sm opacity-50`}>
                {team?.conference}
              </p>
              <p className={`my-2 max-w-[30ch] text-sm opacity-50`}>
                {team?.division}
              </p>
            </Link>
          ))}
        
      </div>

    </main>
  )
}
