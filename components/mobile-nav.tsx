import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Badge } from "@/components/ui/badge";

export function MobileNav() {
  return (
    <div className="flex w-full items-center justify-between md:hidden">
      <Link href="/" className="flex items-center space-x-2">
        <Logo iconOnly height={32} width={32} />
        <span className="font-bold text-lg">Cohound</span>
      </Link>
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-full max-w-xs sm:max-w-sm">
            {/* ✅ Accessibility fix: Add visually hidden title */}
            <SheetTitle>
              <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
            </SheetTitle>

            <div className="grid gap-6 py-6">
              <Link
                href="/"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Logo iconOnly height={24} width={24} />
                <span>Cohound</span>
              </Link>
              <div className="grid gap-4">
                <Link href="#features" className="text-sm font-medium">
                  Features
                </Link>
                <Link href="#map" className="text-sm font-medium">
                  Find Places
                </Link>
                <Link href="#community" className="text-sm font-medium">
                  Community
                </Link>
                <Link href="#download" className="text-sm font-medium">
                  Download
                </Link>
                <Link
                  href="#chatbot"
                  className="text-sm font-medium flex items-center gap-1.5"
                >
                  Cohound Chatbot{" "}
                  <Badge
                    variant="outline"
                    className="bg-primary/20 text-primary px-1.5 py-0.5 text-xs"
                  >
                    New
                  </Badge>
                </Link>
              </div>
              <div className="grid gap-2">
                <Button variant="outline" asChild className="w-full">
                  <Link href="/login">Log In</Link>
                </Button>
                <Button asChild className="w-full">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
}
