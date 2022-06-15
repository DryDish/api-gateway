
-- Classes ---------------------------------------------------------------------
INSERT INTO classes VALUES(1, "KEA SW20");
INSERT INTO classes VALUES(2, "KEA WD20");
INSERT INTO classes VALUES(3, "KEA SW21");
INSERT INTO classes VALUES(4, "KEA WD21");
INSERT INTO classes VALUES(5, "KEA SW22");
INSERT INTO classes VALUES(6, "KEA WD22");

-- Subjects --------------------------------------------------------------------
INSERT INTO subjects VALUES(1,  "KEA Testing SW20",         1, 1);
INSERT INTO subjects VALUES(2,  "KEA Testing SW21",         1, 3);
INSERT INTO subjects VALUES(3,  "KEA Testing SW22",         1, 5);
INSERT INTO subjects VALUES(4,  "KEA Web Development WD20", 2, 2);
INSERT INTO subjects VALUES(5,  "KEA Web Development WD21", 2, 4);
INSERT INTO subjects VALUES(6,  "KEA Web Development WD22", 2, 6);
INSERT INTO subjects VALUES(7,  "KEA Databases SW20",       3, 1);
INSERT INTO subjects VALUES(8,  "KEA Databases SW21",       3, 3);
INSERT INTO subjects VALUES(9,  "KEA Databases SW22",       3, 5);
INSERT INTO subjects VALUES(10, "KEA Large Systems SW20",   4, 1);
INSERT INTO subjects VALUES(11, "KEA Large Systems SW21",   4, 3);
INSERT INTO subjects VALUES(12, "KEA Large Systems SW22",   4, 5);

-- Lectures --------------------------------------------------------------------
INSERT INTO lectures VALUES(1, "KEA Not Learning Microservices 1", '2022-06-06 13:14',  ('2022-06-06 13:14' + interval  90 minute), 12);
INSERT INTO lectures VALUES(2, "KEA Not Learning Microservices 2", '2022-06-06 13:18',  ('2022-06-06 13:18' + interval 180 minute), 12);
INSERT INTO lectures VALUES(3, "KEA Not Learning Microservices 3", '2022-06-06 13:22',  ('2022-06-06 13:22' + interval 270 minute), 12);
INSERT INTO lectures VALUES(4, "KEA NoSQL 1",                      '2022-06-06 13:26',  ('2022-06-06 13:26' + interval  90 minute),  9);
INSERT INTO lectures VALUES(5, "KEA NoSQL 2",                      '2022-06-06 13:30',  ('2022-06-06 13:30' + interval 180 minute),  9);
INSERT INTO lectures VALUES(6, "KEA NoSQL 3",                      '2022-06-06 13:34',  ('2022-06-06 13:34' + interval 270 minute),  9);
INSERT INTO lectures VALUES(7, "KEA Unit Testing",                 '2022-06-06 13:40',  ('2022-06-06 13:40' + interval  90 minute),  3);
INSERT INTO lectures VALUES(8, "KEA Unit Testing",                 '2022-06-06 13:44',  ('2022-06-06 13:44' + interval 180 minute),  3);
INSERT INTO lectures VALUES(9, "KEA Unit Testing",                 '2022-06-06 13:50',  ('2022-06-06 13:50' + interval 270 minute),  3);

-- Attendance -------------------------------------------------------------------
INSERT INTO attendances VALUES(1,  '2022-06-06 13:14',        	1, 5);
INSERT INTO attendances VALUES(2,  '2022-06-06 13:14',          1, 6);
INSERT INTO attendances VALUES(3,  '2022-06-06 13:14',          1, 7);
INSERT INTO attendances VALUES(4,  '2022-06-06 13:14',          1, 8);
INSERT INTO attendances VALUES(5,  '2022-06-06 13:14',          1, 9);
INSERT INTO attendances VALUES(6,  '2022-06-06 13:14',  				2, 5);
INSERT INTO attendances VALUES(7,  '2022-06-06 13:14',  				2, 6);
INSERT INTO attendances VALUES(8,  '2022-06-06 13:14',  				2, 7);
INSERT INTO attendances VALUES(9,  '2022-06-06 13:14',  				2, 8);
INSERT INTO attendances VALUES(10, '2022-06-06 13:14',  				2, 5);
INSERT INTO attendances VALUES(11, '2022-06-06 13:14', 					2, 5);
INSERT INTO attendances VALUES(12, '2022-06-06 13:14', 					2, 6);
INSERT INTO attendances VALUES(13, '2022-06-06 13:14', 					2, 7);
