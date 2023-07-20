import "globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<header>共享導航欄</header>
			<Component {...pageProps} />
			<footer>共享頁腳</footer>
		</div>
	);
}

export default MyApp;
