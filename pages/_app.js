import Head from "next/head";
import "tailwindcss/tailwind.css";
import "../styles.css";
import "@material-tailwind/react/tailwind.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
