import { useState } from "react";
import { Trophy, TrendingUp, TrendingDown, Minus, ArrowUpDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const LeagueStandings = () => {
  const [activeLeague, setActiveLeague] = useState("premier-league");
  const [sortBy, setSortBy] = useState("position");
  const leagues = [
    { name: "Premier League", country: "England", id: "premier-league", active: true },
    { name: "La Liga", country: "Spain", id: "la-liga", active: false },
    { name: "Bundesliga", country: "Germany", id: "bundesliga", active: false },
    { name: "Serie A", country: "Italy", id: "serie-a", active: false },
  ];

  const standings = [
    {
      position: 1,
      team: "Manchester City",
      played: 28,
      won: 22,
      drawn: 4,
      lost: 2,
      goalsFor: 68,
      goalsAgainst: 18,
      goalDifference: 50,
      points: 70,
      form: ["W", "W", "W", "D", "W"],
      trend: "up"
    },
    {
      position: 2,
      team: "Arsenal",
      played: 28,
      won: 20,
      drawn: 5,
      lost: 3,
      goalsFor: 62,
      goalsAgainst: 25,
      goalDifference: 37,
      points: 65,
      form: ["W", "W", "L", "W", "D"],
      trend: "down"
    },
    {
      position: 3,
      team: "Liverpool",
      played: 28,
      won: 19,
      drawn: 6,
      lost: 3,
      goalsFor: 59,
      goalsAgainst: 28,
      goalDifference: 31,
      points: 63,
      form: ["D", "W", "W", "W", "W"],
      trend: "up"
    },
    {
      position: 4,
      team: "Chelsea",
      played: 28,
      won: 17,
      drawn: 7,
      lost: 4,
      goalsFor: 52,
      goalsAgainst: 30,
      goalDifference: 22,
      points: 58,
      form: ["W", "D", "W", "L", "W"],
      trend: "same"
    },
    {
      position: 5,
      team: "Newcastle United",
      played: 28,
      won: 16,
      drawn: 8,
      lost: 4,
      goalsFor: 45,
      goalsAgainst: 28,
      goalDifference: 17,
      points: 56,
      form: ["D", "W", "D", "W", "L"],
      trend: "up"
    }
  ];

  const getFormColor = (result: string) => {
    switch (result) {
      case "W": return "bg-primary text-primary-foreground";
      case "D": return "bg-accent text-accent-foreground";
      case "L": return "bg-destructive text-destructive-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4 text-primary" />;
      case "down": return <TrendingDown className="h-4 w-4 text-destructive" />;
      default: return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const sortedStandings = [...standings].sort((a, b) => {
    switch (sortBy) {
      case "points": return b.points - a.points;
      case "goalDifference": return b.goalDifference - a.goalDifference;
      case "goalsFor": return b.goalsFor - a.goalsFor;
      default: return a.position - b.position;
    }
  });
  const getPositionColor = (position: number) => {
    if (position <= 4) return "text-primary"; // Champions League
    if (position <= 6) return "text-secondary"; // Europa League
    if (position >= 18) return "text-destructive"; // Relegation
    return "text-foreground";
  };

  const handleLeagueChange = (leagueId: string) => {
    setActiveLeague(leagueId);
  };

  const handleSort = (field: string) => {
    setSortBy(field);
  };

  return (
    <section id="leagues" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            League <span className="gradient-text">Standings</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track your favorite teams across major European leagues
          </p>
        </div>

        {/* League Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {leagues.map((league) => (
            <Button
              key={league.id}
              variant={activeLeague === league.id ? "default" : "outline"}
              onClick={() => handleLeagueChange(league.id)}
              className={activeLeague === league.id ? "neon-glow" : "border-primary/30 hover:border-primary"}
            >
              <Trophy className="mr-2 h-4 w-4" />
              {league.name}
            </Button>
          ))}
        </div>

        {/* Standings Table */}
        <Card className="neon-card overflow-hidden">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold">Premier League 2024/25</h3>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-primary rounded"></div>
                  <span>Champions League</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-secondary rounded"></div>
                  <span>Europa League</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-destructive rounded"></div>
                  <span>Relegation</span>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="border-border">
                    <TableHead className="w-12">#</TableHead>
                    <TableHead>Team</TableHead>
                    <TableHead className="text-center">P</TableHead>
                    <TableHead className="text-center">W</TableHead>
                    <TableHead className="text-center">D</TableHead>
                    <TableHead className="text-center">L</TableHead>
                    <TableHead className="text-center">GF</TableHead>
                    <TableHead className="text-center">GA</TableHead>
                    <TableHead className="text-center">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleSort("goalDifference")}
                        className="text-xs hover:text-primary"
                      >
                        GD <ArrowUpDown className="h-3 w-3 ml-1" />
                      </Button>
                    </TableHead>
                    <TableHead className="text-center">
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => handleSort("points")}
                        className="text-xs hover:text-primary"
                      >
                        Pts <ArrowUpDown className="h-3 w-3 ml-1" />
                      </Button>
                    </TableHead>
                    <TableHead className="text-center">Form</TableHead>
                    <TableHead className="w-12"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {sortedStandings.map((team) => (
                    <TableRow key={team.position} className="border-border hover:bg-muted/30">
                      <TableCell>
                        <div className="flex items-center space-x-2">
                          <span className={`font-bold ${getPositionColor(team.position)}`}>
                            {team.position}
                          </span>
                          <div 
                            className={`w-1 h-6 rounded ${
                              team.position <= 4 ? 'bg-primary' : 
                              team.position <= 6 ? 'bg-secondary' : 
                              team.position >= 18 ? 'bg-destructive' : 'bg-transparent'
                            }`}
                          />
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="font-medium">{team.team}</div>
                      </TableCell>
                      <TableCell className="text-center">{team.played}</TableCell>
                      <TableCell className="text-center">{team.won}</TableCell>
                      <TableCell className="text-center">{team.drawn}</TableCell>
                      <TableCell className="text-center">{team.lost}</TableCell>
                      <TableCell className="text-center">{team.goalsFor}</TableCell>
                      <TableCell className="text-center">{team.goalsAgainst}</TableCell>
                      <TableCell className="text-center font-medium">
                        {team.goalDifference > 0 ? '+' : ''}{team.goalDifference}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant="outline" className="border-primary/50 text-primary font-bold">
                          {team.points}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex space-x-1">
                          {team.form.map((result, index) => (
                            <div
                              key={index}
                              className={`w-6 h-6 rounded text-xs flex items-center justify-center font-bold ${getFormColor(result)}`}
                            >
                              {result}
                            </div>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        {getTrendIcon(team.trend)}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default LeagueStandings;