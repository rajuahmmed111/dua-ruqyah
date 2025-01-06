import { Search } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function Header() {
  return (
    <header className="flex h-14 items-center gap-4">
      <div className="flex items-center gap-2">
        <span className="text-[26px] font-semibold ml-7">Dua Page</span>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <div className="relative w-96">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search by Dua Name" className="pl-8" />
        </div>
        <Avatar>
          <AvatarImage src="/placeholder.svg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}

