import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Loader2 } from 'lucide-react';
import { GlassButton } from '@/components/ui/GlassButton';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MonoAvatar } from '@/components/MonoAvatar';
import { fetchSanityAuthors, fetchAboutPage, SanityAuthor, SanityAboutPage } from '@/services/sanity-api';
import { urlFor } from '@/services/sanity';
import { PortableText } from '@portabletext/react';
import NilsProfile from '@/assets/images/nils-profile.jpeg';
import ThuanProfile from '@/assets/images/thuan-profile.jpeg';

const About = () => {
  const [authors, setAuthors] = useState<SanityAuthor[]>([]);
  const [aboutPage, setAboutPage] = useState<SanityAboutPage | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [sanityAuthors, sanityAboutPage] = await Promise.all([
          fetchSanityAuthors(),
          fetchAboutPage()
        ]);
        setAuthors(sanityAuthors);
        setAboutPage(sanityAboutPage);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  // Fallback to static content if no Sanity data
  const getAuthorImage = (author: SanityAuthor, fallbackSrc: string) => {
    if (author.image) {
      return urlFor(author.image).width(200).url();
    }
    return fallbackSrc;
  };

  const getAuthorOwner = (author: SanityAuthor) => {
    if (author.slug?.current === 'nils-johansson') return 'nils';
    if (author.slug?.current === 'thuan') return 'thuan';
    return author.color || 'blue';
  };

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="flex items-center justify-center py-16">
          <Loader2 className="h-8 w-8 animate-spin text-neutral-600" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-6 py-16 sm:py-20">
        {/* Newspaper-style header */}
        <div className="text-left mb-12">
          <p className="text-sm font-medium text-neutral-500 uppercase tracking-wide mb-2">
            Meet the Team
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-neutral-900 leading-tight mb-6">
            About Us
          </h1>
          <div className="prose prose-lg max-w-none border-b border-neutral-200 pb-8">
            <p className="text-xl sm:text-2xl text-neutral-700 leading-relaxed font-light">
              Professional engineers and cultural bridges connecting maritime expertise 
              with Southeast Asian insights.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          <div className="grid md:grid-cols-2 gap-12">
        {authors.length > 0 ? (
          authors.map((author) => (
            <Card key={author._id} id={author.slug?.current}>
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <MonoAvatar 
                    src={getAuthorImage(author, author.slug?.current === 'nils-johansson' ? NilsProfile : ThuanProfile)} 
                    alt={author.name} 
                    owner={getAuthorOwner(author)}
                    size="md"
                  />
                  <div>
                    <CardTitle className="text-2xl">About {author.name}</CardTitle>
                    {author.subtitle && (
                      <p className="text-sm text-muted-foreground mt-1">{author.subtitle}</p>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>{author.bio || 'No bio available.'}</p>
                
                {author.slug?.current === 'nils-johansson' && (
                  <GlassButton 
                    asChild 
                    className="mt-4 rounded-full px-6 py-3"
                  >
                    <Link to="/experience">
                      <Briefcase className="h-4 w-4" />
                      View Professional Timeline
                    </Link>
                  </GlassButton>
                )}
              </CardContent>
            </Card>
          ))
        ) : (
          // Fallback to static content if no authors in Sanity
          <>
            <Card id="nils">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <MonoAvatar 
                    src={NilsProfile} 
                    alt="Nils Johansson" 
                    owner="nils"
                    size="md"
                  />
                  <div>
                    <CardTitle className="text-2xl">About Nils</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Marine Engineer & Global Field Service Expert</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  I am a marine engineer with extensive global field service experience. My work has taken me around the world, from Sweden to Southeast Asia, the Americas, Africa, the Middle East, and Australia.
                </p>
                <p>
                  This blog is where I share my insights on marine engineering, preventive maintenance, and industrial safety, as well as my experiences from traveling and living abroad.
                </p>
                <GlassButton 
                  asChild 
                  className="mt-4 rounded-full px-6 py-3"
                >
                  <Link to="/experience">
                    <Briefcase className="h-4 w-4" />
                    View Professional Timeline
                  </Link>
                </GlassButton>
              </CardContent>
            </Card>

            <Card id="thuan">
              <CardHeader>
                <div className="flex items-center gap-4 mb-2">
                  <MonoAvatar 
                    src={ThuanProfile} 
                    alt="Thuan" 
                    owner="thuan"
                    size="md"
                  />
                  <div>
                    <CardTitle className="text-2xl">About Thuan</CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">Textile Specialist & Cultural Bridge</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <p>
                  Thuan is a skilled tailor and sourcing specialist from Vietnam. With her expertise, she connects clients with premium textiles and cost-effective tailoring solutions.
                </p>
                <p>
                  She offers an authentic look into the vibrant communities of Vietnam, such as Hoi An and Quang Nam, and her work is a bridge to the rich culture of the region.
                </p>
              </CardContent>
            </Card>
          </>
        )}
          </div>

          {/* Philosophy section - newspaper style */}
          <section className="border-t border-neutral-200 pt-12">
            <div className="text-left">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-neutral-900 mb-6">
                {aboutPage?.philosophyTitle || "Our Philosophy"}
              </h2>
              <div className="prose prose-lg max-w-none">
                <div className="text-xl text-neutral-700 leading-relaxed font-light italic">
                  {aboutPage?.philosophyText ? (
                    <PortableText value={aboutPage.philosophyText} />
                  ) : (
                    <p>
                      "Together, we combine industrial know-how, global experience, and cultural insights to support your professional success and enrich your personal journey."
                    </p>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
