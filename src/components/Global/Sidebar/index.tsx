import { ComponentProps } from "react";
import { Logo } from "../Logo";
import { Login } from "./Login";
import { Menu } from "./Menu";

type SidebarProps = ComponentProps<'div'>

export function Sidebar({ ...props }: SidebarProps) {
  return (
    <div {...props}>
      <div className="flex flex-col gap-16">
        <Logo />
        <Menu />
      </div>
      <Login />
    </div>
  );
}