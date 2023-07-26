'use client';

import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/Hooks";
import {setTeams, setFilterInputs} from "@/redux/teams-slice";

const FilterInputs = () => {

    const dispatch = useAppDispatch();

    const filterOptions = [
        {value: '', text: 'All'},
        {value: 'division', text: 'Division'},
        {value: 'conference', text: 'Conference'},
    ];


    const [filterBy, setFilterBy] = useState(filterOptions[0].value);
    const [filterByChild, setFilterByChild] = useState("");
    const [error, setError] = useState("");

    const filterInputs = useAppSelector((state) => state.teamsReducer.filterInputs);

    const handleChange = (event:any) => {

        if ( event.target.name == 'filterby') {
            setFilterBy(event.target.value);

            if (event.target.value == "division") {
                dispatch(setFilterInputs(['West', 'South', 'North', 'East' ]));
            }else if (event.target.value == "conference") {
                dispatch(setFilterInputs([ 'National Football Conference', 'American Football Conference' ]));
            }else{
                dispatch(setFilterInputs([]));
            }
        }
        if ( event.target.name == 'filterbylist') {
            setFilterByChild(event.target.value);
            setError("I did not finish this part yet :( but i'm on it....")
        }

        if (event.target.value == "") {
            setError("");
        }
    };

  return (
    <div className="mb-15 block w-full sm:mt-20">
    <div className="mb-8 grid w-full px-10 text-center lg:grid-cols-3 gap-5 lg:text-left relative z-[1]">

        <form className='w-50 mb- block' action="">
          <label className='mb-2 block' htmlFor="">Filter By</label>
          <div className='grid w-full lg:grid-cols-2 gap-5 '>

          <select value={filterBy} name="filterby" onChange={handleChange} className='bg-transparent border border-neutral-700 rounded-lg p-2 outline-0'>
                {filterOptions.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.text}
                </option>
                ))}
            </select>
            
            {filterInputs.length > 0 && (
                <select value={filterByChild} name="filterbylist" onChange={handleChange} className='bg-transparent border border-neutral-700 rounded-lg p-2 outline-0'>
                    {filterInputs?.map((option:any, index:number) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                    ))}
                </select>
            )}     
          </div>       
        </form>
    
      </div>

        {error !== "" && (
            <p className="mt-4 mb-8 text-rose-700 w-full px-10">
                {error}
            </p>
        )}
    </div>
  );
};
export default FilterInputs;