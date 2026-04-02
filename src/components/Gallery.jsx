// src/components/Gallery.jsx
export default function Gallery() {
  // Dummy array to represent high-end photos
  const photos = [1, 2, 3, 4, 5, 6];

  return (
    <section className="py-24 px-4 bg-stone-900 text-stone-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl text-center mb-16">Moments</h2>
        {/* Tailwind columns create an instant masonry layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <div key={index} className="break-inside-avoid overflow-hidden">
              <div className="w-full h-80 bg-stone-800 animate-pulse flex items-center justify-center">
                {/* Placeholder for actual img tag */}
                <span className="text-stone-600 text-sm">
                  Image {photo} Placeholder
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
