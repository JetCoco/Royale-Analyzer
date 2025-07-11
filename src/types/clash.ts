export interface ClashPlayer {
    tag: string;
    name: string;
    expLevel: number;
    trophies: number;
    bestTrophies: number;
    wins: number;
    losses: number;
    battleCount: number;
    threeCrownWins: number;
    challengeCardsWon: number;
    challengeMaxWins: number;
    tournamentCardsWon: number;
    tournamentBattleCount: number;
    role?: string;
    donations: number;
    donationsReceived: number;
    totalDonations: number;
    warDayWins: number;
    clanCardsCollected: number;
    currentFavouriteCard: {
      id: number;
      name: string;
      iconUrls: {
        medium: string;
      };
    };
    arena: {
      id: number;
      name: string;
    };
    clan?: {
      tag: string;
      name: string;
      badgeId: number;
    };
    leagueStatistics?: {
      currentSeason: {
        trophies: number;
        bestTrophies: number;
      };
      previousSeason: {
        id: string;
        trophies: number;
        bestTrophies: number;
      };
      bestSeason: {
        id: string;
        trophies: number;
      };
    };
    badges: {
      name: string;
      level: number;
      maxLevel: number;
      progress: number;
      target: number;
      iconUrls: {
        large: string;
      };
    }[];
    achievements: {
      name: string;
      stars: number;
      value: number;
      target: number;
      info: string;
      completionInfo: string;
    }[];
  }  