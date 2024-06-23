package vau.fas.dps.it.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

import java.util.List;

@Entity
public class Category {
    public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setName(String title) {
		this.title = title;
	}

	public List<SubCategory> getSubCategories() {
		return subCategories;
	}

	public void setSubCategories(List<SubCategory> subCategories) {
		this.subCategories = subCategories;
	}

	
    public Category(Long id, String title, List<SubCategory> subCategories) {
		super();
		this.id = id;
		this.title = title;
		this.subCategories = subCategories;
	}
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
	private String title;

    @OneToMany(mappedBy = "category")
    private List<SubCategory> subCategories;
}