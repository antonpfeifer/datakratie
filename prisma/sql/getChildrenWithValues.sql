WITH RECURSIVE item_tree AS (
  SELECT i.id AS node_id, i.id AS direct_child_id
  FROM items i
  WHERE i.parent = $1

  UNION ALL

  SELECT c.id AS node_id, t.direct_child_id
  FROM items c
  JOIN item_tree t ON c.parent = t.node_id
),
sum_by_child AS (
  SELECT
    t.direct_child_id,
    COALESCE(SUM(v.should), 0) AS recursive_should_sum
  FROM item_tree t
  LEFT JOIN titles ti ON ti.item = t.node_id
  LEFT JOIN "values" v ON v.title = ti.id
  GROUP BY t.direct_child_id
)
SELECT
  dc.id AS direct_child_id,
  COALESCE(s.recursive_should_sum, 0) AS recursive_should_sum
FROM items dc
LEFT JOIN sum_by_child s ON s.direct_child_id = dc.id
WHERE dc.parent = $1
ORDER BY dc.id;