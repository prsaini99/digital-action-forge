import { useEffect, useState, memo } from 'react';

const PastClientsSlider = () => {
  const [currentSet, setCurrentSet] = useState(0);

  const excludedImages = [2, 11, 13];
  const clientLogos = Array.from({ length: 36 }, (_, i) => ({
    id: i + 1,
    src: `/${i + 1}.png`,
    alt: `Client ${i + 1}`
  })).filter(logo => !excludedImages.includes(logo.id));

  const logosPerView = 6;
  const totalSets = Math.ceil(clientLogos.length / logosPerView);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSet((prev) => (prev + 1) % totalSets);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSets]);

  const displayedLogos = clientLogos.slice(
    currentSet * logosPerView,
    (currentSet + 1) * logosPerView
  );

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            <span className="gradient-text">Our Prestigious Past Clients</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We've had the privilege of working with leading brands across industries,
            delivering exceptional results and building lasting partnerships.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div className="flex justify-center items-center gap-6 md:gap-10 flex-wrap min-h-[150px]">
            {displayedLogos.map((logo, index) => (
              <div
                key={`${currentSet}-${logo.id}`}
                className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center p-3 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.style.display = 'none';
                    if (target.parentElement) {
                      const fallback = document.createElement('div');
                      fallback.className = 'text-gray-400 text-center text-xs';
                      fallback.textContent = logo.alt;
                      target.parentElement.appendChild(fallback);
                    }
                  }}
                  className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: totalSets }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSet(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentSet
                    ? 'bg-cta-primary w-8'
                    : 'bg-gray-300 hover:bg-gray-400 w-2'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Trusted by over 33+ leading brands worldwide
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(PastClientsSlider);