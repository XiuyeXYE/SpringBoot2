package com.xiuye.dao.jpa;

import org.springframework.context.annotation.Primary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.xiuye.entity.Hello;

@Repository("helloRepository1")
@Primary
public interface HelloRepository extends JpaRepository<Hello, Integer>{

}
