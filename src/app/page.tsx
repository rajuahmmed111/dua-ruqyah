import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { SettingsSidebar } from "@/components/settings-sidebar"
import { DuaContent } from "@/components/dua-content"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <DuaContent />
        <SettingsSidebar />
      </div>
    </div>
  )
}

