package vau.fas.dps.it.Repo;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import vau.fas.dps.it.model.AddProduct;
@Repository
public interface AddProductRepo extends JpaRepository<AddProduct, Long> {
	

}
