import { motion } from 'framer-motion';
import { 
  Users, Target, Lightbulb, TrendingUp, Globe, Video, 
  Code, Smartphone, Share2, Camera, MessageSquare, BarChart3,
  CheckCircle, ArrowRight, Play, ExternalLink, Briefcase
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

// Client logos with actual images from PPT
const clientLogos = {
  longTerm: [
    { name: 'Client 1', logo: '/creds/clients/logo1.jpg' },
    { name: 'Client 2', logo: '/creds/clients/logo2.png' },
    { name: 'Client 3', logo: '/creds/clients/logo3.jpg' },
    { name: 'Client 4', logo: '/creds/clients/logo4.jpg' },
  ],
  midTerm: [
    { name: 'Client 5', logo: '/creds/clients/logo5.png' },
    { name: 'Client 6', logo: '/creds/clients/logo6.png' },
    { name: 'Client 7', logo: '/creds/clients/logo7.jpg' },
    { name: 'Client 8', logo: '/creds/clients/logo8.jpg' },
  ],
  recent: [
    { name: 'Client 9', logo: '/creds/clients/logo9.jpg' },
    { name: 'Client 10', logo: '/creds/clients/logo10.jpg' },
    { name: 'Client 11', logo: '/creds/clients/logo11.png' },
    { name: 'Client 12', logo: '/creds/clients/logo12.jpg' },
  ]
};

const socialMediaWork = [
  {
    brand: 'JBL',
    logo: '/creds/jbl/jbl1.jpg',
    objective: '#MuteTheWorld Campaign',
    description: 'Helped grow social media following by 100%',
    stats: { metric1: '100%', label1: 'Growth', metric2: '200+', label2: 'Posts' },
    approach: 'Business scenario analysis, creative approach, results-driven content strategy',
    images: [
      '/creds/jbl/jbl1.jpg', '/creds/jbl/jbl2.jpg', '/creds/jbl/jbl3.jpg', '/creds/jbl/jbl4.jpg',
      '/creds/jbl/jbl5.jpg', '/creds/jbl/jbl6.jpg', '/creds/jbl/jbl7.jpg', '/creds/jbl/jbl8.jpg',
      '/creds/jbl/jbl9.jpg', '/creds/jbl/jbl10.jpg', '/creds/jbl/jbl11.jpg', '/creds/jbl/jbl12.jpg',
      '/creds/jbl/jbl13.jpg', '/creds/jbl/jbl14.jpg', '/creds/jbl/jbl15.jpg', '/creds/jbl/jbl16.jpg'
    ],
    color: 'from-orange-500 to-red-600'
  },
  {
    brand: 'Kohinoor Basmati Rice',
    logo: '/creds/kohinoor/kohinoor1.jpg',
    objective: 'Social Media Expansion',
    description: 'Helped in expanding consumers through social media platform',
    stats: { metric1: '1,329', label1: 'Posts', metric2: '4,233', label2: 'Followers' },
    approach: 'Recipe content, festive posts, consumer engagement campaigns',
    images: [
      '/creds/kohinoor/kohinoor1.jpg', '/creds/kohinoor/kohinoor2.jpg', '/creds/kohinoor/kohinoor3.jpg', '/creds/kohinoor/kohinoor4.jpg',
      '/creds/kohinoor/kohinoor5.jpg', '/creds/kohinoor/kohinoor6.jpg', '/creds/kohinoor/kohinoor7.jpg', '/creds/kohinoor/kohinoor8.jpg',
      '/creds/kohinoor/kohinoor9.jpg', '/creds/kohinoor/kohinoor10.jpg', '/creds/kohinoor/kohinoor11.jpg', '/creds/kohinoor/kohinoor12.jpg'
    ],
    color: 'from-amber-500 to-orange-600'
  },
  {
    brand: 'Parryware',
    logo: '/creds/parryware/parryware1.jpg',
    objective: 'Brand Building',
    description: 'Helped in Brand Building through social media platform',
    stats: { metric1: '479', label1: 'Posts', metric2: '7,542', label2: 'Followers' },
    approach: 'Product launches, occasion-based marketing, brand awareness',
    images: [
      '/creds/parryware/parryware1.jpg', '/creds/parryware/parryware2.jpg', '/creds/parryware/parryware3.jpg', '/creds/parryware/parryware4.jpg',
      '/creds/parryware/parryware5.jpg', '/creds/parryware/parryware6.jpg', '/creds/parryware/parryware7.jpg', '/creds/parryware/parryware8.jpg',
      '/creds/parryware/parryware9.jpg', '/creds/parryware/parryware10.jpg'
    ],
    color: 'from-blue-500 to-cyan-600'
  },
  {
    brand: 'Sleepwell',
    logo: '/creds/sleepwell/sleepwell1.jpg',
    objective: 'Sleep Awareness',
    description: 'Putting you to better sleep since 1971',
    stats: { metric1: '503', label1: 'Posts', metric2: '13.2K', label2: 'Followers' },
    approach: 'Olympic campaigns, sleep awareness contests, celebrity endorsements',
    images: [
      '/creds/sleepwell/sleepwell1.jpg', '/creds/sleepwell/sleepwell2.jpg', '/creds/sleepwell/sleepwell3.jpg', '/creds/sleepwell/sleepwell4.jpg',
      '/creds/sleepwell/sleepwell5.jpg', '/creds/sleepwell/sleepwell6.jpg', '/creds/sleepwell/sleepwell7.jpg', '/creds/sleepwell/sleepwell8.jpg',
      '/creds/sleepwell/sleepwell9.jpg', '/creds/sleepwell/sleepwell10.jpg', '/creds/sleepwell/sleepwell11.jpg'
    ],
    color: 'from-purple-500 to-indigo-600'
  },
  {
    brand: 'V-Mart',
    logo: '/creds/vmart/vmart1.jpg',
    objective: 'Disruptive Content',
    description: 'Create content which is relevant, easy to comprehend & disruptive',
    stats: { metric1: '850+', label1: 'Posts', metric2: '25K+', label2: 'Followers' },
    approach: 'Festival campaigns, occasion content, regional engagement',
    images: [
      '/creds/vmart/vmart1.jpg', '/creds/vmart/vmart2.jpg', '/creds/vmart/vmart3.jpg', '/creds/vmart/vmart4.jpg',
      '/creds/vmart/vmart5.jpg', '/creds/vmart/vmart6.jpg', '/creds/vmart/vmart7.jpg', '/creds/vmart/vmart8.jpg'
    ],
    color: 'from-pink-500 to-rose-600'
  },
  {
    brand: 'Fortis Healthcare',
    logo: '/creds/fortis/fortis1.jpg',
    objective: 'Healthcare Awareness',
    description: 'Healthcare awareness and patient engagement campaigns',
    stats: { metric1: '320+', label1: 'Posts', metric2: '15K+', label2: 'Followers' },
    approach: '#GoWithTheFlow campaign, Oncology awareness, Health tips',
    images: [
      '/creds/fortis/fortis1.jpg', '/creds/fortis/fortis2.jpg', '/creds/fortis/fortis3.jpg', '/creds/fortis/fortis4.jpg',
      '/creds/fortis/fortis5.jpg', '/creds/fortis/fortis6.jpg', '/creds/fortis/fortis7.jpg', '/creds/fortis/fortis8.jpg',
      '/creds/fortis/fortis9.jpg'
    ],
    color: 'from-teal-500 to-emerald-600'
  }
];

const influencerCampaigns = [
  {
    brand: 'V-Mart Micro-influencers',
    description: '300 micro-influencers across key geographies',
    approach: 'Regional targeting, authentic content, high engagement rates',
    results: 'Increased brand visibility in Tier 2 & 3 cities',
    images: ['/creds/vmart-influencer/vmart-inf1.jpg', '/creds/vmart-influencer/vmart-inf2.jpg', '/creds/vmart-influencer/vmart-inf3.jpg', '/creds/vmart-influencer/vmart-inf4.jpg']
  },
  {
    brand: 'Sleepwell Celebrity Campaign',
    description: 'Top celebrities for brand endorsement',
    influencers: ['Yasmin Karachiwala', 'Samantha Akkineni', 'Suresh Raina', 'Malaika Arora'],
    results: 'Massive reach and brand recall improvement',
    images: ['/creds/sleepwell-influencer/sleepwell-inf1.png', '/creds/sleepwell-influencer/sleepwell-inf2.jpg', '/creds/sleepwell-influencer/sleepwell-inf3.jpg']
  },
  {
    brand: 'Canara HSBC Life Insurance',
    description: 'Influencer-driven awareness campaign',
    approach: 'Financial influencers, trust-building content',
    results: 'Increased policy inquiries and brand trust',
    images: ['/creds/canara-hsbc/canara1.jpg', '/creds/canara-hsbc/canara2.jpg']
  }
];

const performanceMarketing = [
  {
    brand: 'Tetra Pak',
    objective: 'Drive website traffic and engagement',
    results: { metric1: '183,528', label1: 'Traffic', metric2: '7x', label2: 'Growth' },
    approach: 'SEO optimization, content marketing, paid campaigns',
    images: [
      '/creds/tetra-pak/tetra1.png', '/creds/tetra-pak/tetra2.jpg', '/creds/tetra-pak/tetra3.jpg', '/creds/tetra-pak/tetra4.jpg',
      '/creds/tetra-pak/tetra5.jpg', '/creds/tetra-pak/tetra6.jpg', '/creds/tetra-pak/tetra7.png', '/creds/tetra-pak/tetra8.jpg',
      '/creds/tetra-pak/tetra9.jpg', '/creds/tetra-pak/tetra10.jpg'
    ],
    color: 'from-green-500 to-emerald-600'
  },
  {
    brand: 'AlchemLife',
    objective: 'Improve conversion rates and lead generation',
    results: { metric1: '2% → 9%', label1: 'Conversion', metric2: '350%', label2: 'Increase' },
    approach: 'CPA optimization, lead nurturing, retention strategies',
    images: [
      '/creds/alchemlife/alchemlife1.png', '/creds/alchemlife/alchemlife2.png', '/creds/alchemlife/alchemlife3.jpg',
      '/creds/alchemlife/alchemlife4.jpg', '/creds/alchemlife/alchemlife5.png', '/creds/alchemlife/alchemlife6.png'
    ],
    color: 'from-violet-500 to-purple-600'
  },
  {
    brand: 'BMW Deutsche Motoren',
    objective: 'Make BMW preferred choice for luxury segment',
    results: { metric1: '50+', label1: 'Events', metric2: 'Premium', label2: 'Reach' },
    approach: 'Kids Canvas Program, Golf events, experiential marketing',
    images: ['/creds/bmw/bmw1.jpg', '/creds/bmw/bmw2.jpg', '/creds/bmw/bmw3.jpg'],
    color: 'from-slate-600 to-slate-800'
  }
];

const gulfProjects = [
  {
    brand: 'Lebane Solutions',
    regions: ['Jordan', 'Kuwait', 'Bahrain', 'Qatar', 'Saudi Arabia', 'UAE', 'Oman', 'Yemen'],
    description: 'Multi-country digital marketing operations',
    images: ['/creds/lebane/lebane1.jpg', '/creds/lebane/lebane2.jpg', '/creds/lebane/lebane3.jpg']
  },
  {
    brand: 'Aster Pharmacy UAE',
    results: '15% revenue growth in 4 months',
    approach: 'Google Search Ads, geo-targeted campaigns',
    images: ['/creds/aster/aster1.jpg']
  }
];

const realEstateProjects = [
  {
    brand: 'DAMAC Lagoons',
    value: '$2B project',
    results: { sold: '65%', cpl: '30%↓', leads: '15,000' },
    images: ['/creds/damac/damac1.jpg', '/creds/damac/damac2.jpg'],
    color: 'from-amber-600 to-yellow-500'
  },
  {
    brand: 'Urban Oasis by Missoni',
    value: '$450M project',
    results: { sold: '75%', cpl: '2M', leads: 'Views' },
    images: ['/creds/missoni/missoni1.jpg', '/creds/missoni/missoni2.jpg'],
    color: 'from-rose-600 to-pink-500'
  },
  {
    brand: 'Yasmeen City Qatar',
    value: '$1.3B project',
    results: { sold: '80%', cpl: '35%↑', leads: 'Engage' },
    images: ['/creds/yasmeen/yasmeen1.jpg', '/creds/yasmeen/yasmeen2.jpg'],
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

const googleArtsProject = {
  brand: 'Google Arts & Culture',
  description: 'Heritage businesses documentation and preservation',
  images: [
    '/creds/google-arts/google1.jpg', '/creds/google-arts/google2.jpg', '/creds/google-arts/google3.jpg',
    '/creds/google-arts/google4.jpg', '/creds/google-arts/google5.jpg'
  ]
};

const videoProjects = [
  { brand: 'Video 1', thumbnail: '/creds/video/video1.png' },
  { brand: 'Video 2', thumbnail: '/creds/video/video2.png' },
  { brand: 'Video 3', thumbnail: '/creds/video/video3.jpg' },
  { brand: 'Video 4', thumbnail: '/creds/video/video4.jpg' }
];

// ============ COMPONENTS ============

const SectionTitle = ({ children, subtitle, light = false }: { children: React.ReactNode; subtitle?: string; light?: boolean }) => (
  <div className="text-center mb-12">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`text-3xl md:text-5xl font-display font-bold mb-4 ${light ? 'text-white' : 'text-foreground'}`}
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className={`text-lg max-w-2xl mx-auto ${light ? 'text-white/70' : 'text-muted-foreground'}`}
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

const ClientLogo = ({ logo, name }: { logo: string; name: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="flex items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
    style={{ minWidth: '140px', height: '80px' }}
  >
    <img 
      src={logo} 
      alt={name}
      className="max-h-12 max-w-[120px] object-contain"
      loading="lazy"
    />
  </motion.div>
);

const ImageGallery = ({ images, brand }: { images: string[]; brand: string }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
    {images.slice(0, 8).map((img, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.05 }}
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
      {/* Section 1: Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cta-dark via-cta-primary to-cta-dark">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cta-secondary rounded-full blur-[120px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cta-accent rounded-full blur-[150px]" />
        </div>
        
        <div className="container-custom relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/creds/intro/logo.jpg" 
              alt="Chaar Log Communications" 
              className="w-32 h-32 mx-auto mb-8 rounded-2xl shadow-2xl"
            />
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6">
              CHAAR LOG
              <span className="block text-cta-secondary">COMMUNICATIONS</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8">
              A Digital Marketing venture by the people
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-white/60">
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Social Media</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Performance Marketing</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">Influencer Marketing</span>
              <span className="px-4 py-2 bg-white/10 rounded-full text-sm">AI & Tech</span>
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

      {/* Section 2: Who Are We */}
      <section className="py-20 bg-background">
        <div className="container-custom px-4">
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

      {/* Section 3: What We Do - Services */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom px-4">
          <SectionTitle subtitle="Comprehensive digital solutions for modern brands">
            What We Do
          </SectionTitle>
          
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto"
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

      {/* Section 4: AI & Software Development */}
      <section className="py-20 bg-gradient-to-br from-cta-dark to-slate-900 text-white">
        <div className="container-custom px-4">
          <SectionTitle subtitle="Cutting-edge technology solutions powered by AI" light>
            AI & Software Development
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

      {/* Section 5: Our Clients - Logo Grid */}
      <section className="py-20 bg-background">
        <div className="container-custom px-4">
          <SectionTitle subtitle="Trusted by leading brands across industries">
            Our Prized Possessions
          </SectionTitle>
          
          {/* Main client logos image */}
          <div className="max-w-4xl mx-auto mb-12">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src="/creds/clients/logos-main.jpg"
              alt="Our Clients"
              className="w-full rounded-2xl shadow-lg"
            />
          </div>
          
          <div className="space-y-16 max-w-6xl mx-auto">
            {/* Long Term Partners */}
            <div>
              <h3 className="text-lg font-semibold text-cta-secondary mb-6 text-center">4+ Years Partnership</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {clientLogos.longTerm.map((client, idx) => (
                  <ClientLogo key={idx} logo={client.logo} name={client.name} />
                ))}
              </div>
            </div>
            
            {/* Mid Term Partners */}
            <div>
              <h3 className="text-lg font-semibold text-muted-foreground mb-6 text-center">2-4 Years Partnership</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {clientLogos.midTerm.map((client, idx) => (
                  <ClientLogo key={idx} logo={client.logo} name={client.name} />
                ))}
              </div>
            </div>
            
            {/* Recent Partners */}
            <div>
              <h3 className="text-lg font-semibold text-muted-foreground mb-6 text-center">Recent Partnerships</h3>
              <div className="flex flex-wrap justify-center gap-4">
                {clientLogos.recent.map((client, idx) => (
                  <ClientLogo key={idx} logo={client.logo} name={client.name} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Social Media Management */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom px-4">
          <SectionTitle subtitle="Building brand presence across digital platforms">
            Social Media Management
          </SectionTitle>
          
          <div className="space-y-20 max-w-6xl mx-auto">
            {socialMediaWork.map((work, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-3xl overflow-hidden border border-border shadow-lg"
              >
                {/* Header with Brand Info */}
                <div className={`p-6 bg-gradient-to-r ${work.color} text-white`}>
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-white rounded-xl p-2 flex items-center justify-center">
                      <img src={work.logo} alt={work.brand} className="max-h-10 max-w-12 object-contain" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-display font-bold">{work.brand}</h3>
                      <p className="text-white/80">{work.objective}</p>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <p className="text-lg text-foreground mb-6">{work.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <StatCard value={work.stats.metric1} label={work.stats.label1} />
                    <StatCard value={work.stats.metric2} label={work.stats.label2} />
                  </div>
                  
                  <div className="p-4 bg-muted/50 rounded-xl mb-6">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold text-foreground">Approach:</span> {work.approach}
                    </p>
                  </div>
                  
                  <ImageGallery images={work.images} brand={work.brand} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Influencer Marketing */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 text-white">
        <div className="container-custom px-4">
          <SectionTitle subtitle="Leveraging authentic voices for brand amplification" light>
            Influencer Marketing
          </SectionTitle>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {influencerCampaigns.map((campaign, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 backdrop-blur rounded-2xl overflow-hidden border border-white/10"
              >
                <div className="grid grid-cols-2 gap-1 p-1">
                  {campaign.images.slice(0, 4).map((img, i) => (
                    <div key={i} className="aspect-square">
                      <img 
                        src={img} 
                        alt={`${campaign.brand} ${i + 1}`}
                        className="w-full h-full object-cover rounded"
                        loading="lazy"
                      />
                    </div>
                  ))}
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
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-emerald-400 font-medium">{campaign.results}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Performance Marketing */}
      <section className="py-20 bg-background">
        <div className="container-custom px-4">
          <SectionTitle subtitle="Data-driven campaigns that deliver measurable results">
            Performance Marketing
          </SectionTitle>
          
          <div className="space-y-12 max-w-6xl mx-auto">
            {performanceMarketing.map((work, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-card rounded-2xl overflow-hidden border border-border shadow-lg"
              >
                <div className={`p-6 bg-gradient-to-r ${work.color} text-white`}>
                  <h3 className="text-2xl font-display font-bold">{work.brand}</h3>
                  <p className="text-white/80">{work.objective}</p>
                </div>
                
                <div className="p-6">
                  <p className="text-foreground mb-4">{work.approach}</p>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <StatCard value={work.results.metric1} label={work.results.label1} />
                    <StatCard value={work.results.metric2} label={work.results.label2} />
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {work.images.slice(0, 4).map((img, i) => (
                      <div key={i} className="aspect-square rounded-xl overflow-hidden">
                        <img src={img} alt={`${work.brand} ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Gulf Region & Real Estate */}
      <section className="py-20 bg-gradient-to-br from-amber-900 via-orange-900 to-rose-900 text-white">
        <div className="container-custom px-4">
          <SectionTitle subtitle="Expanding brands across the Middle East" light>
            Gulf Region & Real Estate
          </SectionTitle>
          
          <div className="max-w-6xl mx-auto">
            {/* Gulf Projects */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {gulfProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur rounded-2xl overflow-hidden border border-white/10"
                >
                  <div className="grid grid-cols-2 gap-1 p-1">
                    {project.images.slice(0, 2).map((img, i) => (
                      <div key={i} className="aspect-video">
                        <img src={img} alt={`${project.brand} ${i + 1}`} className="w-full h-full object-cover rounded" loading="lazy" />
                      </div>
                    ))}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold mb-2">{project.brand}</h3>
                    <p className="text-white/70 mb-4">{project.description || project.approach}</p>
                    {project.regions && (
                      <div className="flex flex-wrap gap-2">
                        {project.regions.map((region, i) => (
                          <span key={i} className="px-3 py-1 bg-white/20 rounded-full text-xs">{region}</span>
                        ))}
                      </div>
                    )}
                    {project.results && (
                      <p className="text-emerald-400 font-semibold">{project.results}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Real Estate Projects */}
            <h3 className="text-2xl font-display font-bold text-center mb-8">Real Estate Projects</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {realEstateProjects.map((project, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`rounded-2xl overflow-hidden bg-gradient-to-br ${project.color} text-white`}
                >
                  <div className="grid grid-cols-2 gap-1 p-1">
                    {project.images.map((img, i) => (
                      <div key={i} className="aspect-video">
                        <img src={img} alt={`${project.brand} ${i + 1}`} className="w-full h-full object-cover rounded" loading="lazy" />
                      </div>
                    ))}
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-display font-bold mb-2">{project.brand}</h4>
                    <p className="text-white/80 text-lg mb-4">{project.value}</p>
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="p-2 bg-black/20 rounded-lg">
                        <div className="font-bold">{project.results.sold}</div>
                        <div className="text-xs text-white/60">Sold</div>
                      </div>
                      <div className="p-2 bg-black/20 rounded-lg">
                        <div className="font-bold">{project.results.cpl}</div>
                        <div className="text-xs text-white/60">CPL</div>
                      </div>
                      <div className="p-2 bg-black/20 rounded-lg">
                        <div className="font-bold">{project.results.leads}</div>
                        <div className="text-xs text-white/60">Leads</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 10: Technical Projects */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom px-4">
          <SectionTitle subtitle="Innovative technology solutions that drive business growth">
            Technical Work
          </SectionTitle>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {technicalProjects.map((project, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="p-6 bg-card rounded-2xl border border-border hover:border-cta-secondary/50 transition-all duration-300 group"
              >
                <project.icon className="w-12 h-12 text-cta-secondary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-display font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-cta-secondary font-semibold">{project.result}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Section 11: Google Arts & Culture */}
      <section className="py-20 bg-background">
        <div className="container-custom px-4">
          <SectionTitle subtitle="Preserving heritage through digital storytelling">
            Google Arts & Culture
          </SectionTitle>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto bg-card rounded-2xl overflow-hidden border border-border shadow-lg"
          >
            <div className="p-6 bg-gradient-to-r from-blue-600 to-green-600 text-white">
              <h3 className="text-2xl font-display font-bold">{googleArtsProject.brand}</h3>
              <p className="text-white/80">{googleArtsProject.description}</p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {googleArtsProject.images.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="aspect-square rounded-xl overflow-hidden"
                  >
                    <img src={img} alt={`Google Arts ${idx + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 12: Video Production */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom px-4">
          <SectionTitle subtitle="Professional video content that tells your brand story">
            Video Production
          </SectionTitle>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {videoProjects.map((video, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-video rounded-2xl overflow-hidden cursor-pointer"
              >
                <img 
                  src={video.thumbnail} 
                  alt={video.brand}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Play className="w-12 h-12 text-white" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-white font-semibold">{video.brand}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 13: CTA Footer */}
      <section className="py-20 bg-gradient-to-br from-cta-dark via-cta-primary to-cta-dark text-white">
        <div className="container-custom px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Ready to Transform Your Brand?
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
              Let's create something extraordinary together. Reach out to discuss your next project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:hello@chaarlog.com"
                className="px-8 py-4 bg-white text-cta-dark font-semibold rounded-full hover:bg-cta-secondary hover:text-white transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="/contact"
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-cta-dark transition-colors flex items-center gap-2"
              >
                View Our Work <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Creds;
