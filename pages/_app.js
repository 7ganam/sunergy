import "../public/assets/css/animate.min.css";
import "../public/assets/css/tailwind-built.css";
import "swiper/css";

import React, { useEffect, useState } from "react";

import Head from "next/head";
import Preloader from "../components/elements/Preloader";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <>
      <Head>
        <title>Sunergy</title>
      </Head>

      {!loading ? <Component {...pageProps} /> : <Preloader />}
    </>
  );
}

export default MyApp;
