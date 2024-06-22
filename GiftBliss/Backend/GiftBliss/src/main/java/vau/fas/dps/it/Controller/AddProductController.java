package vau.fas.dps.it.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import vau.fas.dps.it.Services.AddProductService;
import vau.fas.dps.it.Services.CategoryService;
import vau.fas.dps.it.Services.SubCategoryService;
import vau.fas.dps.it.model.AddProduct;
import vau.fas.dps.it.model.Category;
import vau.fas.dps.it.model.SubCategory;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class AddProductController {

    private static final Logger logger = LoggerFactory.getLogger(AddProductController.class);

    @Autowired
    private AddProductService productService;

 

    @PostMapping("/add_product")
    public ResponseEntity<AddProduct> addProduct(@RequestBody AddProduct product) {
        try {
            logger.debug("Received product: {}", product);
            AddProduct savedProduct = productService.addProduct(product);
            return new ResponseEntity<>(savedProduct, HttpStatus.CREATED);
        } catch (Exception e) {
            logger.error("Error saving product", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/add_product")
    public ResponseEntity<List<AddProduct>> getAllProducts() {
        try {
            List<AddProduct> products = productService.getAllProducts();
            return new ResponseEntity<>(products, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error retrieving products", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/add_product/discount")
    public ResponseEntity<List<AddProduct>> getProductsOnDiscount() {
        try {
            List<AddProduct> products = productService.getProductsOnDiscount();
            return new ResponseEntity<>(products, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error retrieving discounted products", e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    

    
}
