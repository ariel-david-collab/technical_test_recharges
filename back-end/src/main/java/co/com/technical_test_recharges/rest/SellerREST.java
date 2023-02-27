package co.com.technical_test_recharges.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import co.com.technical_test_recharges.model.Seller;
import co.com.technical_test_recharges.service.SellerService;

@RestController
@RequestMapping("/sellers/")
public class SellerREST {

    @Autowired
    private SellerService sellerService;

    @GetMapping
    private ResponseEntity<List<Seller>> getAllSellers() {
        return ResponseEntity.ok(sellerService.findAll());
    }

}
