const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

//Get the value from the terminal
let args = process.argv.slice(2);
let cohort_name = args[0];
let LIMIT = args[1];

pool.query(`
SELECT students.id as id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts
ON cohort_id = cohorts.id
WHERE cohorts.name = '${cohort_name}'
LIMIT ${LIMIT};
`)
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
})
.catch(err => console.error('query error', err.stack));