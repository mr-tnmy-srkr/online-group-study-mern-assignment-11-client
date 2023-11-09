import Banner from "../components/Banner";
import Features from "../components/Features";
import ReactFaq from "../components/ReactFaq";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div className="">
      <Helmet>
        <title>Study Buzz | Home</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Banner></Banner>

      <Features></Features>

      <ReactFaq></ReactFaq>
    </div>
  );
};

export default Home;
