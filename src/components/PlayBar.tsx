import React from "react";
import { useAtom } from "jotai";
import { currentIdAtom } from "@/store/global";
export default function PlayBar() {
  const [currentId, setCurrentId] = useAtom(currentIdAtom);
  return (
    <div>
      <div></div>
      <audio
        src={`https://music.163.com/song/media/outer/url?id=${currentId}.mp3`}
      />
    </div>
  );
}
