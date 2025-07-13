import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { MonoAvatar } from '@/components/MonoAvatar';
import NilsProfile from '@/assets/images/nils-profile.jpeg';
import ThuanProfile from '@/assets/images/thuan-profile.jpeg';

const About = () => {
  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8">
        <Card id="nils">
          <CardHeader>
            <div className="flex items-center gap-4 mb-2">
              <MonoAvatar 
                src={NilsProfile} 
                alt="Nils Johansson" 
                owner="nils"
                size="md"
              />
              <CardTitle className="text-2xl">About Nils</CardTitle>
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
              <CardTitle className="text-2xl">About Thuan</CardTitle>
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
      </div>

      <section className="text-center bg-muted/50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-2">Our Philosophy</h2>
        <p className="text-lg italic text-muted-foreground max-w-3xl mx-auto">
          "Together, we combine industrial know-how, global experience, and cultural insights to support your professional success and enrich your personal journey."
        </p>
      </section>

    </div>
  );
};

export default About;
