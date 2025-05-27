SELECT e.title AS event_title, COUNT(s.session_id) AS total_sessions
FROM Events e
JOIN Sessions s ON e.event_id = s.event_id
GROUP BY e.event_id
ORDER BY total_sessions DESC
LIMIT 1;
