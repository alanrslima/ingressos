import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const topics = [
    {
      title: "Menu",
      links: [
        {
          label: "Filmes",
          href: "",
        },
        {
          label: "Cinemas",
          href: "",
        },
        {
          label: "Eventos",
          href: "",
        },
      ],
    },
    {
      title: "Institucional",
      links: [
        {
          label: "Quem somos",
          href: "",
        },
        {
          label: "Assesoria de Imprensa",
          href: "",
        },
        {
          label: "Bootstrap Ingresso.com",
          href: "",
        },
        {
          label: "Vale-Presente Corporativo",
          href: "",
        },
        {
          label: "Ingresso.com atende",
          href: "",
        },
        {
          label: "movieID.com",
          href: "",
        },
      ],
    },
    {
      title: "Políticas",
      links: [
        {
          label: "Privacidade e Segurança",
          href: "",
        },
        {
          label: "Meia-entrada",
          href: "",
        },
        {
          label: "Trocas e Cancelamentos",
          href: "",
        },
        {
          label: "Leis Estaduais e Municipais",
          href: "",
        },
        {
          label: "Termos de Uso",
          href: "",
        },
      ],
    },
    {
      title: "Dúvidas",
      links: [
        {
          label: "Atendimento",
          href: "",
        },
        {
          label: "Site ou e-mail falsos",
          href: "",
        },
        {
          label: "Procon-RJ",
          href: "",
        },
      ],
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerTop}>
        <div>
          <span>Baixe nosso APP</span>
        </div>
      </div>
      <div className={styles.topicsRow}>
        {topics.map((topic, index) => (
          <div key={index} className={styles.topic}>
            <span className={styles.topicTitle}>{topic.title}</span>
            {topic.links.map((link, i) => (
              <a key={i} href="">
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <p>
        Ingresso.com Ltds / CNPJ: 00.860.640/0001-71 Endereço: Rua da Quitanda,
        86 - 9º andar - RJ - 20091-005 <br />
        <a href="">Atendimento ao cliente</a> © 2019 - Copyright Ingresso.com -
        todos os direitos reservados
      </p>
    </footer>
  );
};

export default Footer;
