package vau.fas.dps.it.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import vau.fas.dps.it.model.Refund;

public interface RefundRepository extends JpaRepository<Refund, Long> {
    // Custom methods can be added if needed
}
