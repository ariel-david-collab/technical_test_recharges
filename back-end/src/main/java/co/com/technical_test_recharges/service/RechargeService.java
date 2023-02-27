package co.com.technical_test_recharges.service;

import co.com.technical_test_recharges.model.Recharge;
import co.com.technical_test_recharges.repository.RechargeRepository;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RechargeService {

    @Autowired
    private RechargeRepository rechargeRepository;

    public List<Recharge> findAll() {
        return rechargeRepository.findAll();
    }

    public <S extends Recharge> S save(S recharge) {
        return rechargeRepository.save(recharge);
    }

}
