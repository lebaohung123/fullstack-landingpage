import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from './scenes/home/Home'
import Checkout from "./scenes/checkout/Checkout";
import ItemDetails from "./scenes/itemDetails/itemDetails";
import Confirmation from "./scenes/checkout/Confirmation";
import Navigation from "./scenes/global/Navigation";
const ScrolltoTop = () => {
	const { pathname } = useLocation();
	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);
	return null;
};

function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Navigation/>
				<ScrolltoTop />
				<Routes>
					<Route path="/" element={<Home />}/>
					<Route path="/item/:itemId" element={<ItemDetails />}/>
					<Route path="/checkout" element={<Checkout />}/>
					<Route path="/checkout/success" element={<Confirmation />}/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
