import React, { useState, useEffect } from "react";
import {
  Table,
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  Pagination,
  Button,
} from "semantic-ui-react";
import ProductService from "../services/productService";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/cartActions";
import { toast, ToastContainer } from "react-toastify";


export default function ProductList() {
  const dispatch = useDispatch();

  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    let productService = new ProductService();
    productService
      .getProducts()
      .then((result) => setProducts(result.data.data));
  }, []);

  // Sayfalama işlemleri için
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (e, { activePage }) => {
    setCurrentPage(activePage);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    toast.success(`${product.productName} sepete başarıyla eklendi!`, {
      position: "bottom-right", // Mesajın sağ alt köşede görünmesi
      autoClose: 3000, // Mesajın 3 saniye sonra otomatik kaybolması
      hideProgressBar: false, // İlerleme çubuğu görünümü
      closeOnClick: true, // Tıklayınca kapatma
      pauseOnHover: true, // Üzerinde durunca durdurma
      draggable: true, // Sürüklenebilir olması
    });
  };

  return (
   <div>
    <ToastContainer />
    <Table celled>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>No</TableHeaderCell>
          <TableHeaderCell>Ürün Adı</TableHeaderCell>
          <TableHeaderCell>Birim Fiyatı</TableHeaderCell>
          <TableHeaderCell>Stock Adedi</TableHeaderCell>
          <TableHeaderCell>Açıklama</TableHeaderCell>
          <TableHeaderCell>Kategori</TableHeaderCell>
          <TableHeaderCell>İşlemler</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {currentProducts.map((product, index) => (
          <TableRow key={product.id}>
            <TableCell>{indexOfFirstItem + index + 1}</TableCell>
            <TableCell>
              <Link
                className="text-decoration-none text-black"
                to={`/products/${product.productName}`}
              >
                {product.productName}
              </Link>
            </TableCell>
            <TableCell>{product.unitPrice.toFixed(2)}</TableCell>
            <TableCell>{product.unitsInStock}</TableCell>
            <TableCell>{product.quantityPerUnit}</TableCell>
            <TableCell>{product.category.categoryName}</TableCell>
            <TableCell>
              <Button onClick={()=>handleAddToCart(product)} color="blue" size="mini" icon="shopping basket">
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>

      <TableFooter>
        <TableRow>
          <TableHeaderCell colSpan="6">
            <Pagination
              floated="right"
              totalPages={totalPages} // Toplam sayfa sayısı
              activePage={currentPage} // Aktif sayfa
              onPageChange={handlePageChange} // Sayfa değişikliğini yönetir
            />
          </TableHeaderCell>
        </TableRow>
      </TableFooter>
    </Table>
   </div>
    
  );
}
