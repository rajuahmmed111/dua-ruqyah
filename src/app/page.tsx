import { Header } from "@/components/header";
import { DuaContent } from "@/components/dua-content";
import { CategoriesSidebar } from "@/components/sidebar";
import { SettingsPanel } from "@/components/settings-sidebar";
import { VerticalNav } from "@/components/VerticalNav";

export default function Home() {
  return (
    <div className="flex">
      <div>
        <VerticalNav />
      </div>

      <div className="flex flex-col w-full">
        <Header />
        <div className="flex flex-1">
          <CategoriesSidebar />
          <DuaContent />
          <SettingsPanel />
        </div>
      </div>
    </div>
  );
}
