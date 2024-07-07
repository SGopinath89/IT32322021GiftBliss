package vau.fas.dps.it.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vau.fas.dps.it.model.AuthenticationToken;
import vau.fas.dps.it.model.User;

@Repository
public interface TokanRepository extends JpaRepository<AuthenticationToken, Integer>{
	AuthenticationToken findByUser(User user);
}
