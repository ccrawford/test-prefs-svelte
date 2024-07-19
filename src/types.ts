export interface Preferences {
    favTeamId: number;
    tzString: string;
    brightness: number;
    updateServerName: string;
    zipCode: string;
    screenRotateSeconds: number;
    followedTeamIds: number[];
    spoilerMode: boolean;
  }

  export interface TimezoneOption {
    description: string;
    value: string;
  }
  
  export const TIMEZONE_OPTIONS: TimezoneOption[] = [
    { description: "Eastern", value: "EST5EDT,M3.2.0,M11.1.0" },
    { description: "Central", value: "CST6CDT,M3.2.0,M11.1.0" },
    { description: "Mountain", value: "MST7MDT,M3.2.0,M11.1.0" },
    { description: "Pacific", value: "PST8PDT,M3.2.0,M11.1.0" }
  ];

  export interface Team {
    id: number;
    name: string;
    league: 'American League' | 'National League';
  }

  export const MLB_TEAMS: Team[] = [
    { id: 110, name: 'Baltimore Orioles', league: 'American League' },
    { id: 111, name: 'Boston Red Sox', league: 'American League' },
    { id: 145, name: 'Chicago White Sox', league: 'American League' },
    { id: 114, name: 'Cleveland Guardians', league: 'American League' },
    { id: 116, name: 'Detroit Tigers', league: 'American League' },
    { id: 117, name: 'Houston Astros', league: 'American League' },
    { id: 118, name: 'Kansas City Royals', league: 'American League' },
    { id: 108, name: 'Los Angeles Angels', league: 'American League' },
    { id: 142, name: 'Minnesota Twins', league: 'American League' },
    { id: 147, name: 'New York Yankees', league: 'American League' },
    { id: 133, name: 'Oakland Athletics', league: 'American League' },
    { id: 136, name: 'Seattle Mariners', league: 'American League' },
    { id: 139, name: 'Tampa Bay Rays', league: 'American League' },
    { id: 140, name: 'Texas Rangers', league: 'American League' },
    { id: 141, name: 'Toronto Blue Jays', league: 'American League' },
    { id: 109, name: 'Arizona D-backs', league: 'National League' },
    { id: 144, name: 'Atlanta Braves', league: 'National League' },
    { id: 112, name: 'Chicago Cubs', league: 'National League' },
    { id: 113, name: 'Cincinnati Reds', league: 'National League' },
    { id: 115, name: 'Colorado Rockies', league: 'National League' },
    { id: 119, name: 'Los Angeles Dodgers', league: 'National League' },
    { id: 146, name: 'Miami Marlins', league: 'National League' },
    { id: 158, name: 'Milwaukee Brewers', league: 'National League' },
    { id: 121, name: 'New York Mets', league: 'National League' },
    { id: 143, name: 'Philadelphia Phillies', league: 'National League' },
    { id: 134, name: 'Pittsburgh Pirates', league: 'National League' },
    { id: 135, name: 'San Diego Padres', league: 'National League' },
    { id: 137, name: 'San Francisco Giants', league: 'National League' },
    { id: 138, name: 'St. Louis Cardinals', league: 'National League' },
    { id: 120, name: 'Washington Nationals', league: 'National League' },
  ];

  export const sortedTeamsByLeague = MLB_TEAMS.reduce((acc, team) => {
    if (!acc[team.league]) {
      acc[team.league] = [];
    }
    acc[team.league].push(team);
    return acc;
  }, {} as Record<string, Team[]>);
  
  // Sort teams in each league by city name
  Object.values(sortedTeamsByLeague).forEach(leagueTeams => {
    leagueTeams.sort((a, b) => {
      const cityA = a.name.split(' ').slice(-1)[0];
      const cityB = b.name.split(' ').slice(-1)[0];
      return cityA.localeCompare(cityB);
    });
  });