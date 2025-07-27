	export default function About() {
  return (
    <section className="w-full py-16" style={{ backgroundColor: '#DE909E' }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="heading-2 mb-8 text-center text-white">About the Podcast</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="body-large text-white">
              This Way That Way is a podcast about the different paths people take in tech.
              We talk to developers, designers, and other tech professionals about their journeys.
            </p>
            <p className="body-base text-white">
              Hosted by experienced developers who have been through it all, we bring you
              real stories and practical advice for navigating your tech career.
            </p>
          </div>
          <div className="flex justify-center">
            {/* Placeholder for podcast artwork/image */}
            <div className="w-80 h-80 rounded-lg" style={{ backgroundColor: '#F8F269' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
}