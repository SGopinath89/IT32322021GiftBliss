package vau.fas.dps.it.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.List;
import vau.fas.dps.it.Services.RefundService;
import vau.fas.dps.it.model.Refund;

@RestController
@RequestMapping("/api/refund")
public class RefundController {

    private final RefundService refundService;

    @Autowired
    public RefundController(RefundService refundService) {
        this.refundService = refundService;
    }

    @GetMapping
    public List<Refund> getAllRefunds() {
        return refundService.getAllRefunds();
    }
}
