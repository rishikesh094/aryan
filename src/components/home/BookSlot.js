"use client";
import Script from "next/script";

export default function BookSlot() {
  return (
    <section
      id="book_slot_section"
      className="py-12 bg-black text-white flex flex-col items-center"
    >
      {/* Heading */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">
          <span className="text-red-600">Book</span> Your Slot
        </h2>
      </div>

      {/* Cal.com Inline Embed */}
      <div
        id="my-cal-inline"
        className="w-full max-w-6xl h-[85vh] md:h-[90vh] rounded-xl shadow-lg overflow-hidden"
      >
        <iframe
          className="w-full h-full border-0"
          src="https://app.cal.com/crezvatic-pvt-ltd-gb6gis/30min?layout=month_view&embedType=inline&primaryColor=ee2c2f&textColor=ffffff&backgroundColor=040404&hideEventTypeDetails=0"
          title="Book a call"
          allow="payment"
        ></iframe>
      </div>

      {/* Cal.com Script */}
      <Script src="https://app.cal.com/embed/embed.js" strategy="lazyOnload" />
    </section>
  );
}
