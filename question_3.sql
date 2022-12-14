
-- Question 3-1 : Database Query
-- Write an SQL statement that returns the users’ id, name and total sale amount for users who have total sales above 1000.

SELECT  S.user_id, U.name, SUM(S.sale_amount) AS total_sales_amount
FROM users U
INNER JOIN sales S ON U.id = S.user_id
GROUP BY U.name, S.user_id
HAVING SUM(S.sale_amount) >= 1000


--  Expected result :
-- ======================================
-- | user_id | name | total_sales_amount
-- ======================================
-- |     1   | Adam |       1200        |
-- |     2   | Bob  |       1700        |
-- |     5   | Eddy |       2100        |
-- ======================================



-- Question 3-2 : Database Query
--Write an SQL statement that returns the average sales for users born in 80s, 90s and 2000s

SELECT U.name, AVG(sale_amount) AS average_total_sales
FROM users U
INNER JOIN sales S ON U.id = S.user_id
WHERE U.birth_year >= 1980
GROUP BY U.name


--  Expected result :
-- ==================================
-- |   name    | average_total_sales
-- ==================================
-- |    Bob    |       850          |
-- |    Eddy   |        1050        |
-- |    Adam   |        400         |
-- |    Salman |        450         |
-- =================================

