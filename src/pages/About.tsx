import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
      <div className="flex items-center justify-center min-h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8">
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
                  <Button asChild variant="outline" className="mt-4">
                    <Link to="/experience" className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      View My Professional Timeline
                    </Link>
                  </Button>
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
                <Button asChild variant="outline" className="mt-4">
                  <Link to="/experience" className="flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    View My Professional Timeline
                  </Link>
                </Button>
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

      <section className="text-center bg-muted/50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">
          {aboutPage?.philosophyTitle || "Our Philosophy"}
        </h2>
        <div className="text-lg italic text-muted-foreground max-w-3xl mx-auto">
          {aboutPage?.philosophyText ? (
            <PortableText value={aboutPage.philosophyText} />
          ) : (
            <p>
              "Together, we combine industrial know-how, global experience, and cultural insights to support your professional success and enrich your personal journey."
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default About;
