import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { DuaContent } from "@/components/dua-content"
import SettingsPanel from "@/components/settings-sidebar"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <DuaContent />
        <SettingsPanel />
      </div>
    </div>
  )
}
