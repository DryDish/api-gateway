-- Population script

-- Roles ---------------------------------------------------------------------
INSERT INTO roles VALUES(1, "teacher");
INSERT INTO roles VALUES(2, "student");

-- Users ---------------------------------------------------------------------

-- Teachers
INSERT INTO users VALUES(1,  'Teacher Bob', 'bob@kea.dk', '$2b$10$vXzfJxLH84qja6AvI7iLVerIWfWNOWznIOA91jTvT/Lv4I/okb5F.', 1);
INSERT INTO users VALUES(2,  'Teacher Ann', 'ann@kea.dk', '$2b$10$vXzfJxLH84qja6AvI7iLVerIWfWNOWznIOA91jTvT/Lv4I/okb5F.', 1);
INSERT INTO users VALUES(3,  'Teacher Won', 'won@kea.dk', '$2b$10$vXzfJxLH84qja6AvI7iLVerIWfWNOWznIOA91jTvT/Lv4I/okb5F.', 1);
INSERT INTO users VALUES(4,  'Teacher Tom', 'tom@kea.dk', '$2b$10$vXzfJxLH84qja6AvI7iLVerIWfWNOWznIOA91jTvT/Lv4I/okb5F.', 1);

-- Students
INSERT INTO users VALUES(6,  'Student Ada', 'ada@stud.kea.dk', '$2b$10$vXzfJxLH84qja6AvI7iLVerIWfWNOWznIOA91jTvT/Lv4I/okb5F.', 2);
INSERT INTO users VALUES(7,  'Student Pam', 'pam@stud.kea.dk', '$2b$10$vXzfJxLH84qja6AvI7iLVerIWfWNOWznIOA91jTvT/Lv4I/okb5F.', 2);
INSERT INTO users VALUES(8,  'Student Kit', 'kit@stud.kea.dk', '$2b$10$vXzfJxLH84qja6AvI7iLVerIWfWNOWznIOA91jTvT/Lv4I/okb5F.', 2);
INSERT INTO users VALUES(9,  'Student Zoe', 'zoe@stud.kea.dk', '$2b$10$vXzfJxLH84qja6AvI7iLVerIWfWNOWznIOA91jTvT/Lv4I/okb5F.', 2);
INSERT INTO users VALUES(10, 'Student Ray', 'ray@stud.kea.dk', '$2b$10$vXzfJxLH84qja6AvI7iLVerIWfWNOWznIOA91jTvT/Lv4I/okb5F.', 2);
INSERT INTO users VALUES(11, 'Student Alf', 'alf@stud.kea.dk', '$2b$10$vXzfJxLH84qja6AvI7iLVerIWfWNOWznIOA91jTvT/Lv4I/okb5F.', 2);
INSERT INTO users VALUES(12, 'Student Coy', 'coy@stud.kea.dk', '$2b$10$vXzfJxLH84qja6AvI7iLVerIWfWNOWznIOA91jTvT/Lv4I/okb5F.', 2);
INSERT INTO users VALUES(13, 'Student Gil', 'gil@stud.kea.dk', '$2b$10$vXzfJxLH84qja6AvI7iLVerIWfWNOWznIOA91jTvT/Lv4I/okb5F.', 2);

