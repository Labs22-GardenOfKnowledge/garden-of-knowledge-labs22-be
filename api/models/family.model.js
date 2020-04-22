const db = require('../../database/db-config');



const findAllFamilies = user_id => {
  return db('family')
    .join('student','students.family_id')
    .where('family_id', '=', user_id  )
    .select(['user_id','mother_name', 'father_name','block_code','road','building','flat','primary_telephone','secondary_telephone'])
   
};

module.exports = {
 
  findAllFamilies
};
