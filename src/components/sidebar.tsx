import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

interface Category {
  id: number;
  name: string;
  icon: string;
  subcategoryCount: number;
  duasCount: number;
  subcategories?: string[];
}

const categories: Category[] = [
  {
    id: 1,
    name: "Ablution & Bath",
    icon: "/placeholder.svg?height=40&width=40",
    subcategoryCount: 2,
    duasCount: 4,
    subcategories: ["When starting ablution", "Upon completing the ablution"],
  },
  {
    id: 2,
    name: "Mosque",
    icon: "/placeholder.svg?height=40&width=40",
    subcategoryCount: 5,
    duasCount: 13,
  },
  {
    id: 2,
    name: "Mosque",
    icon: "/placeholder.svg?height=40&width=40",
    subcategoryCount: 5,
    duasCount: 13,
  },
  {
    id: 2,
    name: "Mosque",
    icon: "/placeholder.svg?height=40&width=40",
    subcategoryCount: 5,
    duasCount: 13,
  },
  {
    id: 2,
    name: "Mosque",
    icon: "/placeholder.svg?height=40&width=40",
    subcategoryCount: 5,
    duasCount: 13,
  },
  {
    id: 2,
    name: "Mosque",
    icon: "/placeholder.svg?height=40&width=40",
    subcategoryCount: 5,
    duasCount: 13,
  },
  {
    id: 2,
    name: "Mosque",
    icon: "/placeholder.svg?height=40&width=40",
    subcategoryCount: 5,
    duasCount: 13,
  },
  {
    id: 3,
    name: "Salah",
    icon: "/placeholder.svg?height=40&width=40",
    subcategoryCount: 17,
    duasCount: 102,
  },
  {
    id: 4,
    name: "Witr & Other",
    icon: "/placeholder.svg?height=40&width=40",
    subcategoryCount: 6,
    duasCount: 33,
  },
  {
    id: 5,
    name: "Sickness",
    icon: "/placeholder.svg?height=40&width=40",
    subcategoryCount: 3,
    duasCount: 43,
  },
];

export function CategoriesSidebar() {
  return (
    <div className="w-[350px] m-5 rounded-xl overflow-hidden">
      <div className="bg-white">
        <div className="bg-[#1FA45B] p-4">
          <h2 className="text-white text-xl text-center">Categories</h2>
        </div>

        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search Categories"
              className="pl-9 bg-white border-gray-200"
            />
          </div>
        </div>

        <ScrollArea className="h-[600px]">
          <div className="p-4 space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="space-y-2">
                <div className="hover:bg-[#E8F0F5] rounded-lg p-4 flex items-center">
                  <Image
                    src={category.icon}
                    alt={category.name}
                    width={40}
                    height={40}
                    className="rounded-lg"
                  />
                  <div className="ml-3 flex-1">
                    <h3 className="font-medium text-gray-900">
                      {category.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      Subcategory: {category.subcategoryCount}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-gray-900">{category.duasCount}</span>
                    <p className="text-sm text-gray-500">Duas</p>
                  </div>
                </div>

                {category.subcategories && (
                  <div className="pl-4 ml-4 border-l-2 border-emerald-500 space-y-3">
                    {category.subcategories.map((subcategory, index) => (
                      <div
                        key={index}
                        className="text-sm text-gray-600 hover:text-emerald-500 cursor-pointer flex items-center"
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2" />
                        {subcategory}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
