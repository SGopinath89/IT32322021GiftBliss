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
import vau.fas.dps.it.model.AddProduct;
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
            throw e;
        }
    }

    @GetMapping("/products")
    public ResponseEntity<List<AddProduct>> getAllProducts() {
        try {
            List<AddProduct> products = productService.getAllProducts();
            return new ResponseEntity<>(products, HttpStatus.OK);
        } catch (Exception e) {
            logger.error("Error retrieving products", e);
            throw e;
        }
    }
}
