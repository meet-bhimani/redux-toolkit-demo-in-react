import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store/store"
import { decrement, decrementAsync, increment, incrementAsync, incrementByValue } from "../store/counter/counterSlice"

const Counter = () => {
	const count = useSelector((state: RootState) => state.counter.count)
	const dispatch = useDispatch<AppDispatch>()

	return (
		<div>
			<h2 className="text-2xl text-center">Count is {count}</h2>
			<div className="flex gap-5 mt-5">
				<button
					onClick={() => dispatch(increment())}
					className="bg-gray-300 text-black px-3 py-1 border-2 border-white hover:bg-gray-400 rounded-full">
					increment
				</button>
				<button
					onClick={() => dispatch(decrement())}
					className="bg-gray-300 text-black px-3 py-1 border-2 border-white hover:bg-gray-400 rounded-full">
					decrement
				</button>
				<button
					onClick={() => dispatch(incrementByValue(5))}
					className="bg-gray-300 text-black px-3 py-1 border-2 border-white hover:bg-gray-400 rounded-full">
					increment by 5
				</button>
				<button
					onClick={() => dispatch(incrementAsync(5))}
					className="bg-gray-300 text-black px-3 py-1 border-2 border-white hover:bg-gray-400 rounded-full">
					increment async by 5
				</button>
				<button
					onClick={() => dispatch(decrementAsync(5))}
					className="bg-gray-300 text-black px-3 py-1 border-2 border-white hover:bg-gray-400 rounded-full">
					decrement async by 5
				</button>
			</div>
		</div>
	)
}

export default Counter
