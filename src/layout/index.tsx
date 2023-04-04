import React, { ReactElement } from "react";
import { NavLink } from "react-router-dom";
interface LayoutProps {
  children: ReactElement;
}

export default function Layout(props: LayoutProps) {
  return (
    <div className="w-[1200px] m-auto">
      <nav className="flex items-center h-16">
        <ul className="flex items-center">
          <li className="mr-6">
            <NavLink to="/">发现音乐</NavLink>
          </li>
          <li className="mr-6">
            <NavLink to="/rank">排行榜</NavLink>
          </li>
          <li className="mr-6">
            <NavLink to="/playlist">歌单</NavLink>
          </li>
        </ul>
      </nav>
      <div>{props?.children}</div>
    </div>
  );
}
