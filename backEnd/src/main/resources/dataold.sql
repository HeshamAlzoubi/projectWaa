insert into roles(id, is_deleted, name) values (1,false,'ADMIN');
insert into roles(id, is_deleted, name) values (2,false,'STUDENT');
insert into roles(id, is_deleted, name) values (3,false,'FACULTY');


INSERT INTO states(state,state_code,is_deleted) VALUES ('Alaska', 'AK',false);
INSERT INTO states(state,state_code,is_deleted) VALUES ('California', 'CA',false);
-- INSERT INTO states(state,state_code) VALUES ('Alabama', 'PR');
-- INSERT INTO states(state,state_code)  VALUES ('Colorado', 'CO');
--
-- insert into cities (city_name, state_code, zip_code, latitude, longitude)
-- VALUES ('Adjuntas', 'PR','USA','18.1788', '-66.7516', '00501');

insert into cities (city_name, state_code, zip_code, latitude, longitude,is_deleted)
VALUES ('West Hollywood', 'CA', '90069', '34.090573', '-118.378753',false);

insert into cities (city_name, state_code, zip_code, latitude, longitude,is_deleted)
VALUES ('Akiachak', 'AK', '03203', '34.090573', '-118.378753',false);

INSERT INTO users
(user_type, id, access_failed_count, birthday, email, first_name, gender, is_activated, is_deleted, is_lockout_end, last_name, nick_name, "password", phone_number, marjor, city_name, state_code, profile_id)
VALUES('Student', 2, 0, '2022-01-01', '111@gmail.com', 'user', 'male', true, false, true, 'lastname', 'nickname','$2a$10$DQUM8GNo2TmThxAHirwaGOf2tHld36A7y3aPIj.oE5VRFuJjaqq7K', '123', 'math', 'Akiachak', 'AK',null);
VALUES('Student',1,  0, '2022-01-01', '111@gmail.com', 'user', 'male', true, false, true, 'lastname', 'nickname','$2a$10$DQUM8GNo2TmThxAHirwaGOf2tHld36A7y3aPIj.oE5VRFuJjaqq7K', '123', 'math', 'Akiachak', 'AK',null);

INSERT INTO users
(user_type, id, access_failed_count, birthday, email, first_name, gender, is_activated, is_deleted, is_lockout_end, last_name, nick_name, "password", phone_number, marjor, city_name, state_code, profile_id)
VALUES('Student', 1, 0, '2022-01-01', '111@gmail.com', 'userabc', 'male', true, false, true, 'lastnameabc', 'nickname','$2a$10$DQUM8GNo2TmThxAHirwaGOf2tHld36A7y3aPIj.oE5VRFuJjaqq7K', '123', 'math', 'Akiachak', 'AK',null);
VALUES('Student',2,  0, '2022-01-01', '111@gmail.com', 'userabc', 'male', true, false, true, 'lastnameabc', 'nickname','$2a$10$DQUM8GNo2TmThxAHirwaGOf2tHld36A7y3aPIj.oE5VRFuJjaqq7K', '123', 'math', 'Akiachak', 'AK',null);

insert into users_role(users_id, role_id)
values (1,1);
insert into users_role(users_id, role_id)
values (2,2);

INSERT INTO profiles(id)
VALUES(1);
INSERT INTO profiles(id)
VALUES(2);

INSERT INTO job_experiences
(id, company_name, details, end_time, from_time, job_title, city_city_name, city_state_code, profile_id,is_deleted)
VALUES(0, 'abc', 'abc', pg_catalog.now() ,  pg_catalog.now(),
       'DE', 'Akiachak', 'AK', 1,false);

INSERT INTO public.job_advertisements
(id, company_name, contract, workload, description, is_deleted, profile, publication_date, city_city_name, city_state_code, poster_stu_id)
VALUES(1, 'ABC', 'miss li', 'balbalbal', 'balabala', false, '1111', pg_catalog.now(), 'Akiachak', 'AK', 1);

INSERT INTO public.job_advertisements
(id, company_name, contract, workload, description, is_deleted, profile, publication_date, city_city_name, city_state_code, poster_stu_id)
VALUES(2, 'ABCD', 'miss liA', 'balbalbal', 'balabala', false, '1111', pg_catalog.now(), 'Akiachak', 'AK', 2);

INSERT INTO public.tag
(id, is_deleted, title)
VALUES(1, false, 'java');


INSERT INTO public.tag
(id, is_deleted, title)
VALUES(2, false, 'c++');

INSERT INTO public.tag
(id, is_deleted, title)
VALUES(3, false, 'redis');

INSERT INTO public.tag_job_advertisement
(job_advertisement_id, tags_id)
VALUES(1, 1);
INSERT INTO public.tag_job_advertisement
(job_advertisement_id, tags_id)
VALUES(1, 2);

INSERT INTO public.tag_job_advertisement
(job_advertisement_id, tags_id)
VALUES(2, 2);
INSERT INTO public.tag_job_advertisement
(job_advertisement_id, tags_id)
VALUES(2, 1);
