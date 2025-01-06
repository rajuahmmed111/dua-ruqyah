// import { Settings, Type, Monitor, Languages } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Switch } from "@/components/ui/switch"

// export function SettingsSidebar() {
//   return (
//     <div className="w-80 border-l bg-gray-50/50">
//       <div className="p-4">
//         <h2 className="text-lg font-semibold mb-4">Settings</h2>
//         <div className="space-y-4">
//           <Button variant="ghost" className="w-full justify-start">
//             <Languages className="mr-2 h-4 w-4" />
//             Language Settings
//           </Button>
//           <Button variant="ghost" className="w-full justify-start">
//             <Settings className="mr-2 h-4 w-4" />
//             General Settings
//           </Button>
//           <Button variant="ghost" className="w-full justify-start">
//             <Type className="mr-2 h-4 w-4" />
//             Font Settings
//           </Button>
//           <Button variant="ghost" className="w-full justify-start text-green-600">
//             <Monitor className="mr-2 h-4 w-4" />
//             Appearance Settings
//           </Button>
//           <div className="flex items-center justify-between pt-4 border-t">
//             <label className="font-medium">Night Mode</label>
//             <Switch />
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

import { Languages, Settings2, Grid } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function SettingsPanel() {
  return (
    <div className="w-80 border-l bg-background p-4">
      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Settings</h2>

        <div className="space-y-2">
          <h3 className="text-sm font-medium">Language Settings</h3>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <Languages className="mr-2 h-4 w-4" />
                English
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuItem>English</DropdownMenuItem>
              <DropdownMenuItem>বাংলা</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start">
            <Settings2 className="mr-2 h-4 w-4" />
            General Settings
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Grid className="mr-2 h-4 w-4" />
            Font Settings
          </Button>
        </div>
      </div>
    </div>
  );
}
