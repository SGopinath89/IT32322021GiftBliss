package vau.fas.dps.it.Services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import vau.fas.dps.it.Repo.RefundRepository;
import vau.fas.dps.it.model.Refund;

@Service
public class RefundService {

    private final RefundRepository refundRepository;

    @Autowired
    public RefundService(RefundRepository refundRepository) {
        this.refundRepository = refundRepository;
    }

    public List<Refund> getAllRefunds() {
        return refundRepository.findAll();
    }
}
