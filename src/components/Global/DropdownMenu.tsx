'use client'

interface MenuIconProps extends ComponentProps<'div'> {
  children: ReactNode
}

import { ComponentProps, ReactNode, useState } from "react";
import { MenuIcon } from "../Icons/MenuIcon";
import { MenuModal } from "./Sidebar/MenuModal";

export function DropdownMenu({ children, ...props }: MenuIconProps) {
  const [isMenuModalOpen, setIsMenuModalOpen] = useState(false)

  function handleOpenMenu() {
    setIsMenuModalOpen(!isMenuModalOpen)
  }

  return (
    <div role="button" aria-label="menu-button" onClick={handleOpenMenu} {...props}>
      <MenuIcon />
      <MenuModal isOpen={isMenuModalOpen} onClose={handleOpenMenu}>
        {children}
      </MenuModal>
    </div>
  )
}