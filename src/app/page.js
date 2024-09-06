import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div className="w-full h-[100vh] flex justify-center items-center gap-4">
    <div>
      <Image
      src={"/dice.jpeg"}
      width={500}
      height={500}/>
    </div>
    <div>
      <h1 className="text-6xl font-bold mb-4">DICE GAME</h1>
      {/* <button className="bg-black 600 text-slate-400">Play now</button>
       */}
       <Link href={'/play'} className="bg-black border-black text-white px-8 py-1 text-sm rounded-sm transition duration-200 hover:text-black">Play Now</Link>
    </div>
   </div>
  );
}
