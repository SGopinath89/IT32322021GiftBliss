package vau.fas.dps.it.Services;

import org.springframework.stereotype.Service;

import vau.fas.dps.it.model.Payment;
import vau.fas.dps.it.Repo.PaymentRepository;

@Service
public class PaymentService {

	private PaymentRepository paymentRepository;
	
	public Payment processPayment(Payment payment) {
		return paymentRepository.save(payment);
	}
}
