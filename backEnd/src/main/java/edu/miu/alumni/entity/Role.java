package edu.miu.alumni.entity;

import lombok.Data;

import javax.persistence.*;
import java.util.*;
@Entity
@Data
@Table(name="roles")
public class Role {

    @Id
    private long id;

    private String name;

    private Boolean  isDeleted;

    @ManyToMany(mappedBy = "role",cascade = CascadeType.DETACH)
    private List<User> users;
}
