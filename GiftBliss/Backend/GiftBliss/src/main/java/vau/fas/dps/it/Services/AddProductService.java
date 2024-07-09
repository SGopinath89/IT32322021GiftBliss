package vau.fas.dps.it.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vau.fas.dps.it.Repo.AddProductRepo;
import vau.fas.dps.it.model.AddProduct;

import java.util.List;
import java.util.Optional;

@Service
public class AddProductService {

    @Autowired
    private AddProductRepo productRepo;

    public AddProduct addProduct(AddProduct product) {
        return productRepo.save(product);
    }

    public AddProduct updateProduct(Long id, AddProduct productDetails) throws Exception {
        Optional<AddProduct> productOptional = productRepo.findById(id);

        if (!productOptional.isPresent()) {
            throw new Exception("Product not found");
        }

        AddProduct product = productOptional.get();
        product.setTitle(productDetails.getTitle());
        product.setDescription(productDetails.getDescription());
        product.setCategory(productDetails.getCategory());
        product.setPrice(productDetails.getPrice());
        product.setDate(productDetails.getDate());
        product.setCount(productDetails.getCount());
        product.setDiscount(productDetails.getDiscount());
        product.setMain_Category(productDetails.getMain_Category());
        product.setSize(productDetails.getSize());
       

        return productRepo.save(product);
    }

    public List<AddProduct> getAllProducts() {
        return productRepo.findAll();
    }

    public List<AddProduct> getProductsOnDiscount() {
        return productRepo.findByDiscountGreaterThan(0.0);
    }
}
