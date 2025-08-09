import { useState, useEffect } from "react";
import { Clock, Calendar, MapPin, TrendingUp, Filter, RefreshCw } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const LiveMatchCenter = () => {
  const [selectedLeague, setSelectedLeague] = useState("all");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [lastUpdated, setLastUpdated] = useState(new Date());

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

  const leagues = [
    { value: "all", label: "All Leagues" },
    { value: "premier-league", label: "Premier League" },
    { value: "la-liga", label: "La Liga" },
    { value: "bundesliga", label: "Bundesliga" },
    { value: "serie-a", label: "Serie A" },
    { value: "ligue-1", label: "Ligue 1" },
  ];

  const filteredMatches = liveMatches.filter(match => 
    selectedLeague === "all" || 
    match.league.toLowerCase().replace(/\s+/g, '-') === selectedLeague
  );

  useEffect(() => {
    // Simulate real-time updates for live matches
    const interval = setInterval(() => {
      setLastUpdated(new Date());
      // In a real app, this would fetch new data
    }, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setLastUpdated(new Date());
    setIsRefreshing(false);
  };

  return (
    <section id="live" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Live Match</span> Center
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-6">
            Follow the action as it happens with real-time scores and live commentary
          </p>
          
          {/* Controls */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center space-x-4">
              <Select value={selectedLeague} onValueChange={setSelectedLeague}>
                <SelectTrigger className="w-48 bg-card border-primary/30 focus:border-primary">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-card border-border z-50">
                  {leagues.map((league) => (
                    <SelectItem key={league.value} value={league.value}>
                      {league.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="border-primary/30 hover:border-primary"
              >
                <RefreshCw className={`h-4 w-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
                Refresh
              </Button>
            </div>
            
            <div className="text-sm text-muted-foreground">
              Last updated: {lastUpdated.toLocaleTimeString()}
            </div>
          </div>
        </div>

        {/* Live Matches */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <div className="w-3 h-3 bg-primary rounded-full live-pulse mr-3"></div>
            Live Now
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-6">
            {filteredMatches.length > 0 ? (
              filteredMatches.map((match) => (
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
              ))
            ) : (
              <div className="col-span-3 text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No live matches found for the selected league.
                </p>
              </div>
            )}
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