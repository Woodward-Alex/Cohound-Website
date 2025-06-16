import { Menu } from "lucide-react";
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
                <Link href="#features" className="text-sm font-medium">
                  Features
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#map" className="text-sm font-medium">
                  Find Places
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#community" className="text-sm font-medium">
                  Community
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link href="#download" className="text-sm font-medium">
                  Download
                </Link>
              </SheetClose>
              <SheetClose asChild>
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
