import { 
    // createReducer, 
    createSlice,
    createAsyncThunk
} from '@reduxjs/toolkit';
// import { updateStatus } from '../actions'

const initialState = {
    name: 'Ramesh',
    age: 20,
    status: 'coder'
}

export const fetchUserName = createAsyncThunk(
    'fetchuser',
    async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const res2 = await res.json();
        return res2[Math.floor(Math.random()*10)].name;
    }
)

const userReducer = createSlice({
    name: "person",
    initialState,
    reducers: {
        updateName(state, action) {
            state.name = action.payload
        },
        updateAge(state, action) {
            state.age = action.payload
        },
        updateStatus(state, action) {
            state.status = action.payload
        },
    },
    extraReducers: {
        [fetchUserName.fulfilled]: (state, action) => {
            state.name = action.payload
        },
        [fetchUserName.pending]: (state, action) => {
            state.name = "Loading!!"
        },
        [fetchUserName.rejected]: (state, action) => {
            state.name = "Try again"
        }
    }
});

export const { updateAge, updateName, updateStatus } = userReducer.actions;
export default userReducer.reducer;

// export default (state = initialState, action) => {
//     if(action.type === "UPDATE_AGE") {
//         return {
//             ...state,
//             age: action.payload
//         }
//     }    
//     return state
// }

// export default createReducer(initialState, (builder) => {
//     builder.addCase('UPDATE_AGE', (state, action) => {
//         state.age = action.payload
//     })
//     builder.addCase('UPDATE_NAME', (state, action) => {
//         state.name = action.payload
//     })
//     builder.addCase(updateStatus.toString(), (state, action) => {
//         state.status = action.payload
//     })
// })