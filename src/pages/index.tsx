import React, { useEffect, useState } from "react";
import Banner from "../componets/section/home/banner";
import PopulalDeals from "../componets/section/home/populaldeals";
import Flashdeal from "../componets/section/home/flashdeal";
import Feature from "../componets/section/home/feature";
import Brand from "../componets/section/home/popularbrand";
import Subscription from "../componets/section/home/subscription";
import Feedback from "../componets/section/home/feedback";
import homepageAPI from "../api/homepageApi";
import Head from "next/head";

const Home = (props: any) => {
  const [homepagedata, setHomePageData] = useState<any>();

  useEffect(() => {
    setHomePageData(props);
  }, []);

  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Banner />
      <PopulalDeals />
      <Flashdeal flasedeal={homepagedata?.bestSelling} />
      <Feature similar={""} title={"Feature"} />
      <Brand brands={homepagedata?.brands} />
      <Feedback />
      <Subscription />
    </div>
  );
};
export async function getServerSideProps(context: any) {
  const data = await homepageAPI();
  return {
    props: data,
  };
}

export default Home;
