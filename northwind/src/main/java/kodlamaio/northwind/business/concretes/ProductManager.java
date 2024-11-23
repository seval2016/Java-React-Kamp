package kodlamaio.northwind.business.concretes;

import java.util.List;

import kodlamaio.northwind.business.abstracts.ProductService;
import kodlamaio.northwind.dataAccess.abstracts.ProductDao;
import kodlamaio.northwind.entities.concretes.Product;
import lombok.AllArgsConstructor;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ProductManager implements ProductService {

    private final ProductDao productDao;

    public List<Product> getAll() {
        return productDao.findAll();
    }
}
