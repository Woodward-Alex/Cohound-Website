"use client";

import { Menu } from "lucide-react";
import { useRouter } from "next/navigation";
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

  const goToSection = (section: string) => {
    router.push(`/#${section}`);
  };

  return (
    <div className="md:hidden">
      <Sheet>
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
            <SheetClose asChild>
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Logo iconOnly height={24} width={24} />
                <span>Cohound</span>
              </Link>
            </SheetClose>

            <div className="grid gap-4">
              <SheetClose asChild>
                <button
                  onClick={() => goToSection("features")}
                  className="text-sm font-medium text-left"
                >
                  Features
                </button>
              </SheetClose>
              <SheetClose asChild>
                <button
                  onClick={() => goToSection("map")}
                  className="text-sm font-medium text-left"
                >
                  Find Places
                </button>
              </SheetClose>
              <SheetClose asChild>
                <button
                  onClick={() => goToSection("community")}
                  className="text-sm font-medium text-left"
                >
                  Community
                </button>
              </SheetClose>
              <SheetClose asChild>
                <button
                  onClick={() => goToSection("download")}
                  className="text-sm font-medium text-left"
                >
                  Download
                </button>
              </SheetClose>
              <SheetClose asChild>
                <button
                  onClick={() => setIsOpen(true)}
                  className="text-sm font-medium flex items-center gap-1.5 w-full text-left"
                >
                  Cohound Chatbot
                  <Badge
                    variant="outline"
                    className="bg-primary/20 text-primary px-1.5 py-0.5 text-xs"
                  >
                    New
                  </Badge>
                </button>
              </SheetClose>
            </div>

            <div className="grid gap-2">
              <SheetClose asChild>
                <Button variant="outline" asChild className="w-full">
                  <Link href="/login">Log In</Link>
                </Button>
              </SheetClose>
              <SheetClose asChild>
                <Button asChild className="w-full">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </SheetClose>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
