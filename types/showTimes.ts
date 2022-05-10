import { DateProps } from "./date";

export interface ShowTimesProps {
  id: string;
  name: string;
  address: string;
  addressComplement: string;
  number: string;
  urlKey: string;
  neighborhood: string;
  properties: {
    hasBomboniere: boolean;
  };
  deliveryType: string[];
  siteURL: string;
  rooms: RoomProps[];
}

interface RoomProps {
  name: string;
  type: string[];
  sessions: SessionProps[];
}

interface SessionProps {
  id: string;
  price: 0;
  type: string[];
  types: SessionTypeProps[];
  date: DateProps;
  realDate: DateProps;
  time: string;
  defaultSector: string;
  midnightMessage: string;
  siteURL: string;
  hasSeatSelection: boolean;
}

interface SessionTypeProps {
  id: number;
  name: string;
  alias: string;
  display: boolean;
}
