package vau.fas.dps.it.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vau.fas.dps.it.model.AddProduct;
import vau.fas.dps.it.Repo.AddProductRepo;

import java.util.List;

@Service
public class AddProductService {

    @Autowired
    private AddProductRepo productRepo;

    public AddProduct addProduct(AddProduct product) {
        // Optional: add more logging to debug
        System.out.println("Adding product: " + product);
        return productRepo.save(product);
    }

    public List<AddProduct> getAllProducts() {
        return productRepo.findAll();
    }
}
