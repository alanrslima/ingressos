import { EventProps } from "./event";

export interface CarouselProps {
  id: string;
  name: string;
  carouselSlug: string;
  priority: number;
  type: string;
  hasLink: false;
  events: EventProps[];
}
