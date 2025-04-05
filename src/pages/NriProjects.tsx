
import { ArrowRight, Building2, Map, Home, Landmark } from 'lucide-react';
import { Link } from 'react-router-dom';
import NriPortalNav from '../components/NriPortalNav';
import ContactCTA from '../components/ContactCTA';

const projects = [
  {
    id: 1,
    name: "Sobha Marina One",
    location: "Marine Drive, Kochi",
    type: "Luxury Apartments",
    price: "₹1.5 Cr onwards",
    bedrooms: "2, 3 & 4 BHK",
    area: "1250 - 3200 sq.ft.",
    completion: "Ready to Move",
    description: "Waterfront luxury apartments with panoramic views of the Arabian Sea and backwaters. Premium amenities include infinity pool, smart home features, and 24/7 concierge services.",
    highlights: [
      "Premium waterfront location",
      "World-class amenities",
      "High rental potential",
      "RERA approved"
    ],
    image: "https://via.placeholder.com/600x400?text=Sobha+Marina+One"
  },
  {
    id: 2,
    name: "Sobha Atlantis",
    location: "Edappally, Kochi",
    type: "Premium Apartments",
    price: "₹1.2 Cr onwards",
    bedrooms: "2 & 3 BHK",
    area: "1300 - 2600 sq.ft.",
    completion: "Dec 2025",
    description: "Iconic residential towers with modern design and luxury amenities. Features include clubhouse, swimming pool, fitness center, and landscaped gardens in a prime location.",
    highlights: [
      "Iconic architecture",
      "Premium amenities",
      "Strategic location",
      "Smart home features"
    ],
    image: "https://via.placeholder.com/600x400?text=Sobha+Atlantis"
  },
  {
    id: 3,
    name: "Sobha Metropolis",
    location: "City Center, Thrissur",
    type: "Luxury Apartments",
    price: "₹1.4 Cr onwards",
    bedrooms: "3 & 4 BHK",
    area: "1800 - 3200 sq.ft.",
    completion: "Ready to Move",
    description: "Urban luxury living in the heart of Thrissur's cultural district. Spacious apartments with premium finishes, dedicated workspace, and proximity to major cultural landmarks.",
    highlights: [
      "Central location",
      "Cultural district",
      "Spacious layouts",
      "Premium specifications"
    ],
    image: "https://via.placeholder.com/600x400?text=Sobha+Metropolis"
  },
  {
    id: 4,
    name: "Sobha Silver Estate",
    location: "Puzhakkal, Thrissur",
    type: "Premium Villas",
    price: "₹1.8 Cr onwards",
    bedrooms: "3 & 4 BHK",
    area: "2500 - 4000 sq.ft.",
    completion: "June 2026",
    description: "Exclusive gated villa community with silver-themed architecture and landscaping. Features spacious plots, private gardens, and premium community facilities.",
    highlights: [
      "Gated community",
      "Spacious villa plots",
      "Exclusive clubhouse",
      "Premium landscaping"
    ],
    image: "https://via.placeholder.com/600x400?text=Sobha+Silver+Estate"
  }
];

const NriProjects = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-cta-dark via-cta-primary to-cta-secondary text-white">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
              Sobha Projects
            </h1>
            <p className="text-xl text-white/90">
              Exclusive premium residential projects in Kochi & Thrissur designed for discerning NRI investors.
            </p>
          </div>
        </div>
      </section>

      <NriPortalNav />

      {/* Projects Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-center">
              <span className="gradient-text">Premium Residential Offerings</span>
            </h2>
            <p className="text-lg text-gray-600 text-center">
              Sobha Limited brings its legacy of excellence to Kerala with these premium residential projects in Kochi and Thrissur,
              designed specifically with NRI requirements in mind.
            </p>
          </div>

          {/* Project Filter - Removed as requested */}

          {/* Projects List */}
          <div className="space-y-12">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  <div className="lg:col-span-1">
                    <img 
                      src={project.image} 
                      alt={project.name} 
                      className="h-64 lg:h-full w-full object-cover"
                    />
                  </div>
                  <div className="lg:col-span-2 p-6 lg:p-8">
                    <h3 className="text-2xl font-display font-bold mb-2 text-gray-800">
                      {project.name}
                    </h3>
                    
                    <div className="flex items-center text-gray-600 mb-4">
                      <Map size={16} className="mr-2" />
                      <span>{project.location}</span>
                    </div>
                    
                    <p className="text-gray-600 mb-6">
                      {project.description}
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center text-cta-primary mb-1">
                          <Building2 size={16} className="mr-1" />
                          <span className="text-sm font-semibold">Type</span>
                        </div>
                        <p className="text-sm">{project.type}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center text-cta-primary mb-1">
                          <Landmark size={16} className="mr-1" />
                          <span className="text-sm font-semibold">Price</span>
                        </div>
                        <p className="text-sm">{project.price}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center text-cta-primary mb-1">
                          <Home size={16} className="mr-1" />
                          <span className="text-sm font-semibold">Config</span>
                        </div>
                        <p className="text-sm">{project.bedrooms}</p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <div className="flex items-center text-cta-primary mb-1">
                          <ArrowRight size={16} className="mr-1" />
                          <span className="text-sm font-semibold">Completion</span>
                        </div>
                        <p className="text-sm">{project.completion}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.highlights.map((highlight, index) => (
                        <span key={index} className="bg-cta-accent/10 text-cta-accent text-xs font-medium px-3 py-1 rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                    
                    {/* Removed Schedule Virtual Tour and Project Details buttons */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NRI Benefits */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-3xl font-display font-bold mb-6 text-center">
              <span className="gradient-text">NRI Exclusive Benefits</span>
            </h2>
            <p className="text-lg text-gray-600 text-center">
              Sobha offers exclusive advantages for Non-Resident Indians investing in our Kochi and Thrissur properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-cta-accent/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-cta-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hassle-Free Ownership</h3>
              <p className="text-gray-600">
                Dedicated NRI desk to handle all documentation, legal formalities, and regulatory approvals without requiring your presence in India.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-cta-accent/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Landmark className="w-7 h-7 text-cta-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Property Management</h3>
              <p className="text-gray-600">
                End-to-end property management services including maintenance, rental management, and security for absentee owners.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-cta-accent/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Home className="w-7 h-7 text-cta-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3">NRI Financing</h3>
              <p className="text-gray-600">
                Special NRI home loan options with preferential rates through our banking partners, including simplified application processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Removed FAQ Section and Contact CTA as requested */}
    </main>
  );
};

export default NriProjects;
