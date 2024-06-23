package vau.fas.dps.it.Repo;


import vau.fas.dps.it.model.SubCategory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SubCategoryRepo extends JpaRepository<SubCategory, Long> {
}
