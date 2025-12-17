import { motion } from 'framer-motion';
import { 
  Users, Target, Lightbulb, TrendingUp, Globe, Video, 
  Code, Smartphone, Share2, Camera, MessageSquare, BarChart3,
  CheckCircle, ArrowRight, Play, ExternalLink
} from 'lucide-react';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

// ============ DATA ============

const services = [
  { icon: MessageSquare, title: 'Communication', desc: 'Strategic brand messaging' },
  { icon: Share2, title: 'Social Media Management', desc: 'Platform-specific strategies' },
  { icon: BarChart3, title: 'Digital Media Management', desc: 'Data-driven campaigns' },
  { icon: Smartphone, title: 'App & Website Development', desc: 'Custom digital solutions' },
  { icon: Lightbulb, title: 'Content Management', desc: 'Engaging content creation' },
  { icon: Users, title: 'Influencers Management', desc: 'Celebrity & micro-influencer networks' },
  { icon: Video, title: 'Video & Still Production', desc: 'Professional content creation' },
  { icon: Target, title: 'Performance Marketing', desc: 'ROI-focused campaigns' },
];

const aiServices = [
  'AI-powered chatbots & conversational interfaces',
  'Machine learning model development & deployment',
  'Natural language processing (NLP) solutions',
  'Computer vision & image recognition systems',
  'Predictive analytics & business intelligence',
  'AI-driven recommendation engines',
  'Automated content generation & optimization',
  'Voice AI & speech recognition integration'
];

const softwareServices = [
  'Custom web application development',
  'Mobile app development (iOS & Android)',
  'E-commerce platform development',
  'Enterprise software solutions',
  'Cloud infrastructure & DevOps',
  'API development & integration',
  'Database design & optimization',
  'UI/UX design & prototyping'
];

const clientsByTenure = {
  longTerm: ['Kohinoor', 'Parryware', 'Sleepwell', 'JBL Harman', 'Canon', 'Fortis Healthcare'],
  midTerm: ['BMW Deutsche Motoren', 'V-Mart', 'Tetra Pak', 'Canara HSBC', 'AlchemLife'],
  recent: ['DAMAC Properties', 'Lebane Solutions', 'Aster Pharmacy', 'Urban Oasis by Missoni', 'Yasmeen City']
};

const socialMediaWork = [
  {
    brand: 'Kohinoor Basmati Rice',
    logo: '/Kohinoor Basmati Rice.webp',
    objective: 'Helped in expanding consumers through social media platform',
    stats: { posts: '1,329', followers: '4,233' },
    approach: 'Recipe content, festive posts, consumer engagement campaigns',
    images: ['/1.png', '/3.png', '/4.png', '/5.png'],
    color: 'from-amber-500 to-orange-600'
  },
  {
    brand: 'Parryware',
    logo: '/social-media-work/parryware-social.jpg',
    objective: 'Helped in Brand Building through social media platform',
    stats: { posts: '479', followers: '7,542' },
    approach: 'Product launches, occasion-based marketing, brand awareness',
    images: ['/6.png', '/7.png', '/8.png', '/9.png'],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    brand: 'Sleepwell',
    logo: '/social-media-work/sleepwell-social.jpg',
    objective: 'Putting you to better sleep since 1971',
    stats: { posts: '503', followers: '13.2k' },
    approach: 'Olympic campaigns, sleep awareness contests, celebrity endorsements',
    images: ['/10.png', '/12.png', '/14.png', '/15.png'],
    color: 'from-purple-500 to-indigo-600'
  },
  {
    brand: 'V-Mart',
    logo: '/social-media-work/veeba-social.jpg',
    objective: 'Create content which is relevant, easy to comprehend & disruptive',
    stats: { posts: '850+', followers: '25k+' },
    approach: 'Festival campaigns, occasion content, regional engagement',
    images: ['/16.png', '/17.png', '/18.png', '/19.png'],
    color: 'from-pink-500 to-rose-600'
  },
  {
    brand: 'Fortis Healthcare',
    logo: '/social-media-work/flebo-social.jpg',
    objective: 'Healthcare awareness and patient engagement campaigns',
    stats: { posts: '320+', followers: '15k+' },
    approach: '#GoWithTheFlow campaign, Oncology awareness, Health tips',
    images: ['/20.png', '/21.png', '/22.png', '/23.png'],
    color: 'from-teal-500 to-emerald-600'
  },
  {
    brand: 'JBL',
    logo: '/JBL Harman.png',
    objective: '#MuteTheWorld campaign - Helped grow social media following by 100%',
    stats: { posts: '200+', followers: '100% growth' },
    approach: 'Business scenario analysis, creative approach, results-driven content',
    images: ['/social-media-work/jbl-social.jpg', '/24.png', '/25.png', '/26.png'],
    color: 'from-orange-500 to-red-600'
  }
];

const influencerCampaigns = [
  {
    brand: 'V-Mart Micro-influencers',
    description: '300 micro-influencers across key geographies',
    approach: 'Regional targeting, authentic content, high engagement rates',
    results: 'Increased brand visibility in Tier 2 & 3 cities',
    image: '/27.png'
  },
  {
    brand: 'Sleepwell Celebrity Campaign',
    description: 'Top celebrities for brand endorsement',
    influencers: ['Yasmin Karachiwala', 'Samantha Akkineni', 'Suresh Raina', 'Malaika Arora'],
    results: 'Massive reach and brand recall improvement',
    image: '/28.png'
  },
  {
    brand: 'Canara HSBC Life Insurance',
    description: 'Influencer-driven awareness campaign',
    approach: 'Financial influencers, trust-building content',
    results: 'Increased policy inquiries and brand trust',
    image: '/social-media-work/canara-hsbc-social.jpg'
  }
];

const performanceMarketing = [
  {
    brand: 'Tetra Pak',
    objective: 'Drive website traffic and engagement',
    results: { traffic: '183,528', growth: '7x website traffic increase' },
    approach: 'SEO optimization, content marketing, paid campaigns',
    images: ['/29.png', '/30.png'],
    color: 'from-green-500 to-emerald-600'
  },
  {
    brand: 'AlchemLife',
    objective: 'Improve conversion rates and lead generation',
    results: { conversion: '2% to 9%', improvement: '350% increase' },
    approach: 'CPA optimization, lead nurturing, retention strategies',
    images: ['/31.png', '/32.png'],
    color: 'from-violet-500 to-purple-600'
  },
  {
    brand: 'BMW Deutsche Motoren',
    objective: 'Make BMW preferred choice for luxury segment',
    results: { events: '50+', engagement: 'Premium audience reach' },
    approach: 'Kids Canvas Program, Golf events, experiential marketing',
    images: ['/BMW.svg', '/social-media-work/bmw-campaigns.jpg'],
    color: 'from-slate-600 to-slate-800'
  }
];

const gulfProjects = [
  {
    brand: 'Lebane Solutions',
    regions: ['Jordan', 'Kuwait', 'Bahrain', 'Qatar', 'Saudi Arabia', 'UAE', 'Oman', 'Yemen'],
    description: 'Multi-country digital marketing operations',
    image: '/33.png'
  },
  {
    brand: 'Aster Pharmacy UAE',
    results: '15% revenue growth in 4 months',
    approach: 'Google Search Ads, geo-targeted campaigns',
    image: '/Aster pharmacy.webp'
  }
];

const realEstateProjects = [
  {
    brand: 'DAMAC Lagoons',
    value: '$2B project',
    results: { sold: '65% Phase 1', cpl: '30% decrease', leads: '15,000' },
    color: 'from-amber-600 to-yellow-500'
  },
  {
    brand: 'Urban Oasis by Missoni',
    value: '$450M project',
    results: { sold: '75% pre-completion', impressions: '2M video' },
    color: 'from-rose-600 to-pink-500'
  },
  {
    brand: 'Yasmeen City Qatar',
    value: '$1.3B project',
    results: { sold: '80%', engagement: '35% increase' },
    color: 'from-emerald-600 to-teal-500'
  }
];

const technicalProjects = [
  { title: 'AI-Powered E-Commerce Platform', result: '35% conversion increase', icon: Code },
  { title: 'AI-Powered Trading Bot Suite', result: '20% portfolio returns', icon: TrendingUp },
  { title: 'DeFi Staking & Yield Farming', result: '$50M+ TVL', icon: BarChart3 },
  { title: 'Metaverse Virtual Events', result: '10,000 participants', icon: Globe },
  { title: 'Secure Cloud Infrastructure', result: '40% cost reduction', icon: Smartphone },
  { title: 'Enterprise Blockchain Supply Chain', result: '50% fraud reduction', icon: CheckCircle }
];

const videoProjects = [
  { brand: 'iVing', thumbnail: '/34.png' },
  { brand: 'Canon', thumbnail: '/35.png' },
  { brand: 'IndiaMart', thumbnail: '/36.png' },
  { brand: 'NatureFresh', thumbnail: '/social-media-work/veeba-social.jpg' }
];

// ============ COMPONENTS ============

const SectionTitle = ({ children, subtitle }: { children: React.ReactNode; subtitle?: string }) => (
  <div className="text-center mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-muted-foreground text-lg max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="text-center p-4 bg-background/50 rounded-xl border border-border">
    <div className="text-2xl md:text-3xl font-bold text-cta-secondary">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

const ImageGallery = ({ images, brand }: { images: string[]; brand: string }) => (
  <div className="grid grid-cols-2 gap-3">
    {images.map((img, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.1 }}
        className="relative aspect-square rounded-xl overflow-hidden group"
      >
        <img 
          src={img} 
          alt={`${brand} work ${idx + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </motion.div>
    ))}
  </div>
);

// ============ MAIN PAGE ============

const Creds = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cta-dark via-cta-primary to-cta-dark">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cta-secondary rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cta-accent rounded-full blur-[150px]" />
        </div>
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6">
              CHAAR LOG
              <span className="block text-cta-secondary">COMMUNICATIONS</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
              A Digital Marketing venture by the people
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/60">
              <span className="px-4 py-2 bg-white/10 rounded-full">Social Media</span>
              <span className="px-4 py-2 bg-white/10 rounded-full">Performance Marketing</span>
              <span className="px-4 py-2 bg-white/10 rounded-full">Influencer Marketing</span>
              <span className="px-4 py-2 bg-white/10 rounded-full">AI & Tech</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionTitle subtitle="We combine technology with content to deliver exceptional results">
            Who Are We?
          </SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20"
            >
              <h3 className="text-2xl font-display font-bold text-green-600 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" /> What We Believe In
              </h3>
              <ul className="space-y-3 text-foreground">
                <li>• Data-driven decision making</li>
                <li>• Creative excellence in every campaign</li>
                <li>• Transparent client partnerships</li>
                <li>• Continuous innovation & learning</li>
                <li>• Results over vanity metrics</li>
              </ul>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-red-500/10 to-rose-500/10 rounded-2xl border border-red-500/20"
            >
              <h3 className="text-2xl font-display font-bold text-red-600 mb-4 flex items-center gap-2">
                <Target className="w-6 h-6" /> What We Don't
              </h3>
              <ul className="space-y-3 text-foreground">
                <li>• Cookie-cutter solutions</li>
                <li>• Vanity metrics without substance</li>
                <li>• One-size-fits-all strategies</li>
                <li>• Compromising on quality</li>
                <li>• Short-term thinking</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionTitle subtitle="Comprehensive digital solutions for modern brands">
            What We Do
          </SectionTitle>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-6 bg-card rounded-2xl border border-border hover:border-cta-secondary/50 transition-all duration-300 hover:shadow-lg group"
              >
                <service.icon className="w-10 h-10 text-cta-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="font-display font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* AI & Tech Services */}
      <section className="section-padding bg-gradient-to-br from-cta-dark to-slate-900 text-white">
        <div className="container-custom">
          <SectionTitle subtitle="Cutting-edge technology solutions powered by AI">
            <span className="text-white">AI & Software Development</span>
          </SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 bg-white/5 backdrop-blur rounded-2xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold">AI Development Services</h3>
              </div>
              <ul className="space-y-3">
                {aiServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                    <span className="text-white/80">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="p-8 bg-white/5 backdrop-blur rounded-2xl border border-white/10"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-display font-bold">Software Development</h3>
              </div>
              <ul className="space-y-3">
                {softwareServices.map((service, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 text-pink-400 mt-1 flex-shrink-0" />
                    <span className="text-white/80">{service}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Portfolio */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionTitle subtitle="Trusted by leading brands across industries">
            Our Clients
          </SectionTitle>
          
          <div className="space-y-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-lg font-semibold text-muted-foreground mb-4 text-center">4+ Years Partnership</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {clientsByTenure.longTerm.map((client, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="px-6 py-3 bg-gradient-to-r from-cta-secondary/10 to-cta-accent/10 rounded-full border border-cta-secondary/20 font-medium"
                  >
                    {client}
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-muted-foreground mb-4 text-center">2-4 Years Partnership</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {clientsByTenure.midTerm.map((client, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="px-6 py-3 bg-muted rounded-full border border-border font-medium"
                  >
                    {client}
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-muted-foreground mb-4 text-center">Recent Partnerships</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {clientsByTenure.recent.map((client, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="px-6 py-3 bg-card rounded-full border border-border font-medium"
                  >
                    {client}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Work */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionTitle subtitle="Building brand presence across digital platforms">
            Social Media Management
          </SectionTitle>
          
          <div className="space-y-16">
            {socialMediaWork.map((work, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`order-2 ${idx % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                  <ImageGallery images={work.images} brand={work.brand} />
                </div>
                
                <div className={`order-1 ${idx % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className={`inline-block px-4 py-2 bg-gradient-to-r ${work.color} text-white rounded-full text-sm font-medium mb-4`}>
                    Case Study
                  </div>
                  <h3 className="text-3xl font-display font-bold text-foreground mb-4">{work.brand}</h3>
                  <p className="text-lg text-muted-foreground mb-6">{work.objective}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <StatCard value={work.stats.posts} label="Posts Created" />
                    <StatCard value={work.stats.followers} label="Followers" />
                  </div>
                  
                  <p className="text-foreground">
                    <span className="font-semibold">Approach:</span> {work.approach}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Influencer Marketing */}
      <section className="section-padding bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 text-white">
        <div className="container-custom">
          <SectionTitle subtitle="Leveraging authentic voices for brand amplification">
            <span className="text-white">Influencer Marketing</span>
          </SectionTitle>
          
          <div className="grid md:grid-cols-3 gap-8">
            {influencerCampaigns.map((campaign, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur rounded-2xl overflow-hidden border border-white/10"
              >
                <div className="aspect-video relative">
                  <img 
                    src={campaign.image} 
                    alt={campaign.brand}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2">{campaign.brand}</h3>
                  <p className="text-white/70 mb-4">{campaign.description}</p>
                  {campaign.influencers && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {campaign.influencers.map((inf, i) => (
                        <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-xs">{inf}</span>
                      ))}
                    </div>
                  )}
                  <p className="text-sm text-purple-300">
                    <span className="font-semibold">Results:</span> {campaign.results}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Marketing */}
      <section className="section-padding bg-background">
        <div className="container-custom">
          <SectionTitle subtitle="Data-driven campaigns that deliver measurable results">
            Performance Marketing
          </SectionTitle>
          
          <div className="space-y-16">
            {performanceMarketing.map((work, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-3xl overflow-hidden border border-border"
              >
                <div className={`p-8 bg-gradient-to-r ${work.color}`}>
                  <h3 className="text-3xl font-display font-bold text-white">{work.brand}</h3>
                  <p className="text-white/80 mt-2">{work.objective}</p>
                </div>
                <div className="p-8">
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="md:col-span-1">
                      <h4 className="font-semibold text-foreground mb-4">Key Results</h4>
                      <div className="space-y-4">
                        {Object.entries(work.results).map(([key, value], i) => (
                          <div key={i} className="flex justify-between items-center p-3 bg-muted rounded-lg">
                            <span className="text-muted-foreground capitalize">{key}</span>
                            <span className="font-bold text-cta-secondary">{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-semibold text-foreground mb-4">Campaign Work</h4>
                      <div className="grid grid-cols-2 gap-4">
                        {work.images.map((img, i) => (
                          <div key={i} className="aspect-video rounded-xl overflow-hidden">
                            <img src={img} alt={`${work.brand} work`} className="w-full h-full object-cover" loading="lazy" />
                          </div>
                        ))}
                      </div>
                      <p className="mt-4 text-muted-foreground">
                        <span className="font-semibold text-foreground">Approach:</span> {work.approach}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gulf Region & Real Estate */}
      <section className="section-padding bg-gradient-to-br from-slate-900 via-amber-900/20 to-slate-900 text-white">
        <div className="container-custom">
          <SectionTitle subtitle="Expanding reach across the Middle East & luxury real estate">
            <span className="text-white">Gulf Region & Real Estate</span>
          </SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {gulfProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur rounded-2xl overflow-hidden"
              >
                <div className="aspect-video">
                  <img src={project.image} alt={project.brand} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold mb-2">{project.brand}</h3>
                  {project.regions && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.regions.map((region, i) => (
                        <span key={i} className="px-2 py-1 bg-amber-500/20 rounded text-xs text-amber-300">{region}</span>
                      ))}
                    </div>
                  )}
                  {project.results && (
                    <p className="text-amber-300 font-semibold">{project.results}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          <h3 className="text-2xl font-display font-bold text-center mb-8">Luxury Real Estate Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {realEstateProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`p-6 bg-gradient-to-br ${project.color} rounded-2xl text-white`}
              >
                <h4 className="text-xl font-display font-bold mb-2">{project.brand}</h4>
                <p className="text-2xl font-bold mb-4">{project.value}</p>
                <div className="space-y-2">
                  {Object.entries(project.results).map(([key, value], i) => (
                    <div key={i} className="flex justify-between text-sm">
                      <span className="opacity-80 capitalize">{key}</span>
                      <span className="font-semibold">{value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Projects */}
      <section className="section-padding bg-muted/30">
        <div className="container-custom">
          <SectionTitle subtitle="Building the future with cutting-edge technology">
            Technical Projects
          </SectionTitle>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {technicalProjects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-6 bg-card rounded-2xl border border-border hover:border-cta-secondary/50 transition-all duration-300 group"
              >
                <project.icon className="w-12 h-12 text-cta-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-2xl font-bold text-cta-secondary">{project.result}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Video Production */}
      <section className="section-padding bg-gradient-to-br from-cta-dark to-slate-900 text-white">
        <div className="container-custom">
          <SectionTitle subtitle="Professional video content for digital platforms">
            <span className="text-white">Video Production</span>
          </SectionTitle>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {videoProjects.map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="relative aspect-video rounded-xl overflow-hidden group cursor-pointer"
              >
                <img 
                  src={project.thumbnail} 
                  alt={project.brand}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center">
                    <Play className="w-6 h-6 text-white fill-white" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="font-medium">{project.brand}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="section-padding bg-gradient-to-r from-cta-secondary to-cta-accent text-white text-center">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Let's create something extraordinary together.
            </p>
            <a 
              href="mailto:hello@chaarlog.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-cta-secondary rounded-full font-semibold hover:bg-white/90 transition-colors"
            >
              Get In Touch <ExternalLink className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Creds;
