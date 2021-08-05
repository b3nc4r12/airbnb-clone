import "tailwindcss/tailwind.css"
import "../styles/globals.css"
import Router from "next/router"

import ProgressBar from "@badrap/bar-of-progress"

const progress = new ProgressBar({
  size: 4,
  color: "#f35953",
  className: "z-50",
  delay: 100
})

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

const MyApp = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default MyApp
