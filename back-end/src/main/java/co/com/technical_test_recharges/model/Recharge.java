package co.com.technical_test_recharges.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import java.io.Serializable;

@Entity
@Data
@Table(name = "recharge")
public class Recharge implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String cellphone;
    private String value;
    @ManyToOne
    @JoinColumn(name = "id_seller")
    private Seller seller;
    @ManyToOne
    @JoinColumn(name = "id_operator")
    private Operator operator;
}
