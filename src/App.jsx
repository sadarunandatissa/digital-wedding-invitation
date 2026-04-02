// src/App.jsx
import Hero from "./components/Hero";
import OurStory from "./components/OurStory";
import EventDetails from "./components/EventDetails";
import Gallery from "./components/Gallery";
import RSVP from "./components/RSVP";

function App() {
  return (
    // 'bg-[#FAF9F6]' gives a luxurious, warm off-white canvas
    // 'text-stone-800' provides a softer contrast than harsh black
    <main className="bg-[#FAF9F6] text-stone-800 font-sans overflow-x-hidden">
      <Hero />
      <OurStory />
      <EventDetails />
      <Gallery />
      <RSVP />
    </main>
  );
}

export default App;
