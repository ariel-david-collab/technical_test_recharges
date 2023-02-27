package co.com.technical_test_recharges.service;

import co.com.technical_test_recharges.repository.OperatorRepository;
import co.com.technical_test_recharges.model.Operator;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OperatorService {

    @Autowired
    private OperatorRepository operatorRepository;

    public List<Operator> findAll() {
        return operatorRepository.findAll();
    }

}
