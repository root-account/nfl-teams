'use client';
import { useEffect, useState } from 'react';

import Link from 'next/link'
import Navbar from '@/components/Navbar'

import { useAppDispatch, useAppSelector } from "@/redux/Hooks";
import {seachTestData, getTestData, getTeams, reset} from "@/redux/teams-slice";
import { useRouter } from 'next/navigation';


export default function Test() {
  const router = useRouter();
  const [teamsData, setTeamsData] = useState([]);

  const [seachVal, setSeachVal] = useState("");


  const testData = useAppSelector((state) => state.teamsReducer.testData);
  const filteredData = useAppSelector((state) => state.teamsReducer.filteredData);
  const teams = useAppSelector((state) => state.teamsReducer.teams);
  const error = useAppSelector((state) => state.teamsReducer.error);
  
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getTestData())
    dispatch(getTeams());
  },[]);

  useEffect(() => {
    dispatch(reset())
    setTeamsData(testData);
  }, [router]);

  useEffect(() => {
    // setTeamsData(teams);
    /*  
     - The NFL teams API returns a CORS error when fetched by a client instead of a Server.
     */
    console.log("Test data from  NFL API");
    console.log(teams); 
  },[teams]);

  useEffect(() => {
    /*  
     - This API accepts this request
     */
    console.log("Test API data");
    console.log(testData); 
    setTeamsData(testData);
    
  },[testData]);


  useEffect(() => {
    /*  
     - Search data and get new filtered Data
     */
    
    if (filteredData.length > 0) {
        setTeamsData(filteredData);
    }else{

        if (seachVal !== "") {
            setTeamsData([]);    
        }else{
            setTeamsData(testData); 
        }
    }
  },[filteredData]);
  

  const handleChange = (event:any) => {
    setSeachVal(event.target.value);
    dispatch(seachTestData(event.target.value));
  };
  
  return (
    <main className="flex min-h-screen flex-col items-center p-24 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      
      <Navbar/>

      <div className='w-full px-10 mb-8'>
        <ul>
            <li className='my-2 text-sm opacity-70'>
                This page was not part of the brief, I made the page to check if a different
                API endpoint would be able to send request without CORS errors
            </li>
            <li className='my-2 text-sm opacity-70'>
                The original API for NFL teams does not accept requests coming from a client, only the server.
            </li>
            <li className='my-2 text-sm opacity-70'>
            On the <Link href={'/'} target='_blank'>root page </Link>  the application is able to fetch the data becuase the page is server rendered instead of client rendered like this one 
            </li>
        </ul>
      </div>

      <div className="mb-15 grid w-full px-10 text-center lg:grid-cols-3 gap-5 lg:text-left relative z-[1]">
        

        <form className='w-50 mb-10 block' action="">
          
          <label className='mb-2 block' htmlFor="">Search by name or email</label>
          <div className='grid w-full lg:grid-cols-1 gap-5 '>
            <input type="text" value={seachVal} name="filterby" onChange={handleChange} className='bg-transparent border border-neutral-700 rounded-lg p-2 outline-0'/>
          </div>

        </form>

      </div>

        

      <div className="mb-32 grid w-full px-10 text-center lg:mb-0 lg:grid-cols-3 gap-5 lg:text-left relative z-[1]">

        {teamsData.length > 0 || filteredData.length > 0 ? teamsData?.map((team: any, index: any) => (
            <Link
              key={index}
              href={`/test/${team?.id}`}
              className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            >
              <h2 className={`mb-3 relative text-2xl font-semibold`}>
                {team?.name}
                <span className="inline-block absolute right-0 transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                  -&gt;
                </span>
              </h2>
           
              <p className={`my-2 max-w-[30ch] text-sm opacity-50`}>
                {team?.email}
              </p>
              <p className={`my-2 max-w-[30ch] text-sm opacity-50`}>
                {team?.website}
              </p>
            </Link>
          )):(
            <p>Nothing found</p>
          )}
        
      </div>

    </main>
  )
}