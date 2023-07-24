'use client';

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/Hooks";
import {setTeams, filteredTeams, setFilterItems} from "@/redux/teams-slice";

const FilterInputs = () => {

    const dispatch = useAppDispatch();

    const filterOptions = [
        {value: '', text: 'All'},
        {value: 'division', text: 'Division'},
        {value: 'conference', text: 'Conference'},
    ];

    
    const [filterBy, setFilterBy] = useState(filterOptions[0].value);
    const [filterByChild, setFilterByChild] = useState("");

    const filterItems = useAppSelector((state) => state.teamsReducer.filterItems);

    const handleChange = (event:any) => {

        if ( event.target.name == 'filterby') {
            setFilterBy(event.target.value);

            if (event.target.value == "division") {

                dispatch(setFilterItems(['West', 'South', 'North', 'East' ]));

            }else if (event.target.value == "conference") {

                dispatch(setFilterItems([ 'National Football Conference', 'American Football Conference' ]));

            }else{
                dispatch(setFilterItems([]));
            }
        }

        if ( event.target.name == 'filterbylist') {
            setFilterByChild(event.target.value);
        }
    };


  return (
    <div className="mb-15 grid w-full px-10 text-center lg:grid-cols-3 gap-5 lg:text-left relative z-[1]">

        <form className='w-50 mb-10 block' action="">
          
          <label className='mb-2 block' htmlFor="">Filter By</label>
          <div className='grid w-full lg:grid-cols-2 gap-5 '>

          <select value={filterBy} name="filterby" onChange={handleChange} className='bg-transparent border border-neutral-700 rounded-lg p-2 outline-0'>
                {filterOptions.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.text}
                </option>
                ))}
            </select>
            
            {filterItems.length > 0 && (
                <select value={filterByChild} name="filterbylist" onChange={handleChange} className='bg-transparent border border-neutral-700 rounded-lg p-2 outline-0'>
                    {filterItems?.map((option:any, index:number) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
            )}
            

            {/* <select name="" id="" className='bg-transparent border border-neutral-700 rounded-lg p-2 outline-0'>
              <option value="">All</option>
              <option value="">Conference</option>
              <option value="">Division</option>
            </select> */}
            {/* <select name="" id="" className='bg-transparent border border-neutral-700 rounded-lg p-2 outline-0'>
              <option value="">Testing</option>
            </select> */}
          </div>
          
        </form>

      </div>
  );
};
export default FilterInputs;