import { MisdemeanourKind } from "./misdemeanours.type";

export type Confession = {
    subject: string;
    reason: MisdemeanourKind | "just-talk" ;
    details: string;
}