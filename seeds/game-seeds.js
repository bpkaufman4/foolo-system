const Game = require('../models/game');

const gameData = [
  {
    home: 'Kansas City',
    away: 'New York Giants',
    line: 10
  },
  {
    home: 'Oakland',
    away: 'New York Jets',
    line: 2
  }
];

console.log(gameData);
const seedGames = () => Game.bulkCreate(gameData);

module.exports = seedGames;
