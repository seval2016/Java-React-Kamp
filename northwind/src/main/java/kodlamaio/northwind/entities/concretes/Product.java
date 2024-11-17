package kodlamaio.northwind.entities.concretes;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Getter
@Setter
public class Product {

    private int id;
    private int categoryId;
    private String productName;
    private double unitPrice;
    private short unitsInStock;
    private String quantityPerUnit;
}
