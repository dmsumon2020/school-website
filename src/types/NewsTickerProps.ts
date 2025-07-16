// Define the props interface for the NewsTicker component
export interface NewsTickerProps {
  newsItems: string[]; // An array of strings, where each string is a news headline
  speed?: "slow" | "normal" | "fast"; // Optional speed for the ticker (default: normal)
}

export type Speed = "slow" | "normal" | "fast";
