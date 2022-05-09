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
      <div className={styles.topicsRow}>
        {topics.map((topic) => (
          <div key={topic.title} className={styles.topic}>
            <span>{topic.title}</span>
            {topic.links.map((link) => (
              <a key={link.label} href="">
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <span>
        Ingresso.com Ltds / CNPJ: 00.860.640/0001-71 Endereço: Rua da Quitanda,
        86 - 9º andar - RJ - 20091-005
      </span>
    </footer>
  );
};

export default Footer;
