import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface WorkItem {
  id: string;
  brand: string;
  category: string;
  image: string;
  description: string;
}

const workItems: WorkItem[] = [
  {
    id: 'jbl',
    brand: 'JBL Harman',
    category: 'Consumer Electronics',
    image: '/social-media-work/jbl-social.jpg',
    description: 'Grew social media following by 100% across handles with #MuteTheWorld and #DareToListen campaigns.'
  },
  {
    id: 'sleepwell',
    brand: 'Sleepwell',
    category: 'Home & Lifestyle',
    image: '/social-media-work/sleepwell-social.jpg',
    description: 'Expanded consumer reach through engaging sleep education content and influencer collaborations.'
  },
  {
    id: 'kohinoor',
    brand: 'Kohinoor Rice',
    category: 'Food & Beverage',
    image: '/social-media-work/kohinoor-social.jpg',
    description: 'Built brand presence with Chef Ranveer Brar partnerships and festive campaign activations.'
  },
  {
    id: 'parryware',
    brand: 'Parryware',
    category: 'Home & Lifestyle',
    image: '/social-media-work/parryware-social.jpg',
    description: 'Brand building through product showcases and engaging bathroom lifestyle content.'
  },
  {
    id: 'magic-moments',
    brand: 'Magic Moments',
    category: 'Beverages',
    image: '/social-media-work/magic-moments-social.jpg',
    description: 'Grew social media following by 100% with Dazzle Gold premium positioning.'
  },
  {
    id: 'canara-hsbc',
    brand: 'Canara HSBC Life Insurance',
    category: 'Financial Services',
    image: '/social-media-work/canara-hsbc-social.jpg',
    description: 'Multi-platform campaigns including #MeForMyCity music discovery initiative.'
  },
  {
    id: 'flebo',
    brand: 'Flebo.in',
    category: 'Healthcare',
    image: '/social-media-work/flebo-social.jpg',
    description: 'Home testing service awareness with #EverythingPainless campaign messaging.'
  },
  {
    id: 'bmw',
    brand: 'BMW Deutsche Motoren',
    category: 'Automotive',
    image: '/social-media-work/bmw-campaigns.jpg',
    description: '2M+ impressions, 214K+ clicks, generating quality leads and 66 cars sold.'
  },
  {
    id: 'veeba',
    brand: 'Veeba',
    category: 'Food & Beverage',
    image: '/social-media-work/veeba-social.jpg',
    description: '"The Little Big Difference" campaign showcasing premium condiments and spreads.'
  },
  {
    id: 'hongs-kitchen',
    brand: "Hong's Kitchen",
    category: 'Food & Beverage',
    image: '/social-media-work/hongs-kitchen-social.jpg',
    description: 'Viral social content with quick-serve Chinese cuisine positioning.'
  },
  {
    id: 'barista',
    brand: 'Barista',
    category: 'Food & Beverage',
    image: '/social-media-work/barista-social.jpg',
    description: '"Brew A New" campaign series connecting coffee moments with life experiences.'
  },
  {
    id: 'britannia',
    brand: 'Britannia',
    category: 'Food & Beverage',
    image: '/social-media-work/britannia-social.jpg',
    description: '"Eat Healthy, Think Better" whole wheat bread campaign with lifestyle content.'
  },
  {
    id: 'kfc',
    brand: 'KFC',
    category: 'Food & Beverage',
    image: '/social-media-work/kfc-social.jpg',
    description: 'Local city-specific campaigns celebrating 600 restaurants in India.'
  },
  {
    id: 'beer-cafe',
    brand: 'The Beer Cafe',
    category: 'Food & Beverage',
    image: '/social-media-work/beer-cafe-social.jpg',
    description: '"We Don\'t Screw Your Brew" quirky brand voice and quality-focused messaging.'
  }
];

const categories = ['All', ...Array.from(new Set(workItems.map(item => item.category)))];

const SocialMediaWorkShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<WorkItem | null>(null);

  const filteredItems = selectedCategory === 'All' 
    ? workItems 
    : workItems.filter(item => item.category === selectedCategory);

  const currentIndex = selectedImage ? filteredItems.findIndex(item => item.id === selectedImage.id) : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredItems[currentIndex - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredItems.length - 1) {
      setSelectedImage(filteredItems[currentIndex + 1]);
    }
  };

  return (
    <section className="section-padding bg-gradient-to-br from-cta-dark via-cta-primary to-cta-secondary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Our Social Media Work
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            A showcase of our social media management work across diverse industries - from consumer electronics to food & beverage, healthcare to automotive.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-white text-cta-primary'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer bg-white/5"
                onClick={() => setSelectedImage(item)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.brand} social media work`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <span className="text-xs text-cta-accent font-medium mb-1">{item.category}</span>
                  <h3 className="text-white font-bold text-lg">{item.brand}</h3>
                  <p className="text-white/70 text-sm line-clamp-2 mt-1">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <button
                className="absolute top-4 right-4 text-white hover:text-cta-accent transition-colors z-10"
                onClick={() => setSelectedImage(null)}
              >
                <X size={32} />
              </button>

              {currentIndex > 0 && (
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-cta-accent transition-colors z-10 p-2 bg-black/50 rounded-full"
                  onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                >
                  <ChevronLeft size={32} />
                </button>
              )}

              {currentIndex < filteredItems.length - 1 && (
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-cta-accent transition-colors z-10 p-2 bg-black/50 rounded-full"
                  onClick={(e) => { e.stopPropagation(); handleNext(); }}
                >
                  <ChevronRight size={32} />
                </button>
              )}

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="max-w-5xl max-h-[90vh] w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={selectedImage.image}
                  alt={`${selectedImage.brand} social media work`}
                  className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
                />
                <div className="mt-4 text-center">
                  <span className="text-cta-accent text-sm font-medium">{selectedImage.category}</span>
                  <h3 className="text-white font-bold text-2xl mt-1">{selectedImage.brand}</h3>
                  <p className="text-white/70 mt-2 max-w-2xl mx-auto">{selectedImage.description}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default SocialMediaWorkShowcase;
