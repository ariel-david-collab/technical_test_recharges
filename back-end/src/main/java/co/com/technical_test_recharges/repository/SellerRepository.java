package co.com.technical_test_recharges.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import co.com.technical_test_recharges.model.Seller;

@Repository
public interface SellerRepository extends JpaRepository<Seller, Long> {

}
