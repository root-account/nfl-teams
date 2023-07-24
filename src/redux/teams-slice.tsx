import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

type initialState = {
    loading:boolean,
    teams:any;
    testData:any;
    filterItems:any,
    error:string,
}

const initialState = {
    loading: false,
    teams:[],
    testData:[],
    filterItems:[],
    error: "",
} as initialState;


export const getTestData = createAsyncThunk('teams/getTestData',
    async () => {
      return fetchTestData;
    }
)

const fetchTestData = axios.get('https://jsonplaceholder.typicode.com/users').then(function(response) {
    const data = response.data
    return data;    
});


export const getTeams = createAsyncThunk('teams/getTeams',
    async () => {
      const response = await fetch('https://delivery.chalk247.com/team_list/NFL.JSON?api_key=74db8efa2a6db279393b433d97c2bc843f8e32b0');
      const data  = response.json();

      console.log("TEAMS DATA");
      console.log(data);
      
      return data;
    }
)


export const teams = createSlice({
    name:"teams",
    initialState,
    reducers:{
        reset: () => initialState,
        setTeams: (state, action:PayloadAction<any>) => {            
            return{
                loading: false,
                teams:action.payload,
                testData:[],
                filterItems:state.filterItems,
                error: "",
            }
        },
        filteredTeams: (state) => {
            // Filter function here
            let filteredData: [] = [];

            return{
                loading: false,
                teams:filteredData,
                testData:[],
                filterItems:state.filterItems,
                error: "",
            }
        },
        setFilterItems: (state, action:PayloadAction<any>) => {
            return{
                loading: false,
                teams:state.teams,
                testData:[],
                filterItems:action.payload,
                error: "",
            }
        },
        seachTestData: (state, action:PayloadAction<string>) => {
            // Filter function here
            
            let filteredData = [];
            let seachVal = action.payload;
            let error = "";

           if (seachVal) {
            filteredData = state.testData.filter((item:any) => {
                const { name, email } = item;
                const lowerCaseSearchVal = seachVal.toLowerCase();

                // let result = name.toLowerCase().includes(lowerCaseSearchVal) || email.toLowerCase().includes(lowerCaseSearchVal)

                // if (name.toLowerCase().includes(lowerCaseSearchVal) || email.toLowerCase().includes(lowerCaseSearchVal)) {
                //     error = "";
                //     return name.toLowerCase().includes(lowerCaseSearchVal) || email.toLowerCase().includes(lowerCaseSearchVal);
                // }else{
                //     error = "No results found";
                //     filteredData = [];
                //     return "";
                // }

                return name.toLowerCase().includes(lowerCaseSearchVal) || email.toLowerCase().includes(lowerCaseSearchVal);
            });
           }else{
                filteredData = state.testData;
           }
        
            return{
                loading: false,
                teams:state.teams,
                testData:state.testData,
                filterItems:filteredData,
                error: error,
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getTestData.fulfilled, (state, action) => {

            console.log("Test");
            
            return{
                loading: false,
                teams:[],
                testData:action.payload,
                filterItems:state.filterItems,
                error: "",
            }
        }),
        builder.addCase(getTeams.fulfilled, (state, action) => {
            console.log("Test get teams");
            return{
                loading: false,
                teams:action.payload,
                testData:[],
                filterItems:state.filterItems,
                error: "",
            }
        })
    },
});

export const {setTeams, filteredTeams, setFilterItems, seachTestData} = teams.actions;
export default teams.reducer;