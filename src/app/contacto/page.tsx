import Image from "next/image";
import Link from "next/link";
import React from "react";
import facebook from "../../../public/facebook-icon.svg";
import youtube from "../../../public/youtube-icon.svg";

export default function page() {
  return (
    <div className="w-full max-w-[700px] gap-10 bg-neutral-950 rounded-md p-5 flex items-center flex-col">
      <div>
        <Image
          className="rounded-full aspect-square object-cover object-left-top"
          src={"/jose_rafael_lopez_1.jpg"}
          width={150}
          height={150}
          alt=""
          quality={100}
          priority
        />
      </div>
      <div className="w-full flex flex-col gap-3">
        <Link
          className="flex items-center gap-3 border bg-neutral-900 border-neutral-500/20 rounded-md p-2 w-full justify-start"
          target="_blank"
          href={
            "https://www.facebook.com/profile.php?id=100063642931231&ref=bookmarks&paipv=0&eav=Afbjq1kp2k5fzYRMLwLGHEB2KLEFo-cEyEAaBjKjz1bey66a3RvY6Q_JyGWQJaXLFHM"
          }
        >
          <Image width={40} height={40} src={facebook} alt="" />
          Joropo Llano y Leyenda
        </Link>
        <Link
          className="flex items-center gap-3 border bg-neutral-900 border-neutral-500/20 rounded-md p-2 w-full justify-start"
          target="_blank"
          href={"https://www.youtube.com/@joserafaellopezosto8627"}
        >
          <Image width={40} height={40} src={youtube} alt="" />
          {'Rafael Lopez "El Rondoneño"'}
        </Link>
      </div>
    </div>
  );
}
