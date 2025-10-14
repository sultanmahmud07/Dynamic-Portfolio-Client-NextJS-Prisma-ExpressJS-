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
import logo from "@@/logo/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import {
  BarChart3, CopyPlus, PencilRuler, FolderOpenDot, Settings, UserCog
} from "lucide-react";
import NavLink from "./shared/Navbar/NavLink";
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const data = [
    {
      title: "Overview",
       items: [
        { title: "Analytics", url: "/dashboard", icon: BarChart3 },
        { title: "Create Blog", url: "/dashboard/create-blog", icon: CopyPlus },
        { title: "Manage Blog", url: "/dashboard/manage-blog", icon: PencilRuler },
        { title: "Add Project", url: "/dashboard/add-project", icon: CopyPlus },
        { title: "Manage Project", url: "/dashboard/manage-project", icon: FolderOpenDot },
      ]
    },
    {
      title: "Settings",
       items: [
        { title: "Profile", url: "/dashboard/profile", icon: UserCog },
        { title: "Account", url: "/dashboard/account", icon: Settings },
      ]
    },
  ]
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <Link href="/" className="w-full py-3">
          <Image
            src={logo}
            alt="logo"
            width={200}
            height={100}
            className="w-26"
          />
          {/* <span className="text-primary text-xs uppercase font-bold">Books Finder</span> */}
        </Link>
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((subItem) => (
                  <SidebarMenuItem key={subItem.title}>
                    <SidebarMenuButton asChild>
                      <NavLink className="flex items-center gap-2 uppercase py-5 rounded" href={subItem.url}>
                        {/* Show icon if exists */}
                        {subItem.icon && <subItem.icon color="#ff9330" />}
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
