package vau.fas.dps.it.Repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import vau.fas.dps.it.model.AddProduct;

import java.util.List;

@Repository
public interface AddProductRepo extends JpaRepository<AddProduct, Long> {
    List<AddProduct> findByDiscountGreaterThan(double discount);
}
