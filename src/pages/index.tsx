/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import BannerPage from "../components/units/banner/banner";

export default function Home() {
  return (
    <>
      <Head>
        <title>JM's Portfolio</title>
      </Head>
      <BannerPage />
    </>
  );
}
