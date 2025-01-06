"use client";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { useState } from "react";

interface Subcategory {
  id: number;
  title: string;
  content: {
    description: string;
    reference?: string;
    arabic?: string;
    transliteration?: string;
    translation?: string;
  };
}

interface Category {
  id: number;
  name: string;
  icon: string;
  subcategoryCount: number;
  duasCount: number;
  subcategories: Subcategory[]; // Make sure this is an array of Subcategory objects
}

const categories: Category[] = [
  {
    id: 1,
    name: "Ablution & Bath",
    icon: "https://i.ibb.co/QD3FNTj/images.png",
    subcategoryCount: 3,
    duasCount: 5,
    subcategories: [
      {
        id: 1,
        title: "The servant is dependent on his Lord #1",
        content: {
          description:
            "All human beings depend on Allah for their welfare and prevention of evil in various matters of their religion and world. Allah says (interpretation of the meaning): O mankind, you are those in need of Allah, while Allah is the Free of need, the Praiseworthy.",
          reference: "Surah Al-Fatir 35:15",
        },
      },
      {
        id: 2,
        title: "Conditions for Dua to be successful",
        content: {
          description:
            "Prophet (ﷺ) used to say after every compulsory prayer. The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah.",
          arabic:
            "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ ٱلْمُلْكُ وَلَهُ ٱلْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
          transliteration:
            "Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir",
          translation:
            "There is none worthy of worship except Allah alone with no partner or associate. His is the Dominion and to Him be all praise, and He is able to do all things.",
          reference: "Bukhari: 844",
        },
      },
      {
        id: 3,
        title: "Conditions for Dua to be successful",
        content: {
          description:
            "Prophet (ﷺ) used to say after every compulsory prayer. The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah.",
          arabic:
            "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ ٱلْمُلْكُ وَلَهُ ٱلْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
          transliteration:
            "Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir",
          translation:
            "There is none worthy of worship except Allah alone with no partner or associate. His is the Dominion and to Him be all praise, and He is able to do all things.",
          reference: "Bukhari: 844",
        },
      },
      {
        id: 4,
        title: "Conditions for Dua to be successful",
        content: {
          description:
            "Prophet (ﷺ) used to say after every compulsory prayer. The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah.",
          arabic:
            "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ ٱلْمُلْكُ وَلَهُ ٱلْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
          transliteration:
            "Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir",
          translation:
            "There is none worthy of worship except Allah alone with no partner or associate. His is the Dominion and to Him be all praise, and He is able to do all things.",
          reference: "Bukhari: 844",
        },
      },
    ],
  },
  {
    id: 2,
    name: "Prayer & Worship",
    icon: "https://i.ibb.co/QD3FNTj/images2.png",
    subcategoryCount: 4,
    duasCount: 7,
    subcategories: [
      {
        id: 1,
        title: "Conditions for Dua to be successful",
        content: {
          description:
            "Prophet (ﷺ) used to say after every compulsory prayer. The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah.",
          arabic:
            "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ ٱلْمُلْكُ وَلَهُ ٱلْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
          transliteration:
            "Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir",
          translation:
            "There is none worthy of worship except Allah alone with no partner or associate. His is the Dominion and to Him be all praise, and He is able to do all things.",
          reference: "Bukhari: 844",
        },
      },
      {
        id: 2,
        title: "Conditions for Dua to be successful",
        content: {
          description:
            "Prophet (ﷺ) used to say after every compulsory prayer. The servant will ask his Lord for all of his religiously and worldly needs, because the treasure of all things is in the hands of Allah.",
          arabic:
            "لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ ٱلْمُلْكُ وَلَهُ ٱلْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ",
          transliteration:
            "Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa lahul-hamdu wa huwa 'alaa kulli shay'in qadir",
          translation:
            "There is none worthy of worship except Allah alone with no partner or associate. His is the Dominion and to Him be all praise, and He is able to do all things.",
          reference: "Bukhari: 844",
        },
      },
    ],
  },
  {
    id: 3,
    name: "Fasting & Ramadan",
    icon: "https://i.ibb.co/QD3FNTj/images.png",
    subcategoryCount: 2,
    duasCount: 6,
    subcategories: [
      {
        id: 1,
        title: "Dua for breaking fast",
        content: {
          description:
            "Prophet (ﷺ) used to recite a specific dua while breaking his fast during Ramadan.",
          arabic: "اللَّهُمَّ إِنِّي لَكَ صُمْتُ وَبِكَ آمَنْتُ",
          reference: "Tirmidhi: 3456",
        },
      },
    ],
  },
  {
    id: 4,
    name: "Charity & Generosity",
    icon: "https://i.ibb.co/QD3FNTj/images4.png",
    subcategoryCount: 3,
    duasCount: 4,
    subcategories: [
      {
        id: 1,
        title: "Rewards for charity",
        content: {
          description:
            "The Prophet (ﷺ) said: Charity does not decrease wealth.",
          reference: "Muslim: 2588",
        },
      },
    ],
  },
  {
    id: 5,
    name: "Family Relations",
    icon: "https://i.ibb.co/QD3FNTj/images5.png",
    subcategoryCount: 5,
    duasCount: 9,
    subcategories: [
      {
        id: 1,
        title: "Dua for parents",
        content: {
          description:
            "A dua seeking Allah's mercy for parents as they raised us in childhood.",
          arabic: "رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
          reference: "Surah Al-Isra 17:24",
        },
      },
    ],
  },
  {
    id: 6,
    name: "Wealth & Livelihood",
    icon: "https://i.ibb.co/QD3FNTj/images6.png",
    subcategoryCount: 4,
    duasCount: 8,
    subcategories: [
      {
        id: 1,
        title: "Dua for sustenance",
        content: {
          description: "O Allah, bless me with lawful and abundant sustenance.",
          reference: "Tirmidhi: 398",
        },
      },
    ],
  },
  {
    id: 7,
    name: "Health & Healing",
    icon: "https://i.ibb.co/QD3FNTj/images7.png",
    subcategoryCount: 3,
    duasCount: 5,
    subcategories: [
      {
        id: 1,
        title: "Dua for the sick",
        content: {
          description: "Prophet (ﷺ) taught a dua for healing and protection.",
          arabic: "أَذْهِبِ البَاسَ رَبَّ النَّاسِ اشْفِ أَنْتَ الشَّافِي",
          reference: "Bukhari: 574",
        },
      },
    ],
  },
  {
    id: 8,
    name: "Travel & Safety",
    icon: "https://i.ibb.co/QD3FNTj/images8.png",
    subcategoryCount: 2,
    duasCount: 3,
    subcategories: [
      {
        id: 1,
        title: "Dua for travel",
        content: {
          description: "Prophet (ﷺ) said a specific dua for safe travels.",
          arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا",
          reference: "Tirmidhi: 4598",
        },
      },
      {
        id: 2,
        title: "Dua for travel",
        content: {
          description: "Prophet (ﷺ) said a specific dua for safe travels.",
          arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا",
          reference: "Tirmidhi: 4598",
        },
      },
      {
        id: 3,
        title: "Dua for travel",
        content: {
          description: "Prophet (ﷺ) said a specific dua for safe travels.",
          arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا",
          reference: "Tirmidhi: 4598",
        },
      },
    ],
  },
  {
    id: 9,
    name: "Travel & Safety",
    icon: "https://i.ibb.co/QD3FNTj/images8.png",
    subcategoryCount: 2,
    duasCount: 3,
    subcategories: [
      {
        id: 1,
        title: "Dua for travel",
        content: {
          description: "Prophet (ﷺ) said a specific dua for safe travels.",
          arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا",
          reference: "Tirmidhi: 4598",
        },
      },
      {
        id: 2,
        title: "Dua for travel",
        content: {
          description: "Prophet (ﷺ) said a specific dua for safe travels.",
          arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا",
          reference: "Tirmidhi: 4598",
        },
      },
      {
        id: 3,
        title: "Dua for travel",
        content: {
          description: "Prophet (ﷺ) said a specific dua for safe travels.",
          arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا",
          reference: "Tirmidhi: 4598",
        },
      },
    ],
  },
  {
    id: 10,
    name: "Travel & Safety",
    icon: "https://i.ibb.co/QD3FNTj/images8.png",
    subcategoryCount: 2,
    duasCount: 3,
    subcategories: [
      {
        id: 1,
        title: "Dua for travel",
        content: {
          description: "Prophet (ﷺ) said a specific dua for safe travels.",
          arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا",
          reference: "Tirmidhi: 4598",
        },
      },
      {
        id: 2,
        title: "Dua for travel",
        content: {
          description: "Prophet (ﷺ) said a specific dua for safe travels.",
          arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا",
          reference: "Tirmidhi: 4598",
        },
      },
      {
        id: 3,
        title: "Dua for travel",
        content: {
          description: "Prophet (ﷺ) said a specific dua for safe travels.",
          arabic: "سُبْحَانَ الَّذِي سَخَّرَ لَنَا هَذَا",
          reference: "Tirmidhi: 4598",
        },
      },
    ],
  },
];


export function CategoriesSidebar() {
  const [expandedCategoryId, setExpandedCategoryId] = useState<number | null>(
    null
  );

  // toggle sections
  const toggleCategory = (id: number) => {
    setExpandedCategoryId((prevId) => (prevId === id ? null : id));
  };

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
                <div
                  onClick={() => toggleCategory(category.id)}
                  className="hover:bg-[#E8F0F5] rounded-lg p-4 flex items-center cursor-pointer"
                >
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

                {/* Show subcategories only if this category is expanded */}
                {expandedCategoryId === category.id && (
                  <div className="pl-4 ml-4 border-l-2 border-emerald-500 space-y-3">
                    {category.subcategories.map((subcategory) => (
                      <div
                        key={subcategory.id}
                        className="text-sm text-gray-600 hover:text-emerald-500 cursor-pointer flex items-center"
                      >
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2" />
                        {subcategory.title}
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
