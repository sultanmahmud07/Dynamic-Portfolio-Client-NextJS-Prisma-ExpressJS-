import { AppSidebar } from "@/components/app-sidebar";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="min-h-dvh flex gap-4">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <div className="flex items-center gap-2 md:pr-3">
              <span className="uppercase">Admin</span>
              <Avatar className="h-10 w-10 rounded-full border border-primary overflow-hidden">
                <AvatarImage src="https://github.com/evilrabbit.png"
                  alt="@evilrabbit" className="w-full" />
                <AvatarFallback>ER</AvatarFallback>
              </Avatar>
            </div>
          </header>
          <div className="bg-[#dedede81] min-h-screen p-5">
            {children}
          </div>
        </SidebarInset>
      </SidebarProvider>
    </main>
  );
}
