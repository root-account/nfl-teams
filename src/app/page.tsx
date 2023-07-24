// 'use client';
// import { useEffect, useState } from 'react';

import Link from 'next/link'
import Navbar from '@/components/Navbar'
import FilterInputs from '@/components/FilterInputs'
import axios from 'axios';

import { useAppDispatch, useAppSelector } from "@/redux/Hooks";
import {setTeams, filteredTeams, setFilterItems} from "@/redux/teams-slice";



const getTeamsData  = axios.get('https://delivery.chalk247.com/team_list/NFL.JSON?api_key=74db8efa2a6db279393b433d97c2bc843f8e32b0').then(function(response) {
    const data = response.data?.results?.data?.team

    return data;
}).catch(function(error) {
    console.log(error);
});


export default async function Home() {

  /* 
    - The client type code is commented out becuase the API needs the request coming
    - from a server otherwise it throws CORS error
  */
  // const [teamsData, setTeamsData] = useState([]);
  // const getTeamsData = () => {

  //   const data = axios.get('https://delivery.chalk247.com/team_list/NFL.JSON?api_key=74db8efa2a6db279393b433d97c2bc843f8e32b0').then(function(response) {
  //       setTeamsData(response.data);
  //       console.log(response.data);
        
  //       console.log(teamsData)
  //   }).catch(function(error) {
  //       console.log(error);
  //   });

  // }
  // useEffect(() => {
  //   getTeamsData();
  // },[]);

  

  let teamsData = await getTeamsData;

  // const count = useAppSelector((state) => state.teamsReducer.teams);
  // const dispatch = useAppDispatch();

  // const { isLoading, isFetching, data, error } = useGetTeamsQuery(null);

  // console.log("DATTTTTAAAA");
  // console.log(data);
  
  
  function getUniqueDataSet(type:string,data:any) {

    const dataSet = new Set();
    data.forEach((item:any) => {
      if (type == "conference") {
        dataSet.add(item?.conference);
      }
      if (type == "division") {
        dataSet.add(item?.division);
      }
    });
  
    return Array.from(dataSet);

  }

  const uniqueConferences = getUniqueDataSet('conference', teamsData);
  const uniqueDivisions = getUniqueDataSet('division', teamsData);

  // console.log("Conference set");
  // console.log(uniqueConferences);

  // console.log("Division set");
  // console.log(uniqueDivisions);


  function filterDataByConferenceOrDivision(data:any, filterValue:string) {
    return data.filter((item:any) => {
      return item.conference === filterValue || item.division === filterValue;
    });
  }
  
  // Example usage:
  const conferenceFilterValue = 'National Football Conference';
  const divisionFilterValue = 'North';
  
  const filteredByConference = filterDataByConferenceOrDivision(teamsData, conferenceFilterValue);
  console.log(filteredByConference);
  
  const filteredByDivision = filterDataByConferenceOrDivision(teamsData, divisionFilterValue);
  console.log(filteredByDivision);

  // teamsData = filteredByDivision;


  return (
    <main className="flex min-h-screen flex-col items-center p-24 before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
      
      <Navbar/>

      <FilterInputs/>

      <div className="mb-32 grid w-full px-10 text-center lg:mb-0 lg:grid-cols-3 gap-5 lg:text-left relative z-[1]">
      
        {teamsData && teamsData?.map((team: any, index: any) => (
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