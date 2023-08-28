package com.dev.OnlineStamp.repository.member;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dev.OnlineStamp.model.member.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member ,Long>{

}
