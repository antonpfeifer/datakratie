SELECT v.date, SUM(v.should)
FROM "values" v
WHERE v.title IN $1
GROUP BY v.date