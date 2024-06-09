import Link from "next/link";
import Image from "next/image";
import facebook from "../../../../public/facebook-icon.svg";
import youtube from "../../../../public/youtube-icon.svg";

export function SocialNetworks() {
  return (
    <div className="flex bg-neutral-900 rounded-lg flex-col">
      <span className="text-sm px-3 opacity-75 pt-3">Redes Sociales</span>
      <div className="flex gap-3 items-center p-3">
        <Link
          target="_blank"
          href={"https://www.facebook.com/profile.php?id=100063642931231"}
          className="flex cursor-pointer border-neutral-700 items-center gap-1 border p-2 pl-3 px-4 rounded-full"
        >
          <Image src={facebook} alt="as" width={30} height={30} />
          <span className="text-sm">Facebook</span>
        </Link>
        <Link
          target="_blank"
          href={"https://www.youtube.com/@joserafaellopezosto8627/videos"}
          className="flex cursor-pointer border-neutral-700 items-center gap-1 border p-2 pl-3 px-4 rounded-full"
        >
          <Image src={youtube} alt="as" width={30} height={30} />
          <span className="text-sm">YouTube</span>
        </Link>
      </div>
    </div>
  );
}
