import { Bookmark, Share2, Copy, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DuaContent() {
  return (
    <div className="flex-1 overflow-auto">
      <div className="container py-6">
        <div className="mb-6">
          <p className="text-sm text-muted-foreground">
            Section:{" "}
            <span className="text-foreground">
              The servant is dependent on his Lord
            </span>
          </p>
        </div>

        <div className="space-y-6">
          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                1
              </div>
              <h2 className="text-lg font-semibold text-green-600">
                The servant is dependent on his Lord #1
              </h2>
            </div>

            <p className="mb-4 text-muted-foreground">
              All human beings depend on Allah for their welfare and prevention
              of evil in various matters of their religion and world. Allah says
              (interpretation of the meaning): O mankind, you are those in need
              of Allah, while Allah is the Free of need, the Praiseworthy.
            </p>

            <div className="mb-4">
              <p className="text-sm font-medium text-muted-foreground">
                Reference:
              </p>
              <p>Surah Al-Fatir 35:15</p>
            </div>

            <div className="flex items-center justify-end gap-2">
              <Button variant="ghost" size="icon">
                <Copy className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Bookmark className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <HelpCircle className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Share2 className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="rounded-lg border bg-card p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600">
                2
              </div>
              <h2 className="text-lg font-semibold text-green-600">
                Conditions for Dua to be successful
              </h2>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground">
                Prophet (ﷺ) used to say after every compulsory prayer. The
                servant will ask his Lord for all of his religiously and worldly
                needs, because the treasure of all things is in the hands of
                Allah.
              </p>

              <div className="rounded-lg bg-gray-50 p-4 text-center" dir="rtl">
                <p className="text-2xl leading-relaxed">
                  لَا إِلَٰهَ إِلَّا ٱللَّٰهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ
                  ٱلْمُلْكُ وَلَهُ ٱلْحَمْدُ وَهُوَ عَلَىٰ كُلِّ شَيْءٍ قَدِيرٌ
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-medium">Transliteration:</p>
                <p className="text-muted-foreground italic">
                  Laa ilaaha illallahu wahdahu laa sharika lahu, lahul-mulku wa
                  lahul-hamdu wa huwa &apos;alaa kulli shay&apos;in qadir
                </p>
              </div>

              <div className="space-y-2">
                <p className="font-medium">Translation:</p>
                <p className="text-muted-foreground">
                  There is none worthy of worship except Allah alone with no
                  partner or associate. His is the Dominion and to Him be all
                  praise, and He is able to do all things.
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Reference:
                </p>
                <p>Bukhari: 844</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
