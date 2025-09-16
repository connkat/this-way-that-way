import { useScreenSize } from "@/hooks/useScreenSize";

export default function Location() {
  const { isMobile } = useScreenSize();
  return (
    <div>
      <h3 className={`font-standard-bold ${isMobile ? 'text-lg mb-1' : 'text-xl mb-2'}`}>Location</h3>
      <a
        href="https://maps.app.goo.gl/ecw6S1paCtS6nCVs5"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className={`font-standard-regular ${isMobile ? 'mb-1' : 'mb-2'}`}>
          House 831 <br />
          831 17 Ave SW <br />
          Calgary, AB
        </p>
      </a>
    </div>
  );
}
