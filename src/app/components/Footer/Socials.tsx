import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { getColor } from "@/styles/colors";

export default function Socials() {
  return (
    <div>
      <h3 className="font-standard-bold text-xl mb-4">Follow Us</h3>
      <div className="flex flex-row space-x-4">
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
        <a
          href="#"
          className="font-standard-regular flex items-center gap-2 transition-colors"
          style={{ "--hover-color": getColor("yellow") } as React.CSSProperties}
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  );
}
