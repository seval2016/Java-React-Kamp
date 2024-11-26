package kodlamaio.northwind.dataAccess.abstracts;

import org.springframework.data.jpa.repository.JpaRepository;

import kodlamaio.northwind.entities.concretes.Product;

import java.util.List;

public interface ProductDao extends JpaRepository<Product,Integer>{

    Product getByProductName(String productName);

    /**
     * getByProductNameAndCategoryId metodu, ürün adı ve kategori ID eşleşmesine dayalı olarak tek bir ürün döneceği varsayımıyla Product olarak tanımlanmış
     * getByProductNameOrCategoryId metodu, daha geniş bir filtreleme yaparak birden fazla ürün dönebileceğinden List<Product>
     */
    Product getByProductNameAndCategoryId(String productName, int categoryId);

    List<Product> getByProductNameOrCategoryId(String productName, int categoryId);

    List<Product> getByCategoryId(List<Integer> categories);
    List<Product> getByProductNameContains(String productName);

    List<Product> getByProductNameStartsWith(String productName);





}
