const CustomError = require('../extensions/custom-error');

module.exports = function createDreamTeam(members) {
  if (typeof members === 'string') {
    return false;
  }
  let ourTeam = [];
  for (let i = 0; i < members.length; i++) {
    ourTeam.push(members[i].trim().charAt(0).toUpperCase());
  }
};
