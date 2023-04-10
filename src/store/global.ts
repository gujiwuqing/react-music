import { atom } from "jotai";
export const currentIdAtom = atom("1997691297");
export const playlist = atom(
  [] || JSON.parse(localStorage.getItem("playlist"))
);
