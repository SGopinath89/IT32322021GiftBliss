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
        return productRepo.save(product);
    }

    public List<AddProduct> getAllProducts() {
        return productRepo.findAll();
    }

	public List<AddProduct> getProductsOnDiscount1() {
		// TODO Auto-generated method stub
		return null;
	}

	public List<AddProduct> getProductsOnDiscount() {
		// TODO Auto-generated method stub
		return null;
	}
}
