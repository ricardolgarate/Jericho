import React, { useState, useEffect } from 'react';
import { ChevronDown, Heart, Star, Users, MapPin, Calendar, Quote } from 'lucide-react';

interface Photo {
  id: number;
  src: string;
  alt: string;
  description: string;
  isLarge?: boolean;
}

const photos: Photo[] = [
  {
    id: 1,
    src: "/images/gallery/bible-scripture.jpg",
    alt: "Annotated Bible with Joshua scripture",
    description: "Bible open to Joshua with annotations, showing the foundational scripture for The Jericho Project"
  },
  {
    id: 2,
    src: "/images/gallery/team-with-jericho.jpg",
    alt: "Loraina and Sebastian with Jericho",
    description: "Loraina and Sebastian bonding with Jericho during our service trip break",
    isLarge: true
  },
  {
    id: 3,
    src: "/images/gallery/community-service.jpg",
    alt: "Van Gogh team members",
    description: "The Van Gogh team members during our service trip to rural North Carolina"
  },
  {
    id: 4,
    src: "/images/gallery/jericho-before.jpg",
    alt: "Jericho close-up with heterochromia",
    description: "A close-up of Jericho showing his striking heterochromia eyes - one gold, one blue"
  },
  {
    id: 5,
    src: "/images/gallery/team-building-trampoline.jpg",
    alt: "Sebastian and Luke with Jericho",
    description: "Sebastian and Luke spending quality time with Jericho during our service work"
  },
  {
    id: 6,
    src: "/images/gallery/jericho-after.jpg",
    alt: "Jericho with heterochromia",
    description: "Another beautiful shot of Jericho, showcasing his unique heterochromia and gentle nature"
  }
];

const quotes = [
  {
    name: "Luke Haglund",
    text: "Working with Jericho showed me that sometimes the most meaningful connections happen when we least expect them. That wolf dog taught us about resilience and joy.",
    role: "Van Gogh Team Member"
  },
  {
    name: "Loraina Merritt", 
    text: "Serving alongside my classmates created bonds that go beyond friendship. We became a family united in purpose and faith.",
    role: "Van Gogh Team Member"
  },
  {
    name: "Kelli French",
    text: "I discovered that serving others doesn't just change their lives - it fundamentally transforms how you see yourself and your place in God's plan.",
    role: "Van Gogh Team Member"
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'story', 'biblical', 'mission', 'gallery', 'quotes'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-slate-200 z-50 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-800">The Jericho Project</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'story', label: 'Story' },
                { id: 'biblical', label: 'Biblical Connection' },
                { id: 'mission', label: 'Mission' },
                { id: 'gallery', label: 'Gallery' },
                { id: 'quotes', label: 'Reflections' }
              ].map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => scrollToSection(id)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    activeSection === id 
                      ? 'text-blue-600 border-b-2 border-blue-600 pb-1' 
                      : 'text-slate-600 hover:text-blue-600'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 pt-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('/images/hero/hero-background.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: '35% 35%'
          }}
        ></div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-6 py-8">
          <div className="mb-8">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/20">
              <Heart className="w-14 h-14 text-white" />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            The Jericho
            <span className="block text-yellow-400">Project</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-12 text-blue-100 max-w-3xl mx-auto leading-relaxed">
            A journey of faith, service, and transformation in rural Appalachia that became 
            the foundation for a movement of students serving others.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <div className="flex items-center space-x-2 text-blue-200">
              <Calendar className="w-5 h-5" />
              <span>June 2025</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-blue-200 rounded-full"></div>
            <div className="flex items-center space-x-2 text-blue-200">
              <MapPin className="w-5 h-5" />
              <span>Rural North Carolina</span>
            </div>
            <div className="hidden sm:block w-1 h-1 bg-blue-200 rounded-full"></div>
            <div className="flex items-center space-x-2 text-blue-200">
              <Users className="w-5 h-5" />
              <span>Highland Park UMC</span>
            </div>
          </div>
          
          <button 
            onClick={() => scrollToSection('story')}
            className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300 group"
          >
            <span>Begin the Journey</span>
            <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </button>
        </div>
      </section>

      {/* Story Section */}
      <section id="story" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Our Story</h2>
            <p className="text-xl text-slate-600">A journal entry of June 18th, 2025</p>
          </div>
          
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-100">
            <div className="prose prose-lg prose-slate max-w-none">
              <div className="mb-8 p-6 bg-blue-50 rounded-2xl border-l-4 border-blue-500">
                <p className="text-blue-800 font-medium mb-2">Wednesday, June 18th, 2025</p>
                <p className="text-slate-700 italic">Highland Park United Methodist Church Service Trip - Van Gogh Team</p>
              </div>
              
              <p className="text-lg leading-relaxed text-slate-700">
                In June 2025, I was on a service trip with the Highland Park United Methodist Church (HPUMC) 
                for hurricane relief in rural Appalachia, North Carolina. Our church was split into multiple 
                vans. Mine was nicknamed <strong className="text-blue-600">'Van Gogh.'</strong>
              </p>
              
              <p className="text-lg leading-relaxed text-slate-700">
                On Wednesday, June 18th, our van was sent to help the home of a family with three kids and 
                three dogs. We were told they had a wolf dog named <strong className="text-blue-600">Jericho</strong>. 
                He had an overgrown coat, which was sweltering in the summer sun, and was tied up so he wouldn't 
                go far. We were intrigued, yet a bit apprehensive because of him being a wolf dog, but we 
                approached him anyway.
              </p>
              
              <p className="text-lg leading-relaxed text-slate-700">
                Jericho immediately greeted us with love and excitement. His eyes were striking; 
                one gold, one blue (heterochromia).
              </p>
              
              <p className="text-lg leading-relaxed text-slate-700">
                We played with him for a short while before continuing on with our work. We used weed whackers 
                to clean up the land, moved rocks and wood, and moved rusted metal, all while Jericho sat 
                outside in his little igloo-shaped doghouse.
              </p>
              
              <p className="text-lg leading-relaxed text-slate-700">
                When break came, a group of us went straight to Jericho: <strong>Luke Haglund</strong>, 
                <strong> Loraina Merritt</strong>, and <strong>Kelli French</strong>. He had an energetic 
                and radiating demeanor. We spent over an hour brushing him out, playing with him, and making 
                him look clean and well-groomed. By the end, he had completely transformed.
              </p>
              
              <p className="text-lg leading-relaxed text-slate-700">
                That day, we also got to know the beautiful and caring family, built a trampoline for the 
                kids, and shared meals with them. Before we left, the family told us the work we had done 
                would have taken them months.
              </p>
              
              <div className="bg-green-50 p-6 rounded-2xl border-l-4 border-green-500 my-8">
                <p className="text-lg leading-relaxed text-green-800 font-medium">
                  What impacted me most was not simply the work, but the relationships formed with the family, 
                  my friends, Jericho, and even our Lord and Savior.
                </p>
              </div>
              
              <p className="text-lg leading-relaxed text-slate-700 mb-8">
                On the ride back, I reflected. It was moving to see the resilience, "open arms," and care, 
                despite their losses: houses, land, animals, and even loved ones. While we helped change others' 
                lives, we found ourselves being changed too.
              </p>
              
              <p className="text-xl leading-relaxed text-slate-800 font-medium bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-200 mt-8">
                That day, Jericho and the loving family became a symbol of the first step in a journey and 
                calling: to create a bridge for students to serve, grow, and create a better world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Biblical Connection Section */}
      <section id="biblical" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Biblical Connection</h2>
            <p className="text-xl text-slate-600">The Story of Jericho - Joshua 6:1-27</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                <span className="text-2xl mr-2">📖✝️</span>
                The Biblical Story
              </h3>
              <div className="prose prose-slate">
                <p className="text-slate-700 leading-relaxed">
                  After Moses' death, Joshua became the leader of the Israelites. The Israelites have just 
                  started entering the Promised Land after wandering the desert. Jericho was a fortified city 
                  blocking the Israelites, their first major obstacle of the Promised Land.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  God commanded Joshua and the Israelites to march around the city once a day for six days, 
                  led by priests carrying trumpets. On the seventh day, they circled the city seven times, 
                  the priests sounded the trumpets, the people shouted, and the walls of Jericho collapsed.
                </p>
              </div>
            </div>
            
            <div className="bg-blue-600 rounded-2xl shadow-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <span className="text-2xl mr-2">🔗</span>
                Our Connection
              </h3>
              <div className="space-y-4">
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <h4 className="font-bold text-yellow-400 mb-2">The Name</h4>
                  <p className="text-blue-100">The first similarity is self-explanatory - the name, Jericho.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <h4 className="font-bold text-yellow-400 mb-2">The First Obstacle</h4>
                  <p className="text-blue-100">For the Israelites, Jericho was their first great obstacle. For us, finding Jericho a home was ours.</p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <h4 className="font-bold text-yellow-400 mb-2">Intricate Obstacle</h4>
                  <p className="text-blue-100 mb-3">
                    The city was heavily fortified, difficult to defeat by ordinary means. It was seemingly 
                    impossible for the Israelites to conquer.
                  </p>
                  <p className="text-yellow-200 font-medium">
                    Our team spans multiple universities and schools; we must navigate conflicting schedules, 
                    long travel distances, and overcome assumptions about wolf dog adoption.
                  </p>
                </div>
                <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
                  <h4 className="font-bold text-yellow-400 mb-2">Limited Skill, But God is With Us</h4>
                  <p className="text-blue-100 mb-3">
                    Only around 40,000 Israelites were chosen to fight, less than 7% of them. They were not a 
                    trained army. Through God's guidance, they succeeded!
                  </p>
                  <p className="text-yellow-200 font-medium">
                    We are a small group of inexperienced teenagers. But with God's guidance at our core, we can succeed!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section id="mission" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Our Mission</h2>
            <p className="text-xl text-slate-600">Building bridges, transforming hearts</p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-3xl shadow-2xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
              </div>
              
              <div className="prose prose-lg prose-white max-w-none text-center">
                <p className="text-xl leading-relaxed mb-8">
                  <strong>The Jericho Project exists to create opportunities for students to serve others, 
                  grow in faith, and discover purpose through works.</strong> Born out of a service trip with 
                  Highland Park United Methodist Church (HPUMC), this ministry is rooted in the belief that 
                  while we help families and rebuild communities, God also rebuilds our hearts.
                </p>
                
                <p className="text-lg leading-relaxed mb-8 text-blue-100">
                  Our mission is to build a bridge from SMU into communities in need so that students can 
                  step outside their routines, encounter those in need, and experience the transformation 
                  that comes through service, fellowship, and obedience to God's calling.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-4">Future Aspirations</h3>
                  <p className="text-lg text-blue-100">
                    Looking ahead, we aspire to expand The Jericho Project to other campuses, creating a 
                    growing movement of students united in Christ, committed to serving, growing, and making 
                    the world a better place.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section id="gallery" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Photo Gallery</h2>
            <p className="text-xl text-slate-600">Moments that changed our hearts</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <div
                key={photo.id}
                className={`group relative ${
                  photo.isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                } ${index % 2 === 0 ? 'mt-0' : 'mt-8'}`}
                style={{
                  transform: `rotate(${(index % 3 - 1) * 2}deg)`,
                  transition: 'all 0.3s ease'
                }}
              >
                <div className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:rotate-0 group-hover:-translate-y-2">
                  {/* Photo hanging wire */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-16 h-8">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-slate-400 to-transparent"></div>
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-6 bg-slate-400"></div>
                  </div>
                  
                  {/* Pin shadow */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded-full shadow-lg border-2 border-red-600"></div>
                  
                  <div className="aspect-[4/3] overflow-hidden rounded-xl mb-4">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-2">
                    <p className="text-slate-700 text-sm leading-relaxed font-medium">
                      {photo.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quotes Section */}
      <section id="quotes" className="py-20 px-6 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">Reflections</h2>
            <p className="text-xl text-slate-600">How service transformed our hearts</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Quote className="w-8 h-8 text-blue-500 mb-4" />
                <p className="text-slate-700 mb-6 italic leading-relaxed">
                  "{quote.text}"
                </p>
                <div className="border-t border-slate-100 pt-4">
                  <p className="font-bold text-slate-800">{quote.name}</p>
                  <p className="text-sm text-slate-600">{quote.role}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-blue-200">
            <h3 className="text-2xl font-bold text-slate-800 mb-6 text-center">Questions for Reflection</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="font-bold text-blue-600 mb-2">Personal Growth</h4>
                <p className="text-slate-700 text-sm">How did serving change the way you see yourself?</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-purple-600 mb-2">Living Differently</h4>
                <p className="text-slate-700 text-sm">In what ways did your experience inspire you to live differently back on campus?</p>
              </div>
              <div className="text-center">
                <h4 className="font-bold text-green-600 mb-2">Community Power</h4>
                <p className="text-slate-700 text-sm">What did you discover about serving alongside other students?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <span className="text-2xl font-bold">The Jericho Project</span>
          </div>
          
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Building bridges for students to serve, grow in faith, and discover purpose through works. 
            Born from love, grown through service.
          </p>
          
          <div className="text-slate-400">
            <p>&copy; 2025 The Jericho Project. Founded by Highland Park United Methodist Church.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;