import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { getColor } from "@/styles/colors";

export default function Socials() {
  return (
    <div className="flex flex-col items-end text-right">
      <div className="flex gap-4">
        <a
          href="https://x.com/thiswaytha36676"
          className="font-standard-regular flex items-center gap-2 transition-colors"
          style={{ "--hover-color": getColor("yellow") } as React.CSSProperties}
        >
          <FaXTwitter size={20} />
        </a>
        <a
          href="https://www.instagram.com/thiswaythatway.media/"
          className="font-standard-regular flex items-center gap-2 transition-colors"
          style={{ "--hover-color": getColor("yellow") } as React.CSSProperties}
        >
          <FaInstagram size={20} />
        </a>
      </div>
    </div>
  );
}
