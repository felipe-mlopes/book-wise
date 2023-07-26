import { Logo } from "../Logo";
import { Login } from "./Login";
import { Menu } from "./Menu";


export function Sidebar() {
  return (
    <aside className="row-span-3 flex flex-col items-center justify-between pt-10 pb-6 rounded-xl h-screen bg-gray700">
      <div className="flex flex-col gap-16">
        <Logo w={24} h={24} size="1.25rem" />
        <Menu />
      </div>
      <Login />
    </aside>
  );
}