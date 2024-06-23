package vau.fas.dps.it.Repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vau.fas.dps.it.model.AddProduct;

@Repository
public interface AddProductRepo extends JpaRepository<AddProduct, Long> {

	static List<AddProduct> findByDiscoundGreaterThan(double d) {
		// TODO Auto-generated method stub
		return null;
	}
}
