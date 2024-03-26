


CREATE DATABASE university_data;
USE university_data;

CREATE TABLE universities (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    state_province VARCHAR(255),
    web_pages TEXT,
    is_favorite BOOLEAN DEFAULT 0
);
