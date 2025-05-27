SELECT e.title AS event_title, ROUND(AVG(f.rating), 2) AS average_rating, COUNT(f.feedback_id) AS feedback_count
FROM Events e
JOIN Feedback f ON e.event_id = f.event_id
GROUP BY e.event_id
HAVING feedback_count >= 10
ORDER BY average_rating DESC;
