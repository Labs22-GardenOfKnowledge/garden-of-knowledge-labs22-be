const db = require('../../database/db-config');



const findAllFamilies = () => {
  return db('user as u')
    .join('student as s', 'u.user_id', 's.family_id')
    .select(['user_id', 'username'])
   
};

module.exports = {
 
  findAllFamilies
};
