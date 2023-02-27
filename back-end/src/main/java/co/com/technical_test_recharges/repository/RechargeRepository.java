package co.com.technical_test_recharges.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import co.com.technical_test_recharges.model.Recharge;

@Repository
public interface RechargeRepository extends JpaRepository<Recharge, Long> {

}
