
-- Question 3-1 : Database Query
-- Write an SQL statement that returns the users’ id, name and total sale amount for users who have total sales above 1000.

SELECT S.user_id, U.name, 
FROM users U
INNER JOIN sales S ON U.id = S.user_id
WHERE sale_amount >= 1000


-- Question 3-2 : Database Query
--Write an SQL statement that returns the average sales for users born in 80s, 90s and 2000s

SELECT  U.name, AVG(birth_year)
FROM users U
INNER JOIN sales S ON U.id = S.user_id