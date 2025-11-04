import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, Sun, Moon, Menu, X, Award, Code, Calendar, Sparkles, Download } from 'lucide-react';

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState('AI & Machine Learning');

  // --- START Responsive Logic ---
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // Define mobile breakpoint (768px is standard for MD in Tailwind/Bootstrap)
  const isMobile = windowWidth < 768;

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  // --- END Responsive Logic ---

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const theme = {
    dark: {
      bg: '#000000',
      secondary: '#0a0a0a',
      card: '#1a1a1a',
      border: '#2a2a2a',
      text: '#ffffff',
      textSecondary: '#d1d5db',
      textTertiary: '#9ca3af',
      purple: '#a78bfa',
      pink: '#f472b6',
      cyan: '#06b6d4'
    },
    light: {
      bg: '#ffffff',
      secondary: '#f9fafb',
      card: '#ffffff',
      border: '#e5e7eb',
      text: '#111827',
      textSecondary: '#374151',
      textTertiary: '#6b7280',
      purple: '#7c3aed',
      pink: '#ec4899',
      cyan: '#06b6d4'
    }
  };

  const colors = isDarkMode ? theme.dark : theme.light;

  // Skills data organized by category
  const skillsByCategory = {
    'AI & Machine Learning': [
      { name: 'Python', proficiency: 95, description: 'Primary language for AI/ML development' },
      { name: 'TensorFlow', proficiency: 88, description: 'Deep learning framework' },
      { name: 'PyTorch', proficiency: 85, description: 'Research-focused ML framework' },
      { name: 'OpenCV', proficiency: 90, description: 'Computer vision library' },
      { name: 'Scikit-learn', proficiency: 90, description: 'Machine learning library' }
    ],
    'Backend & APIs': [
      { name: 'FastAPI', proficiency: 92, description: 'Modern API framework' },
      { name: 'Flask', proficiency: 88, description: 'Python web framework' },
      { name: 'SQL', proficiency: 85, description: 'Database querying' },
      { name: 'REST APIs', proficiency: 90, description: 'API design and development' }
    ],
    'Cloud & DevOps': [
      { name: 'Docker', proficiency: 85, description: 'Containerization platform' },
      { name: 'Google Cloud', proficiency: 82, description: 'Cloud Run, Cloud Build' },
      { name: 'Git', proficiency: 90, description: 'Version control system' },
      { name: 'Linux', proficiency: 88, description: 'Operating system & scripting' }
    ],
    'Data Science': [
      { name: 'Pandas', proficiency: 93, description: 'Data manipulation library' },
      { name: 'NumPy', proficiency: 91, description: 'Numerical computing' },
      { name: 'Matplotlib', proficiency: 87, description: 'Data visualization' },
      { name: 'Plotly', proficiency: 89, description: 'Interactive visualizations' }
    ]
  };

  const categories = Object.keys(skillsByCategory);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: colors.bg, color: colors.text, position: 'relative' }}>
      {/* Animated Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        overflow: 'hidden',
        pointerEvents: 'none'
      }}>
        <div className="bg-blob blob1"></div>
        <div className="bg-blob blob2"></div>
        <div className="bg-blob blob3"></div>
        <div className="bg-grid"></div>
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Navigation */}
        <nav style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          backgroundColor: scrolled ? `${colors.bg}ee` : 'transparent',
          borderBottom: scrolled ? `1px solid ${colors.border}` : 'none',
          zIndex: 1000,
          backdropFilter: 'blur(10px)',
          transition: 'all 0.3s'
        }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', padding: isMobile ? '0 1rem' : '0 2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
              <button
                onClick={() => scrollToSection('home')}
                style={{
                  fontSize: isMobile ? '1rem' : '1.25rem',
                  fontWeight: '700',
                  color: colors.text,
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}
              >
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${colors.purple} 0%, ${colors.pink} 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  fontWeight: '700'
                }}>
                  R
                </div>
                Riddhi Joshi
              </button>

              {/* Desktop Menu */}
              <div style={{ display: isMobile ? 'none' : 'flex', alignItems: 'center', gap: '2rem' }}>
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'projects', label: 'Projects' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      fontSize: '0.9375rem',
                      fontWeight: '500',
                      color: colors.textSecondary,
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'color 0.2s',
                      position: 'relative'
                    }}
                    onMouseEnter={(e) => e.target.style.color = colors.purple}
                    onMouseLeave={(e) => e.target.style.color = colors.textSecondary}
                  >
                    {item.label}
                  </button>
                ))}
                
                <button
                  onClick={() => scrollToSection('contact')}
                  style={{
                    padding: '0.625rem 1.5rem',
                    backgroundColor: colors.purple,
                    color: '#ffffff',
                    border: 'none',
                    borderRadius: '0.5rem',
                    fontSize: '0.9375rem',
                    fontWeight: '500',
                    cursor: 'pointer',
                    transition: 'opacity 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  Get in Touch
                </button>
                
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  style={{
                    padding: '0.5rem',
                    borderRadius: '0.5rem',
                    backgroundColor: colors.card,
                    border: `1px solid ${colors.border}`,
                    color: colors.text,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div style={{ display: isMobile ? 'flex' : 'none', alignItems: 'center', gap: '0.5rem' }}>
                <button
                  onClick={() => setIsDarkMode(!isDarkMode)}
                  style={{
                    padding: '0.5rem',
                    background: 'none',
                    border: 'none',
                    color: colors.text,
                    cursor: 'pointer'
                  }}
                >
                  {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  style={{
                    padding: '0.5rem',
                    background: 'none',
                    border: 'none',
                    color: colors.text,
                    cursor: 'pointer'
                  }}
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && isMobile && (
              <div style={{ paddingBottom: '1rem' }}>
                {[
                  { id: 'home', label: 'Home' },
                  { id: 'about', label: 'About' },
                  { id: 'skills', label: 'Skills' },
                  { id: 'experience', label: 'Experience' },
                  { id: 'projects', label: 'Projects' },
                  { id: 'contact', label: 'Get in Touch' }
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    style={{
                      display: 'block',
                      width: '100%',
                      textAlign: 'left',
                      padding: '0.75rem 0',
                      fontSize: '1rem',
                      fontWeight: '500',
                      color: colors.textSecondary,
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>

        {/* Hero Section */}
        <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: isMobile ? '7rem 1rem 4rem' : '0 2rem', justifyContent: 'center' }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: isMobile ? '2rem' : '4rem', alignItems: 'center' }}>
              <div className="fade-in">
                <p style={{ fontSize: isMobile ? '1rem' : '1.125rem', color: colors.purple, fontWeight: '600', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Sparkles size={20} /> Hi, my name is
                </p>
                <h1 style={{ fontSize: isMobile ? '2.5rem' : 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: '700', marginBottom: '1rem', lineHeight: '1.1' }}>
                  Riddhi Joshi
                </h1>
                <h2 style={{ fontSize: isMobile ? '1.5rem' : 'clamp(1.5rem, 4vw, 3rem)', fontWeight: '600', color: colors.textSecondary, marginBottom: '2rem', lineHeight: '1.2' }}>
                  I build intelligent AI solutions.
                </h2>
                <p style={{ fontSize: isMobile ? '1rem' : '1.1875rem', color: colors.textTertiary, marginBottom: '3rem', lineHeight: '1.8', maxWidth: '600px' }}>
                  I'm an AI & Data Science student specializing in building exceptional machine learning models, NLP systems, and scalable cloud applications. Currently focused on crafting intelligent solutions that make a real-world impact.
                </p>
                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button
                    onClick={() => scrollToSection('projects')}
                    style={{
                      padding: '1rem 2rem',
                      backgroundColor: 'transparent',
                      border: `2px solid ${colors.purple}`,
                      color: colors.purple,
                      borderRadius: '0.5rem',
                      fontSize: '1rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = `${colors.purple}20`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                    }}
                  >
                    Check out my work!
                  </button>

                  
                </div>
              </div>

              {/* Photo Placeholder */}
              <div style={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-end', order: isMobile ? -1 : 0 }} className="fade-in-delayed">
                <div
                  style={{
                    width: isMobile ? '250px' : '350px',
                    height: isMobile ? '250px' : '350px',
                    borderRadius: '0.75rem',
                    border: `3px solid ${colors.purple}`,
                    boxShadow: `0 0 30px ${colors.purple}40`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    backgroundColor: colors.card
                  }}
                >
                  {/* Image */}
                  <img
                    src={process.env.PUBLIC_URL + '/image.jpeg'}
                    alt="Riddhi Joshi"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover', // Changed from 'fill' to 'cover'
                      objectPosition: 'center', // Added to control image positioning
                      borderRadius: '0.75rem'
                    }}
                  />
                  
                  <div
                    style={{
                      position: 'absolute',
                      top: '10%',
                      left: '-50%',
                      width: '200%',
                      height: '200%',
                      background: `linear-gradient(45deg, transparent, ${colors.purple}20, transparent)`,
                      animation: 'shine 3s infinite'
                    }}
                  ></div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: isMobile ? '4rem 1rem' : '0 2rem', backgroundColor: colors.secondary }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
            <h2 style={{ fontSize: isMobile ? '2rem' : 'clamp(2rem, 5vw, 3rem)', fontWeight: '700', marginBottom: '0.5rem', textAlign: 'center' }}>
              About <span style={{ color: colors.purple }}>Me</span>
            </h2>
            <p style={{ textAlign: 'center', color: colors.textSecondary, marginBottom: '2.5rem', fontSize: isMobile ? '0.9375rem' : '1rem' }}>
              Learn more about my background and journey
            </p>

            {/* Professional Summary - Google Style */}
            <div style={{ backgroundColor: colors.card, padding: isMobile ? '1.5rem' : '2rem', borderRadius: '0.75rem', border: `1px solid ${colors.border}`, marginBottom: '2rem' }}>
              <h3 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: '600', marginBottom: '1rem', color: colors.purple }}>
                Professional Summary
              </h3>
              <p style={{ fontSize: isMobile ? '1rem' : '1.0625rem', color: colors.textSecondary, lineHeight: '1.7', marginBottom: '1rem' }}>
                Results-driven AI & Data Science undergraduate with proven expertise in developing scalable machine learning solutions and cloud-based intelligent systems. Demonstrated track record of improving system accuracy by 30% and reliability by 95% through innovative NLP and Computer Vision implementations.
              </p>
              <p style={{ fontSize: isMobile ? '1rem' : '1.0625rem', color: colors.textSecondary, lineHeight: '1.7' }}>
                Passionate about leveraging cutting-edge AI/ML technologies to solve complex real-world challenges. Experience spans end-to-end ML pipeline development, from data preprocessing and feature engineering to model deployment and optimization. Strong collaborator with proven leadership experience directing cross-functional teams and delivering technical workshops to 200+ participants.
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              <div style={{ backgroundColor: colors.card, padding: '1.75rem', borderRadius: '0.75rem', border: `1px solid ${colors.border}` }}>
                <div style={{ display: 'flex', alignItems: 'start', gap: '1rem' }}>
                  <Award size={28} style={{ color: colors.purple, marginTop: '0.25rem' }} />
                  <div>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Mumbai University</h3>
                    <p style={{ color: colors.textSecondary, marginBottom: '0.25rem', fontSize: '0.9375rem' }}>B.Tech in AI & Data Science</p>
                    <p style={{ color: colors.purple, fontWeight: '600', fontSize: '1.0625rem', marginBottom: '0.5rem' }}>GPA: 9.5/10</p>
                    <p style={{ color: colors.textTertiary, fontSize: '0.875rem' }}>June 2022 - May 2026</p>
                  </div>
                </div>
              </div>

              <div style={{ backgroundColor: colors.card, padding: '1.75rem', borderRadius: '0.75rem', border: `1px solid ${colors.border}` }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: colors.pink }}>
                  Core Competencies
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '0.625rem' }}>
                  {['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Cloud Architecture', 'API Development', 'Data Analytics'].map(tech => (
                    <div key={tech} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: colors.purple }}></div>
                      <span style={{ color: colors.textSecondary, fontSize: '0.875rem' }}>{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section
          id="skills"
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            padding: isMobile ? '4rem 1rem' : '0 2rem',
            backgroundColor: colors.bg,
          }}
        >
          <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
            <h2
              style={{
                fontSize: isMobile ? '2rem' : 'clamp(2rem, 5vw, 3rem)',
                fontWeight: '700',
                marginBottom: '1rem',
                textAlign: 'center',
              }}
            >
              Technical <span style={{ color: colors.purple }}>Stack</span>
            </h2>
            <p
              style={{
                textAlign: 'center',
                color: colors.textSecondary,
                marginBottom: '4rem',
                fontSize: isMobile ? '0.9375rem' : '1.125rem',
              }}
            >
              Technologies and tools I use to build innovative solutions
            </p>

            {/* Skills as category cards with pill badges */}
            {(() => {
              const categoryMeta = {
                'AI & Machine Learning': { icon: '🧠', color: colors.purple },
                'Backend & APIs': { icon: '</>', color: colors.cyan },
                'Cloud & DevOps': { icon: '☁️', color: colors.pink },
                'Data Science': { icon: '📊', color: colors.cyan },
              };

              return (
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', // ✅ Responsive change
                    gap: isMobile ? '1.5rem' : '2rem',
                    marginBottom: '3rem',
                  }}
                >
                  {Object.entries(skillsByCategory).map(([category, skills]) => {
                    const meta = categoryMeta[category] || { icon: '🔧', color: colors.purple };
                    return (
                      <div
                        key={category}
                        style={{
                          background: `linear-gradient(180deg, ${colors.card}, ${colors.card})`,
                          borderRadius: '0.75rem',
                          padding: isMobile ? '1.5rem' : '2rem',
                          border: `1px solid ${colors.border}`,
                          boxShadow: isDarkMode
                            ? '0 8px 30px rgba(0,0,0,0.25)'
                            : '0 8px 30px rgba(0,0,0,0.05)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'flex-start',
                        }}
                      >
                        {/* Header with icon */}
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            marginBottom: '1rem',
                          }}
                        >
                          <div
                            style={{
                              width: '44px',
                              height: '44px',
                              borderRadius: '10px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              background: `linear-gradient(135deg, ${meta.color}22, ${meta.color}11)`,
                              fontSize: '1.25rem',
                            }}
                          >
                            {meta.icon}
                          </div>
                          <h3
                            style={{
                              fontSize: isMobile ? '1rem' : '1.125rem',
                              fontWeight: '700',
                              margin: 0,
                            }}
                          >
                            {category}
                          </h3>
                        </div>

                        {/* Skill badges */}
                        <div
                          style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.5rem',
                          }}
                        >
                          {skills.map((s) => (
                            <span
                              key={s.name}
                              style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                padding: '0.45rem 0.75rem',
                                borderRadius: '12px',
                                border: `1px solid ${meta.color}33`,
                                color: colors.text,
                                backgroundColor: isDarkMode
                                  ? 'rgba(255,255,255,0.02)'
                                  : 'rgba(0,0,0,0.02)',
                                fontSize: '0.875rem',
                                fontWeight: 500,
                                flexShrink: 0,
                              }}
                            >
                              <span
                                style={{
                                  width: '7px',
                                  height: '7px',
                                  borderRadius: '9999px',
                                  background: meta.color,
                                }}
                              ></span>
                              {s.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })()}

            {/* Stats Section */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? 'repeat(auto-fit, minmax(120px, 1fr))' : 'repeat(auto-fit, minmax(200px, 1fr))', // ✅ Responsive change
                gap: isMobile ? '1rem' : '2rem',
              }}
            >
              {[
                { value: '15+', label: 'Technologies', color: colors.cyan },
                { value: '2', label: 'Internships', color: colors.purple },
                { value: '9.5', label: 'GPA', color: colors.pink },
              ].map((stat) => (
                <div
                  key={stat.label}
                  style={{
                    textAlign: 'center',
                    padding: isMobile ? '1.5rem 0.5rem' : '2rem',
                    backgroundColor: colors.card,
                    borderRadius: '0.75rem',
                    border: `1px solid ${colors.border}`,
                  }}
                >
                  <div
                    style={{
                      fontSize: isMobile ? '2rem' : '2.5rem', // ✅ Responsive change
                      fontWeight: '700',
                      color: stat.color,
                      marginBottom: '0.5rem',
                    }}
                  >
                    {stat.value}
                  </div>
                  <div style={{ color: colors.textSecondary, fontSize: isMobile ? '0.875rem' : '1rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* Experience Timeline Section */}
        <section id="experience" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: isMobile ? '4rem 1rem' : '0 2rem', backgroundColor: colors.bg }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
            <h2 style={{ fontSize: isMobile ? '2rem' : 'clamp(2rem, 5vw, 3rem)', fontWeight: '700', marginBottom: '1rem', textAlign: 'center' }}>
              My <span style={{ color: colors.purple }}>Journey</span>
            </h2>
            <p style={{ textAlign: 'center', color: colors.textSecondary, marginBottom: '4rem', fontSize: isMobile ? '0.9375rem' : '1.125rem' }}>
              A timeline of growth and innovation in the world of technology
            </p>

            <div style={{ position: 'relative' }}>
              {/* Timeline Line (Hidden on Mobile) */}
              <div style={{
                position: 'absolute',
                left: '50%',
                top: '0',
                bottom: '0',
                width: '2px',
                background: `linear-gradient(180deg, ${colors.purple}, ${colors.pink})`,
                transform: 'translateX(-50%)',
                display: isMobile ? 'none' : 'block' // ✅ Responsive change
              }}></div>

              {/* AI Intern */}
              <div style={{ display: 'flex', gap: '2rem', marginBottom: '4rem', alignItems: 'center', position: 'relative', flexDirection: isMobile ? 'column' : 'row' }}>
                <div style={{ flex: 1, textAlign: 'right', display: isMobile ? 'none' : 'block' }}></div>
                
                {/* Timeline Dot (Hidden on Mobile) */}
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${colors.purple}, ${colors.pink})`,
                  display: isMobile ? 'none' : 'flex', // ✅ Responsive change
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  zIndex: 2,
                  boxShadow: `0 0 0 4px ${colors.bg}, 0 0 20px ${colors.purple}60`
                }}>
                  <div style={{
                    padding: '0.375rem 0.75rem',
                    backgroundColor: colors.purple,
                    borderRadius: '9999px',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    color: '#fff',
                    position: 'absolute',
                    top: '-40px',
                    whiteSpace: 'nowrap'
                  }}>
                    Present
                  </div>
                </div>

                <div style={{ flex: 1, width: isMobile ? '100%' : 'auto' }}>
                  <div style={{
                    backgroundColor: colors.card,
                    padding: isMobile ? '1.5rem' : '2rem',
                    borderRadius: '0.75rem',
                    border: `1px solid ${colors.border}`,
                    boxShadow: isDarkMode ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.1)'
                  }}>
                    {/* Date Block for Mobile */}
                    {isMobile && (
                      <div style={{ padding: '0.375rem 0.75rem', backgroundColor: colors.purple, borderRadius: '9999px', fontSize: '0.75rem', fontWeight: '600', color: '#fff', marginBottom: '1rem', width: 'fit-content' }}>
                        Present
                      </div>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: colors.textTertiary, fontSize: '0.875rem' }}>
                      <Calendar size={16} />
                      <span>June 2024 - August 2024</span>
                    </div>
                    <h3 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: '600', color: colors.purple, marginBottom: '0.5rem' }}>
                      AI Intern
                    </h3>
                    <p style={{ fontSize: '1.125rem', color: colors.textSecondary, marginBottom: '1rem' }}>
                      TCET Open Source
                    </p>
                    <p style={{ fontSize: isMobile ? '0.9375rem' : '1rem', color: colors.textSecondary, lineHeight: '1.7', marginBottom: '1rem' }}>
                      Leading AI-driven product development and cloud architecture for next-generation solutions.
                    </p>
                    <div style={{ borderLeft: `3px solid ${colors.purple}`, paddingLeft: '1rem' }}>
                      <p style={{ fontSize: '0.9375rem', fontWeight: '600', color: colors.text, marginBottom: '0.75rem' }}>
                        🏆 Key Achievements
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {[
                          'Built an AI-powered Resume Screening System using NLP and Computer Vision',
                          'Improved screening accuracy by 30% through classification models',
                          'Increased parsing reliability to 95% with OpenCV and Tesseract'
                        ].map((item, idx) => (
                          <li key={idx} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', color: colors.textSecondary, fontSize: '0.9375rem', lineHeight: '1.6' }}>
                            <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: colors.cyan, marginTop: '0.5rem', flexShrink: 0 }}></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Science Intern */}
              <div style={{ display: 'flex', gap: '2rem', marginBottom: '4rem', alignItems: 'center', position: 'relative', flexDirection: isMobile ? 'column' : 'row-reverse' }} className="timeline-item">
                <div style={{ flex: 1, textAlign: 'left', display: isMobile ? 'none' : 'block' }}></div>
                
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: `linear-gradient(135deg, ${colors.pink}, ${colors.purple})`,
                  display: isMobile ? 'none' : 'flex', // ✅ Responsive change
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  zIndex: 2,
                  boxShadow: `0 0 0 4px ${colors.bg}, 0 0 20px ${colors.pink}60`
                }}></div>

                <div style={{ flex: 1, width: isMobile ? '100%' : 'auto' }}>
                  <div style={{
                    backgroundColor: colors.card,
                    padding: isMobile ? '1.5rem' : '2rem',
                    borderRadius: '0.75rem',
                    border: `1px solid ${colors.border}`,
                    boxShadow: isDarkMode ? '0 4px 20px rgba(0,0,0,0.3)' : '0 4px 20px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: colors.textTertiary, fontSize: '0.875rem' }}>
                      <Calendar size={16} />
                      <span>Feb 2023 - June 2023</span>
                    </div>
                    <h3 style={{ fontSize: isMobile ? '1.25rem' : '1.5rem', fontWeight: '600', color: colors.pink, marginBottom: '0.5rem' }}>
                      Applied Data Science Intern
                    </h3>
                    <p style={{ fontSize: '1.125rem', color: colors.textSecondary, marginBottom: '1rem' }}>
                      Utkarshini Edutech
                    </p>
                    <p style={{ fontSize: isMobile ? '0.9375rem' : '1rem', color: colors.textSecondary, lineHeight: '1.7', marginBottom: '1rem' }}>
                      Led AI pipeline integrations and developed predictive analytics systems.
                    </p>
                    <div style={{ borderLeft: `3px solid ${colors.pink}`, paddingLeft: '1rem' }}>
                      <p style={{ fontSize: '0.9375rem', fontWeight: '600', color: colors.text, marginBottom: '0.75rem' }}>
                        🏆 Key Achievements
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {[
                          'Built Educational Performance Prediction System for at-risk learners',
                          'Achieved 85% accuracy with Random Forest and XGBoost models',
                          'Created interactive dashboards for performance insights'
                        ].map((item, idx) => (
                          <li key={idx} style={{ display: 'flex', gap: '0.75rem', marginBottom: '0.5rem', color: colors.textSecondary, fontSize: '0.9375rem', lineHeight: '1.6' }}>
                            <div style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: colors.cyan, marginTop: '0.5rem', flexShrink: 0 }}></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: isMobile ? '4rem 1rem' : '0 2rem', backgroundColor: colors.bg }}>
          <div style={{ maxWidth: '1280px', margin: '0 auto', width: '100%' }}>
            <h2 style={{ fontSize: isMobile ? '2rem' : 'clamp(2rem, 5vw, 3rem)', fontWeight: '700', marginBottom: '1rem', textAlign: 'center' }}>
              Featured <span style={{ color: colors.purple }}>Projects</span>
            </h2>
            <p style={{ textAlign: 'center', color: colors.textSecondary, marginBottom: '4rem', fontSize: isMobile ? '0.9375rem' : '1.125rem' }}>
              A selection of my recent work in AI/ML and cloud development
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
              {/* EchoVerse */}
              <div style={{
                backgroundColor: colors.card,
                borderRadius: '0.75rem',
                overflow: 'hidden',
                border: `1px solid ${colors.border}`,
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 12px 40px ${colors.purple}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  height: '220px',
                  background: `linear-gradient(135deg, ${colors.purple} 0%, ${colors.pink} 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{ fontSize: '5rem', position: 'relative', zIndex: 1 }}>🎤</div>
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    display: 'flex',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      padding: '0.375rem 0.875rem',
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#fff'
                    }}>Smart AI</span>
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.75rem' }}>
                    EchoVerse
                  </h3>
                  <p style={{ fontSize: '1rem', color: colors.purple, fontWeight: '500', marginBottom: '1rem' }}>
                    Real-Time Speech Intelligence System
                  </p>
                  <p style={{ fontSize: '1rem', color: colors.textSecondary, lineHeight: '1.7', marginBottom: '1.5rem' }}>
                    An advanced speech-to-text system with sub-400 ms latency, deployed via Docker and Cloud Run with autoscaling.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['FastAPI', 'Faster-Whisper', 'Cloud Run', 'Docker'].map(tech => (
                      <span key={tech} style={{
                        padding: '0.375rem 0.75rem',
                        backgroundColor: colors.secondary,
                        border: `1px solid ${colors.border}`,
                        borderRadius: '9999px',
                        fontSize: '0.8125rem',
                        color: colors.textTertiary
                      }}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Stock Market Analysis */}
              <div style={{
                backgroundColor: colors.card,
                borderRadius: '0.75rem',
                overflow: 'hidden',
                border: `1px solid ${colors.border}`,
                transition: 'all 0.3s',
                cursor: 'pointer'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = `0 12px 40px ${colors.pink}30`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div style={{
                  height: '220px',
                  background: `linear-gradient(135deg, ${colors.pink} 0%, ${colors.purple} 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{ fontSize: '5rem', position: 'relative', zIndex: 1 }}>📈</div>
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    display: 'flex',
                    gap: '0.5rem'
                  }}>
                    <span style={{
                      padding: '0.375rem 0.875rem',
                      backgroundColor: 'rgba(255,255,255,0.2)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '9999px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      color: '#fff'
                    }}>ML Prediction</span>
                  </div>
                </div>
                <div style={{ padding: '2rem' }}>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.75rem' }}>
                    Stock Market Analysis
                  </h3>
                  <p style={{ fontSize: '1rem', color: colors.pink, fontWeight: '500', marginBottom: '1rem' }}>
                    Predictive Financial Analytics Tool
                  </p>
                  <p style={{ fontSize: '1rem', color: colors.textSecondary, lineHeight: '1.7', marginBottom: '1.5rem' }}>
                    Built a Python-based tool to forecast stock trends using Prophet and ML-based volatility prediction with interactive visualizations.
                  </p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {['Python', 'Scikit-learn', 'Plotly', 'Prophet'].map(tech => (
                      <span key={tech} style={{
                        padding: '0.375rem 0.75rem',
                        backgroundColor: colors.secondary,
                        border: `1px solid ${colors.border}`,
                        borderRadius: '9999px',
                        fontSize: '0.8125rem',
                        color: colors.textTertiary
                      }}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section with Footer */}
        <section id="contact" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: isMobile ? '4rem 1rem 0' : '0 2rem 0', backgroundColor: colors.secondary }}>
          <div style={{ maxWidth: '800px', margin: '0 auto', width: '100%', textAlign: 'center', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h2 style={{ fontSize: isMobile ? '2rem' : 'clamp(2rem, 5vw, 3rem)', fontWeight: '700', marginBottom: '0.75rem' }}>
              Get in <span style={{ color: colors.purple }}>Touch</span>
            </h2>
            <p style={{ 
              fontSize: isMobile ? '1rem' : '1.125rem', 
              color: colors.textSecondary, 
              marginBottom: '2rem', 
              lineHeight: '1.7',
              maxWidth: '450px',
              margin: '0 auto',
              wordWrap: 'break-word',
              whiteSpace: 'pre-wrap',
              paddingBottom: '20px'
          }}>
              I'm actively seeking ML/AI engineering opportunities. 
              Let's build something amazing together!
          </p>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <a href="mailto:riddhijoshi5900@gmail.com" style={{
                backgroundColor: colors.card,
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: `1px solid ${colors.border}`,
                textDecoration: 'none',
                transition: 'all 0.3s'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.purple;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.border;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Mail size={28} style={{ color: colors.purple, marginBottom: '0.75rem' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: colors.text }}>Email</h3>
                <p style={{ color: colors.textSecondary, fontSize: '0.9375rem' }}>riddhijoshi5900@gmail.com</p>
              </a>

              

              <a href="https://linkedin.com/in/riddhijoshi19" target="_blank" rel="noopener noreferrer" style={{
                backgroundColor: colors.card,
                padding: '1.5rem',
                borderRadius: '0.75rem',
                border: `1px solid ${colors.border}`,
                textDecoration: 'none',
                transition: 'all 0.3s'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = colors.cyan;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = colors.border;
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Linkedin size={28} style={{ color: colors.cyan, marginBottom: '0.75rem' }} />
                <h3 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '0.5rem', color: colors.text }}>LinkedIn</h3>
                <p style={{ color: colors.textSecondary, fontSize: '0.9375rem' }}>riddhijoshi19</p>
              </a>

              
            </div>

 <a
  href={process.env.PUBLIC_URL + '/Riddhi_resume.pdf'} // ✅ Fix the link path for Vercel deployment
  target="_blank"
  rel="noopener noreferrer"
  style={{
    padding: '0.75rem 1.25rem',
    backgroundColor: colors.purple,
    color: '#ffffff',
    borderRadius: '0.5rem',
    border: 'none',
    fontSize: '0.9375rem',
    fontWeight: '500',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    textDecoration: 'none',
    transition: 'all 0.3s',
    width: 'fit-content',
    margin: '0 auto'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.opacity = '0.95';
    e.currentTarget.style.transform = 'translateY(-2px)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.opacity = '1';
    e.currentTarget.style.transform = 'translateY(0)';
  }}
>
  View Resume
  <Download size={16} />
</a>
          </div>

          {/* Footer - Part of Contact Section */}
          <footer style={{
            borderTop: `1px solid ${colors.border}`,
            padding: isMobile ? '1.5rem 1rem' : '2rem', // ✅ Responsive change
            textAlign: 'center',
            marginTop: 'auto'
          }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '1.5rem' }}>
                <a href="https://github.com/riddhijoshi19" target="_blank" rel="noopener noreferrer" style={{ color: colors.textTertiary, transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.purple}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.textTertiary}
                >
                  <Github size={22} />
                </a>
                <a href="https://linkedin.com/in/riddhijoshi19" target="_blank" rel="noopener noreferrer" style={{ color: colors.textTertiary, transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.purple}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.textTertiary}
                >
                  <Linkedin size={22} />
                </a>
                <a href="mailto:riddhijoshi5900@gmail.com" style={{ color: colors.textTertiary, transition: 'color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = colors.purple}
                  onMouseLeave={(e) => e.currentTarget.style.color = colors.textTertiary}
                >
                  <Mail size={22} />
                </a>
              </div>
              <p style={{ color: colors.textTertiary, fontSize: '0.875rem' }}>
                Designed & Built by Riddhi Joshi
              </p>
              <p style={{ color: colors.textTertiary, fontSize: '0.8125rem', marginTop: '0.5rem' }}>
                © 2025 All rights reserved.
              </p>
            </div>
          </footer>
        </section>
      </div>

      {/* Styles */}
      <style>{`
        /* Modern soft floating gradient blobs + subtle grid overlay */
        .bg-blob {
          position: absolute;
          filter: blur(80px) saturate(120%);
          opacity: 0.75;
          mix-blend-mode: screen;
          transform: translate3d(0,0,0);
        }

        .blob1 {
          width: 520px;
          height: 520px;
          left: -10%;
          top: -10%;
          background: radial-gradient(circle at 30% 30%, rgba(167,139,250,0.95), rgba(167,139,250,0.35) 40%, transparent 60%), radial-gradient(circle at 70% 70%, rgba(6,182,212,0.6), transparent 40%);
          animation: float1 18s ease-in-out infinite;
        }

        .blob2 {
          width: 420px;
          height: 420px;
          right: -8%;
          top: 10%;
          background: radial-gradient(circle at 40% 40%, rgba(244,114,182,0.95), rgba(244,114,182,0.35) 40%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(167,139,250,0.3), transparent 50%);
          animation: float2 22s ease-in-out infinite;
        }

        .blob3 {
          width: 640px;
          height: 640px;
          left: 15%;
          bottom: -20%;
          background: radial-gradient(circle at 20% 70%, rgba(6,182,212,0.85), rgba(6,182,212,0.25) 40%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(167,139,250,0.25), transparent 50%);
          animation: float3 26s ease-in-out infinite;
          opacity: 0.65;
        }

        .bg-grid {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(0deg, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 120px 120px;
          mix-blend-mode: overlay;
          opacity: 0.25;
          animation: gridShift 60s linear infinite;
          pointer-events: none;
        }

        @keyframes float1 {
          0% { transform: translate3d(0,0,0) scale(1); }
          25% { transform: translate3d(20px, -30px, 0) scale(1.03); }
          50% { transform: translate3d(0, 20px, 0) scale(0.98); }
          75% { transform: translate3d(-15px, -10px, 0) scale(1.02); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }

        @keyframes float2 {
          0% { transform: translate3d(0,0,0) scale(1); }
          25% { transform: translate3d(-25px, 20px, 0) scale(1.02); }
          50% { transform: translate3d(10px, -20px, 0) scale(0.99); }
          75% { transform: translate3d(20px, 10px, 0) scale(1.01); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }

        @keyframes float3 {
          0% { transform: translate3d(0,0,0) scale(1); }
          30% { transform: translate3d(-30px, -20px, 0) scale(1.04); }
          60% { transform: translate3d(20px, 30px, 0) scale(0.97); }
          100% { transform: translate3d(0,0,0) scale(1); }
        }

        @keyframes gridShift {
          from { background-position: 0 0, 0 0; }
          to { background-position: -800px -400px, -400px -200px; }
        }

        /* keep existing UI animations (fade, shimmer, skill hover) */
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); }
        }

        .fade-in {
          animation: fadeIn 1s ease-out;
        }

        .fade-in-delayed {
          animation: fadeIn 1s ease-out 0.3s both;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .skill-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(167, 139, 250, 0.2);
        }

        .progress-bar {
          animation: fillBar 1.5s ease-out;
        }

        @keyframes fillBar {
          from {
            width: 0%;
          }
        }

        /*
         * Removed the redundant media queries at the end of the file.
         * The responsiveness is now driven by the 'isMobile' check
         * in the inline styles, which is more predictable.
         */
      `}</style>
    </div>
  );
}