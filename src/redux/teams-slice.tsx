import {createSlice, PayloadAction, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

// Declare types
type initialState = {
    loading:boolean,
    teams:any;
    testData:any;
    filteredData:any,
    filterInputs:any,
    error:string,
}

// Initial state values
const initialState = {
    loading: false,
    teams:[],
    testData:[],
    filteredData:[],
    filterInputs:[],
    error: "",
} as initialState;



// Fetch data from the Test API
export const getTestData = createAsyncThunk('teams/getTestData',
    async () => {
      return fetchTestData;
    }
)

const fetchTestData = axios.get('https://jsonplaceholder.typicode.com/users').then(function(response) {
    const data = response.data
    return data;    
});


// Fetch data from the NFL API
export const getTeams = createAsyncThunk('teams/getTeams',
    async () => {
      const response = await fetch('https://delivery.chalk247.com/team_list/NFL.JSON?api_key=74db8efa2a6db279393b433d97c2bc843f8e32b0');
      const data  = response.json();

      console.log("TEAMS DATA");
      console.log(data);
      
      return data;
    }
)

// Create a slice for the functions and reducers
export const teams = createSlice({
    name:"teams",
    initialState,
    reducers:{
        reset: () => initialState,
        setTeams: (state, action:PayloadAction<any>) => {   
            /* Todo
                - This should run the fetch data function and set the data when called
            */   
            return{
                loading: false,
                teams:action.payload,
                testData:[],
                filteredData:[],
                filterInputs:state.filterInputs,
                error: "",
            }
        },
        setFilterInputs: (state, action:PayloadAction<any>) => {
            /* Todo
                - This should update the state of inputs to filter by
            */  
            return{
                loading: false,
                teams:state.teams,
                testData:[],
                filteredData:[],
                filterInputs:action.payload,
                error: "",
            }
        },
        seachTestData: (state, action:PayloadAction<string>) => {
            // Seach test data by keyword
            let filteredData = [];
            let seachVal = action.payload;
            let error = "";

           if (seachVal) {
            filteredData = state.testData.filter((item:any) => {
                const { name, email } = item;
                const lowerCaseSearchVal = seachVal.toLowerCase();
                return name.toLowerCase().includes(lowerCaseSearchVal) || email.toLowerCase().includes(lowerCaseSearchVal);
            });
           }else{
                filteredData = state.testData;
           }
            return{
                loading: false,
                teams:state.teams,
                testData:state.testData,
                filteredData:filteredData,
                filterInputs:[],
                error: error,
            }
        },
    },
    extraReducers: (builder) => {
        // Bulder to fetch test data on load
        builder.addCase(getTestData.fulfilled, (state, action) => {
            return{
                loading: false,
                teams:[],
                testData:action.payload,
                filteredData:[],
                filterInputs:state.filterInputs,
                error: "",
            }
        }),
        /*  Bulder to fetch NFL TEAMS data on load
            -  Does not work for client because the API only accepts requests from server
        */
        builder.addCase(getTeams.fulfilled, (state, action) => {
            return{
                loading: false,
                teams:action.payload,
                testData:[],
                filteredData:[],
                filterInputs:state.filterInputs,
                error: "",
            }
        })
    },
});

export const {reset, setTeams, setFilterInputs, seachTestData} = teams.actions;
export default teams.reducer;