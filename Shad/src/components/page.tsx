import { AppSidebar } from "./app-sidebar"
import { 
    Breadcrumb,
     BreadcrumbItem, 
     BreadcrumbLink,
     BreadcrumbList,
     BreadcrumbPage,
     BreadcrumbSeparator,
     } from "./ui/breadcrumb"
import { Separator } from "./ui/separator"
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
  } from "@/components/ui/sidebar"
  
const page = () => {
  return (
    <div className="">
      <SidebarProvider >
        <AppSidebar />
        <SidebarInset> 
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
                <div className="flex items-center gap-2 px-4">
                 <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4"/>
                    <Breadcrumb >
                     <BreadcrumbList>
                      <BreadcrumbItem className="hidden md:block">
                      <BreadcrumbLink href="#">
                      Building My Application
                      </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator className="hidden md:block" />
                      <BreadcrumbItem >
                      <BreadcrumbPage className="text-green-500"> Data Fetching...</BreadcrumbPage>
                      </BreadcrumbItem>
                     </BreadcrumbList>
                    </Breadcrumb>
                    <Separator orientation="vertical" />
                    <h2>Welcome</h2>
                </div>
            </header>
            <div className="flex flex-1 flex-col gap-4 p-4 pt-0 bg-gray-800">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3 pt-5 ">
            <div className="aspect-video rounded-xl bg-muted/100" > First Box </div>
            <div className="aspect-video rounded-xl bg-muted/80" />
            <div className="aspect-video rounded-xl bg-yellow-400" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
        </SidebarInset>
      </SidebarProvider>
      <div>
        <h3>Welcome to this page</h3>
      </div>
    </div>
  )
}

export default page
