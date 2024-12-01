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
} from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  useEffect(() => {
    let productService = new ProductService();
    productService.getProducts().then((result) => setProducts(result.data.data));
  }, []);

  // Sayfalama işlemleri için 
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(products.length / itemsPerPage);

  const handlePageChange = (e, { activePage }) => {
    setCurrentPage(activePage);
  };

  return (
    <Table celled>
      <TableHeader>
        <TableRow>
          <TableHeaderCell>No</TableHeaderCell>
          <TableHeaderCell>Ürün Adı</TableHeaderCell>
          <TableHeaderCell>Birim Fiyatı</TableHeaderCell>
          <TableHeaderCell>Stock Adedi</TableHeaderCell>
          <TableHeaderCell>Açıklama</TableHeaderCell>
          <TableHeaderCell>Kategori</TableHeaderCell>
        </TableRow>
      </TableHeader>

      <TableBody>
        {currentProducts.map((product, index) => (
          <TableRow key={product.id}>
            <TableCell>{indexOfFirstItem + index + 1}</TableCell>
            <TableCell>{product.productName}</TableCell>
            <TableCell>{product.unitPrice}</TableCell>
            <TableCell>{product.unitsInStock}</TableCell>
            <TableCell>{product.quantityPerUnit}</TableCell>
            <TableCell>{product.category.categoryName}</TableCell>
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
  );
}
