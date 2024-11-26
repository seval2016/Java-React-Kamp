package kodlamaio.northwind.business.concretes;

import java.util.List;

import kodlamaio.northwind.business.abstracts.ProductService;
import kodlamaio.northwind.core.utilities.results.DataResult;
import kodlamaio.northwind.core.utilities.results.Result;
import kodlamaio.northwind.core.utilities.results.SuccessDataResult;
import kodlamaio.northwind.core.utilities.results.SuccessResult;
import kodlamaio.northwind.dataAccess.abstracts.ProductDao;
import kodlamaio.northwind.entities.concretes.Product;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductManager implements ProductService {

    private final ProductDao productDao;

    public DataResult<List<Product>> getAll() {
        return new SuccessDataResult<List<Product>>(productDao.findAll(), "Data Listelendi");
    }

    @Override
    public Result add(Product product) {
        this.productDao.save(product);
        return new SuccessResult("Ürün eklendi");
    }

    @Override
    public DataResult<Product> getByProductName(String productName) {
        return new SuccessDataResult<Product>(productDao.getByProductName(productName), "Ürün isimleri Listelendi");
    }

    @Override
    public DataResult<Product> getByProductNameAndCategoryId(String productName, int categoryId) {
        return new SuccessDataResult<Product>(productDao.getByProductNameAndCategoryId(productName,categoryId), "Ürün isim ve kategori id'leri Listelendi");
    }

    @Override
    public DataResult<List<Product>> getByProductNameOrCategoryId(String productName, int categoryId) {
        return new SuccessDataResult<List<Product>>(productDao.getByProductNameOrCategoryId(productName,categoryId), "Ürün isim veya kategori id'leri Listelendi");

    }

    @Override
    public DataResult<List<Product>> getByCategoryId(List<Integer> categories) {
        return new SuccessDataResult<List<Product>>(productDao.getByCategoryId(categories), "Ürün kategori id'leri Listelendi");

    }

    @Override
    public DataResult<List<Product>> getByProductNameContains(String productName) {
        return new SuccessDataResult<List<Product>>(productDao.getByProductNameContains(productName),"Ürünler Listelendi");

    }

    @Override
    public DataResult<List<Product>> getByProductNameStartsWith(String productName) {
        return new SuccessDataResult<List<Product>>(productDao.getByProductNameStartsWith(productName),"Ürünler Listelendi");
    }

    @Override
    public DataResult<List<Product>> getByNameAndCategory(String productName, int categoryId) {
        return new SuccessDataResult<List<Product>>(productDao.getByNameAndCategory(productName,categoryId),"Ürünler Listelendi");
    }

}
