import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { getColor } from "@/styles/colors";

export default function Socials() {
  return (
    <div className="flex flex-col items-end">
      <h3 className="font-standard-bold text-xl mb-4">
        Follow This Way That Way
      </h3>
      <div className="flex gap-4">
        <a
          href="#"
          className="font-standard-regular flex items-center gap-2 transition-colors"
          style={{ "--hover-color": getColor("yellow") } as React.CSSProperties}
        >
          <FaXTwitter size={20} />
        </a>
        <a
          href="#"
          className="font-standard-regular flex items-center gap-2 transition-colors"
          style={{ "--hover-color": getColor("yellow") } as React.CSSProperties}
        >
          <FaInstagram size={20} />
        </a>
      </div>
    </div>
  );
}
