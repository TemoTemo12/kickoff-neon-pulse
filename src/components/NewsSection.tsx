import { Calendar, User, ArrowRight, Play } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import matchAction from "@/assets/match-action.jpg";

const NewsSection = () => {
  const newsArticles = [
    {
      id: 1,
      title: "Champions League Final: Barcelona vs Manchester City Preview",
      excerpt: "Two European giants clash in what promises to be the match of the century. Both teams arrive with perfect records and star-studded lineups.",
      author: "Sarah Johnson",
      date: "2 hours ago",
      category: "Champions League",
      image: matchAction,
      isVideo: false,
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Transfer News: Mbappé's Record-Breaking Move Shakes Football World",
      excerpt: "The French superstar's unexpected transfer has sent shockwaves through the football community, breaking multiple transfer records.",
      author: "Mike Rodriguez",
      date: "4 hours ago",
      category: "Transfers",
      image: matchAction,
      isVideo: true,
      readTime: "3 min watch"
    },
    {
      id: 3,
      title: "World Cup Qualifiers: Upsets and Surprises Rock the Tournament",
      excerpt: "Several underdogs have secured shocking victories in the latest round of World Cup qualifying matches, changing the landscape completely.",
      author: "Emma Chen",
      date: "6 hours ago",
      category: "World Cup",
      image: matchAction,
      isVideo: false,
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Rising Stars: The Next Generation of Football Legends",
      excerpt: "Meet the young players who are already making waves in top leagues and could define the next decade of football.",
      author: "Carlos Silva",
      date: "8 hours ago",
      category: "Youth",
      image: matchAction,
      isVideo: false,
      readTime: "6 min read"
    }
  ];

  const categories = ["All", "Champions League", "Premier League", "La Liga", "Transfers", "World Cup"];

  return (
    <section id="news" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest <span className="gradient-text">News</span> & Highlights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with breaking news, match highlights, and exclusive interviews
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className={category === "All" ? "neon-glow" : "border-primary/30 hover:border-primary"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Featured Article */}
        <div className="mb-12">
          <Card className="neon-card overflow-hidden hover-glow">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative">
                <img 
                  src={newsArticles[0].image} 
                  alt={newsArticles[0].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-primary-foreground">
                    Featured
                  </Badge>
                </div>
              </div>
              
              <div className="p-8 flex flex-col justify-center">
                <Badge variant="outline" className="border-primary/50 text-primary w-fit mb-4">
                  {newsArticles[0].category}
                </Badge>
                
                <h3 className="text-2xl lg:text-3xl font-bold mb-4 line-clamp-2">
                  {newsArticles[0].title}
                </h3>
                
                <p className="text-muted-foreground mb-6 line-clamp-3">
                  {newsArticles[0].excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{newsArticles[0].author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{newsArticles[0].date}</span>
                    </div>
                  </div>
                  
                  <Button className="neon-glow">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.slice(1).map((article) => (
            <Card key={article.id} className="neon-card overflow-hidden hover-glow">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                
                {article.isVideo && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center neon-glow">
                      <Play className="h-8 w-8 text-primary-foreground ml-1" />
                    </div>
                  </div>
                )}
                
                <div className="absolute top-4 left-4">
                  <Badge variant="outline" className="bg-card/80 backdrop-blur-sm border-primary/50 text-primary">
                    {article.category}
                  </Badge>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <span>{article.readTime}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;