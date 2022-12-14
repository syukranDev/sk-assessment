
-- Question 3-1 : Database Query
-- Write an SQL statement that returns the users’ id, name and total sale amount for users who have total sales above 1000.

SELECT  U.name, SUM(S.sale_amount) AS total_sales_amount
FROM users U
INNER JOIN sales S ON U.id = S.user_id
GROUP BY U.name
HAVING SUM(S.sale_amount) >= 1000



-- Question 3-2 : Database Query
--Write an SQL statement that returns the average sales for users born in 80s, 90s and 2000s

SELECT U.name, AVG(sale_amount) AS average_total_sales
FROM users U
INNER JOIN sales S ON U.id = S.user_id
WHERE U.birth_year >= 1980
GROUP BY U.name
