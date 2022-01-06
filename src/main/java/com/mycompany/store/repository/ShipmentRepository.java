package com.mycompany.store.repository;

import com.mycompany.store.domain.Shipment;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the Shipment entity.
 */
@Repository
public interface ShipmentRepository extends JpaRepository<Shipment, Long> {}
