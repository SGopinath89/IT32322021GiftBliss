package vau.fas.dps.it.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Payment {
 
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

    private String email;
    private String cardType;
    private String cardNumber;
    private String expiration;
    private String cvv;
    
	public Payment(Long id, String email, String cardType, String cardNumber, String expiration, String cvv) {
		super();
		this.id = id;
		this.email = email;
		this.cardType = cardType;
		this.cardNumber = cardNumber;
		this.expiration = expiration;
		this.cvv = cvv;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCardType() {
		return cardType;
	}

	public void setCardType(String cardType) {
		this.cardType = cardType;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public String getExpiration() {
		return expiration;
	}

	public void setExpiration(String expiration) {
		this.expiration = expiration;
	}

	public String getCvv() {
		return cvv;
	}

	public void setCvv(String cvv) {
		this.cvv = cvv;
	}
    
    
}
