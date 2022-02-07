USE company_db

INSERT INTO departments (department_name)
VALUES 
    ('IT'),
    ('Human Resources'),
    ('Research and Dev'),
    ('Sales'),
    ('Operations');
    -- ('Legal');

INSERT INTO roles (role_title, salary, department_id)
VALUES
    ('PMO', 80000, 1),
    ('IT Support', 95000, 1),
    ('HR Admin', 55000, 2),
    ('Recriuter', 85000, 2),
    ('Junior Software Engineer', 75000, 3),
    ('Senior Software Engineer', 125000, 3),
    ('Product Dev Manager', 160000, 3),
    ('Sales Support', 65000, 4),
    ('Customer Advocate', 80000, 4),
    ('Operations Analyst', 55000, 5);
    ('Operations Officer', 100000, 5);
    -- ('Legal Admin', 60000, 6);
    -- ('Corporate Councel', 110000, 6);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ('Angela', 'Bennett', 5, 2),
    ('Boris', 'Brown', 7, null),
    ('Charles', 'Johnson', 5, 2),
    ('Donna', 'Smirnoff', 6, 2),
    ('Eddie', 'Vedder', 11, null),
    ('Frances', 'Bean', 10, 5),
    ('George', 'Harrison', 9, null),
    ('Heather', 'Mills', 8, 7);