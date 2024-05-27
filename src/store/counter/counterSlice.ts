import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

type CounterState = {
	count: number
}

const initialState: CounterState = {
	count: 0,
}

const counterSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		increment: (state) => {
			state.count += 1
		},
		decrement: (state) => {
			state.count -= 1
		},
		incrementByValue: (state, action: PayloadAction<number>) => {
			state.count += action.payload
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(incrementAsync.pending, () => {
				console.log("Incrementing Asynchronously")
			})
			.addCase(incrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
				state.count += action.payload
			})
			.addCase(decrementAsync.pending, () => {
				console.log("Decrementing Asynchronously")
			})
			.addCase(decrementAsync.fulfilled, (state, action: PayloadAction<number>) => {
				state.count -= action.payload
			})
	},
})

export const incrementAsync = createAsyncThunk("counter/incrementAsync", async (amount: number) => {
	await new Promise((resolve) => setTimeout(resolve, 2000))
	return amount
})

export const decrementAsync = createAsyncThunk("counter/decrementAsync", async (amount: number) => {
	await new Promise((resolve) => setTimeout(resolve, 2000))
	return amount
})

export const { increment, decrement, incrementByValue } = counterSlice.actions
export default counterSlice.reducer
