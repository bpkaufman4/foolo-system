const seedGames = require('./game-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedGames();
  console.log('\n----- GAMES SEEDED -----\n');
};

seedAll();