"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export function Sidebar() {
  return (
    <div className="max-w-4xl border-r">
      <div className="m-5 rounded-xl bg-white">
        <h2 className="text-lg rounded-t-xl font-semibold text-white text-center py-3 ru mb-4 bg-[#1FA45B] ">
          Categories
        </h2>
        <div className="px-4">
          <div className="relative mb-4">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search by Categories" className="pl-8" />
          </div>
          <nav className="space-y-2">
            <div className="space-y-2">
              <Link
                href="#"
                className="flex items-center gap-3 rounded-lg px-3 py-2 bg-green-50 text-green-600"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white">
                  📖
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    Introduction to Dua
                  </span>
                  <span className="text-xs text-muted-foreground">
                    Subcategory: II
                  </span>
                </div>
                <span className="ml-auto text-xs text-muted-foreground">
                  15 Duas
                </span>
              </Link>
              <div className="ml-4 border-l-2 border-green-600 pl-6 space-y-2">
                <Link href="#" className="block text-sm hover:text-green-600">
                  What is Dua
                </Link>
                <Link href="#" className="block text-sm hover:text-green-600">
                  Conditions for Dua to be successful
                </Link>
                <Link href="#" className="block text-sm hover:text-green-600">
                  The Methode Of Dua
                </Link>
                <Link href="#" className="block text-sm hover:text-green-600">
                  Before Dua
                </Link>
                <Link href="#" className="block text-sm hover:text-green-600">
                  During Dua
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

// import {
//   Home,
//   Grid,
//   Lightbulb,
//   Bookmark,
//   Lock,
//   MessageCircle,
//   Book,
//   LucideIcon,
//   Search,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { ScrollArea } from "@/components/ui/scroll-area";

// export default function Sidebar() {
//   return (
//     <div className="w-80 border-r bg-background">
//       <div className="flex h-14 items-center border-b px-4">
//         <h1 className="text-xl font-semibold">Duas Page</h1>
//       </div>

//       <div className="p-4 border-b">
//         <h2 className="text-lg font-semibold text-primary mb-4">Categories</h2>
//         <div className="relative">
//           <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//           <Input placeholder="Search Categories" className="pl-10" />
//         </div>
//       </div>

//       <ScrollArea className="h-[calc(100vh-8rem)]">
//         <div className="p-4 space-y-2">
//           <CategoryItem icon={Home} label="Home" />
//           <CategoryItem icon={Grid} label="Categories" isActive />
//           <CategoryItem icon={Lightbulb} label="Learn" />
//           <CategoryItem icon={Bookmark} label="Bookmarks" />
//           <CategoryItem icon={Lock} label="Memorize" />
//           <CategoryItem icon={MessageCircle} label="Chat" />
//           <CategoryItem icon={Book} label="Books" />
//         </div>
//       </ScrollArea>
//     </div>
//   );
// }

// function CategoryItem({
//   icon: Icon,
//   label,
//   isActive,
// }: {
//   icon: LucideIcon;
//   label: string;
//   isActive?: boolean;
// }) {
//   return (
//     <Button
//       variant={isActive ? "secondary" : "ghost"}
//       className="w-full justify-start"
//     >
//       <Icon className="mr-2 h-4 w-4" />
//       {label}
//     </Button>
//   );
// }
