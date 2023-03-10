package edu.miu.alumni.repository;

import edu.miu.alumni.entity.User;
import edu.miu.alumni.model.echarts.StudentsNumberPerCity;
import edu.miu.alumni.model.echarts.StudentsNumberPerState;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import  java.util.*;
@Repository
public interface UserRepository extends CrudRepository<User,Long> {

    public User findUserByEmailEquals(String email);

    public List<User> findByRoleNameEquals(String roleName);
    @Modifying
    @Query(value = "INSERT INTO tag_intersted_in_users(intersted_tags_id, intersted_in_users_id) VALUES (:tagId,:userId)",nativeQuery = true)
    @Transactional
    Integer  subscribeTags(Long userId,Long tagId);




}
