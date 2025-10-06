import { Rocket, Target, Users, Zap, TrendingUp, Pizza, Clock, Award, Heart, Globe, CheckCircle } from 'lucide-react';

const LittleCaesarsProposal = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Section 1: Hero - Launch Campaign Overview */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary via-primary-dark to-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-64 h-64 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        <div className="container-custom relative z-10 text-center py-20">
          <div className="mb-8">
            <img src="/little-caesars/logo.jpg" alt="Little Caesars" className="h-24 mx-auto mb-6" />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-fade-in">
            Launch Campaign Overview
          </h1>
          <p className="text-2xl md:text-3xl mb-8 max-w-4xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            A dynamic digital launch strategy with creative, engaging formats to build lasting brand buzz
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Rocket className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Feed Creatives</h3>
              <p className="text-white/90">Develop a mix of Reel/Short, Carousel, and Static/GIF posts with engaging captions, hashtags, and alt text.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <Target className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Story Arcs</h3>
              <p className="text-white/90">Craft interactive stories focusing on brand education and open interpretation, using stickers and clear rationale.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <Zap className="w-12 h-12 mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-3">Campaign Goal</h3>
              <p className="text-white/90">Deliver zero blandness and ensure a bold, memorable digital presence for Little Caesars in India.</p>
            </div>
          </div>
          <div className="mt-12 text-sm text-white/70 animate-fade-in" style={{ animationDelay: '1s' }}>
            Create 3 unique feed posts and 6 stories designed to generate excitement and awareness
          </div>
        </div>
      </section>

      {/* Section 2: Cracking the Indian Pizza Market */}
      <section className="min-h-screen flex items-center bg-gray-50 py-20">
        <div className="container-custom">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-primary mb-6 text-center">
              Cracking the Indian Pizza Market
            </h2>
            <p className="text-xl text-center text-gray-700 mb-16 max-w-3xl mx-auto">
              Little Caesars holds a strong legacy internationally but has low brand awareness in India.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4">Key Strategy</h3>
                <p className="text-gray-700">
                  Defining launch priorities for Little Caesars in India require more than announcements to drive footfall and engagement.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4">Clearly Highlight Differentiators</h3>
                <p className="text-gray-700">
                  Create a quirky, memorable launch location and date to spark buzz and recall against competitors.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary-dark mb-4">Capture Attention</h3>
                <p className="text-gray-700">
                  Stand out against Domino's and Pizza Hut to capture the Indian market's attention with a unique approach.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: The Big Six - Defining Little Caesars */}
      <section className="min-h-screen flex items-center bg-primary-dark text-white py-20">
        <div className="container-custom">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-16 text-center">
            Defining Little Caesars for India
          </h2>
          <p className="text-center text-2xl mb-12 text-white/90">The Big Six Questions</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold mb-3 text-accent">Who are we?</h3>
              <p className="text-white/90">Little Caesars, global pizza innovators entering India.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold mb-3 text-accent">What do we do?</h3>
              <p className="text-white/90">Deliver hot, fresh, affordable pizza with a unique experience.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold mb-3 text-accent">How do we do it?</h3>
              <p className="text-white/90">Combining quality ingredients with fast, friendly service.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold mb-3 text-accent">Why should you care?</h3>
              <p className="text-white/90">Taste, value, and convenience crafted for Indian tastes.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold mb-3 text-accent">When are we coming?</h3>
              <p className="text-white/90">Launching soon to bring a new pizza choice.</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold mb-3 text-accent">Where is the first store?</h3>
              <p className="text-white/90">Opening at a strategic location to maximize impact.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Rich Legacy Reel */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-4">
                Content Format #1
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-primary-dark mb-6">
                Discover Little Caesars' Rich Legacy in India
              </h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-primary mb-2">Format:</h4>
                  <p className="text-gray-700">15–20 second Reel designed to introduce Little Caesars to Indian consumers.</p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Purpose:</h4>
                  <p className="text-gray-700">Convey the brand's rich heritage and essence with a warm, inviting tone.</p>
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-2">Visual Hook:</h4>
                  <p className="text-gray-700">Captivating storytelling spread over 6–8 storyboard frames that highlight brand values.</p>
                </div>
              </div>
              
              <div className="bg-accent/5 rounded-xl p-6 border-l-4 border-accent">
                <p className="text-gray-700 text-lg">
                  <strong>Key Message:</strong> Introduce the brand's international success story and its commitment to bringing that same quality and experience to India.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Competitive Advantages */}
      <section className="min-h-screen flex items-center bg-primary text-white py-20">
        <div className="container-custom">
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6 text-center">
            Why Little Caesars Leads Over Domino's & Pizza Hut
          </h2>
          <p className="text-center text-xl mb-16 text-white/90 max-w-3xl mx-auto">
            This reel highlights these core differentiators, positioning Little Caesars as the smart choice in India's competitive pizza market.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <Pizza className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Product Excellence</h3>
              <p className="text-white/90">
                Little Caesars offers signature Hot-N-Ready pizzas with consistent quality and value, setting it apart from Domino's customizable options and Pizza Hut's dine-in focus.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <Clock className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Speed & Convenience</h3>
              <p className="text-white/90">
                Ready-to-go pizzas reduce wait times, outperforming Domino's delivery and Pizza Hut's longer dine-in service.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <Heart className="w-12 h-12 mb-4" />
              <h3 className="text-2xl font-bold mb-4">Brand Personality</h3>
              <p className="text-white/90">
                Friendly, confident, and approachable, Little Caesars connects with customers seeking quick satisfaction without compromise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Hot-N-Ready Story Arc A */}
      <section className="min-h-screen flex items-center bg-gray-50 py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-accent/10 text-accent px-6 py-2 rounded-full text-sm font-semibold mb-4">
                Story Arc A
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-primary-dark mb-6">
                Introducing the Hot-N-Ready Promise
              </h2>
            </div>
            
            <div className="bg-gradient-to-br from-primary to-accent text-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <Zap className="w-16 h-16" />
              </div>
              <p className="text-xl text-center mb-6">
                This 15-second story captures the excitement of Little Caesars' Hot-N-Ready promise, delivering fresh, piping-hot pizzas instantly.
              </p>
              <p className="text-lg text-center text-white/90">
                Designed to engage with energy and fun, it showcases the convenience and quality that sets Little Caesars apart.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Hot-N-Ready Story Arc B */}
      <section className="min-h-screen flex items-center bg-white py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-accent/10 text-accent px-6 py-2 rounded-full text-sm font-semibold mb-4">
                Story Arc B
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-primary-dark mb-6">
                Reinforcing the Hot-N-Ready Promise with Impact
              </h2>
            </div>
            
            <div className="bg-primary-dark text-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <Clock className="w-16 h-16" />
              </div>
              <p className="text-xl text-center mb-6">
                Use a 15-second Story (Arc B) format to creatively reinforce the Hot-N-Ready message.
              </p>
              <p className="text-lg text-center text-white/90">
                Focus on quirky, memorable visuals that connect with the audience and emphasize speed without compromising quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Speed of Service Story */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-accent/10 to-primary/10 py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-4">
                Story Arc C
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-primary-dark mb-6">
                Experience Pizza at the Speed of Hot-N-Ready
              </h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <Rocket className="w-16 h-16 text-primary mb-6" />
                  <h3 className="text-2xl font-bold text-primary-dark mb-4">Fast Service Meets Quality</h3>
                  <p className="text-gray-700 text-lg mb-4">
                    This 15-second story highlights Little Caesars India's Hot-N-Ready promise: fast service paired with consistently fresh, quality pizzas.
                  </p>
                  <p className="text-gray-600">
                    Designed to captivate digital audiences, it emphasizes speed without compromising taste or freshness, ensuring customers enjoy piping hot pizza every time.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-primary to-accent rounded-xl p-8 text-white">
                  <h4 className="text-xl font-bold mb-4">Key Highlights:</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                      <span>Instant availability</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                      <span>Consistent quality</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                      <span>Always fresh & hot</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: Fresh Ingredients Story */}
      <section className="min-h-screen flex items-center bg-primary-dark text-white py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-accent text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
                Engagement Story
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Boost Engagement with Fresh Ingredient Stories
              </h2>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
              <div className="text-center mb-8">
                <Award className="w-16 h-16 mx-auto mb-4" />
                <p className="text-xl mb-6">
                  Leverage a 15-second Story (Arc A) format to showcase Little Caesars' commitment to quality ingredients.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="font-bold text-accent mb-2">Fresh Dough</h4>
                  <p className="text-white/80 text-sm">Made daily with premium ingredients</p>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="font-bold text-accent mb-2">Vine-Ripened Tomatoes</h4>
                  <p className="text-white/80 text-sm">Sourced for perfect flavor</p>
                </div>
                <div className="bg-white/5 rounded-lg p-6">
                  <h4 className="font-bold text-accent mb-2">Premium Cheese</h4>
                  <p className="text-white/80 text-sm">High-quality mozzarella blend</p>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <p className="text-white/90">
                  Engage audiences with interactive polls, quizzes, or sliders to educate on quality ingredients and drive brand awareness.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Dine-In Experience Carousel */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-semibold mb-4">
                Carousel Post
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-primary-dark mb-6">
                Why the Dine-In Experience with Little Caesars Matters
              </h2>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <Users className="w-16 h-16 text-primary" />
              </div>
              <p className="text-xl text-center text-gray-700 mb-6">
                Little Caesars pizza is more than food—it's a social catalyst that transforms dining into an experience.
              </p>
              <p className="text-lg text-center text-gray-600 mb-8">
                Every bite sparks connection and celebration, turning moments into memories.
              </p>
              
              <div className="bg-accent/5 rounded-xl p-8 border-l-4 border-accent">
                <p className="text-gray-700">
                  <strong>Carousel Concept:</strong> This carousel highlights the joy of sharing pizza in a welcoming dine-in atmosphere, emphasizing pizza as a moment to savor with friends and family.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: Conclusion & Next Steps */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-primary via-primary-dark to-accent text-white py-20">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-12">
              Driving a Memorable Launch
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <Globe className="w-12 h-12 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3">Mission & Strategy</h3>
                <p className="text-white/90">
                  Recap launch mission and creative strategy focused on brand education and differentiation
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
                <Target className="w-12 h-12 mb-4 mx-auto" />
                <h3 className="text-xl font-bold mb-3">Customer Engagement</h3>
                <p className="text-white/90">
                  Prioritize customer engagement to build strong brand mindshare across India
                </p>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-12 border border-white/20">
              <h3 className="text-2xl font-bold mb-4">Next Steps</h3>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span>Finalize creatives and content calendar</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span>Schedule posts and stories strategically</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 mt-1 flex-shrink-0" />
                  <span>Monitor engagement metrics closely</span>
                </div>
              </div>
            </div>
            
            <div className="bg-accent/20 backdrop-blur-sm rounded-xl p-12 border-2 border-accent">
              <TrendingUp className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-3xl font-bold mb-4">Ultimate Goal</h3>
              <p className="text-2xl">
                Spark lasting customer excitement and loyalty for Little Caesars Pizza India
              </p>
            </div>
            
            <div className="mt-16 pt-8 border-t border-white/20">
              <p className="text-white/70 text-sm">
                Prepared by Chaar Log Digital Marketing Agency
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LittleCaesarsProposal;
