'use strict';

/**
 * @ngdoc service
 * @name agileBracketApp.teams
 * @description
 * # teams
 * Service in the agileBracketApp.
 */
angular.module('agileBracketApp')
  .service('teams', function () {
    // AngularJS will instantiate a singleton by calling 'new' on this function
    var teams = {
      // South (top left)
      teamId01: {
        seed: 1,
        name: 'Florida'
      },
      teamId02: {
        seed: 2,
        name: 'Kansas'
      },
      teamId03: {
        seed: 3,
        name: 'Syracuse'
      },
      teamId04: {
        seed: 4,
        name: 'UCLA'
      },
      teamId05: {
        seed: 5,
        name: 'VCU'
      },
      teamId06: {
        seed: 6,
        name: 'Ohio State'
      },
      teamId07: {
        seed: 7,
        name: 'New Mexico'
      },
      teamId08: {
        seed: 8,
        name: 'Colorado'
      },
      teamId09: {
        seed: 9,
        name: 'Pittsburgh'
      },
      teamId10: {
        seed: 10,
        name: 'Stanford'
      },
      teamId11: {
        seed: 11,
        name: 'Dayton'
      },
      teamId12: {
        seed: 12,
        name: 'Stephen F. Austin'
      },
      teamId13: {
        seed: 13,
        name: 'Tulsa'
      },
      teamId14: {
        seed: 14,
        name: 'Western Michigan'
      },
      teamId15: {
        seed: 15,
        name: 'Eastern Kentucky'
      },
      teamId16: {
        seed: 16,
        name: 'Albany'
      },
      
      // East (bottom left)
      teamId17: {
        seed: 1,
        name: 'Virginia'
      },
      teamId18: {
        seed: 2,
        name: 'Villanova'
      },
      teamId19: {
        seed: 3,
        name: 'Iowa State'
      },
      teamId20: {
        seed: 4,
        name: 'Michigan State'
      },
      teamId21: {
        seed: 5,
        name: 'Cincinnati'
      },
      teamId22: {
        seed: 6,
        name: 'North Carolina'
      },
      teamId23: {
        seed: 7,
        name: 'Connecticut'
      },
      teamId24: {
        seed: 8,
        name: 'Memphis'
      },
      teamId25: {
        seed: 9,
        name: 'George Washington'
      },
      teamId26: {
        seed: 10,
        name: 'Saint Josephs'
      },
      teamId27: {
        seed: 11,
        name: 'Providence'
      },
      teamId28: {
        seed: 12,
        name: 'Harvard'
      },
      teamId29: {
        seed: 13,
        name: 'Delaware'
      },
      teamId30: {
        seed: 14,
        name: 'North Carolina'
      },
      teamId31: {
        seed: 15,
        name: 'Milwaukee'
      },
      teamId32: {
        seed: 16,
        name: 'Coastal Carolina'
      },

      // West (top right)
      teamId33: {
        seed: 1,
        name: 'Arizona'
      },
      teamId34: {
        seed: 2,
        name: 'Wisconsin'
      },
      teamId35: {
        seed: 3,
        name: 'Creighton'
      },
      teamId36: {
        seed: 4,
        name: 'San Diego State'
      },
      teamId37: {
        seed: 5,
        name: 'Oklahoma'
      },
      teamId38: {
        seed: 6,
        name: 'Baylor'
      },
      teamId39: {
        seed: 7,
        name: 'Oregon'
      },
      teamId40: {
        seed: 8,
        name: 'Gonzaga'
      },
      teamId41: {
        seed: 9,
        name: 'Oklahoma State'
      },
      teamId42: {
        seed: 10,
        name: 'BYU'
      },
      teamId43: {
        seed: 11,
        name: 'Nebraska'
      },
      teamId44: {
        seed: 12,
        name: 'North Dakota'
      },
      teamId45: {
        seed: 13,
        name: 'New Mexico'
      },
      teamId46: {
        seed: 14,
        name: 'Louisiana-Lafayette'
      },
      teamId47: {
        seed: 15,
        name: 'American'
      },
      teamId48: {
        seed: 16,
        name: 'Weber State'
      },
      
      // Midwest (bottom right)
      teamId49: {
        seed: 1,
        name: 'Wichita State'
      },
      teamId50: {
        seed: 2,
        name: 'Michigan'
      },
      teamId51: {
        seed: 3,
        name: 'Duke'
      },
      teamId52: {
        seed: 4,
        name: 'Louisville'
      },
      teamId53: {
        seed: 5,
        name: 'Saint Louis'
      },
      teamId54: {
        seed: 6,
        name: 'Massachusetts'
      },
      teamId55: {
        seed: 7,
        name: 'Texas'
      },
      teamId56: {
        seed: 8,
        name: 'Kentucky'
      },
      teamId57: {
        seed: 9,
        name: 'Kansas State'
      },
      teamId58: {
        seed: 10,
        name: 'Arizona State'
      },
      teamId59: {
        seed: 11,
        name: 'Iowa'
      },
      teamId60: {
        seed: 12,
        name: 'NC State'
      },
      teamId61: {
        seed: 13,
        name: 'Manhattan'
      },
      teamId62: {
        seed: 14,
        name: 'Mercer'
      },
      teamId63: {
        seed: 15,
        name: 'Wofford'
      },
      teamId64: {
        seed: 16,
        name: 'Cal Poly'
      }
    };

    var games = {
      // South
      game01: {
        team1: 'teamId01',
        team2: 'teamId16',
        winnerId: '',
        region: 'south',
        round: 2,
        nextGame: 'game33',
        nextSlot: 'team1'
      },
      game02: {
        team1: 'teamId08',
        team2: 'teamId09',
        winnerId: '',
        region: 'south',
        round: 2,
        nextGame: 'game33',
        nextSlot: 'team2'
      },
      game03: {
        team1: 'teamId05',
        team2: 'teamId12',
        winnerId: '',
        region: 'south',
        round: 2,
        nextGame: 'game34',
        nextSlot: 'team1'
      },
      game04: {
        team1: 'teamId04',
        team2: 'teamId13',
        winnerId: '',
        region: 'south',
        round: 2,
        nextGame: 'game34',
        nextSlot: 'team2'
      },
      game05: {
        team1: 'teamId06',
        team2: 'teamId11',
        winnerId: '',
        region: 'south',
        round: 2,
        nextGame: 'game35',
        nextSlot: 'team1'
      },
      game06: {
        team1: 'teamId03',
        team2: 'teamId14',
        winnerId: '',
        region: 'south',
        round: 2,
        nextGame: 'game35',
        nextSlot: 'team2'
      },
      game07: {
        team1: 'teamId07',
        team2: 'teamId10',
        winnerId: '',
        region: 'south',
        round: 2,
        nextGame: 'game36',
        nextSlot: 'team1'
      },
      game08: {
        team1: 'teamId02',
        team2: 'teamId15',
        winnerId: '',
        region: 'south',
        round: 2,
        nextGame: 'game36',
        nextSlot: 'team2'
      },
      
      // East
      game09: {
        team1: 'teamId17',
        team2: 'teamId32',
        winnerId: '',
        region: 'east',
        round: 2,
        nextGame: 'game37',
        nextSlot: 'team1'
      },
      game10: {
        team1: 'teamId24',
        team2: 'teamId25',
        winnerId: '',
        region: 'east',
        round: 2,
        nextGame: 'game37',
        nextSlot: 'team2'
      },
      game11: {
        team1: 'teamId21',
        team2: 'teamId28',
        winnerId: '',
        region: 'east',
        round: 2,
        nextGame: 'game38',
        nextSlot: 'team1'
      },
      game12: {
        team1: 'teamId20',
        team2: 'teamId29',
        winnerId: '',
        region: 'east',
        round: 2,
        nextGame: 'game38',
        nextSlot: 'team2'
      },
      game13: {
        team1: 'teamId22',
        team2: 'teamId27',
        winnerId: '',
        region: 'east',
        round: 2,
        nextGame: 'game39',
        nextSlot: 'team1'
      },
      game14: {
        team1: 'teamId19',
        team2: 'teamId30',
        winnerId: '',
        region: 'east',
        round: 2,
        nextGame: 'game39',
        nextSlot: 'team2'
      },
      game15: {
        team1: 'teamId23',
        team2: 'teamId26',
        winnerId: '',
        region: 'east',
        round: 2,
        nextGame: 'game40',
        nextSlot: 'team1'
      },
      game16: {
        team1: 'teamId18',
        team2: 'teamId31',
        winnerId: '',
        region: 'east',
        round: 2,
        nextGame: 'game40',
        nextSlot: 'team2'
      },

      // West
      game17: {
        team1: 'teamId33',
        team2: 'teamId48',
        winnerId: '',
        region: 'west',
        round: 2,
        nextGame: 'game41',
        nextSlot: 'team1'
      },
      game18: {
        team1: 'teamId40',
        team2: 'teamId41',
        winnerId: '',
        region: 'west',
        round: 2,
        nextGame: 'game41',
        nextSlot: 'team2'
      },
      game19: {
        team1: 'teamId37',
        team2: 'teamId44',
        winnerId: '',
        region: 'west',
        round: 2,
        nextGame: 'game42',
        nextSlot: 'team1'
      },
      game20: {
        team1: 'teamId36',
        team2: 'teamId45',
        winnerId: '',
        region: 'west',
        round: 2,
        nextGame: 'game42',
        nextSlot: 'team2'
      },
      game21: {
        team1: 'teamId38',
        team2: 'teamId43',
        winnerId: '',
        region: 'west',
        round: 2,
        nextGame: 'game43',
        nextSlot: 'team1'
      },
      game22: {
        team1: 'teamId35',
        team2: 'teamId46',
        winnerId: '',
        region: 'west',
        round: 2,
        nextGame: 'game43',
        nextSlot: 'team2'
      },
      game23: {
        team1: 'teamId39',
        team2: 'teamId42',
        winnerId: '',
        region: 'west',
        round: 2,
        nextGame: 'game44',
        nextSlot: 'team1'
      },
      game24: {
        team1: 'teamId34',
        team2: 'teamId47',
        winnerId: '',
        region: 'west',
        round: 2,
        nextGame: 'game44',
        nextSlot: 'team2'
      },
      
      // Midwest
      game25: {
        team1: 'teamId49',
        team2: 'teamId64',
        winnerId: '',
        region: 'midwest',
        round: 2,
        nextGame: 'game45',
        nextSlot: 'team1'
      },
      game26: {
        team1: 'teamId56',
        team2: 'teamId57',
        winnerId: '',
        region: 'midwest',
        round: 2,
        nextGame: 'game45',
        nextSlot: 'team2'
      },
      game27: {
        team1: 'teamId53',
        team2: 'teamId60',
        winnerId: '',
        region: 'midwest',
        round: 2,
        nextGame: 'game46',
        nextSlot: 'team1'
      },
      game28: {
        team1: 'teamId52',
        team2: 'teamId61',
        winnerId: '',
        region: 'midwest',
        round: 2,
        nextGame: 'game46',
        nextSlot: 'team1'
      },
      game29: {
        team1: 'teamId54',
        team2: 'teamId59',
        winnerId: '',
        region: 'midwest',
        round: 2,
        nextGame: 'game47',
        nextSlot: 'team1'
      },
      game30: {
        team1: 'teamId51',
        team2: 'teamId62',
        winnerId: '',
        region: 'midwest',
        round: 2,
        nextGame: 'game47',
        nextSlot: 'team2'
      },
      game31: {
        team1: 'teamId55',
        team2: 'teamId58',
        winnerId: '',
        region: 'midwest',
        round: 2,
        nextGame: 'game48',
        nextSlot: 'team1'
      },
      game32: {
        team1: 'teamId50',
        team2: 'teamId63',
        winnerId: '',
        region: 'midwest',
        round: 2,
        nextGame: 'game48',
        nextSlot: 'team2'
      },
      
      // Round of 32 Games
      // South
      game33: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'south',
        round: 3,
        nextGame: 'game49',
        nextSlot: 'team1'
      },
      game34: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'south',
        round: 3,
        nextGame: 'game49',
        nextSlot: 'team2'
      },
      game35: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'south',
        round: 3,
        nextGame: 'game50',
        nextSlot: 'team1'
      },
      game36: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'south',
        round: 3,
        nextGame: 'game50',
        nextSlot: 'team2'
      },
      // East
      game37: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'east',
        round: 3,
        nextGame: 'game51',
        nextSlot: 'team1'
      },
      game38: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'east',
        round: 3,
        nextGame: 'game51',
        nextSlot: 'team2'
      },
      game39: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'east',
        round: 3,
        nextGame: 'game52',
        nextSlot: 'team1'
      },
      game40: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'east',
        round: 3,
        nextGame: 'game52',
        nextSlot: 'team2'
      },
      // West
      game41: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'west',
        round: 3,
        nextGame: 'game53',
        nextSlot: 'team1'
      },
      game42: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'west',
        round: 3,
        nextGame: 'game53',
        nextSlot: 'team2'
      },
      game43: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'west',
        round: 3,
        nextGame: 'game54',
        nextSlot: 'team1'
      },
      game44: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'west',
        round: 3,
        nextGame: 'game54',
        nextSlot: 'team2'
      },
      // Midwest
      game45: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'midwest',
        round: 3,
        nextGame: 'game55',
        nextSlot: 'team1'
      },
      game46: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'midwest',
        round: 3,
        nextGame: 'game55',
        nextSlot: 'team2'
      },
      game47: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'midwest',
        round: 3,
        nextGame: 'game56',
        nextSlot: 'team1'
      },
      game48: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'midwest',
        round: 3,
        nextGame: 'game56',
        nextSlot: 'team2'
      },
      // Sweet 16 games
      game49: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'west',
        round: 4,
        nextGame: 'game57',
        nextSlot: 'team1'
      },
      game50: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'west',
        round: 4,
        nextGame: 'game57',
        nextSlot: 'team2'
      },
      game51: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'east',
        round: 4,
        nextGame: 'game58',
        nextSlot: 'team1'
      },
      game52: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'east',
        round: 4,
        nextGame: 'game58',
        nextSlot: 'team2'
      },
      game53: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'west',
        round: 4,
        nextGame: 'game59',
        nextSlot: 'team1'
      },
      game54: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'west',
        round: 4,
        nextGame: 'game59',
        nextSlot: 'team2'
      },
      game55: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'midwest',
        round: 4,
        nextGame: 'game60',
        nextSlot: 'team1'
      },
      game56: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'midwest60',
        round: 4,
        nextGame: 'game2',
        nextSlot: 'team'
      },
      // Elite 8 games
      game57: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'west',
        round: 5,
        nextGame: 'game61',
        nextSlot: 'team1'
      },
      game58: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'east',
        round: 5,
        nextGame: 'game61',
        nextSlot: 'team2'
      },
      game59: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'south',
        round: 5,
        nextGame: 'game62',
        nextSlot: 'team1'
      },
      game60: {
        team1: '',
        team2: '',
        winnerId: '',
        region: 'midwest',
        round: 5,
        nextGame: 'game62',
        nextSlot: 'team2'
      },
      // Final 4 games
      game61: {
        team1: '',
        team2: '',
        winnerId: '',
        region: '',
        round: 6,
        nextGame: 'game63',
        nextSlot: 'team1'
      },
      game62: {
        team1: '',
        team2: '',
        winnerId: '',
        region: '',
        round: 6,
        nextGame: 'game63',
        nextSlot: 'team2'
      },
      // Finals
      game63: {
        team1: '',
        team2: '',
        winnerId: '',
        region: '',
        round: 7,
        nextGame: '',
        nextSlot: ''
      }
    };

    return {
      teams: teams,
      games: games
    };
  });
