
export default function Home() {
  return (
    <div className="min-h-screen bg-white text-black p-8 text-center">
      <h1 className="text-4xl font-bold mb-4">🎉 TRUMP79</h1>
      <p className="text-lg mb-6">
        A meme coin to celebrate Donald Trump's 79th Birthday – June 14, 2025 🎂
      </p>

      <div className="text-xl font-semibold mb-4">
        🚀 Launching June 14 on Uniswap!
      </div>

      <div className="mb-6">
        <a
          className="bg-yellow-400 px-6 py-2 rounded-xl shadow hover:bg-yellow-500"
          href="#whitepaper"
        >
          Read Whitepaper
        </a>
      </div>

      <img
        src="/trump-coin-preview.png"
        alt="TRUMP79 Coin"
        className="mx-auto w-48"
      />

      <footer className="mt-12 text-sm">
        &copy; 2025 TRUMP79. Not affiliated with any political party. Meme coin only.
      </footer>
    </div>
  );
}
