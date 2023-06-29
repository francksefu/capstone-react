import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  finance: [],
  isLoading: false,
  date: {},
};

const key = 'b7929a0c01b907c1daf00c17e6b06902';
const URL = `https://financialmodelingprep.com/api/v3/balance-sheet-statement/AAPL?apikey=${key}&limit=120`;

export const getFinance = createAsyncThunk('finance/getFinance', async (thunkAPI) => {
  try {
    const resp = await fetch(URL);
    const data = await resp.json();
    return data;
  } catch (err) {
    return thunkAPI.rejectWithValue('sorry, something went wrong');
  }
});
export const dataSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {
    goWithData: (state, action) => {
      state.date = action.payload;
    },
    fetching: (state, action) => {
      state.finance = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getFinance.fulfilled, (state, action) => {
        state.finance = action.payload;
        state.isLoading = false;
      })
      .addCase(getFinance.pending, (state) => {
        state.isLoading = true;
      });
  },
});
export const { goWithData, fetching } = dataSlice.actions;
export default dataSlice.reducer;
