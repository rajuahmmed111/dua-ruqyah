import { Header } from "@/components/header";
import { DuaContent } from "@/components/dua-content";
import { SettingsPanel } from "@/components/settings-sidebar";
import { VerticalNav } from "@/components/VerticalNav";
import { CategoriesSidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex mt-5">
      <div className="mx-7">
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
