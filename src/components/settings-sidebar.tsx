"use client";

import React, { useState } from "react";
import { Languages, Settings2, Grid, Check, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface SettingOption {
  id: string;
  icon: React.ElementType;
  title: string;
  content: React.ReactNode;
}

const settingOptions: SettingOption[] = [
  {
    id: "language",
    icon: Languages,
    title: "Language Settings",
    content: (
      <div className="flex gap-2 mt-4">
        <Button
          variant="default"
          className="bg-emerald-500 hover:bg-emerald-600"
        >
          English
        </Button>
        <Button variant="outline">বাংলা</Button>
      </div>
    ),
  },
  {
    id: "general",
    icon: Settings2,
    title: "General Settings",
    content: (
      <div className="space-y-3 mt-4">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-sm text-gray-600">Notifications</span>
          <Button variant="outline" size="sm">
            Configure
          </Button>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-sm text-gray-600">Time Zone</span>
          <Button variant="outline" size="sm">
            Set Time Zone
          </Button>
        </div>
      </div>
    ),
  },
  {
    id: "font",
    icon: Grid,
    title: "Font Settings",
    content: (
      <div className="space-y-3 mt-4">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-sm text-gray-600">Font Size</span>
          <select className="px-3 py-1 rounded border text-sm">
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-sm text-gray-600">Font Family</span>
          <select className="px-3 py-1 rounded border text-sm">
            <option>System Default</option>
            <option>Arial</option>
            <option>Roboto</option>
          </select>
        </div>
      </div>
    ),
  },
  {
    id: "appearance",
    icon: Grid,
    title: "Appearance Settings",
    content: (
      <div className="space-y-3 mt-4">
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-sm text-gray-600">Theme</span>
          <select className="px-3 py-1 rounded border text-sm">
            <option>Light</option>
            <option>Dark</option>
            <option>System</option>
          </select>
        </div>
        <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
          <span className="text-sm text-gray-600">Color Scheme</span>
          <Button variant="outline" size="sm">
            Customize
          </Button>
        </div>
      </div>
    ),
  },
];

export function SettingsPanel() {
  const [activeOption, setActiveOption] = useState<string>("language");

  return (
    <div className="w-[300px] mx-7 mt-6 bg-white rounded-2xl shadow-sm">
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-6 text-center">Settings</h2>
        <div className="space-y-2">
          {settingOptions.map((option) => {
            const Icon = option.icon;
            const isActive = activeOption === option.id;

            return (
              <div
                key={option.id}
                className="rounded-lg border bg-card text-card-foreground"
              >
                <button
                  onClick={() => setActiveOption(isActive ? "" : option.id)}
                  className={cn(
                    "w-full flex items-center gap-3 p-3 rounded-lg text-left transition-colors",
                    isActive ? "bg-emerald-50" : "hover:bg-gray-50"
                  )}
                >
                  <div
                    className={cn(
                      "p-2 rounded-lg",
                      isActive ? "bg-emerald-100" : "bg-gray-100"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-5 h-5",
                        isActive ? "text-emerald-500" : "text-gray-500"
                      )}
                    />
                  </div>
                  <span
                    className={cn(
                      "flex-1",
                      isActive
                        ? "text-emerald-500 font-medium"
                        : "text-gray-700"
                    )}
                  >
                    {option.title}
                  </span>
                  {isActive ? (
                    <div className="w-5 h-5 bg-emerald-500 rounded flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all",
                    isActive ? "max-h-96 px-3 pb-3" : "max-h-0"
                  )}
                >
                  {option.content}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
