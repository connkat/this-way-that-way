import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { getColor } from "@/styles/colors";
import { useScreenSize } from "@/hooks/useScreenSize";

export default function Socials() {
  const { isMobile } = useScreenSize();
  return (
    <div className="flex flex-col items-end text-right">
      <h3 className={`font-standard-bold ${isMobile ? 'text-lg mb-2' : 'text-xl mb-4'}`}>
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
