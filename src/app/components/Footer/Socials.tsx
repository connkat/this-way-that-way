import { FaXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";

export default function Socials() {
  return (
    <div>
      <h3 className="font-standard-bold text-xl mb-4">Follow Us</h3>
      <div className="flex flex-row space-x-4">
        <a
          href="#"
          className="font-standard-regular flex items-center gap-2 transition-colors hover:text-[#F8F269]"
        >
          <FaXTwitter size={20} />
        </a>
        <a
          href="#"
          className="font-standard-regular flex items-center gap-2 transition-colors hover:text-[#F8F269]"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="#"
          className="font-standard-regular flex items-center gap-2 transition-colors hover:text-[#F8F269]"
        >
          <FaLinkedin size={20} />
        </a>
      </div>
    </div>
  );
}
