package vau.fas.dps.it.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import vau.fas.dps.it.model.Payment;
import vau.fas.dps.it.Services.PaymentService;



@RestController
@RequestMapping("/api/payments")
public class PaymentController {
	@Autowired
	private PaymentService paymentService;
	
	@PostMapping
    public ResponseEntity<Payment> processPayment(@RequestBody Payment payment){
		Payment processPayment=paymentService.processPayment(payment);
		return ResponseEntity.ok(processPayment);
	}
}
