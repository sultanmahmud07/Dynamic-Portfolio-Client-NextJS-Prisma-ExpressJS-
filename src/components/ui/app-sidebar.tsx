import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import logo from "../assets/images/logo/logo.png";
import { Link, NavLink } from "react-router";
import { getSidebarItems } from "@/utils/getSidebarItems";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { data: userData } = useUserInfoQuery(undefined);

  const data = {
    navMain: getSidebarItems(userData?.data?.role),
  };
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link  to="/">
              <img
                src={logo}
                alt="logo"
                width={200}
                height={100}
                className="w-16"
              />
              {/* <span className="text-primary text-xs uppercase font-bold">Books Finder</span> */}
            </Link>
      </SidebarHeader>
     <SidebarContent>
  {/* We create a SidebarGroup for each parent. */}
  {data.navMain.map((item) => (
    <SidebarGroup key={item.title}>
      <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {item.items.map((subItem) => (
            <SidebarMenuItem key={subItem.title}>
              <SidebarMenuButton asChild>
                <NavLink className="flex items-center gap-2 uppercase" to={subItem.url}>
                  {/* Show icon if exists */}
                  {subItem.icon && <subItem.icon />}
                  {subItem.title}
                </NavLink>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  ))}
</SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
