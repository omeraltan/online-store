package com.mycompany.store.repository;

import com.mycompany.store.domain.Product;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the Product entity.
 */
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {}
