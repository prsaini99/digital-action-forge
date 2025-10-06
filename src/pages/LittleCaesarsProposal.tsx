import { motion } from "framer-motion";
import { ArrowRight, Users, TrendingUp, Target, BarChart3, Globe, Smartphone, MessageSquare } from "lucide-react";
import Logo from "@/components/Logo";

const LittleCaesarsProposal = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header with Both Logos */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Logo />
          <img 
            src="/little-caesars/little-caesars-logo.svg" 
            alt="Little Caesars" 
            className="h-12"
          />
        </div>
      </header>

      {/* Section 1: Cover Slide */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E66200] to-[#FF8533] text-white relative overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/little-caesars/slide-1.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/little-caesars/logo.jpg" 
              alt="Little Caesars" 
              className="w-48 h-48 mx-auto mb-8 rounded-full shadow-2xl"
            />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Creative Digital Marketing Strategy
            </h1>
            <p className="text-2xl md:text-3xl mb-8 opacity-90">
              for Little Caesars India
            </p>
            <p className="text-xl opacity-80">Presented by Chaar Log</p>
          </motion.div>
        </div>
      </section>

      {/* Section 2: Mission - Making Little Caesars Unforgettable in India */}
      <section className="min-h-screen flex items-center py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-[#E66200]">
              Mission: Making Little Caesars Unforgettable in India
            </h2>
            <p className="text-xl text-gray-600 mb-16 max-w-4xl">
              A dynamic digital launch strategy with creative, engaging formats to build lasting brand buzz
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Diagram */}
              <div className="flex justify-center">
                <img 
                  src="/little-caesars/slide-1-diagram.png" 
                  alt="Launch Campaign Overview" 
                  className="w-full max-w-md"
                />
              </div>

              {/* Content */}
              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#2563EB] rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                    01
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Launch Campaign Overview</h3>
                    <p className="text-gray-700 text-lg">
                      Create 3 unique feed posts and 6 stories designed to generate excitement and awareness.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#0EA5E9] rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                    02
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Feed Creatives</h3>
                    <p className="text-gray-700 text-lg">
                      Develop a mix of Reel/Short, Carousel, and Static/GIF posts with engaging captions, hashtags, and alt text.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#10B981] rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                    03
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Story Arcs</h3>
                    <p className="text-gray-700 text-lg">
                      Craft interactive stories focusing on brand education and open interpretation, using stickers and clear rationale.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#F59E0B] rounded-lg flex items-center justify-center text-white text-2xl font-bold">
                    04
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Campaign Goal</h3>
                    <p className="text-gray-700 text-lg">
                      Deliver zero blandness and ensure a bold, memorable digital presence for Little Caesars in India.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 3: Why Little Caesars Needs Digital Marketing */}
      <section className="min-h-screen flex items-center py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-[#E66200]">
              Why Little Caesars Needs Digital Marketing
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg border-2 border-[#E66200]/20">
                <div className="w-16 h-16 bg-[#E66200] rounded-full flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Brand Awareness</h3>
                <p className="text-gray-700">Build strong brand recall in a competitive market dominated by Domino's and Pizza Hut</p>
              </div>
              
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg border-2 border-gray-300">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Target Precision</h3>
                <p className="text-gray-700">Reach the right audience - young, value-conscious consumers who love quality pizza</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl shadow-lg border-2 border-[#E66200]/20">
                <div className="w-16 h-16 bg-[#E66200] rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Cost Efficiency</h3>
                <p className="text-gray-700">Deliver better ROI compared to traditional advertising channels</p>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl shadow-lg border-2 border-gray-300">
                <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Measurable Results</h3>
                <p className="text-gray-700">Track every rupee spent and optimize campaigns in real-time</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Campaign Objectives */}
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-[#E66200]">
              Campaign Objectives
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-[#E66200]/40">
                <div className="text-6xl font-bold text-[#E66200] mb-4">01</div>
                <h3 className="text-2xl font-bold mb-4">Increase Brand Awareness</h3>
                <p className="text-gray-300">Target: 5M+ impressions in 3 months across digital platforms</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-[#E66200]/40">
                <div className="text-6xl font-bold text-[#E66200] mb-4">02</div>
                <h3 className="text-2xl font-bold mb-4">Drive Store Footfall</h3>
                <p className="text-gray-300">Goal: 20% increase in walk-ins through location-based campaigns</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-[#E66200]/40">
                <div className="text-6xl font-bold text-[#E66200] mb-4">03</div>
                <h3 className="text-2xl font-bold mb-4">Boost Online Orders</h3>
                <p className="text-gray-300">Target: 30% growth in online orders via social media campaigns</p>
              </div>
            </div>
            <div className="mt-12">
              <img 
                src="/little-caesars/slide-4.jpg" 
                alt="Campaign Objectives" 
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Core Strategy */}
      <section className="min-h-screen flex items-center py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-[#E66200]">
              Core Strategy: "Pizza! Pizza!"
            </h2>
            <div className="bg-gradient-to-br from-[#E66200] to-[#FF8533] text-white p-12 rounded-3xl shadow-2xl mb-12">
              <h3 className="text-3xl font-bold mb-6">Our Approach</h3>
              <p className="text-xl leading-relaxed">
                Leverage Little Caesars' iconic "Pizza! Pizza!" slogan to create memorable, 
                shareable content that emphasizes value, quality, and convenience. Focus on 
                platforms where our target audience spends most of their time: Instagram, 
                Facebook, and YouTube.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <img 
                src="/little-caesars/slide-5.jpg" 
                alt="Strategy Diagram" 
                className="w-full rounded-2xl shadow-xl"
              />
              <div className="flex flex-col justify-center space-y-4 text-gray-700">
                <p className="text-lg">✓ Create engaging, shareable content</p>
                <p className="text-lg">✓ Focus on value proposition</p>
                <p className="text-lg">✓ Build emotional connection</p>
                <p className="text-lg">✓ Drive online and offline traffic</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Platform Strategy */}
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-[#E66200]">
              Platform Strategy
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-[#E66200]/40">
                <Globe className="w-12 h-12 text-[#E66200] mb-6" />
                <h3 className="text-2xl font-bold mb-4">Meta Platforms</h3>
                <p className="text-gray-300 mb-4">Facebook & Instagram</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Carousel ads showcasing menu</li>
                  <li>• Video content & Reels</li>
                  <li>• Stories for daily engagement</li>
                  <li>• Influencer collaborations</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-[#E66200]/40">
                <Smartphone className="w-12 h-12 text-[#E66200] mb-6" />
                <h3 className="text-2xl font-bold mb-4">YouTube</h3>
                <p className="text-gray-300 mb-4">Video Marketing</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Pre-roll ads targeting foodies</li>
                  <li>• Behind-the-scenes content</li>
                  <li>• Customer testimonials</li>
                  <li>• Recipe videos</li>
                </ul>
              </div>

              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-[#E66200]/40">
                <MessageSquare className="w-12 h-12 text-[#E66200] mb-6" />
                <h3 className="text-2xl font-bold mb-4">Google Ads</h3>
                <p className="text-gray-300 mb-4">Search & Display</p>
                <ul className="space-y-2 text-gray-300">
                  <li>• Search ads for high intent</li>
                  <li>• Display network remarketing</li>
                  <li>• Location-based targeting</li>
                  <li>• Competitor keyword bidding</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Creative Content Ideas */}
      <section className="min-h-screen flex items-center py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-[#E66200]">
              Creative Content Ideas
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <img 
                src="/little-caesars/slide-7.jpg" 
                alt="Creative Content" 
                className="w-full rounded-2xl shadow-xl"
              />
              <div className="space-y-6">
                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-[#E66200]">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">User-Generated Content</h3>
                  <p className="text-gray-700">Encourage customers to share their "Pizza! Pizza!" moments</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-[#E66200]">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Influencer Partnerships</h3>
                  <p className="text-gray-700">Collaborate with food bloggers and local celebrities</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-xl border-l-4 border-[#E66200]">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Interactive Campaigns</h3>
                  <p className="text-gray-700">Contests, polls, and quizzes to boost engagement</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 8: Campaign Timeline */}
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-[#E66200]">
              Campaign Timeline
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#E66200]"></div>
              
              <div className="space-y-12">
                <div className="flex items-center gap-8">
                  <div className="flex-1 text-right">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-[#E66200]/40">
                      <h3 className="text-2xl font-bold mb-2">Month 1</h3>
                      <p className="text-gray-300">Campaign setup, content creation, influencer onboarding</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-[#E66200] rounded-full border-4 border-black z-10 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1"></div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="flex-1"></div>
                  <div className="w-12 h-12 bg-[#E66200] rounded-full border-4 border-black z-10 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-[#E66200]/40">
                      <h3 className="text-2xl font-bold mb-2">Month 2</h3>
                      <p className="text-gray-300">Launch campaigns, optimize based on performance data</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-8">
                  <div className="flex-1 text-right">
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-[#E66200]/40">
                      <h3 className="text-2xl font-bold mb-2">Month 3</h3>
                      <p className="text-gray-300">Scale winning campaigns, analyze ROI, plan next phase</p>
                    </div>
                  </div>
                  <div className="w-12 h-12 bg-[#E66200] rounded-full border-4 border-black z-10 flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 9: Budget Breakdown */}
      <section className="min-h-screen flex items-center py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-[#E66200]">
              Budget Breakdown
            </h2>
            <img 
              src="/little-caesars/slide-9.jpg" 
              alt="Budget Breakdown" 
              className="w-full max-w-5xl mx-auto rounded-2xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Section 10: Expected Results */}
      <section className="min-h-screen flex items-center py-20 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-12 text-[#E66200]">
              Expected Results
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-[#E66200]/40">
                <div className="text-5xl font-bold text-[#E66200] mb-4">5M+</div>
                <p className="text-gray-300">Total Impressions</p>
              </div>
              
              <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-[#E66200]/40">
                <div className="text-5xl font-bold text-[#E66200] mb-4">20%</div>
                <p className="text-gray-300">Increase in Footfall</p>
              </div>

              <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-[#E66200]/40">
                <div className="text-5xl font-bold text-[#E66200] mb-4">30%</div>
                <p className="text-gray-300">Growth in Online Orders</p>
              </div>

              <div className="text-center bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-[#E66200]/40">
                <div className="text-5xl font-bold text-[#E66200] mb-4">3.5x</div>
                <p className="text-gray-300">Expected ROAS</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 11: Let's Make It Happen */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E66200] to-[#FF8533] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img 
            src="/little-caesars/slide-11.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold mb-8">
              Let's Make It Happen!
            </h2>
            <p className="text-2xl mb-12 max-w-3xl mx-auto opacity-90">
              Partner with Chaar Log to bring Little Caesars' "Pizza! Pizza!" magic to 
              millions of Indian pizza lovers through strategic, creative, and data-driven 
              digital marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a 
                href="mailto:contact@chaarlog.com"
                className="inline-flex items-center gap-2 bg-white text-[#E66200] px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-900 transition-all transform hover:scale-105"
              >
                Schedule a Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LittleCaesarsProposal;
