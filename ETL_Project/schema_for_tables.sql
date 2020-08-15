 -- Create tables for data to be loaded into
CREATE TABLE passer (
passId INT,
playId INT,
teamId INT,
playerId INT PRIMARY KEY,
passPosition TEXT,
passOutcomes TEXT, 
passDirection TEXT,
passDepth TEXT,
passLength INT,
passAtt INT,
passComp INT,
passTd INT
);

-- Show that it imported correctly
SELECT * FROM passer


CREATE TABLE draft (
playerId INT,
draft INT,
round FLOAT,
pick INT,
draftTradeValue FLOAT,
draftTeam TEXT,
position TEXT,
teamId INT,
nameFirst TEXT,
nameLast TEXT,
nameFull VARCHAR PRIMARY KEY,
college VARCHAR,
heightInches FLOAT,
weight FLOAT,
dob DATE,
ageAtDraft FLOAT,
homeCity VARCHAR,
homeState TEXT,
homeCountry TEXT
);

-- Show that it imported correctly
SELECT * FROM draft


-- Create tables for data to be loaded into
CREATE TABLE salary_2016 (
id SERIAL PRIMARY KEY, 
salaryRk VARCHAR,
position TEXT,
team TEXT,
salary VARCHAR,
player_name VARCHAR
);

-- Show that it imported correctly
SELECT * FROM salary_2016


-- Create tables for data to be loaded into
CREATE TABLE salary_2017 (
id SERIAL PRIMARY KEY,  
salaryRk VARCHAR,
position TEXT,
team TEXT,
salary VARCHAR,
player_name VARCHAR 
);

-- Show that it imported correctly
SELECT * FROM salary_2017



-- Create tables for data to be loaded into
CREATE TABLE salary_2018 (
id SERIAL PRIMARY KEY,
salaryRk VARCHAR,
position TEXT,
team TEXT,
salary VARCHAR,
player_name VARCHAR 
);

-- Show that it imported correctly
SELECT * FROM salary_2018



-- Create tables for data to be loaded into
CREATE TABLE salary_2019 (
id SERIAL PRIMARY KEY,
salaryRk VARCHAR,
position TEXT,
team TEXT,
salary VARCHAR,
player_name VARCHAR
);

-- Show that it imported correctly
SELECT * FROM salary_2019
