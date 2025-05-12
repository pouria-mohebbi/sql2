CREATE DATABASE office;
USE office;

CREATE TABLE employee (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(100),
  role VARCHAR(100)
);
INSERT INTO employee (name, role) VALUES
  ('Alice Smith', 'Manager'),
  ('Bob Johnson', 'Developer'),
  ('Carol Davis', 'Designer');
UPDATE employee
SET name = 'Alice Brown'
WHERE id = 1;
DELETE FROM employee
WHERE id = 3;
SELECT * FROM employee
WHERE id = 2;
npm init -y
npm install express sequelize mysql2 dotenv
DB_NAME=office
DB_USER=root
DB_PASSWORD=your_password
DB_HOST=localhost
DB_DIALECT=mysql
const User = sequelize.define('User', {
  name: Sequelize.STRING,
  email: Sequelize.STRING
});
const Post = sequelize.define('Post', {
    title: Sequelize.STRING,
    content: Sequelize.TEXT
  });
  User.hasMany(Post);
Post.belongsTo(User);
