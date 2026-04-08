CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  gender VARCHAR(10),
  date_of_birth DATE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- RENAME TABLE users to programmers;
-- RENAME TABLE programmers to users;

-- ALTER TABLE users ADD COLUMN is_active BOOLEAN DEFAULT true;

-- ALTER TABLE users DROP COLUMN is_active;

-- ALTER TABLE users MODIFY COLUMN name VARCHAR(150);

INSERT INTO users (name, email, gender, date_of_birth) VALUES
('Harsh', 'harsh@gmail.com', 'Male','2006-06-29');

SELECT * FROM users;
