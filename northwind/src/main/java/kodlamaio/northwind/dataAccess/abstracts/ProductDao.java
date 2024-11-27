package kodlamaio.northwind.dataAccess.abstracts;

import kodlamaio.northwind.entities.dtos.ProductWithCategoryDto;
import org.springframework.data.jpa.repository.JpaRepository;

import kodlamaio.northwind.entities.concretes.Product;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface ProductDao extends JpaRepository<Product,Integer>{

    Product getByProductName(String productName);

    Product getByProductNameAndCategory_CategoryId(String productName, int categoryId);

    List<Product> getByProductNameOrCategory_CategoryId(String productName, int categoryId);

    List<Product> getByCategoryIn(List<Integer> categories);

    List<Product> getByProductNameContains(String productName);

    List<Product> getByProductNameStartsWith(String productName);

    @Query("From Product where productName=:productName and category.categoryId=:categoryId")
    List<Product> getByNameAndCategory(String productName, int categoryId);

    /**
     * Ürün ID'si (p.id),ürün adı (p.productName),kategori adı (c.categoryName):DTO'yu oluşturmak için kullanılan alanlardır.
     * new anahtar kelimesi: Yeni bir DTO (veri aktarım nesnesi) oluşturmak için kullNILIR
     * kodlamaio.northwind.entities.dtos.ProductWithCategoryDto: Oluşturulacak DTO'nun tam sınıf adıdır.
     * Inner Join c.products p: Category tablosuyla Product tablosunu, Category tablosundaki bir ilişkiyi (c.products) kullanarak birleştirir.
     * Bu yöntem, ProductWithCategoryDto tipinde nesnelerden oluşan bir liste döndürür.
     */
    @Query("Select new kodlamaio.northwind.entities.dtos.ProductWithCategoryDto"
            + "(p.id, p.productName, c.categoryName) "
            + "From Category c Inner Join c.products p")
    List<ProductWithCategoryDto> getProductWithCategoryDetails();

    //select p.productId,p.productName, c.categoryName  from Category c inner join Product p
    //on c.categoryId = p.categoryId
}
