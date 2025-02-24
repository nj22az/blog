import { useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Sparkles, GraduationCap, Globe2, Ruler, Gauge, Anchor } from "lucide-react";
import aboutImage from "../assets/images/about.png";
import logo from "../assets/images/logo.png";

const About = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".fade-up-section").forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="py-8 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="space-y-12">
        {/* Header with Logo */}
        <div className="flex flex-col sm:flex-row items-center sm:space-x-4 space-y-6 sm:space-y-0 fade-up-section opacity-0 translate-y-8">
          <div className="relative w-24 h-24 group cursor-pointer rounded-full bg-white shadow-sm overflow-hidden">
            <img
              src={logo}
              alt="The Office of Nils Johansson Logo"
              className="w-full h-full p-2 object-contain transition-all duration-300 transform group-hover:scale-110 group-active:scale-125"
            />
            {/* Zoom overlay for mobile */}
            <div className="sm:hidden">
              <div className="hidden group-active:block fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-4 rounded-full shadow-xl">
                <img
                  src={logo}
                  alt="The Office of Nils Johansson Logo"
                  className="w-40 h-40 object-contain"
                />
              </div>
            </div>
          </div>
          <div className="text-center sm:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 text-sm tracking-wider bg-gray-100 rounded-full">
              <Sparkles className="w-4 h-4" />
              WELCOME TO
            </span>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mt-2">
              The Office of Nils Johansson
            </h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8 max-w-4xl">
          <Card className="p-8 backdrop-blur-sm bg-white/50 border border-gray-200 fade-up-section opacity-0 translate-y-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Gauge className="w-6 h-6" />
              Engineering Excellence & Innovation
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Bridging Sweden and Vietnam through engineering innovation, we specialize in calibration, industrial automation, 
              and marine engineering. Our unique approach combines Nordic precision with Southeast Asian dynamism.
            </p>
          </Card>

          <Card className="p-8 backdrop-blur-sm bg-white/50 border border-gray-200 fade-up-section opacity-0 translate-y-8">
            <img
              src={aboutImage}
              alt="The Office Environment"
              className="w-full h-auto rounded-lg shadow-md mb-6"
            />
            <p className="text-sm text-gray-500 italic">
              Our workspace: where engineering innovation meets collaborative spirit
            </p>
          </Card>

          <Card className="p-8 backdrop-blur-sm bg-white/50 border border-gray-200 fade-up-section opacity-0 translate-y-8">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Globe2 className="w-6 h-6" />
              Our Expertise
            </h2>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center gap-2">
                <Ruler className="w-5 h-5" />
                ISO/IEC 17025:2017 Certified Calibration
              </li>
              <li className="flex items-center gap-2">
                <Gauge className="w-5 h-5" />
                Industrial Automation & PLC Programming
              </li>
              <li className="flex items-center gap-2">
                <Anchor className="w-5 h-5" />
                Marine Engineering & System Integration
              </li>
            </ul>
          </Card>

          <div className="grid md:grid-cols-3 gap-8 fade-up-section opacity-0 translate-y-8">
            <Card className="p-6 backdrop-blur-sm bg-white/50 border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Technical Excellence</h3>
              <p className="text-gray-600">
                Precision calibration and engineering services with international certification.
              </p>
            </Card>

            <Card className="p-6 backdrop-blur-sm bg-white/50 border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Global Reach</h3>
              <p className="text-gray-600">
                Operating across Sweden and Vietnam, bringing together the best of both worlds.
              </p>
            </Card>

            <Card className="p-6 backdrop-blur-sm bg-white/50 border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">Innovation Focus</h3>
              <p className="text-gray-600">
                Cutting-edge solutions in automation, calibration, and marine engineering.
              </p>
            </Card>
          </div>

          <Card className="p-8 backdrop-blur-sm bg-white/50 border border-gray-200 fade-up-section opacity-0 translate-y-8">
            <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
            <p className="text-gray-600 mb-6">
              Whether you need calibration services, automation solutions, or marine engineering expertise, 
              we're here to help elevate your technical operations.
            </p>
            <div>
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-md hover:from-blue-600 hover:to-blue-700 transition-all duration-300 cursor-pointer">
                <Sparkles className="w-5 h-5 mr-2" />
                Get in Touch
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About; 