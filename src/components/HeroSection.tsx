import { useState, useEffect } from "react";
import { Clock, Users, Trophy, Play, Pause } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroStadium from "@/assets/hero-stadium.jpg";

const HeroSection = () => {
  const [currentMatchIndex, setCurrentMatchIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
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

  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      setCurrentMatchIndex((prev) => (prev + 1) % featuredMatches.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, featuredMatches.length]);

  const scrollToLive = () => {
    document.getElementById("live")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToLeagues = () => {
    document.getElementById("leagues")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
          <Button size="lg" className="neon-glow hover-glow" onClick={scrollToLive}>
            <Clock className="mr-2 h-5 w-5" />
            Watch Live Matches
          </Button>
          <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary" onClick={scrollToLeagues}>
            <Trophy className="mr-2 h-5 w-5" />
            View Leagues
          </Button>
        </div>

        {/* Featured Matches Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold">Featured Matches</h3>
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setAutoplay(!autoplay)}
                className="text-primary hover:text-primary/80"
              >
                {autoplay ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <div className="flex space-x-2">
                {featuredMatches.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentMatchIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentMatchIndex ? 'bg-primary w-6' : 'bg-primary/30'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {featuredMatches.map((match, index) => (
              <div 
                key={match.id} 
                className={`neon-card rounded-lg p-6 hover-glow transition-all duration-500 ${
                  index === currentMatchIndex ? 'ring-2 ring-primary/50 scale-105' : 'opacity-70'
                }`}
              >
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
      </div>
    </section>
  );
};

export default HeroSection;