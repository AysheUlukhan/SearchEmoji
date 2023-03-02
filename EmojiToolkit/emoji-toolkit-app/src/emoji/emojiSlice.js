import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    value: "",
    data: [],
    loading: false,
    error: ""
}

export const fetchEmoji = createAsyncThunk("fetchEmoji", async () => {
    const response = await axios.get("https://emoji-api.com/emojis?access_key=1920e78d98935a320f2c863e0a910f8bd28c7301")
    return response.data;
});

export const emojiSlice = createSlice({
    name : 'emoji',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase (fetchEmoji.pending, (state, action) =>{
            state.loading = false;
            state.error = ""
        });
        builder.addCase (fetchEmoji.fulfilled, (state, action) =>{
            state.data = action.payload;
            state.loading = false;
        });
        builder.addCase (fetchEmoji.rejected, (state, action) =>{
            state.loading = false;
            state.error = "";
        })
    }
})

// export const {extraReducers} = emojiSlice.actions
export default emojiSlice.reducer