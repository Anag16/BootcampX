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

let query = `SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${cohort_name}'
ORDER BY teacher;`;

pool.query(query).then(res => {
  res.rows.forEach(teacher => {
    console.log(`${teacher.cohort}: ${teacher.teacher}`);
   });
  }
).catch(err => console.error('query error', err.stack));
