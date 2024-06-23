package vau.fas.dps.it.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vau.fas.dps.it.Repo.SubCategoryRepo;
import vau.fas.dps.it.model.SubCategory;

import java.util.List;

@Service
public class SubCategoryServiceImpl implements SubCategoryService {

    @Autowired
    private SubCategoryRepo subCategoryRepo;

    @Override
    public List<SubCategory> getAllSubCategories() {
        return subCategoryRepo.findAll();
    }
}
