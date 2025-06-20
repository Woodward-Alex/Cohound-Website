"use client";

import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useChatbot } from "@/components/chatbot-context";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Badge } from "@/components/ui/badge";

export function MobileNav() {
  const { setIsOpen } = useChatbot();
  const router = useRouter();
  const [sheetOpen, setSheetOpen] = useState(false);

  const goToSection = (section: string) => {
    // Close the sheet first
    setSheetOpen(false);
    // Small delay to ensure sheet closes before navigation
    setTimeout(() => {
      router.push(`/#${section}`);
    }, 100);
  };

  const handleChatbotOpen = () => {
    setSheetOpen(false);
    setTimeout(() => {
      setIsOpen(true);
    }, 100);
  };

  return (
    <div className="md:hidden">
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full max-w-xs sm:max-w-sm">
          <SheetTitle>
            <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
          </SheetTitle>

          <div className="grid gap-6 py-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold"
              onClick={() => setSheetOpen(false)}
            >
              <Logo iconOnly height={24} width={24} />
              <span>Cohound</span>
            </Link>

            <div className="grid gap-4">
              <button
                onClick={() => goToSection("features")}
                className="text-sm font-medium text-left hover:text-primary transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => goToSection("map")}
                className="text-sm font-medium text-left hover:text-primary transition-colors"
              >
                Find Places
              </button>
              <button
                onClick={() => goToSection("community")}
                className="text-sm font-medium text-left hover:text-primary transition-colors"
              >
                Community
              </button>
              <button
                onClick={() => goToSection("download")}
                className="text-sm font-medium text-left hover:text-primary transition-colors"
              >
                Download
              </button>
              <button
                onClick={handleChatbotOpen}
                className="text-sm font-medium flex items-center gap-1.5 w-full text-left hover:text-primary transition-colors"
              >
                Cohound Chatbot
                <Badge
                  variant="outline"
                  className="bg-primary/20 text-primary px-1.5 py-0.5 text-xs"
                >
                  New
                </Badge>
              </button>
            </div>

            <div className="grid gap-2">
              <Button variant="outline" asChild className="w-full">
                <Link href="/login" onClick={() => setSheetOpen(false)}>
                  Log In
                </Link>
              </Button>
              <Button asChild className="w-full">
                <Link href="/signup" onClick={() => setSheetOpen(false)}>
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}