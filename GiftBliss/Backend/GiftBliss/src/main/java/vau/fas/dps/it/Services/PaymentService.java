package vau.fas.dps.it.Services;

import vau.fas.dps.it.model.Payment;
import vau.fas.dps.it.Repo.PaymentRepository;

public class PaymentService {

	private PaymentRepository paymentRepository;
	
	public Payment processPayment(Payment payment) {
		return paymentRepository.save(payment);
	}
}
