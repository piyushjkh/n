import { useEffect, useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, Gift, Smartphone, Star, TrendingUp, Video, Zap } from "lucide-react";

import heroImage from "@assets/2.5M-1536x864_1772851808594.png";
import photo1 from "@assets/photo_2026-02-10_12-24-16_1772873440324.jpg";
import photo2 from "@assets/photo_2026-02-10_11-16-49_1772873440329.avif";
import photo3 from "@assets/photo_2026-02-10_11-16-27_1772873440330.avif";
import photo4 from "@assets/photo_2026-02-10_11-16-08-768x1526_1772873440331.avif";
import quickOverviewVideo from "@assets/Quick-overview_1772873650691.mp4";

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 21,
    minutes: 45,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center gap-4 text-center my-6" data-testid="countdown-timer">
      <div className="bg-foreground text-background rounded-lg p-3 w-20 shadow-lg border border-border/10">
        <div className="text-3xl font-bold font-display">{timeLeft.hours.toString().padStart(2, '0')}</div>
        <div className="text-xs uppercase tracking-wider opacity-80 font-medium">Hours</div>
      </div>
      <div className="text-3xl font-bold self-center text-foreground animate-pulse">:</div>
      <div className="bg-foreground text-background rounded-lg p-3 w-20 shadow-lg border border-border/10">
        <div className="text-3xl font-bold font-display">{timeLeft.minutes.toString().padStart(2, '0')}</div>
        <div className="text-xs uppercase tracking-wider opacity-80 font-medium">Minutes</div>
      </div>
      <div className="text-3xl font-bold self-center text-foreground animate-pulse">:</div>
      <div className="bg-primary text-primary-foreground rounded-lg p-3 w-20 shadow-lg border border-primary/20">
        <div className="text-3xl font-bold font-display">{timeLeft.seconds.toString().padStart(2, '0')}</div>
        <div className="text-xs uppercase tracking-wider opacity-90 font-medium">Seconds</div>
      </div>
    </div>
  );
}

export default function Home() {
  const checkoutUrl = "https://superprofile.bio/vp/6f2zWlVz";

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
      {/* Top Banner */}
      <div className="bg-primary text-primary-foreground py-3 text-center px-4 font-semibold text-sm sm:text-base sticky top-0 z-50 shadow-md">
        <span className="animate-pulse inline-block mr-2">🎉</span>
        Launch Offer – 95% OFF this Week! 🚀 
        <a href={checkoutUrl} className="underline ml-2 font-bold hover:text-white/80 transition-colors">
          Enroll Now For ₹199/-
        </a>
      </div>
      <main className="pb-24">
        {/* Hero Section */}
        <section className="px-4 max-w-4xl mx-auto text-center relative pl-[12px] pr-[12px] pt-[10px] pb-[10px]">
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none -z-10" />
          
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight text-foreground" data-testid="hero-headline">
            Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Real AI Influencers</span> & Go Viral – Start Today!
          </h1>
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl mb-8 border-4 border-white mx-auto max-w-3xl transform hover:scale-[1.01] transition-transform duration-500">
            <img 
              src={heroImage} 
              alt="AI Influencer hitting 2.5M views" 
              className="w-full object-cover aspect-video"
              data-testid="hero-image"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-black font-bold py-1 px-3 rounded-full text-sm shadow-lg flex items-center gap-1">
              <TrendingUp className="w-4 h-4 text-primary" />
              2.5M+ Views
            </div>
          </div>

          <a href={checkoutUrl} className="block w-full max-w-md mx-auto group">
            <Button size="lg" className="w-full text-lg h-auto py-4 rounded-xl shadow-xl shadow-primary/20 hover:shadow-primary/40 transition-all bg-gradient-to-b from-primary to-primary/90 group-hover:scale-[1.02] border border-primary-foreground/10" data-testid="button-enroll-hero">
              <div className="flex flex-col items-center">
                <span className="font-black uppercase tracking-wide text-xl">Enroll Now at Just ₹199/-</span>
                <span className="font-medium opacity-90 text-[14px]">Tomorrow Price ₹399/- with Bonuses</span>
              </div>
            </Button>
          </a>
          
          <p className="mt-4 font-medium flex items-center justify-center gap-2 text-[18px] text-[#000000]">
            <Clock className="w-4 h-4" /> Limited time offer. Price increases soon!
          </p>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/50 px-4 border-y border-border/50 relative overflow-hidden pt-[15px] pb-[15px] pl-[1px] pr-[1px]">
          <div className="max-w-4xl mx-auto relative z-10">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-black inline-flex items-center justify-center gap-3">
                <span className="text-4xl">🤑</span> Master AI Influencer
              </h2>
              <p className="text-xl text-muted-foreground mt-2 font-medium">Earn Lakhs with just your smartphone</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
              {[
                { text: "NO PC REQUIRED -> ONLY ANDROID MOBILE", icon: Smartphone },
                { text: "No Paid Software Required", icon: Zap },
                { text: "Videos Language – हिंदी", icon: Video },
                { text: "Beginner-Friendly – No Skills Needed", icon: Star },
                { text: "Full Step-by-Step Video Tutorials", icon: Video },
                { text: "Create Real Go Viral Influencer", icon: TrendingUp },
                { text: "Lifetime Access + Instant Download", icon: Clock },
                { text: "7-day refund guarantee", icon: CheckCircle2 },
              ].map((item, i) => (
                <Card key={i} className="bg-card border-none shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-4 flex items-center gap-4 pt-[1px] pb-[1px] pl-[1px] pr-[1px]">
                    <div className="bg-primary/10 p-2 rounded-full text-primary shrink-0">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <span className="font-semibold text-[#000000]">{item.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Course Quick Overview Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-muted/30 to-background max-w-5xl mx-auto text-center pt-[20px] pb-[20px]">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Course Quick Overview</h2>
          <p className="text-xl text-muted-foreground mb-12">Watch a sneak peek of what you'll learn</p>
          
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white max-w-2xl mx-auto">
            <video 
              src={quickOverviewVideo} 
              className="w-full object-cover aspect-video" 
              controls
              data-testid="video-quick-overview"
            />
          </div>
        </section>

        {/* Social Proof Section */}
        <section className="py-16 px-4 max-w-6xl mx-auto text-center pt-[20px] pb-[20px]">
          <h2 className="text-3xl md:text-4xl font-black mb-4">Popular AI Influencer Pages</h2>
          <p className="text-xl text-muted-foreground mb-12">Making Lakhs Every Month</p>
          
          <div className="flex justify-center gap-4 overflow-x-auto pb-4">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white flex-shrink-0">
              <img 
                src={photo1} 
                alt="AI Influencer 1" 
                className="w-40 h-64 object-cover"
                data-testid="photo-influencer-1"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white flex-shrink-0">
              <img 
                src={photo2} 
                alt="AI Influencer 2" 
                className="w-40 h-64 object-cover"
                data-testid="photo-influencer-2"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white flex-shrink-0">
              <img 
                src={photo3} 
                alt="AI Influencer 3" 
                className="w-40 h-64 object-cover"
                data-testid="photo-influencer-3"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white flex-shrink-0">
              <img 
                src={photo4} 
                alt="AI Influencer 4" 
                className="w-40 h-64 object-cover"
                data-testid="photo-influencer-4"
              />
            </div>
          </div>
        </section>

        {/* Mid CTA with Timer */}
        <section className="py-16 px-4 bg-foreground text-background text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
          <div className="max-w-3xl mx-auto relative z-10">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">
              Hurry Up! Don't Miss The Opportunity
            </h2>
            <p className="text-xl font-medium text-primary mb-8">Discounted offer is Closing Soon</p>
            
            <CountdownTimer />
            
            <a href={checkoutUrl} className="block w-full max-w-md mx-auto mt-8 group">
              <Button size="lg" className="w-full text-lg h-auto py-4 rounded-xl shadow-xl shadow-primary/20 bg-primary hover:bg-primary/90 text-white font-black uppercase tracking-wide group-hover:scale-[1.02] transition-all">
                Buy Now at Just ₹199/-
              </Button>
            </a>
          </div>
        </section>

        {/* What Will You Learn */}
        <section className="py-16 px-4 max-w-4xl mx-auto pt-[10px] pb-[10px] pl-[8px] pr-[8px] ml-[0px] mr-[0px] mt-[6px] mb-[6px]">
          <div className="text-center mb-12">
            <h2 className="md:text-4xl font-black flex items-center justify-center gap-3 text-[41px]">
              <span className="text-4xl">📚</span> WHAT WILL YOU LEARN?
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "How to create a hyper-realistic AI character",
              "How to Create Professional Photoshoot Images Using AI",
              "Understanding the basics of becoming a digital influencer",
              "Creating viral Instagram Reels and short-form content",
              "Writing engaging captions and hooks that attract followers",
              "Using AI tools to generate content quickly",
              "How to convert an image into a video like viral videos on Instagram"
            ].map((text, i) => (
              <div key={i} className="flex items-start gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border pt-[6px] pb-[6px] mt-[8px] mb-[8px] pl-[1px] pr-[1px] text-[160px] bg-[#ffffff80] text-[#000000]">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                <p className="text-lg font-medium bg-[#ffffff] text-[#000000]">{text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Bonuses Section */}
        <section className="py-16 px-4 bg-muted/30 border-t border-border/50">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full font-bold mb-4 text-sm uppercase tracking-wider">
                <Gift className="w-4 h-4" /> Limited Time Bonuses
              </div>
              <h2 className="text-3xl md:text-5xl font-black">🎁 Free Bonus Worth - ₹10,000</h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Canva Pro (Lifetime)", color: "bg-blue-500" },
                { title: "Wondershare Filmora (LT)", color: "bg-teal-500" },
                { title: "Kinemaster Pro (Lifetime)", color: "bg-orange-500" },
                { title: "Capcut Pro (LT)", color: "bg-black" }
              ].map((bonus, i) => (
                <Card key={i} className="overflow-hidden border-2 border-border hover:border-primary/30 transition-colors group">
                  <div className={`h-32 ${bonus.color} flex items-center justify-center text-white p-6 text-center group-hover:opacity-90 transition-opacity`}>
                    <h3 className="font-black text-xl leading-tight">{bonus.title}</h3>
                  </div>
                  <CardContent className="p-4 text-center bg-card">
                    <p className="font-bold text-primary">FREE TODAY</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black mb-8 flex items-center justify-center gap-3">
            <span className="text-4xl">⌚</span> TIME IS RUNNING OUT
          </h2>
          
          <CountdownTimer />
          
          <a href={checkoutUrl} className="block w-full max-w-lg mx-auto mt-10 group">
            <Button size="lg" className="w-full text-lg h-auto py-5 rounded-xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all bg-gradient-to-r from-primary to-rose-600 group-hover:scale-[1.03] border-2 border-white/20 animate-pulse">
              <div className="flex flex-col items-center">
                <span className="font-black uppercase tracking-wide text-2xl">PRICE INCREASING SOON!</span>
                <span className="text-base font-bold opacity-90 mt-1 line-through opacity-70">₹3999</span>
                <span className="text-xl font-black">ONLY ₹199</span>
              </div>
            </Button>
          </a>
        </section>
      </main>
      {/* Floating WhatsApp Button */}
      <a 
        href="https://api.whatsapp.com/send?phone=918950370314" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-50 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </a>
    </div>
  );
}