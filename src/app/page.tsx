import Link from 'next/link'
import Navbar from '@/components/Navbar'
import FilterInputs from '@/components/FilterInputs'
import axios from 'axios';

import { useAppDispatch, useAppSelector } from "@/redux/Hooks";
import {setTeams, setFilterInputs} from "@/redux/teams-slice";
import { revalidatePath } from 'next/cache';


let divisionFilterOptions = ['West', 'South', 'North', 'East'];

let count = 0;
let filterByDivision = "";
let filterByConference = "";
let conferenceFilterOptions:any =['National Football Conference', 'American Football Conference' ];
let teamsData:any = [];


const getTeamsData  = axios.get('https://delivery.chalk247.com/team_list/NFL.JSON?api_key=74db8efa2a6db279393b433d97c2bc843f8e32b0').then(function(response) {
    const data = response.data?.results?.data?.team

    return data;
}).catch(function(error) {
    console.log(error);
});


const filterTeams =  async (division:string, conference:string) => {

  console.log(division);
  console.log(conference);

  teamsData = await getTeamsData;

  if (division !== '' && conference !== '') {
    // Filter by both Division and Conference only
    const filteredTeams = teamsData.filter(
      (team:any) => team.division == division && team.conference == conference
    );
    teamsData = filteredTeams;
    
  }else if (division !== '') {
    // Filter by Division only
    const filteredTeams = teamsData.filter(
      (team:any) => team.division == division
    );
    teamsData = filteredTeams;
  }else if (conference !== '') {
    // Filter by Conference only
    const filteredTeams = teamsData.filter(
      (team:any) => team.conference == conference
    );
    teamsData = filteredTeams;
  }

  return teamsData;
};

export default async function Home() {

 
  if (filterByDivision == '' && filterByConference == '') {
    teamsData = await getTeamsData;
  }

  async function handleFormChange(formData:FormData){
    'use server'

    filterByDivision = String(formData.get('filterByDivision'));
    filterByConference = String(formData.get('filterByConference'))

    filterTeams(filterByDivision, filterByConference);
    
    revalidatePath("/");
  }


  return (
    <main className="flex 
                     min-h-screen 
                     flex-col 
                     items-center 
                     md:p-24 
                     before:absolute 
                     before:h-[300px] 
                     before:w-[480px] 
                     before:-translate-x-1/2 
                     before:rounded-full 
                     before:bg-gradient-radial 
                     before:from-white 
                     before:to-transparent 
                     before:blur-2xl 
                     before:content-[''] 
                     after:absolute 
                     after:-z-20 
                     after:h-[180px] 
                     after:w-[240px] 
                     after:translate-x-1/3 
                     after:bg-gradient-conic 
                     after:from-sky-200 
                     after:via-blue-200 
                     after:blur-2xl 
                     after:content-[''] 
                     before:dark:bg-gradient-to-br 
                     before:dark:from-transparent 
                     before:dark:to-blue-700 
                     before:dark:opacity-10 
                     after:dark:from-sky-900 
                     after:dark:via-[#0141ff] 
                     after:dark:opacity-40 
                     before:lg:h-[360px] 
                     z-[-1]">
      
      <Navbar/>

      {/* <FilterInputs/> */}

      <div className="mb-15 block w-full sm:mt-20">

      <div className="mb-8 grid w-full px-10 text-center lg:grid-cols-2 gap-5 lg:text-left relative z-[1]">

        <form className='w-100 mb- block' action={handleFormChange}>
          <label className='mb-2 block' htmlFor="">Filter By</label>

          <div className='grid w-full lg:grid-cols-3 gap-5 items-center justify-center'>

            <div className='w-full '>
              <label className='block'>Divison</label>
              <select name="filterByDivision" className='w-full block bg-transparent border border-neutral-700 rounded-lg p-2 outline-0'>
                  <option value="">All</option>
                  {divisionFilterOptions.map((option, index) => (
                  <option key={index} value={option}>
                      {option}
                  </option>
                  ))}
              </select>
            </div>
            
            <div className='w-full '>
              <label className='block'>Conference</label>
              <select name="filterByConference" className='w-full block bg-transparent border border-neutral-700 rounded-lg p-2 outline-0'>
                  <option value="">All</option>
                  {conferenceFilterOptions?.map((option:any, index:number) => (
                  <option key={index} value={option}>
                      {option}
                  </option>
                  ))}
              </select>
            </div>
   
            <div>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full' type='submit'>Apply Filter</button>  
            </div>
          </div> 

              
        </form>
    
      </div>

    </div>


      <div className="mb-32 grid w-full px-10 text-left lg:mb-0 lg:grid-cols-3 gap-5 relative z-[1]">
      
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