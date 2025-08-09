import { Clock, Calendar, MapPin, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const LiveMatchCenter = () => {
  const liveMatches = [
    {
      id: 1,
      homeTeam: "Arsenal",
      awayTeam: "Chelsea",
      homeScore: 2,
      awayScore: 0,
      minute: 65,
      league: "Premier League",
      stadium: "Emirates Stadium",
      isLive: true
    },
    {
      id: 2,
      homeTeam: "Bayern Munich",
      awayTeam: "Dortmund",
      homeScore: 1,
      awayScore: 2,
      minute: 82,
      league: "Bundesliga",
      stadium: "Allianz Arena",
      isLive: true
    },
    {
      id: 3,
      homeTeam: "PSG",
      awayTeam: "Marseille",
      homeScore: 3,
      awayScore: 1,
      minute: "FT",
      league: "Ligue 1",
      stadium: "Parc des Princes",
      isLive: false
    }
  ];

  const upcomingMatches = [
    {
      id: 4,
      homeTeam: "Juventus",
      awayTeam: "AC Milan",
      time: "20:45",
      date: "Today",
      league: "Serie A",
      stadium: "Allianz Stadium"
    },
    {
      id: 5,
      homeTeam: "Atletico Madrid",
      awayTeam: "Valencia",
      time: "22:00",
      date: "Today",
      league: "La Liga",
      stadium: "Wanda Metropolitano"
    }
  ];

  return (
    <section id="live" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Live Match</span> Center
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow the action as it happens with real-time scores and live commentary
          </p>
        </div>

        {/* Live Matches */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <div className="w-3 h-3 bg-primary rounded-full live-pulse mr-3"></div>
            Live Now
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {liveMatches.map((match) => (
              <Card key={match.id} className="neon-card p-6 hover-glow">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-primary/50 text-primary">
                    {match.league}
                  </Badge>
                  <div className="flex items-center space-x-2">
                    {match.isLive && (
                      <>
                        <div className="w-2 h-2 bg-primary rounded-full live-pulse"></div>
                        <span className="text-primary font-medium text-sm">
                          {match.minute}'
                        </span>
                      </>
                    )}
                    {!match.isLive && (
                      <span className="text-muted-foreground text-sm">
                        {match.minute}
                      </span>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-lg">{match.homeTeam}</span>
                    <span className="text-3xl font-bold text-primary">{match.homeScore}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-lg">{match.awayTeam}</span>
                    <span className="text-3xl font-bold text-primary">{match.awayScore}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    {match.stadium}
                  </div>
                  
                  <Button variant="ghost" className="w-full text-primary hover:text-primary/80">
                    <TrendingUp className="mr-2 h-4 w-4" />
                    Live Stats
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Matches */}
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Calendar className="mr-3 h-6 w-6 text-secondary" />
            Coming Up
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {upcomingMatches.map((match) => (
              <Card key={match.id} className="neon-card p-6 hover-glow">
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="border-secondary/50 text-secondary">
                    {match.league}
                  </Badge>
                  <div className="flex items-center space-x-2 text-secondary">
                    <Clock className="h-4 w-4" />
                    <span className="font-medium">{match.time}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-lg">{match.homeTeam}</span>
                    <span className="text-muted-foreground">vs</span>
                    <span className="font-semibold text-lg">{match.awayTeam}</span>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {match.stadium}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveMatchCenter;