import { Header } from "@/components/header"
import SettingsPanel from "@/components/settings-sidebar"
import { DuaContent } from "@/components/dua-content"
import { CategoriesSidebar } from "@/components/sidebar"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Header />
      <div className="flex flex-1">
        <CategoriesSidebar />
        <DuaContent />
        <SettingsPanel />
      </div>
    </div>
  )
}
