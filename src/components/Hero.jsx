// src/components/Hero.jsx
export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-4">
      {/* Optional: Background image overlay could go here */}
      <div className="text-center z-10">
        <p className="uppercase tracking-[0.3em] text-sm mb-4">
          We are getting married
        </p>
        {/* Replace with a premium Serif font in your CSS */}
        <h1 className="font-serif text-6xl md:text-8xl font-light mb-6">
          Aria & Julian
        </h1>
        <p className="text-xl italic font-serif">October 24th, 2026</p>
      </div>
    </section>
  );
}
