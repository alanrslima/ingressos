import { GiFilmProjector } from "react-icons/gi";
import { FiFilm } from "react-icons/fi";
import { BiNews } from "react-icons/bi";
import { IoTicketOutline } from "react-icons/io5";

export const HeaderHelpers = {
  getNavItems: () => {
    return [
      { label: "Filmes", icon: <FiFilm /> },
      { label: "Cinemas", icon: <GiFilmProjector /> },
      { label: "Notícias", icon: <BiNews /> },
      { label: "Fanshop", icon: <IoTicketOutline /> },
    ];
  },
  getStates: () => {
    // TODO: Include api call to list states
    return [
      { initials: "AC", name: "Acre" },
      { initials: "AL", name: "Alagoas" },
      { initials: "AP", name: "Amapá" },
      { initials: "AM", name: "Amazonas" },
      { initials: "BA", name: "Bahia" },
      { initials: "CE", name: "Ceara" },
      { initials: "DF", name: "Distrito" },
      { initials: "ES", name: "Espírito Santo" },
      { initials: "GO", name: "Goiás" },
      { initials: "MA", name: "Maranhão" },
      { initials: "MT", name: "Mato Grosso" },
      { initials: "MS", name: "Mato Grosso do Sul" },
      { initials: "MG", name: "Minas Gerais" },
      { initials: "PA", name: "Pará" },
      { initials: "PB", name: "Paraíba" },
      { initials: "PR", name: "Paraná" },
      { initials: "PE", name: "Pernambuco" },
      { initials: "PI", name: "Piauí" },
      { initials: "RJ", name: "Rio de Janeiro" },
      { initials: "RN", name: "Rio Grande do Norte" },
      { initials: "RS", name: "Rio Grande do Sul" },
      { initials: "RO", name: "Rondônia" },
      { initials: "RR", name: "Roraima" },
      { initials: "SC", name: "Santa Catarina" },
      { initials: "SP", name: "São Paulo" },
      { initials: "SE", name: "Sergipe" },
      { initials: "TO", name: "Tocantins" },
    ];
  },
  getCities: (state: string) => {
    // TODO: Include api call to list cities by state
    return [{ label: "City 1" }, { label: "City 2" }, { label: "City 3" }];
  },
};
