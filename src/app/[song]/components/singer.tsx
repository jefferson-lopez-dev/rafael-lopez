import Image from "next/image";
import about from "../assets/about.png";

export function Singer() {
  return (
    <div className="w-full relative flex-col flex items-center overflow-hidden justify-center  bg-neutral-900 rounded-lg">
      <Image
        className="w-full rounded-tr-lg rounded-tl-lg h-[240px] object-cover"
        src={about}
        alt="Rafael Lopez"
        width={200}
        height={200}
        quality={100}
        priority
      />
      <div className="w-full p-5">
        <span className="text-3xl font-bold">Rafael Lopez</span>
        <p className="text-sm opacity-70">
          Cantante y compositor de musica llanera
        </p>
      </div>
    </div>
  );
}
