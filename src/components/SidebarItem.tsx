import React from "react";

interface SidebarItemProps {
  Icon: React.ComponentType<{ size: number }>;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ Icon, label }) => {
  return (
    <li className="flex items-center gap-5 p-2 text-sm cursor-pointer">
      <Icon size={20} /> {label}
    </li>
  );
};

export default SidebarItem;
