import type { GetStaticProps, NextPage } from "next";
import Banner from "../components/Banner/Banner";
import BannersRow from "../components/BannersRow/BannersRow";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";
import { CarouselProps } from "../types/carousel";
import { EventProps } from "../types/event";

interface HomeProps {
  carousel: CarouselProps[];
}
const Home: NextPage<HomeProps> = ({ carousel }) => {
  if (!carousel?.length) {
    return <h1>Carregando...</h1>;
  }

  return (
    <div className={styles.page}>
      <Header />
      <Banner full />
      {carousel?.map((item) => (
        <BannersRow key={item.id} title={item.name} events={item.events} />
      ))}
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  // const uri = 'https://api-content.ingresso.com/v0/templates/highlights/1/partnership/home'
  const uri =
    "https://api-content.ingresso.com/v0//carousel/1/partnership/home";
  const response = await fetch(uri);
  const data = await response.json();
  // const events = data.map((item: any) => item.event);

  return {
    props: { carousel: data, date: new Date().toISOString() },
    revalidate: 60 * 60 * 4,
  };
};
