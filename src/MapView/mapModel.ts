import { LatLngExpression } from "leaflet";

export interface Marker {
  pos: LatLngExpression;
  name: string;
  icon: string;
  status: Status;
  details: string;
}

export enum Status {
  LVL1 = "LVL1", //= "#BEDBAB",
  LVL2 = "LVL2", // = "#F8EC9E",
  LVL3 = "LVL3", // "#A096E0",
  LVL4 = "LVL4", // "#F7B9B7",
  LVL5 = "LVL5", //"red",
}
