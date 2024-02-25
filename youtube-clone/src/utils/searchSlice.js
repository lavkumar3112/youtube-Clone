import { createSlice } from "@reduxjs/toolkit";

const searhSlice = createSlice({
    name: 'search',
    initialState:{

    },
    reducers: {
        cacheResults: (state,action) => {
            state=Object.assign(state,action.payload)
        }
    }
});

export const {cacheResults} = searhSlice.actions;
export default searhSlice.reducer;


// LRU Cache - cache size [100]


