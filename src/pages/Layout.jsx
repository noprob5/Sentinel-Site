

import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X, Plus, Minus, Phone, Mail, Shield, Zap, Users, Building2, MapPin, Instagram, Battery, Fuel, Radio, Cpu, Eye, Wifi, Flag, Lock, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from 'framer-motion';
import AnalyticsLoader from "@/components/AnalyticsLoader";
import GTMLoader from "@/components/GTMLoader"; // Assuming GTMLoader is in components directory

const solutionsData = [
  { 
    name: "Sentinel 1", 
    description: "Solar + lithium battery platform for low-to-moderate power systems", 
    url: createPageUrl("Sentinel1"), 
    icon: Battery, 
    content: { 
      title: "Sentinel 1: Solar + Battery Platform", 
      description: "Configurable 400-800W solar with 1,500Ah lithium battery bank. Ideal for surveillance, communications relay, edge computing, and light radar systems with up to 2kW continuous load.", 
      image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/b5bab9e5-bd1b-4545-b5a2-52f0aedfc300/public" 
    } 
  },
  { 
    name: "Sentinel Advantage", 
    description: "Solar + battery + 3kW generator for higher-draw equipment", 
    url: createPageUrl("SentinelAdvantage"), 
    icon: Zap, 
    content: { 
      title: "Sentinel Advantage: Hybrid Power Platform", 
      description: "Combines 400-800W solar, 1,500Ah lithium batteries, and integrated 3kW auto-start generator. Supports up to 3kW continuous load without downtime for mission-critical operations.", 
      image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/62a2a532-d342-412f-d36e-cc7327a36000/public" 
    } 
  },
  { 
    name: "Sentinel Advantage+", 
    description: "Heavy-duty 20kW generator platform for high-power military/industrial systems", 
    url: createPageUrl("SentinelAdvantagePlus"), 
    icon: Fuel, 
    content: { 
      title: "Sentinel Advantage+: Heavy-Duty Power Platform", 
      description: "Primary 20kW generator platform designed for radar arrays, EW systems, runway lighting, and other high-power continuous-load applications up to 20kW.", 
      image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/59f7962d-5209-406b-1046-2407e2ca8a00/public" 
    } 
  }
];

const capabilitiesData = [
  { name: "Electronic Warfare Support", url: createPageUrl("Capabilities#electronic-warfare-support"), icon: Radio, content: { title: "Dominate the Spectrum", description: "Our platforms provide the stable, high-power foundation your EW equipment needs to operate effectively, from SIGINT to tactical jamming.", image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/4e11e108-856c-4e0a-6954-19c0a3eefb00/public" } },
  { name: "Systems Integration", url: createPageUrl("Capabilities#systems-integration"), icon: Shield, content: { title: "Your Tech, Mission-Ready", description: "Bring your own sensors, cameras, and software. Our team are experts at integrating third-party technology into our ruggedized mobile platforms.", image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/1f2c8adf-baf2-4020-59ce-bae2574b0900/public" } },
  { name: "Edge Computing", url: createPageUrl("Capabilities#edge-computing"), icon: Cpu, content: { title: "AI & Analytics at the Source", description: "Reduce latency and bandwidth requirements by processing data where it's collected with powerful onboard computing and AI accelerators.", image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/2c8e1000-f015-4e18-160b-ef3803267600/public" } },
  { name: "Surveillance & Monitoring", url: createPageUrl("Capabilities#surveillance-monitoring"), icon: Eye, content: { title: "Persistent Overwatch", description: "Deploy high-resolution cameras, thermal imagers, and ground-based radar for 360-degree, 24/7 situational awareness.", image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/f1900b40-d103-4515-7285-c21f6ebf1a00/public" } },
  { name: "Mobile Power Systems", url: createPageUrl("Capabilities#mobile-power-systems"), icon: Zap, content: { title: "Power Anywhere", description: "Our hybrid power systems ensure your critical equipment stays online in the most remote and austere environments.", image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/d13b028a-b74e-4262-8a80-059e495c5f00/public" } },
  { name: "Communications Relay", url: createPageUrl("Capabilities#communications-relay"), icon: Wifi, content: { title: "Extend Your Network", description: "Establish reliable LTE, mesh, and satellite communication networks where traditional infrastructure is unavailable.", image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/8ff5533b-d9d7-4f45-1d3e-213ce3477a00/public" } }
];

const industriesData = [
  { name: "Military & Defense", url: createPageUrl("MilitaryAndDefense"), icon: Flag, content: { title: "For the Warfighter", description: "NDAA-compliant, battle-tested platforms for tactical operations, base security, and force protection.", image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/2456520c-1b70-4fee-7270-751a72657200/public" } },
  { name: "Law Enforcement & Public Safety", url: createPageUrl("LawEnforcement"), icon: Shield, content: { title: "A Tactical Force Multiplier", description: "Mobile command posts and surveillance platforms for crowd control, crime deterrence, and emergency response.", image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/32ec378d-11be-4f37-4d50-a5ab6c2fcd00/public" } },
  { name: "Critical Infrastructure Protection", url: createPageUrl("CriticalInfrastructure"), icon: Building2, content: { title: "Protecting Vital Assets", description: "Secure vital assets like power grids, water systems, and communication networks with autonomous monitoring.", image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/b6885b4d-37c2-41c6-3b83-58eb7abe7100/public" } },
  { name: "Private Security", url: createPageUrl("PrivateSecurity"), icon: Lock, content: { title: "Proven ROI for Security Operations", description: "Enhanced security solutions for construction sites, commercial properties, and special events with proven ROI.", image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/cb38c2db-c67c-4a9e-2926-fbcd3005e500/public" } }
];

const aboutData = [
  { name: "Company Overview", url: createPageUrl("About"), icon: Building2, content: { title: "Who We Are", description: "We are engineers and innovators dedicated to creating the most reliable mobile surveillance solutions on the market.", image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/ece10edd-9343-45b4-bb82-7eb4c23e9800/public" } },
  { name: "Partners", url: createPageUrl("Partnership"), icon: Users, content: { title: "Build Your Security Empire", description: "Join the mobile surveillance revolution. Unlike others who only lease, we offer you the opportunity to own your fleet.", image: "https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/b8727a17-d2e4-4ee4-5ac7-f4aa484c6c00/public" } },
  { name: "Contact", url: createPageUrl("Contact"), icon: Phone, content: { title: "Get in Touch", description: "Our integration specialists are ready to discuss your specific requirements and design a custom solution for your mission.", image: null } }
];

export default function Layout({ children, currentPageName }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [isAtTop, setIsAtTop] = React.useState(true);
  const [isScrollingDown, setIsScrollingDown] = React.useState(false);
  const [lastScrollY, setLastScrollY] = React.useState(0);
  const [isNavHovered, setIsNavHovered] = React.useState(false);
  const [activeMenuName, setActiveMenuName] = React.useState(null); // State to track which mega menu is active
  const [expandedMobileSection, setExpandedMobileSection] = React.useState(null);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsAtTop(currentScrollY < 50);
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsScrollingDown(true);
      } else if (currentScrollY < lastScrollY) {
        setIsScrollingDown(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
    setMobileMenuOpen(false);
    setActiveMenuName(null); // Close mega menu on page change
    setExpandedMobileSection(null); // Close mobile accordion sections on page change
  }, [location.pathname]);

  const navigationItems = [
    { name: "Solutions", items: solutionsData },
    { name: "Capabilities", items: capabilitiesData },
    { name: "Industries", items: industriesData },
    { name: "About", items: aboutData }
  ];

  const MegaMenu = ({ items, onClose, activeItem }) => {
    const [hoveredItem, setHoveredItem] = React.useState(items[0]);
  
    React.useEffect(() => {
      if (activeItem && items.find(item => item.name === activeItem)) {
        setHoveredItem(items.find(item => item.name === activeItem));
      } else {
        setHoveredItem(items[0]);
      }
    }, [activeItem, items]);

    return (
      <motion.div 
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
        className="absolute top-full left-0 right-0 bg-black border-t border-[#333333] shadow-2xl z-50"
      >
        <div className="max-w-screen-xl mx-auto grid grid-cols-12">
          {/* Left Column */}
          <div className="col-span-4 border-r border-[#333333] p-8">
            <h3 className="uppercase text-sm text-[#666666] tracking-wider mb-6">Solutions</h3>
            <ul className="space-y-1">
              {items.map(item => (
                <li key={item.name} onMouseEnter={() => setHoveredItem(item)}>
                  <Link 
                    to={item.url} 
                    onClick={onClose}
                    className={`flex items-center justify-between gap-4 p-3 transition-all duration-200 group ${hoveredItem.name === item.name ? 'bg-[#1a1a1a]' : ''}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-1.5 transition-colors duration-200 ${hoveredItem.name === item.name ? 'bg-[#cbe30b]/20' : 'bg-transparent'}`}>
                        <item.icon className={`w-5 h-5 transition-colors duration-200 ${hoveredItem.name === item.name ? 'text-[#cbe30b]' : 'text-white'}`} />
                      </div>
                      <span className="text-white font-medium text-base">
                        {item.name}
                      </span>
                    </div>
                    <ChevronRight className={`w-5 h-5 text-[#666666] transition-opacity duration-200 ${hoveredItem.name === item.name ? 'opacity-100' : 'opacity-0'}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Right Column */}
          <div className="col-span-8 p-8 flex items-center">
            <AnimatePresence mode="wait">
              {hoveredItem && (
                <motion.div
                  key={hoveredItem.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="w-full"
                >
                  {hoveredItem.content.image ? (
                    <div className="grid grid-cols-2 gap-8 items-center">
                      <div className="space-y-4">
                        <h4 className="text-2xl text-[#cbe30b] font-bold">{hoveredItem.content.title}</h4>
                        <p className="text-[#e5e5e5] leading-relaxed">{hoveredItem.content.description}</p>
                        <Button asChild className="border-white text-white bg-transparent hover:bg-white hover:text-black border-2 transition-all duration-300">
                            <Link to={hoveredItem.url} onClick={onClose}>
                                Learn More <ChevronRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                      </div>
                      <div className="aspect-[4/3]">
                        <img 
                          src={hoveredItem.content.image} 
                          alt={hoveredItem.content.title} 
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </div>
                  ) : (
                    // Text-only layout for "Contact"
                    <div className="space-y-4 max-w-md">
                      <h4 className="text-2xl text-[#cbe30b] font-bold">{hoveredItem.content.title}</h4>
                      <p className="text-[#e5e5e5] leading-relaxed text-lg">{hoveredItem.content.description}</p>
                      <Button asChild className="border-white text-white bg-transparent hover:bg-white hover:text-black border-2 transition-all duration-300 mt-4">
                          <Link to={hoveredItem.url} onClick={onClose}>
                              Contact Us <ChevronRight className="w-4 h-4 ml-2" />
                          </Link>
                      </Button>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    );
  };

  const headerVisible = isAtTop || !isScrollingDown;
  const headerWhite = !isAtTop && headerVisible;
  
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-[#e5e5e5]">
      {/* Google Tag Manager (noscript) */}
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T37WP637"
      height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
      {/* End Google Tag Manager (noscript) */}

      <GTMLoader />
      <AnalyticsLoader />
      
      <style>{`* { border-radius: 0 !important; }`}</style>
      
      <nav 
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${headerVisible ? 'translate-y-0' : '-translate-y-full'} ${ mobileMenuOpen || isNavHovered ? 'bg-black shadow-lg' : headerWhite ? 'bg-white shadow-lg' : 'bg-transparent'}`}
        onMouseLeave={() => { setIsNavHovered(false); setActiveMenuName(null); }}
      >
        <div className="flex items-stretch h-20">
          <div className="flex flex-1 md:flex-initial">
            <Link 
              to={createPageUrl("Home")} 
              className={`relative flex items-center md:justify-center w-auto md:w-64 px-4 md:px-0 md:border-r transition-all duration-300 group ${ (headerWhite && !mobileMenuOpen && !isNavHovered) ? 'border-gray-300 text-black' : 'border-white text-white'}`}
            >
              <div className="absolute inset-0 -left-[100vw] w-[100vw] bg-black/50 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
              <img src="https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/b8c857b2-4b5f-4926-3bd8-3485b60b0200/public" alt="Sentinel Towers Logo" className={`relative z-10 h-8 md:h-10 w-auto transition-all duration-300 ${ (headerWhite && !mobileMenuOpen && !isNavHovered) ? 'filter invert' : ''}`} />
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-center relative">
            <div className="flex items-stretch">
              {navigationItems.map((item) => (
                <div 
                  key={item.name} 
                  className="relative group"
                  onMouseEnter={() => { setIsNavHovered(true); setActiveMenuName(item.name); }}
                >
                  <div className={`relative h-full flex items-center px-6 transition-all duration-300 ${headerWhite && !isNavHovered ? 'text-black' : 'text-white'}`}>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center gap-2 text-base font-medium cursor-pointer py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:bg-current after:origin-left after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform after:duration-300">
                      {item.name}
                      <div className="relative w-4 h-4">
                        <Plus className="absolute inset-0 w-4 h-4 transition-opacity duration-300 group-hover:opacity-0" />
                        <Minus className="absolute inset-0 w-4 h-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
                      </div>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex">
            <Link 
              to={createPageUrl("Contact")} 
              onMouseEnter={() => setIsNavHovered(true)} 
              className={`relative flex items-center justify-center w-64 border-l transition-all duration-300 group ${headerWhite && !isNavHovered ? 'border-gray-300 text-black' : 'border-white text-white'}`}
            >
              <div className="absolute inset-0 -right-[100vw] w-[100vw] bg-black/50 transform scale-x-0 origin-right group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10 text-base font-medium">Request Quote</span>
            </Link>
          </div>

          <div className={`flex md:hidden items-center ml-auto`}>
             <div className={`flex items-center justify-center w-16 h-full transition-all duration-300 ${ (headerWhite && !mobileMenuOpen) ? 'bg-black text-white' : 'bg-transparent text-white'}`}>
                <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="w-8 h-8 mx-auto"><Menu className="w-8 h-8 mx-auto" /></button>
              </div>
          </div>
        </div>
        
        <div className={`absolute bottom-0 left-0 w-full border-b transition-colors duration-300 ${ (headerWhite && !mobileMenuOpen && !isNavHovered) ? 'border-gray-300' : 'border-white'}`}></div>
        
        <AnimatePresence>
            {activeMenuName && (
                <MegaMenu
                    items={navigationItems.find(item => item.name === activeMenuName)?.items || []}
                    activeItem={activeMenuName}
                    onClose={() => setActiveMenuName(null)}
                />
            )}
        </AnimatePresence>
      </nav>

      <div className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-lg transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="pt-24 px-6 pb-4 space-y-4">
            {navigationItems.map(navItem => (
              <div key={navItem.name} className="border-b border-gray-700 pb-4">
                <button 
                  onClick={() => setExpandedMobileSection(expandedMobileSection === navItem.name ? null : navItem.name)}
                  className="flex items-center justify-between w-full text-left py-2" 
                >
                  <h3 className="text-xl font-bold text-white">{navItem.name}</h3>
                  <div className="text-white">
                    {expandedMobileSection === navItem.name ? '-' : '+'}
                  </div>
                </button>
                {expandedMobileSection === navItem.name && (
                  <div className="mt-4 ml-4 space-y-3">
                    {navItem.items.map(subItem => (
                      <Link 
                        key={subItem.name} 
                        to={subItem.url} 
                        className="block text-gray-400 hover:text-[#cbe30b] py-1" 
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        • {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
             <Link 
               to={createPageUrl("Contact")} 
               className="block text-xl font-bold text-white hover:text-[#cbe30b] py-4" 
               onClick={() => setMobileMenuOpen(false)}
             >
               Request Quote
             </Link>
          </div>
      </div>

      <main>{children}</main>

      <footer className="bg-black border-t border-[#333333]">
        <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <img src="https://imagedelivery.net/b-qZs7JHsDLDLCUFg8bbfg/b8c857b2-4b5f-4926-3bd8-3485b60b0200/public" alt="Sentinel Towers Logo" className="h-8 w-auto" />
              <p className="text-[#666666] text-sm">Mobile power, communications, and integration platforms for mission-critical technologies.</p>
              <div className="flex space-x-4">
                <a href="https://twitter.com/sentineltowers" target="_blank" rel="noopener noreferrer" className="text-[#666666] hover:text-[#cbe30b]"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></a>
                <a href="https://www.instagram.com/sentineltowers/" target="_blank" rel="noopener noreferrer" className="text-[#666666] hover:text-[#cbe30b]"><Instagram className="w-5 h-5" /></a>
                <a href="https://www.linkedin.com/company/sentinel-towers/" target="_blank" rel="noopener noreferrer" className="text-[#666666] hover:text-[#cbe30b]"><svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Solutions</h3>
              <ul className="space-y-2">
                {solutionsData.map((item) => (
                  <li key={item.name}><Link to={item.url} className="text-base text-[#666666] hover:text-white">{item.name}</Link></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Industries</h3>
              <ul className="space-y-2">
                {industriesData.map((item) => (
                  <li key={item.name}><Link to={item.url} className="text-base text-[#666666] hover:text-white">{item.name}</Link></li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2 text-base text-[#666666]">
                  <MapPin className="w-4 h-4 mt-1 flex-shrink-0"/> 
                  <span>223 Nick Fitcheard Rd NW<br/>Huntsville, AL 35806</span>
                </li>
                <li className="flex items-center gap-2 text-base text-[#666666]">
                  <Phone className="w-4 h-4"/> 
                  <div>
                    <div>Sales: 256‑690‑0143</div>
                    <div className="text-sm">sales@sentineltowers.com</div>
                  </div>
                </li>
              </ul>
              
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-white tracking-wider uppercase mb-2">Stay Updated</h4>
                <form action="https://formspree.io/f/xovloprz" method="POST" className="space-y-2">
                  <Input 
                    type="email" 
                    name="email"
                    placeholder="Enter your email"
                    className="bg-[#1a1a1a] border-[#333333] text-white"
                    required
                  />
                  <Button type="submit" className="w-full bg-[#cbe30b] hover:bg-[#a8bf0a] text-black font-bold">
                    Subscribe
                  </Button>
                </form>
              </div>
            </div>
          </div>
          
          <div className="mt-8 border-t border-[#333333] pt-8 text-center text-sm text-[#666666]">
            <p>&copy; {new Date().getFullYear()} Sentinel Towers. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

