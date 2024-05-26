--Create postgres certify_doc_db database and connect to it, check if it exists first
DO $$
BEGIN
  IF NOT EXISTS(
    SELECT
      1
    FROM
      pg_database
    WHERE
      datname = 'certify_doc_db') THEN
  CREATE DATABASE certify_doc_db;
END IF;
END
$$;

------------------------------ CREATE TABLES --------------------------
--DROP TABLE IF EXISTS Roles CASCADE;
--DROP TABLE IF EXISTS statuses CASCADE;
--DROP TABLE IF EXISTS users CASCADE;
DROP TABLE IF EXISTS Clients CASCADE;


 CREATE TABLE Clients (
    client_id SERIAL PRIMARY KEY,
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    username VARCHAR(100) UNIQUE,
    phone VARCHAR(15),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS Admins CASCADE;

CREATE TABLE Admins(
  admin_id SERIAL PRIMARY KEY,
    document_id INT REFERENCES document(document_id),
    user_type VARCHAR(50),
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    phone VARCHAR(15),
    email VARCHAR(100) UNIQUE,
    password VARCHAR(255),
    registration_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

DROP TABLE IF EXISTS Documents CASCADE;

CREATE TABLE Documents(
  document_id SERIAL PRIMARY KEY,
    client_id INT REFERENCES client(client_id),
    status VARCHAR(50),
    original_file_name VARCHAR(255),
    copy_file_name VARCHAR(255),
    document_type VARCHAR(50),
    upload_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at_date TIMESTAMP,
    end_date TIMESTAMP
);

DROP TABLE IF EXISTS AdminStats CASCADE;

CREATE TABLE Stats(
  stats_id serial PRIMARY KEY,
  total_users int NOT NULL,
  total_certifiers int NOT NULL,
  total_documents int NOT NULL,
  pending_documents int NOT NULL,
  approved_documents int NOT NULL,
  rejected_documents int NOT NULL
);

DROP TABLE IF EXISTS CertifierStats CASCADE;

CREATE TABLE CertifierStats(
  certifier_stats_id serial PRIMARY KEY,
  certifier_id int NOT NULL,
  total_jobs int NOT NULL,
  average_time int NOT NULL,
  FOREIGN KEY (certifier_id) REFERENCES Clients(user_id)
);

------------------------------ END OF CREATE TABLES ------------------------------
------------------------------ INSERT INTO TABLES ------------------------------
-- Insert into Admins Table
-- Insert default admins
INSERT INTO admin (document_id, user_type, firstname, lastname, phone, email, password)
VALUES 
(1, 'superadmin', 'Admin', 'User', '1122334455', 'admin@example.com', 'adminpassword');
INSERT INTO client (firstname, lastname, username, phone, email, password)
VALUES 
('John', 'Doe', 'johndoe', '1234567890', 'john@example.com', 'password123'),
('Jane', 'Smith', 'janesmith', '0987654321', 'jane@example.com', 'password456');

