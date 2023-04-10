import React from "react";

interface BaseTitleProps {
  title: string;
}
export default function BaseTitle({ title = "" }: BaseTitleProps) {
  return <div className="title">{title}</div>;
}
