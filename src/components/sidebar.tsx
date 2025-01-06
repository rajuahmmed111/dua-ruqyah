"use client";

import { Search } from "lucide-react";
import Link from "next/link";
import { Input } from "@/components/ui/input";

export function Sidebar() {
  return (
    <div className="w-80 border-r bg-white">
      <div className="p-4">
        <h2 className="text-lg font-semibold text-white text-center py-3 ru mb-4 bg-[#1FA45B] ">
          Categories
        </h2>
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
                <span className="text-sm font-medium">Introduction to Dua</span>
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
  );
}
