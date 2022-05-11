import type { GetStaticProps, NextPage } from "next";
import Carousel from "../components/Carousel/Carousel";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import styles from "../styles/Home.module.css";
import { CarouselProps } from "../types/carousel";

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
      {carousel?.map((item) => (
        <Carousel key={item.id} {...item} />
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

  return {
    props: { carousel: data, date: new Date().toISOString() },
    revalidate: 60 * 60 * 4,
  };
};
