// src/components/OurStory.jsx
export default function OurStory() {
  return (
    <section className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-serif text-4xl mb-12">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-12 text-left">
          <div className="space-y-4">
            <h3 className="uppercase tracking-widest text-xs text-stone-500">
              The Beginning
            </h3>
            <p className="leading-relaxed">
              We met under the pouring rain in a small coffee shop in the city.
              What started as a shared umbrella turned into a lifetime of shared
              adventures.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="uppercase tracking-widest text-xs text-stone-500">
              The Proposal
            </h3>
            <p className="leading-relaxed">
              On a quiet morning overlooking the mountains, Julian asked the
              easiest question Aria ever had to answer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
