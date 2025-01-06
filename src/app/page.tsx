// import { Header } from "@/components/header"
// import { Sidebar } from "@/components/sidebar"
// import { SettingsSidebar } from "@/components/settings-sidebar"
// import { DuaContent } from "@/components/dua-content"

// export default function Home() {
//   return (
//     <div className="flex flex-col w-full">
//       <Header />
//       <div className="flex flex-1">
//         <Sidebar />
//         <DuaContent />
//         <SettingsSidebar />
//       </div>
//     </div>
//   )
// }

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import DuaContent from "@/components/dua-content";
import SettingsPanel from "@/components/settings-sidebar";
import { Sidebar } from "@/components/sidebar";


export default function DuasPage() {
  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <div className="container mx-auto py-4">
          {/* Search Header */}
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="Search by Dua Name" className="pl-10" />
          </div>

          {/* Content */}
          <DuaContent />
        </div>
      </main>

      {/* Right Settings Panel */}
      <SettingsPanel />
    </div>
  );
}
