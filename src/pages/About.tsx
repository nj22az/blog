import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { Ship, User, Building, MapPin, Mail, Linkedin, Github, Globe, ArrowRight, Sparkles, GraduationCap, Anchor, Gauge, Languages, Briefcase, Star, Eye, BookOpen, Code2 } from "lucide-react";
import profilePicture from "../assets/images/profile.png";
import aboutImage from "../assets/images/about.png";
import thuanPicture from "../assets/images/9E5E1D50-8502-481F-B95B-3CBBEC9B0381_1_105_c.jpeg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ScrollArea } from "@/components/ui/scroll-area"

const About = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const tabParam = queryParams.get('tab');
  const [activeTab, setActiveTab] = useState(tabParam || "office");
  const [hasBouncedOnce, setHasBouncedOnce] = useState(false);
  const thuanImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleThuanImageHover = () => {
    if (!hasBouncedOnce && thuanImageRef.current) {
      setHasBouncedOnce(true);
      
      // Add the bouncing animation class
      thuanImageRef.current.classList.add('bounce-animation');
      
      // Remove the animation class after it completes to allow for reset
      setTimeout(() => {
        if (thuanImageRef.current) {
          thuanImageRef.current.classList.remove('bounce-animation');
          // Add the normal tilt class after the bounce animation is complete
          thuanImageRef.current.classList.add('tilt-on-hover');
        }
      }, 3500); // Animation duration increased
    }
  };

  // Add the CSS for the bounce animation
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes bounceOffScreen {
        0% { transform: translate(0, 0) rotate(0); }
        10% { transform: translate(20px, -40px) rotate(10deg); }
        20% { transform: translate(40px, 0px) rotate(-5deg); }
        30% { transform: translate(60px, -60px) rotate(15deg); }
        40% { transform: translate(100px, -20px) rotate(-10deg); }
        50% { transform: translate(150px, -100px) rotate(20deg); }
        60% { transform: translate(300px, 100px) rotate(45deg); }
        70% { transform: translate(500px, 300px) rotate(90deg); opacity: 0.5; }
        75% { transform: translate(600px, 400px) rotate(120deg); opacity: 0; }
        80% { transform: translate(-200px, -200px) rotate(-45deg); opacity: 0; }
        85% { transform: translate(-100px, 50px) rotate(-30deg); opacity: 0.5; }
        90% { transform: translate(-50px, -30px) rotate(-15deg); opacity: 0.8; }
        95% { transform: translate(-20px, 10px) rotate(-5deg); opacity: 1; }
        100% { transform: translate(0, 0) rotate(0); opacity: 1; }
      }
      
      .bounce-animation {
        animation: bounceOffScreen 3.5s ease-in-out forwards;
      }
      
      .tilt-on-hover {
        transition: transform 0.3s ease-in-out;
      }
      
      .tilt-on-hover:hover {
        transform: rotate(-12deg);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">About</h1>
        <p className="text-xl text-muted-foreground">
          Learn about The Office of Nils Johansson and the people behind it
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="office" value={activeTab} onValueChange={setActiveTab} className="space-y-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="office" className="flex items-center gap-2">
            <Building className="h-4 w-4" />
            <span>The Office</span>
          </TabsTrigger>
          <TabsTrigger value="nils" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            <span>Nils</span>
          </TabsTrigger>
          <TabsTrigger value="thuan" className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            <span>Thuan</span>
          </TabsTrigger>
        </TabsList>

        {/* The Office Tab */}
        <TabsContent value="office" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Building className="h-5 w-5" />
                The Office of Nils Johansson
              </CardTitle>
              <CardDescription>
                A digital workspace bridging marine engineering and Southeast Asian culture
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="flex justify-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:-rotate-12 border-4 border-primary/20">
                      <img 
                        src={aboutImage} 
                        alt="The Office of Nils Johansson" 
                        className="w-full h-full object-cover object-center scale-125"
                      />
                    </div>
                  </div>
                  
                  {/* Organization Information */}
                  <div className="mt-6 space-y-4">
                    <div className="flex flex-col items-center text-center p-3 border border-border rounded-lg bg-card">
                      <Building className="h-6 w-6 text-primary mb-2" />
                      <h3 className="text-sm font-medium text-foreground">Organization</h3>
                      <p className="text-xs text-muted-foreground mt-1">Digital Workspace</p>
                    </div>

                    <div className="flex flex-col items-center text-center p-3 border border-border rounded-lg bg-card">
                      <MapPin className="h-6 w-6 text-primary mb-2" />
                      <h3 className="text-sm font-medium text-foreground">Locations</h3>
                      <p className="text-xs text-muted-foreground mt-1">Sweden</p>
                      <p className="text-xs text-muted-foreground">Vietnam</p>
                      <p className="text-xs text-muted-foreground">Japan</p>
                    </div>

                    <div className="flex flex-col items-center text-center p-3 border border-border rounded-lg bg-card">
                      <Globe className="h-6 w-6 text-primary mb-2" />
                      <h3 className="text-sm font-medium text-foreground">Focus Areas</h3>
                      <p className="text-xs text-muted-foreground mt-1">Marine Engineering</p>
                      <p className="text-xs text-muted-foreground">Cultural Integration</p>
                      <p className="text-xs text-muted-foreground">Technical Innovation</p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Ship className="h-5 w-5 text-primary" />
                      Our Mission
                    </h3>
                    <p className="text-muted-foreground">
                      The Office of Nils Johansson empowers global professionals and businesses by providing clear, actionable insights, advanced regulatory knowledge, and innovative technical solutions tailored to modern challenges.
                    </p>
                  </div>

                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="expertise">
                      <AccordionTrigger className="text-xl font-semibold">
                        <div className="flex items-center gap-2">
                          <Globe className="h-5 w-5 text-primary" />
                          Our Core Services
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                          {/* Training Platform */}
                          <div className="border border-border rounded-lg p-5 space-y-4">
                            <h4 className="font-semibold flex items-center gap-2">
                              <GraduationCap className="h-5 w-5 text-primary" />
                              Online Training Platform
                            </h4>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                </div>
                                <span>Preventive Maintenance Essentials</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                </div>
                                <span>AFS Regulations & Compliance Training</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                </div>
                                <span>Quality Control Fundamentals</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                </div>
                                <span>Interactive Workshops & Certifications</span>
                              </li>
                            </ul>
                          </div>

                          {/* Consultancy Services */}
                          <div className="border border-border rounded-lg p-5 space-y-4">
                            <h4 className="font-semibold flex items-center gap-2">
                              <Briefcase className="h-5 w-5 text-primary" />
                              Consultancy Services
                            </h4>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                </div>
                                <span>Independent Equipment Assessment</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                </div>
                                <span>Preventive Maintenance Program Implementation</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                </div>
                                <span>Safety & Compliance Audits</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                </div>
                                <span>Marine Engineering Consulting</span>
                              </li>
                            </ul>
                          </div>

                          {/* Blog & Content */}
                          <div className="border border-border rounded-lg p-5 space-y-4">
                            <h4 className="font-semibold flex items-center gap-2">
                              <BookOpen className="h-5 w-5 text-primary" />
                              Knowledge Hub
                            </h4>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                </div>
                                <span>Technical Insights & Best Practices</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                </div>
                                <span>Field Service Engineer Diaries</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                </div>
                                <span>Travel & Cultural Insights</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                </div>
                                <span>Southeast Asian Business Guides</span>
                              </li>
                            </ul>
                          </div>

                          {/* Procurement & Cultural Services */}
                          <div className="border border-border rounded-lg p-5 space-y-4">
                            <h4 className="font-semibold flex items-center gap-2">
                              <Globe className="h-5 w-5 text-primary" />
                              Procurement & Cultural Services
                            </h4>
                            <ul className="space-y-2">
                              <li className="flex items-start gap-2">
                                <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                </div>
                                <span>Vietnamese Sourcing & Procurement</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                </div>
                                <span>Custom Tailoring Solutions</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                </div>
                                <span>Cultural Integration Workshops</span>
                              </li>
                              <li className="flex items-start gap-2">
                                <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                  <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                                </div>
                                <span>Relocation Advisory Services</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Value Proposition */}
                    <AccordionItem value="value">
                      <AccordionTrigger className="text-xl font-semibold">
                        <div className="flex items-center gap-2">
                          <Star className="h-5 w-5 text-primary" />
                          Our Value Proposition
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pt-4">
                          <p className="text-muted-foreground">
                            We offer a unique combination of technical expertise and cultural insight, providing comprehensive solutions for businesses operating between Scandinavia and Southeast Asia:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                              </div>
                              <span>Independent, unbiased technical expertise with a focus on safety and compliance</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                              </div>
                              <span>Deep understanding of both Scandinavian and Southeast Asian business cultures</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                              </div>
                              <span>Practical, hands-on experience in marine engineering and industrial equipment</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                              </div>
                              <span>Comprehensive procurement and cultural integration services</span>
                            </li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>

                    {/* Technology & Implementation */}
                    <AccordionItem value="tech">
                      <AccordionTrigger className="text-xl font-semibold">
                        <div className="flex items-center gap-2">
                          <Code2 className="h-5 w-5 text-primary" />
                          Our Platform
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pt-4">
                          <p className="text-muted-foreground">
                            Our digital platform is built with modern technology to provide a seamless experience:
                          </p>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                              </div>
                              <span>Mobile-responsive interface built with React</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                              </div>
                              <span>Secure payment processing through Stripe</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                              </div>
                              <span>Cloud-hosted for reliable performance</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <div className="h-5 w-5 flex items-center justify-center mt-0.5">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                              </div>
                              <span>Interactive learning management system</span>
                            </li>
                          </ul>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>

                  {/* Our Team */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <User className="h-5 w-5 text-primary" />
                      Our Team
                    </h3>
                    <p className="text-muted-foreground">
                      The Office of Nils Johansson is founded and operated by two professionals with complementary skills and backgrounds:
                    </p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-4">
                      {/* Nils */}
                      <div className="border border-border rounded-lg p-5 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                            <img 
                              src={profilePicture}
                              alt="Nils Johansson"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold">Nils Johansson</h4>
                            <p className="text-sm text-muted-foreground">Field Service Engineer & Marine Specialist</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Brings expertise in marine engineering, automation systems, and ISO/IEC 17025:2017 certified calibration. Based in Örebro, Sweden with experience working across Scandinavia and Southeast Asia.
                        </p>
                        <Button asChild variant="outline" size="sm" className="w-full">
                          <Link to="?tab=nils" className="flex items-center justify-center gap-2">
                            <User className="h-4 w-4" />
                            <span>Learn More</span>
                          </Link>
                        </Button>
                      </div>
                      
                      {/* Thuan */}
                      <div className="border border-border rounded-lg p-5 space-y-4">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                            <img 
                              src={thuanPicture}
                              alt="Thuan"
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="font-semibold">Thuan</h4>
                            <p className="text-sm text-muted-foreground">Cultural Liaison & Tailoring Expert</p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">
                          Offers expertise in textile solutions, procurement, and cross-cultural business practices. Based in both Örebro, Sweden and Da Nang, Vietnam, providing unique insights into both cultures.
                        </p>
                        <Button asChild variant="outline" size="sm" className="w-full">
                          <Link to="?tab=thuan" className="flex items-center justify-center gap-2">
                            <Star className="h-4 w-4" />
                            <span>Learn More</span>
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mt-6">
                    <Button asChild variant="outline">
                      <Link to="/contact" className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Contact Us
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Nils Tab */}
        <TabsContent value="nils" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Nils Johansson
              </CardTitle>
              <CardDescription>
                Field Service Engineer at Instron & Marine Engineering Specialist
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="flex justify-center">
                    <div className="w-40 h-40 rounded-full overflow-hidden cursor-pointer transition-transform duration-300 ease-in-out hover:-rotate-12 border-4 border-primary/20">
                      <img 
                        src={profilePicture}
                        alt="Nils Johansson"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Contact and Location Information */}
                  <div className="mt-6 space-y-4">
                    <div className="flex flex-col items-center text-center p-3 border border-border rounded-lg">
                      <Building className="h-6 w-6 text-primary mb-2" />
                      <h3 className="text-sm font-medium text-foreground">Position</h3>
                      <p className="text-xs text-muted-foreground mt-1">Field Service Engineer at Instron</p>
                    </div>

                    <div className="flex flex-col items-center text-center p-3 border border-border rounded-lg">
                      <MapPin className="h-6 w-6 text-primary mb-2" />
                      <h3 className="text-sm font-medium text-foreground">Location</h3>
                      <p className="text-xs text-muted-foreground mt-1">Örebro, Sweden</p>
                      <p className="text-xs text-muted-foreground">Da Nang, Vietnam</p>
                    </div>

                    <div className="flex flex-col items-center text-center p-3 border border-border rounded-lg">
                      <Languages className="h-6 w-6 text-primary mb-2" />
                      <h3 className="text-sm font-medium text-foreground">Languages</h3>
                      <p className="text-xs text-muted-foreground mt-1">Swedish (Native)</p>
                      <p className="text-xs text-muted-foreground">English (Fluent)</p>
                    </div>
                    
                    {/* Skills and Experience Buttons */}
                    <h3 className="text-sm font-medium text-foreground text-center mt-4">Quick Links</h3>
                    <div className="grid grid-cols-1 gap-3">
                      <Link to="/experience" className="flex flex-col items-center p-3 rounded-lg border border-border bg-background hover:bg-background/80 hover:border-primary hover:shadow-md transition-all">
                        <div className="p-2 rounded-full bg-primary/10 mb-1">
                          <Briefcase className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-sm font-medium text-foreground">Experience</h3>
                        <p className="text-xs text-muted-foreground">Professional Journey</p>
                      </Link>

                      <Link to="/skills" className="flex flex-col items-center p-3 rounded-lg border border-border bg-background hover:bg-background/80 hover:border-primary hover:shadow-md transition-all">
                        <div className="p-2 rounded-full bg-primary/10 mb-1">
                          <Star className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-sm font-medium text-foreground">Skills</h3>
                        <p className="text-xs text-muted-foreground">Engineering & Automation</p>
                      </Link>
                    </div>
                    
                    <div className="flex items-center justify-center gap-4 mt-4">
                      <a 
                        href="https://www.linkedin.com/in/nils-johansson-86744583/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="text-xs">LinkedIn</span>
                      </a>
                      <div className="h-4 w-px bg-border"></div>
                      <a 
                        href="https://github.com/nj22az" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <Github className="h-5 w-5" />
                        <span className="text-xs">GitHub</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Professional Summary</h3>
                    <p className="text-muted-foreground">
                      I'm a Field Service Engineer at Instron, passionate about understanding how things work and dedicated to solving real-world challenges. My journey began in marine engineering, where working in tough offshore environments taught me resilience, meticulous maintenance, and thoughtful problem-solving. Over the years, I've grown to appreciate working with advanced automation systems and precision equipment—not just for the technical puzzles they offer, but also for the continuous learning and improvement they inspire.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Who Am I?</h3>
                    <div className="space-y-4 text-muted-foreground">
                      <p className="leading-relaxed">
                        I take pride in ensuring every system I handle operates reliably and efficiently, whether it's through installations, calibrations, or troubleshooting complex setups. Above all, I believe the key to any project's success lies in building respectful, open relationships with clients and colleagues. Clear communication and collaboration are at the heart of my approach, creating environments where challenges are met with collective insight and care.
                      </p>
                      <p className="leading-relaxed">
                        As co-founder of The Office of Nils Johansson, I bring my technical expertise and cross-cultural experiences to help bridge the gap between Scandinavian precision engineering and Southeast Asian innovation.
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-6">
                    <Button asChild variant="outline">
                      <Link to="/contact" className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Contact Me
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Thuan Tab */}
        <TabsContent value="thuan" className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5" />
                Thuan
              </CardTitle>
              <CardDescription>
                Cultural Liaison, Tailoring Expert & Co-founder
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="flex justify-center">
                    <div 
                      ref={thuanImageRef}
                      className={`w-40 h-40 rounded-full overflow-hidden cursor-pointer border-4 border-primary/20 ${hasBouncedOnce ? 'tilt-on-hover' : ''}`}
                      onMouseEnter={handleThuanImageHover}
                    >
                      <img 
                        src={thuanPicture}
                        alt="Thuan"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  {/* Contact and Location Information */}
                  <div className="mt-6 space-y-4">
                    <div className="flex flex-col items-center text-center p-3 border border-border rounded-lg">
                      <Building className="h-6 w-6 text-primary mb-2" />
                      <h3 className="text-sm font-medium text-foreground">Position</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Cultural Liaison, Tailoring Expert & Co-founder
                      </p>
                    </div>

                    <div className="flex flex-col items-center text-center p-3 border border-border rounded-lg">
                      <MapPin className="h-6 w-6 text-primary mb-2" />
                      <h3 className="text-sm font-medium text-foreground">Location</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Örebro, Sweden
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Da Nang, Vietnam
                      </p>
                    </div>

                    <div className="flex flex-col items-center text-center p-3 border border-border rounded-lg">
                      <Languages className="h-6 w-6 text-primary mb-2" />
                      <h3 className="text-sm font-medium text-foreground">Languages</h3>
                      <p className="text-xs text-muted-foreground mt-1">
                        Vietnamese (Native)
                      </p>
                      <p className="text-xs text-muted-foreground">
                        English (Fluent)
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 space-y-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">About Me</h3>
                    <p className="text-muted-foreground">
                      I combine my expertise as a tailor with deep local insights into Vietnamese culture. Based in Örebro, Sweden and Da Nang, Vietnam, I am familiar with the unique customs of both Scandinavian and Vietnamese cultures. I offer practical advice on textile procurement, modern tailoring solutions, and navigating local business practices in both regions.
                    </p>
                    <p className="text-muted-foreground">
                      As a co-founder of The Office, I bring a unique cultural perspective to our work, helping clients navigate the complexities of cross-cultural business relationships and ensuring that technical solutions are culturally appropriate and effective.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 mt-6">
                    <Button asChild variant="outline">
                      <Link to="/contact" className="flex items-center gap-2">
                        <Mail className="h-4 w-4" />
                        Contact Me
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default About;