import { DateProps } from "./date";

export interface EventProps {
  id: string;
  title: string;
  originalTitle: string;
  movieIdUrl: string;
  ancineId: string;
  countryOrigin: string;
  priority: number;
  contentRating: number;
  duration: number;
  rating: number;
  synopsis: string;
  cast: string;
  director: string;
  distributor: string;
  inPreSale: boolean;
  isReexhibition: boolean;
  urlKey: string;
  isPlaying: boolean;
  countIsPlaying: number;
  premiereDate: DateProps;
  creationDate: string;
  city: string;
  siteURL: string;
  nationalSiteURL: string;
  images: ImageProps[];
  genres: string[];
  ratingDescriptors: string[];
  completeTags: string[];
  tags: string[];
  trailers: TraillerProps[];
  boxOfficeId: string;
  partnershipType: string;
  rottenTomatoe: RottenTomatoeProps;
}

interface ImageProps {
  url: string;
  type: string;
}

interface TraillerProps {
  type: string;
  url: string;
  embeddedUrl: string;
}

interface RottenTomatoeProps {
  id: string;
  criticsRating: string;
  criticsScore: string;
  audienceRating: string;
  audienceScore: string;
  originalUrl: string;
}
