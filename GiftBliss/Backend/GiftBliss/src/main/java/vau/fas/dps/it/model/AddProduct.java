package vau.fas.dps.it.model;

<<<<<<< HEAD
=======
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
<<<<<<< HEAD
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
=======

>>>>>>> 74d747d1a6b5499c75bc2e51a0a4bd309c6b6fc1
>>>>>>> 87a2b3b7f85d947f6201cde5780bc37e903277ce

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class AddProduct {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "Title is mandatory")
    private String title;

    @NotBlank(message = "Description is mandatory")
    private String description;

    @NotBlank(message = "Category is mandatory")
    private String category;

    @NotBlank(message = "Date is mandatory")
    private String date;

    @NotNull(message = "Price is mandatory")
    @Min(value = 0, message = "Price must be greater than or equal to 0")
    private Double price;

    @Min(value = 0, message = "Discount must be greater than or equal to 0")
    private Double discount;

    @NotBlank(message = "Gender is mandatory")
    private String gender;

    private String size;

    private Double count;

    private String image;
<<<<<<< HEAD
=======
<<<<<<< HEAD
    @ManyToOne
    @JoinColumn(name = "sub_category_id")
    private SubCategory subCategory;
    // Getters and Setters

    public SubCategory getSubCategory() {
		return subCategory;
	}

	public void setSubCategory(SubCategory subCategory) {
		this.subCategory = subCategory;
	}
=======
    
   
>>>>>>> 74d747d1a6b5499c75bc2e51a0a4bd309c6b6fc1
>>>>>>> 87a2b3b7f85d947f6201cde5780bc37e903277ce

    // Getters and Setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Double getDiscount() {
        return discount;
    }

    public void setDiscount(Double discount) {
        this.discount = discount;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public Double getCount() {
        return count;
    }

    public void setCount(Double count) {
        this.count = count;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
