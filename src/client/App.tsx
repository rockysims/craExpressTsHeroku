import React, { useState, useEffect } from "react";
import { sum } from "../core/math";
import logo from "./logo.svg";
import "./App.css";

function App() {
	const [serverResult, setServerResult] = useState<number | null>(null);
	
	useEffect(() => {
		(async () => {
			const result = await fetch("/ping");
			try {
				const newServerResult = await result.json();
				setServerResult(newServerResult);
			} catch (e) {
				setServerResult(-1);
			}
		})();
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Client result {sum(1, 3)}</p>
				<p>Server result {JSON.stringify(serverResult)}</p>
			</header>
		</div>
	);
}

export default App;
