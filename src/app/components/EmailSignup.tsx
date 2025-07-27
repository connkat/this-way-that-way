	export default function EmailSignup() {
  return (
    <section className="w-full py-24" style={{ backgroundColor: '#EACF7F' }}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className="heading-2 mb-8 text-3xl">Stay Updated</h2>
          <div className="max-w-md w-full">
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="font-fine-regular p-4 rounded-lg border-2 border-[#3F6FC4] focus:outline-none focus:border-[#DE909E] w-full"
              />
              <button
                type="submit"
                className="font-fine-bold py-4 px-6 rounded-lg text-white w-full transition-transform hover:scale-105"
                style={{ backgroundColor: '#3F6FC4' }}
              >
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}