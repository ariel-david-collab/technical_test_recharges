package co.com.technical_test_recharges.service;

import co.com.technical_test_recharges.model.Seller;
import co.com.technical_test_recharges.repository.SellerRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SellerService {

    @Autowired
    private SellerRepository sellerRepository;

    public List<Seller> findAll() {
        return sellerRepository.findAll();
    }

}
