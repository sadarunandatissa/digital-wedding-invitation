// src/components/EventDetails.jsx
export default function EventDetails() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="font-serif text-4xl text-center mb-16">The Details</h2>
        <div className="grid md:grid-cols-2 gap-16">
          {/* Ceremony Card */}
          <div className="border border-stone-200 p-10 text-center bg-white">
            <h3 className="font-serif text-2xl mb-2">The Ceremony</h3>
            <p className="uppercase tracking-widest text-sm mb-6">2:00 PM</p>
            <p className="mb-8">
              St. Jude's Cathedral
              <br />
              123 Chapel Lane
              <br />
              New York, NY
            </p>
            <button className="text-sm uppercase tracking-widest border-b border-stone-800 pb-1">
              Map & Directions
            </button>
          </div>

          {/* Reception Card */}
          <div className="border border-stone-200 p-10 text-center bg-white">
            <h3 className="font-serif text-2xl mb-2">The Reception</h3>
            <p className="uppercase tracking-widest text-sm mb-6">5:00 PM</p>
            <p className="mb-8">
              The Glasshouse Estate
              <br />
              456 Orchard Road
              <br />
              New York, NY
            </p>
            <button className="text-sm uppercase tracking-widest border-b border-stone-800 pb-1">
              Map & Directions
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
