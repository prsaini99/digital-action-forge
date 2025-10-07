import { motion } from "framer-motion";
import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import Logo from "@/components/Logo";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const LittleCaesarsProposal = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Both Logos */}
      <header className="bg-white shadow-md py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Logo />
          <img 
            src="/little-caesars/little-caesars-logo.svg" 
            alt="Little Caesars" 
            className="h-12"
          />
        </div>
      </header>

      {/* Slide 1: Mission */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E66200] to-[#FF8533] text-white relative overflow-hidden">
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Mission: Little Caesars Pizza Launch
            </h1>
            <p className="text-3xl md:text-4xl mb-12 font-light">
              Three posts, six stories, zero blandness.<br/>
              Let's make Little Caesars unforgettable
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-16 text-left">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-3">Feed Creative Trio</h3>
                <p className="text-white/90">3 unique posts - Reel, Carousel & Static</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-3">Story Sequence</h3>
                <p className="text-white/90">6 stories across 2 engaging arcs</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold mb-3">Complete Package</h3>
                <p className="text-white/90">Captions, hashtags & alt text included</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slide 2: The Catch 22 */}
      <section className="min-h-screen flex items-center py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-12 text-[#E66200]">
              The Catch 22 of the Indian Pizza Market
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              <div className="space-y-6">
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl">
                  <p className="text-xl text-gray-800">
                    Little Caesars has an ardent fan-following in its country of origin.
                  </p>
                </div>
                <div className="bg-orange-50 border-l-4 border-[#E66200] p-6 rounded-r-xl">
                  <p className="text-xl text-gray-800">
                    In India, the brand has little mindshare.
                  </p>
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-xl">
                  <p className="text-xl text-gray-800">
                    Expecting people to line up on launch announcement alone is futile.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#E66200] to-[#FF8533] text-white p-10 rounded-3xl shadow-2xl">
                <h3 className="text-3xl font-bold mb-8">The Secret Sauce of Solutions:</h3>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Introduce the brand & its legacy quickly.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Highlight differentiators vs Domino's & Pizza Hut.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-2xl">✓</span>
                    <span>Make location and launch date memorable in a quirky way.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slide 3: How We Do It */}
      <section className="min-h-screen flex items-center py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-12 text-[#E66200]">
              How We Do It
            </h2>
            <p className="text-2xl text-gray-700 mb-12">
              Highlight & answer the six interrogatives about the brand:
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#E66200]/20 hover:border-[#E66200] transition-all">
                <div className="text-[#E66200] text-5xl font-bold mb-4">Who</div>
                <p className="text-xl text-gray-700">are we?</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#E66200]/20 hover:border-[#E66200] transition-all">
                <div className="text-[#E66200] text-5xl font-bold mb-4">What</div>
                <p className="text-xl text-gray-700">do we do?</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#E66200]/20 hover:border-[#E66200] transition-all">
                <div className="text-[#E66200] text-5xl font-bold mb-4">How</div>
                <p className="text-xl text-gray-700">do we do it?</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#E66200]/20 hover:border-[#E66200] transition-all">
                <div className="text-[#E66200] text-5xl font-bold mb-4">Why</div>
                <p className="text-xl text-gray-700">should you care?</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#E66200]/20 hover:border-[#E66200] transition-all">
                <div className="text-[#E66200] text-5xl font-bold mb-4">When</div>
                <p className="text-xl text-gray-700">are we coming to India?</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#E66200]/20 hover:border-[#E66200] transition-all">
                <div className="text-[#E66200] text-5xl font-bold mb-4">Where</div>
                <p className="text-xl text-gray-700">are we launching our first store?</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#E66200] to-[#FF8533] text-white p-8 rounded-2xl text-center">
              <p className="text-2xl font-bold">
                Answer the big six and make Little Caesars stick in their minds
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slide 4: Who's This Mysterious Pie Master? */}
      <section className="min-h-screen flex items-center py-8 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#E66200]">
              Who's This Mysterious Pie Master?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Video */}
              <div className="relative">
                <div className="rounded-2xl shadow-2xl overflow-hidden" style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
                  <iframe 
                    src="https://player.vimeo.com/video/1125059926?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                    title="Creative 1"
                  />
                </div>
                <div className="mt-3 bg-[#E66200] text-white px-3 py-1.5 rounded-lg inline-block text-sm">
                  <p className="font-semibold">Format: 15–20 sec Reel</p>
                </div>
              </div>

              {/* Post Content */}
              <div className="space-y-4">
                <div className="bg-orange-50 p-4 rounded-xl border-l-4 border-[#E66200]">
                  <h3 className="text-lg font-bold text-[#E66200] mb-1">Purpose</h3>
                  <p className="text-gray-800 text-sm">Introduce Little Caesars and its legacy to the Indian audience.</p>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Post Descriptor</h3>
                  <p className="text-gray-700 leading-relaxed text-sm mb-2">
                    It's new in your town, but it has been a global legend.
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm mb-2">
                    Little Caesars has been flipping dough and winning hearts since 1959. And what started in Detroit, didn't stay in Detroit but expanded to over 25 countries. That's millions of pizzas, countless fans, and one iconic mascot who never stops saying 'Pizza! Pizza!'
                  </p>
                  <p className="text-gray-700 leading-relaxed text-sm mb-2">
                    And now, the wait is finally over. For the very first time, Little Caesars is landing in India.
                  </p>
                  <p className="text-gray-900 font-bold text-sm">
                    Mark your calendars—June 22. The pizza you didn't know you were craving is almost here.
                  </p>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-xs text-gray-600">
                    #LittleCaesars #PizzaPizza #NowInIndia #PizzaLovers #HotNReady #PizzaTime
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slide 5: Creative 2 */}
      <section className="min-h-screen flex items-center py-8 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* Post Content */}
              <div className="space-y-4">
                <div className="bg-[#E66200]/20 p-4 rounded-xl border-l-4 border-[#E66200]">
                  <h3 className="text-lg font-bold text-[#E66200] mb-1">Purpose</h3>
                  <p className="text-white/90 text-sm">Position Little Caesars alongside Domino's and Pizza Hut, highlighting where we shine and stand out.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                  <h3 className="text-xl font-bold mb-3">Post Descriptor</h3>
                  <p className="text-white/90 leading-relaxed text-sm mb-2">
                    You were today years old when you found out that the world's largest family-owned pizza brand is one you've never even heard of.
                  </p>
                  <p className="text-white/90 leading-relaxed text-sm mb-2">
                    Not Domino's. Not Pizza Hut.
                  </p>
                  <p className="text-white/90 leading-relaxed text-sm mb-2">
                    This silent slayer actually sells more in-store pizzas than the other two combined crowds.
                  </p>
                  <p className="text-white/90 leading-relaxed text-sm mb-2">
                    And guess what? The hidden champ is finally coming to India.
                  </p>
                  <p className="text-white font-bold text-sm">
                    June 22. Mark the date. (And maybe your diet chart too.)
                  </p>
                </div>

                <div className="bg-white/5 p-3 rounded-lg">
                  <p className="text-xs text-white/60">
                    #LittleCaesars #PizzaPizza #NowInIndia #PizzaLovers #HotNReady #PizzaTime
                  </p>
                </div>
              </div>

              {/* Video */}
              <div className="relative">
                <div className="rounded-2xl shadow-2xl overflow-hidden" style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
                  <iframe 
                    src="https://player.vimeo.com/video/1125059944?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                    title="Creative 2"
                  />
                </div>
                <div className="mt-3 bg-white text-[#E66200] px-3 py-1.5 rounded-lg inline-block text-sm">
                  <p className="font-semibold">Format: 30–40 sec Reel</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slide 6: What Do We Do? - Hot-N-Ready */}
      <section className="min-h-screen flex items-center py-10 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="/little-caesars/bg-ingredients.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-[#E66200]">
              What Do We Do?
            </h2>
            <p className="text-3xl text-gray-800 mb-12 font-semibold">Give you Hot-N-Ready pies</p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Story Video */}
              <div className="relative">
                <div className="rounded-3xl shadow-2xl overflow-hidden max-w-sm mx-auto" style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
                  <iframe 
                    src="https://player.vimeo.com/video/1125060079?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                    title="Creative 3"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#E66200]">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Post Descriptor</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Counting change takes longer than getting a pizza here. That's Hot-N-Ready, only at Little Caesars. Stretch time? Never. Stretch cheese? Always.
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-2xl">
                  <p className="text-sm text-gray-600">
                    #LittleCaesars #PizzaPizza #NowInIndia #PizzaLovers #HotNReady #PizzaTime
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slide 7: Creative 4 - Story */}
      <section className="min-h-screen flex items-center py-10 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#E66200]">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Post Descriptor</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    When we say hot and ready in seconds, we mean really hot and actually seconds. That's the Little Caesars promise—hotter than the weather (well, most days).
                  </p>
                </div>

                <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-[#E66200]">
                  <h3 className="text-xl font-bold text-[#E66200] mb-2">Purpose</h3>
                  <p className="text-gray-800">Reinforce the "Hot-N-Ready" experience with quirky visuals.</p>
                </div>

                <div className="bg-gray-100 p-4 rounded-xl">
                  <p className="text-sm text-gray-600">
                    #LittleCaesars #PizzaPizza #NowInIndia #PizzaLovers #HotNReady #PizzaTime
                  </p>
                </div>
              </div>

              {/* Story Video */}
              <div className="relative">
                <div className="rounded-3xl shadow-2xl overflow-hidden max-w-sm mx-auto" style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
                  <iframe 
                    src="https://player.vimeo.com/video/1125060001?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                    title="Creative 4.1"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slide 8: Creative 5 - Story */}
      <section className="min-h-screen flex items-center py-10 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Story Video */}
              <div className="relative">
                <div className="rounded-3xl shadow-2xl overflow-hidden max-w-sm mx-auto" style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
                  <iframe 
                    src="https://player.vimeo.com/video/1125059973?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                    title="Creative 5"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-[#E66200]">
                  <h3 className="text-xl font-bold text-[#E66200] mb-2">Purpose</h3>
                  <p className="text-gray-800">Highlight the speed and freshness of Little Caesars' pizzas, making the Hot-N-Ready promise tangible.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#E66200]">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Post Descriptor</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Before you could finish reading this caption, your pizza will be ready at Little Caesars. That's our Hot-N-Ready promise, where our pizzas don't just show up hot, they show up now.
                  </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-xl">
                  <p className="text-sm text-gray-600">
                    #LittleCaesars #PizzaPizza #NowInIndia #PizzaLovers #HotNReady #PizzaTime
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slide 9: How Do We Do It? - Interactive Story */}
      <section className="min-h-screen flex items-center py-10 bg-gradient-to-br from-[#E66200] to-[#FF8533] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/little-caesars/bg-ingredients.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              How Do We Do It?
            </h2>
            <p className="text-3xl mb-12 font-light">Fresh dough, vine-ripened tomatoes, and cheese that makes you swoon</p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Story Video with Interactive Element */}
              <div className="relative">
                <div className="rounded-3xl shadow-2xl overflow-hidden max-w-sm mx-auto border-4 border-white/30" style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
                  <iframe 
                    src="https://player.vimeo.com/video/1125060019?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                    title="Creative 6"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/30">
                  <h3 className="text-xl font-bold mb-2">Purpose</h3>
                  <p className="text-white/90">Educate viewers about Little Caesars' fresh ingredients in a fun, engaging way.</p>
                </div>

                <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4">Post Descriptor</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Some secrets shouldn't stay in the kitchen. At Little Caesars, every pizza starts with dough made fresh in-house, topped with vine-ripened tomatoes' sauce, and finished with 100% real cheese. No shortcuts. No compromises. Just fresh, honest pizza—always Hot-N-Ready.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <p className="text-sm text-white/80">
                    #MadeFreshDaily #LittleCaesarsIndia #PizzaPizza #PizzaLovers #HotNReady #PizzaTime
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slide 10: Why Should You Care? - Carousel */}
      <section className="min-h-screen flex items-center py-10 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <img src="/little-caesars/bg-dining.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8 text-[#E66200]">
              Why Should You Care?
            </h2>
            <p className="text-3xl text-gray-800 mb-12 font-semibold">Coz all roads lead to Little Caesars</p>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Carousel */}
              <div className="relative">
                <Carousel className="w-full max-w-lg mx-auto">
                  <CarouselContent>
                    <CarouselItem>
                      <div className="aspect-square rounded-2xl overflow-hidden">
                        <img src="/little-caesars/carousel-1.jpg" alt="There are two types of people in the world" className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-square rounded-2xl overflow-hidden">
                        <img src="/little-caesars/carousel-2.jpg" alt="Seasoning vs Sauces" className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-square rounded-2xl overflow-hidden">
                        <img src="/little-caesars/carousel-3.jpg" alt="Pizza toppings comparison" className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-square rounded-2xl overflow-hidden">
                        <img src="/little-caesars/carousel-4.jpg" alt="Shapes comparison" className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-square rounded-2xl overflow-hidden">
                        <img src="/little-caesars/carousel-5.jpg" alt="Pizza box styles" className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-square rounded-2xl overflow-hidden">
                        <img src="/little-caesars/carousel-6.jpg" alt="Dining tables" className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-square rounded-2xl overflow-hidden">
                        <img src="/little-caesars/carousel-7.jpg" alt="All coming to Little Caesars on 22 June" className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
                <div className="mt-4 bg-[#E66200] text-white px-4 py-2 rounded-lg inline-block">
                  <p className="font-semibold">Format: Carousel (7 frames)</p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-[#E66200]">
                  <h3 className="text-xl font-bold text-[#E66200] mb-2">Purpose</h3>
                  <p className="text-gray-800">Highlight the dine-in experience, showcasing pizza moments and social enjoyment.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#E66200]">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Post Descriptor</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    Flat slice or folded slice? Pineapple or no pineapple? Last-slice fighter or first-slice snatcher? Whoever yo are, you'll always find a table at Little Caesars. We don't judge. We just serve. And we'll be serving from June 22.
                  </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-xl">
                  <p className="text-sm text-gray-600">
                    #LittleCaesarsIndia #PizzaPizza #PizzaLovers #HotNReady #PizzaTime
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slide 11: Where Are We Coming To? */}
      <section className="min-h-screen flex items-center py-10 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-12 text-[#E66200]">
              Where Are We Coming To?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Content */}
              <div className="space-y-6">
                <div className="bg-[#E66200]/20 p-6 rounded-2xl border-l-4 border-[#E66200]">
                  <h3 className="text-xl font-bold text-[#E66200] mb-2">Purpose</h3>
                  <p className="text-white/90">Engage audiences with the store location story and make them curious to visit.</p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                  <h3 className="text-2xl font-bold mb-4">Post Descriptor</h3>
                  <p className="text-white/90 leading-relaxed">
                    Forget the lip and sip metaphor, the distance between a craving and your first bite is how you measure distance. In other words, how far is your current location from our first location on Golf Course Road, Gurugram. Find out with just a click.
                  </p>
                </div>

                <div className="bg-white/5 p-4 rounded-xl">
                  <p className="text-sm text-white/60">
                    #LittleCaesarsIndia #PizzaPizza #PizzaLovers #HotNReady #PizzaTime #GurugramGrub #GolfCourseRoad
                  </p>
                </div>

                <div className="bg-green-600/20 border border-green-500/30 p-4 rounded-xl">
                  <p className="text-sm text-green-300">
                    💡 Interactive Element: Clicking the link opens Google Maps, showing the exact distance from their current location to the store.
                  </p>
                </div>
              </div>

              {/* Story Video with Interactive */}
              <div className="relative">
                <div className="rounded-3xl shadow-2xl overflow-hidden max-w-sm mx-auto border-4 border-[#E66200]/30" style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
                  <iframe 
                    src="https://player.vimeo.com/video/1125060042?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                    title="Creative 8"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slide 12: When Are We Coming? */}
      <section className="min-h-screen flex items-center py-10 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-12 text-[#E66200]">
              When Are We Coming?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Story Video with Interactive */}
              <div className="relative">
                <div className="rounded-3xl shadow-2xl overflow-hidden max-w-sm mx-auto border-4 border-yellow-400/50" style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
                  <iframe 
                    src="https://player.vimeo.com/video/1125060034?badge=0&autopause=0&player_id=0&app_id=58479&title=0&byline=0&portrait=0" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                    title="Creative 9"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-2xl border-l-4 border-[#E66200]">
                  <h3 className="text-xl font-bold text-[#E66200] mb-2">Purpose</h3>
                  <p className="text-gray-800">Build excitement and anticipation around the launch date.</p>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-[#E66200]">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Post Descriptor</h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    June 22. Just another date… or so we thought. No history, no fanfare, no reason to remember it. Until now. Because this is the day Little Caesars lands in India. Suddenly, it's very, very special.
                  </p>
                </div>

                <div className="bg-gray-100 p-4 rounded-xl">
                  <p className="text-sm text-gray-600">
                    #LittleCaesarsIndia #PizzaPizza #PizzaLovers #HotNReady #PizzaTime
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slide 13: Countdown */}
      <section className="min-h-screen flex items-center py-10 bg-gradient-to-br from-[#E66200] to-[#FF8533] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="/little-caesars/bg-countdown.jpg" alt="" className="w-full h-full object-cover" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-12 text-center">
              Countdown
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Countdown Carousel */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/30">
                  <Carousel className="w-full max-w-xl mx-auto">
                    <CarouselContent>
                      <CarouselItem>
                        <img 
                          src="/little-caesars/countdown-10-days.jpg" 
                          alt="10 Days to Go - Potato Wedges"
                          className="w-full h-auto rounded-xl"
                        />
                      </CarouselItem>
                      <CarouselItem>
                        <img 
                          src="/little-caesars/countdown-4-days.jpg" 
                          alt="4 Days to Go - Stuffed Garlic Bread"
                          className="w-full h-auto rounded-xl"
                        />
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious className="left-2" />
                    <CarouselNext className="right-2" />
                  </Carousel>
                  <p className="text-center text-white/70 mt-4">Creative 10 - Countdown Static</p>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/30">
                  <h3 className="text-xl font-bold mb-2">Purpose</h3>
                  <p className="text-white/90">Amplify launch excitement and reinforce countdown messaging.</p>
                </div>

                <div className="bg-white text-gray-900 p-8 rounded-2xl shadow-2xl">
                  <h3 className="text-2xl font-bold mb-4">Post Descriptor</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The wait is over, nearly. Well, 10 more days to go, precisely. And we can't wait to serve you your first slice of Little Caesars Pizza, and our Potato wedges too. Hope you're as excited. See you there.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                  <p className="text-sm text-white/80">
                    #LittleCaesarsIndia #PizzaPizza #PizzaLovers #HotNReady #PizzaTime
                  </p>
                </div>

                <div className="bg-white/5 p-4 rounded-xl">
                  <p className="text-white/70 text-sm">
                    <strong>Format:</strong> Static/GIF – product hero or offer articulation
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Slide 14: Summary */}
      <section className="min-h-screen flex items-center py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-12 text-center text-[#E66200]">
              The Summary
            </h2>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl border-l-4 border-green-500">
                  <p className="text-xl text-gray-800 font-semibold">
                    ✅ Brand legacy & identity introduced
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl border-l-4 border-blue-500">
                  <p className="text-xl text-gray-800 font-semibold">
                    ✅ Hot-N-Ready promise highlighted
                  </p>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl border-l-4 border-purple-500">
                  <p className="text-xl text-gray-800 font-semibold">
                    ✅ Fresh ingredients & USP explained
                  </p>
                </div>
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl border-l-4 border-pink-500">
                  <p className="text-xl text-gray-800 font-semibold">
                    ✅ Interactive quizzes & stories included
                  </p>
                </div>
                <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-8 rounded-2xl border-l-4 border-yellow-500">
                  <p className="text-xl text-gray-800 font-semibold">
                    ✅ Launch date & store location revealed
                  </p>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl border-l-4 border-[#E66200]">
                  <p className="text-xl text-gray-800 font-semibold">
                    ✅ Humor, quirk, and memorability baked in
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#E66200] to-[#FF8533] text-white p-12 rounded-3xl shadow-2xl text-center">
                <p className="text-3xl md:text-4xl font-bold leading-relaxed">
                  So, hopefully India won't just meet Little Caesars,<br/>
                  they'll remember it.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-8 mb-6">
            <Logo />
            <span className="text-2xl text-gray-600">×</span>
            <img 
              src="/little-caesars/little-caesars-logo.svg" 
              alt="Little Caesars" 
              className="h-12"
            />
          </div>
          <p className="text-gray-400">
            Chaar Log Digital Marketing Agency | Creative Strategy for Little Caesars India
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LittleCaesarsProposal;
