SELECT students.name as student, avg(assignment_submissions.duration) as average_time
FROM assignment_submissions
JOIN students ON students.id = student_id
GROUP BY students.name
ORDER BY average_time DESC;

