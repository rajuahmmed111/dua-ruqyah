"use client";

import React, { useState } from "react";
import {
  Home,
  Grid,
  Lightbulb,
  Bookmark,
  Lock,
  MessageCircle,
  Book,
  Heart,
  HandIcon as Hands,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  id: string;
  icon: React.ElementType;
  label: string;
  isTop?: boolean;
  isBottom?: boolean;
}

const navItems: NavItem[] = [
  {
    id: "app",
    icon: Hands,
    label: "App",
    isTop: true,
  },
  {
    id: "home",
    icon: Home,
    label: "Home",
  },
  {
    id: "categories",
    icon: Grid,
    label: "Categories",
  },
  {
    id: "learn",
    icon: Lightbulb,
    label: "Learn",
  },
  {
    id: "bookmarks",
    icon: Bookmark,
    label: "Bookmarks",
  },
  {
    id: "security",
    icon: Lock,
    label: "Security",
  },
  {
    id: "chat",
    icon: MessageCircle,
    label: "Chat",
  },
  {
    id: "books",
    icon: Book,
    label: "Books",
  },
  {
    id: "support",
    icon: Heart,
    label: "Support",
    isBottom: true,
  },
];

export function VerticalNav() {
  const [activeItem, setActiveItem] = useState<string>("home");

  return (
    <div className="fixed left-0 top-0 h-screen w-20 bg-white shadow-sm flex flex-col items-center py-4">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeItem === item.id;

        return (
          <button
            key={item.id}
            onClick={() => setActiveItem(item.id)}
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center mb-2 transition-all group relative",
              item.isTop && "mb-8",
              item.isBottom && "mt-auto",
              isActive
                ? item.isTop || item.isBottom
                  ? "bg-emerald-500 text-white"
                  : "bg-emerald-50 text-emerald-500"
                : "hover:bg-gray-100 text-gray-500"
            )}
          >
            <Icon
              className={cn(
                "w-5 h-5",
                !isActive && "group-hover:text-emerald-500"
              )}
            />

            {/* Tooltip */}
            <span className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap">
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
}
