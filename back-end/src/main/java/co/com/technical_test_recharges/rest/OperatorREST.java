package co.com.technical_test_recharges.rest;

import co.com.technical_test_recharges.service.OperatorService;
import co.com.technical_test_recharges.model.Operator;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/operators/")
public class OperatorREST {

    @Autowired
    private OperatorService operatorService;

    @GetMapping
    private ResponseEntity<List<Operator>> getAllOperators() {
        return ResponseEntity.ok(operatorService.findAll());
    }

}
