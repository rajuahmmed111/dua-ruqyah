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
    icon: "https://i.ibb.co.com/QD3FNTj/images.png",
    subcategoryCount: 3,
    duasCount: 5,
    subcategories: [
      "When starting ablution",
      "Upon completing the ablution",
      "Before taking a bath",
    ],
  },
  {
    id: 2,
    name: "Mosque",
    icon: "https://i.ibb.co.com/QD3FNTj/images.png",
    subcategoryCount: 5,
    duasCount: 13,
    subcategories: [
      "Upon entering the mosque",
      "Upon leaving the mosque",
      "After prayer in the mosque",
      "Seeking forgiveness in the mosque",
      "When sitting in the mosque",
    ],
  },
  {
    id: 3,
    name: "Salah",
    icon: "https://i.ibb.co.com/QD3FNTj/images.png",
    subcategoryCount: 4,
    duasCount: 8,
    subcategories: [
      "When starting the prayer",
      "During the bowing position",
      "In prostration",
      "After finishing the prayer",
    ],
  },
  {
    id: 4,
    name: "Witr & Other",
    icon: "https://i.ibb.co.com/QD3FNTj/images.png",
    subcategoryCount: 3,
    duasCount: 7,
    subcategories: [
      "Supplication during Witr",
      "For Tahajjud",
      "During Taraweeh prayers",
    ],
  },
  {
    id: 5,
    name: "Sickness",
    icon: "https://i.ibb.co.com/QD3FNTj/images.png",
    subcategoryCount: 3,
    duasCount: 6,
    subcategories: [
      "For recovery from illness",
      "When visiting the sick",
      "Supplication for healing",
    ],
  },
  {
    id: 6,
    name: "Travel",
    icon: "https://i.ibb.co.com/QD3FNTj/images.png",
    subcategoryCount: 4,
    duasCount: 9,
    subcategories: [
      "Before starting a journey",
      "Upon boarding a vehicle",
      "When arriving at a destination",
      "For safety during travel",
    ],
  },
  {
    id: 7,
    name: "Food & Drink",
    icon: "https://i.ibb.co.com/QD3FNTj/images.png",
    subcategoryCount: 4,
    duasCount: 10,
    subcategories: [
      "Before eating",
      "After eating",
      "When drinking water",
      "For gratitude after meals",
    ],
  },
  {
    id: 8,
    name: "Morning & Evening",
    icon: "https://i.ibb.co.com/QD3FNTj/images.png",
    subcategoryCount: 3,
    duasCount: 7,
    subcategories: [
      "Morning supplications",
      "Evening supplications",
      "Seeking blessings for the day",
    ],
  },
  {
    id: 9,
    name: "Forgiveness",
    icon: "https://i.ibb.co.com/QD3FNTj/images.png",
    subcategoryCount: 3,
    duasCount: 8,
    subcategories: [
      "For personal forgiveness",
      "For forgiveness of others",
      "Supplication after sins",
    ],
  },
  {
    id: 10,
    name: "Protection",
    icon: "https://i.ibb.co.com/QD3FNTj/images.png",
    subcategoryCount: 4,
    duasCount: 11,
    subcategories: [
      "From harm",
      "From evil eye",
      "From envy",
      "For family protection",
    ],
  },
  {
    id: 11,
    name: "Wealth & Provision",
    icon: "https://i.ibb.co.com/vdQ7hSX/download.jpg",
    subcategoryCount: 3,
    duasCount: 6,
    subcategories: [
      "For halal income",
      "For financial stability",
      "Gratitude for provisions",
    ],
  },
  {
    id: 12,
    name: "Marriage",
    icon: "https://i.ibb.co.com/vdQ7hSX/download.jpg",
    subcategoryCount: 3,
    duasCount: 7,
    subcategories: [
      "For a righteous spouse",
      "For a happy marriage",
      "Supplication during a wedding",
    ],
  },
  {
    id: 13,
    name: "Parents",
    icon: "https://i.ibb.co.com/vdQ7hSX/download.jpg",
    subcategoryCount: 3,
    duasCount: 6,
    subcategories: [
      "For parents' health",
      "For parents' forgiveness",
      "For gratitude to parents",
    ],
  },
  {
    id: 14,
    name: "Children",
    icon: "https://i.ibb.co.com/vdQ7hSX/download.jpg",
    subcategoryCount: 3,
    duasCount: 6,
    subcategories: [
      "For righteous children",
      "For protection of children",
      "For children's success",
    ],
  },
  {
    id: 15,
    name: "Death & Afterlife",
    icon: "https://i.ibb.co.com/vdQ7hSX/download.jpg",
    subcategoryCount: 4,
    duasCount: 10,
    subcategories: [
      "When someone passes away",
      "For forgiveness of the deceased",
      "For a good afterlife",
      "For ease in the grave",
    ],
  },
  {
    id: 16,
    name: "Gratitude",
    icon: "https://i.ibb.co.com/vdQ7hSX/download.jpg",
    subcategoryCount: 3,
    duasCount: 6,
    subcategories: [
      "For blessings received",
      "After achieving success",
      "For answered prayers",
    ],
  },
  {
    id: 17,
    name: "Knowledge & Wisdom",
    icon: "https://i.ibb.co.com/vdQ7hSX/download.jpg",
    subcategoryCount: 3,
    duasCount: 6,
    subcategories: [
      "For seeking knowledge",
      "For understanding Quran",
      "For wisdom in decisions",
    ],
  },
  {
    id: 18,
    name: "Repentance",
    icon: "https://i.ibb.co.com/vdQ7hSX/download.jpg",
    subcategoryCount: 3,
    duasCount: 8,
    subcategories: [
      "For seeking forgiveness",
      "For making amends",
      "After committing a mistake",
    ],
  },
  {
    id: 19,
    name: "Rain & Weather",
    icon: "https://i.ibb.co.com/vdQ7hSX/download.jpg",
    subcategoryCount: 3,
    duasCount: 6,
    subcategories: [
      "For rain",
      "When it starts raining",
      "For protection during storms",
    ],
  },
  {
    id: 20,
    name: "Hajj & Umrah",
    icon: "https://i.ibb.co.com/vdQ7hSX/download.jpg",
    subcategoryCount: 4,
    duasCount: 12,
    subcategories: [
      "Before starting Hajj",
      "During Tawaf",
      "At Arafat",
      "After completing Hajj",
    ],
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
