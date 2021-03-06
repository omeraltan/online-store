package com.mycompany.store.repository;

import com.mycompany.store.domain.ProductCategory;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data SQL repository for the ProductCategory entity.
 */
@Repository
public interface ProductCategoryRepository extends JpaRepository<ProductCategory, Long> {}
