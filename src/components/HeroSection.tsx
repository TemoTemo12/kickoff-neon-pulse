import { Clock, Users, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroStadium from "@/assets/hero-stadium.jpg";

const HeroSection = () => {
  const featuredMatches = [
    {
      id: 1,
      homeTeam: "Barcelona",
      awayTeam: "Real Madrid",
      homeScore: 2,
      awayScore: 1,
      status: "LIVE",
      minute: 78,
      league: "La Liga"
    },
    {
      id: 2,
      homeTeam: "Manchester City",
      awayTeam: "Liverpool",
      homeScore: 1,
      awayScore: 3,
      status: "FT",
      minute: 90,
      league: "Premier League"
    }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroStadium})` }}
      >
        <div className="absolute inset-0 bg-stadium-dark/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">Soccer</span>
          <br />
          <span className="text-foreground">Pulse</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto">
          Experience the world of soccer like never before. Live matches, real-time stats, 
          and the latest news from around the globe.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="neon-glow hover-glow">
            <Clock className="mr-2 h-5 w-5" />
            Watch Live Matches
          </Button>
          <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary">
            <Trophy className="mr-2 h-5 w-5" />
            View Leagues
          </Button>
        </div>

        {/* Featured Matches */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {featuredMatches.map((match) => (
            <div key={match.id} className="neon-card rounded-lg p-6 hover-glow">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-muted-foreground">{match.league}</span>
                <div className="flex items-center space-x-2">
                  {match.status === "LIVE" && (
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-primary rounded-full live-pulse"></div>
                      <span className="text-primary font-medium text-sm">LIVE</span>
                    </div>
                  )}
                  <span className="text-sm text-muted-foreground">
                    {match.status === "LIVE" ? `${match.minute}'` : match.status}
                  </span>
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <div className="font-semibold text-foreground">{match.homeTeam}</div>
                  <div className="font-semibold text-foreground mt-2">{match.awayTeam}</div>
                </div>
                
                <div className="text-right">
                  <div className="text-2xl font-bold text-primary">{match.homeScore}</div>
                  <div className="text-2xl font-bold text-primary mt-2">{match.awayScore}</div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-border flex justify-center">
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80">
                  <Users className="mr-2 h-4 w-4" />
                  Match Details
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;