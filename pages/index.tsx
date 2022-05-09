import type { NextPage } from "next";
import Banner from "../components/Banner/Banner";
import BannersRow from "../components/BannersRow/BannersRow";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
// import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <Banner full />
      <BannersRow />
      <Footer />
    </div>
  );
};

export default Home;
