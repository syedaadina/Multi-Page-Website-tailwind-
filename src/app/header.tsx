import Link from "next/link";
import { SquareMenu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"


export default function Header() {
 
  return (
    <header className="sticky top-0 z-10 flex justify-between items-center font-[54px] bg-pink-950 bg-opacity-80 max-w-screen-2xl mx-auto">
      <div>
        <h2 className="font-serif italic font-extrabold text-[30px] ml-8 mt-2 text-white md:text-[45px]">
          {" "}
        My Beauty Salon</h2>
      </div>
      
        <ul className="hidden flex gap-x-4 mr-10 mt-4 font-serif font-extrabold text-[18px] text-pink-50 md:flex">
          <li className="hover:text-yellow-400 "><Link href="/"><button>Home</button></Link></li>
          <li className="hover:text-yellow-400"><Link href="/about"><button>About</button></Link></li>
          <li className="hover:text-yellow-400"><Link href="/services"><button>Services</button></Link></li>
          <li className="hover:text-yellow-400"><Link href="/reviews"><button>Reviews</button></Link></li>
        </ul>
      
      <Sheet>
  <SheetTrigger className="mr-3 md:hidden"><SquareMenu/></SheetTrigger>
  <SheetContent className="bg-pink-900">
    <ul className="space-y-7">
    <li className="hover:text-yellow-400"><Link href="/"><button>Home</button></Link></li>
    <li className="hover:text-yellow-400"><Link href="/about"><button>About</button></Link></li>
    <li className="hover:text-yellow-400"><Link href="/services"><button>Services</button></Link></li>
    <li className="hover:text-yellow-400"><Link href="/reviews"><button>Reviews</button></Link></li>
    </ul>
  </SheetContent>
</Sheet>

    </header>
  );
}
