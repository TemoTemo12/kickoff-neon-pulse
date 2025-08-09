import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import LiveMatchCenter from "@/components/LiveMatchCenter";
import LeagueStandings from "@/components/LeagueStandings";
import NewsSection from "@/components/NewsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <LiveMatchCenter />
      <LeagueStandings />
      <NewsSection />
    </div>
  );
};

export default Index;
