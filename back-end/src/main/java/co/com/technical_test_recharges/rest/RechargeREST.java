package co.com.technical_test_recharges.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.com.technical_test_recharges.model.Recharge;
import co.com.technical_test_recharges.service.RechargeService;

@RestController
@RequestMapping("/recharges/")
public class RechargeREST {

    @Autowired
    private RechargeService rechargeService;

    @GetMapping
    private ResponseEntity<List<Recharge>> getAllRecharges() {
        return ResponseEntity.ok(rechargeService.findAll());
    }

    @GetMapping
    private ResponseEntity<Recharge> saveRecharge(@RequestBody Recharge recharge) {
        return ResponseEntity.ok(rechargeService.save(recharge));
    }

}
