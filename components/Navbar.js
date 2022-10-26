import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
  <>
      <div className="text-primary flex justify-around pt-5">
        <div className="flex font-bold gap-1">
           <div className="rounded-full w-12 h-12 bg-secondary">
          </div>
          <p className="pt-3">
            Builtit
          </p>
          
        </div>

        <ul className="flex gap-16 pt-3">
          <li><Link  href="/about">About</Link></li>
          <li><Link href="">Services</Link></li>
          <li><Link href="">Projects</Link></li>
          <li><Link href="">Contact</Link></li>
        </ul>
        <div className="pt-2">
          <button className=" bg-secondary rounded-md text-white px-3 h-8 pb-0.5">Need a project?</button>
        </div>
      </div>
    </>
  ); 
}
