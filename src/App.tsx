import "./App.css"
import Counter from "./components/Counter"

const App = () => {
	return (
		<div className="w-svw min-h-svh bg-zinc-800 text-white flex items-center justify-center flex-col">
			<h1 className="text-3xl mb-10">Counter Application</h1>
			<Counter />
		</div>
	)
}

export default App
