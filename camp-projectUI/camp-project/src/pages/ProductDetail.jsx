import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CardMeta,
  CardHeader,
  CardDescription,
  CardContent,
  Button,
  Card,
  Image,
  Icon,
} from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetail() {
  let { name } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getByProductName(name)
      .then((result) => setProduct(result.data.data))
      .catch((error) => console.error("Error fetching product:", error)); // Hata yönetimi eklendi
  }, []);

  // Favorilere eklenip eklenmediğini kontrol etmek için state
  const [isFavorited, setIsFavorited] = useState(false);

  // Favori butonuna tıklama handler'ı
  const handleFavoriteClick = () => {
    setIsFavorited(!isFavorited);
  };

  return (
    <div>
      <Card fluid>
        <CardContent>
          <Image
            floated="right"
            size="mini"
            src="/images/avatar/large/steve.jpg"
          />
          <CardHeader>{product.productName}</CardHeader>
          <CardMeta>
            {" "}
            {product.category?.categoryName || "Kategori Bilgisi Bulunamadı"}
          </CardMeta>
          <CardDescription>
            {product.quantityPerUnit || "Ürün bilgisi mevcut değil"}
          </CardDescription>
        </CardContent>
        <CardContent extra>
          <div className="ui two buttons w-50">
            <Button
              content="Sepete Ekle"
              icon="shopping basket"
              labelPosition="left"
              color="blue"
              className="me-2"
            />
            <Button
              icon
              color={isFavorited ? "red" : "grey"} // Favori durumu
              onClick={handleFavoriteClick}
            >
              <Icon name={isFavorited ? "heart" : "heart outline"} />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
