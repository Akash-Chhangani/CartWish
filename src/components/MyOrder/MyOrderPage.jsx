import React from "react";
import "./MyOrderPage.css";
const MyOrderPage = () => {
  return (
    <section className="align_center my_order_page">
      <Table headings={["Order", "Products", "Total", "Status"]}>
        <tbody>
          <tr>
            <td>1</td>
            <td>iPhone, Power Bank</td>
            <td>$1299</td>
            <td>Shipped</td>
          </tr>
        </tbody>
      </Table>
    </section>
  );
};
import "./MyOrderPage.css";
import Table from "./../Table/Table";
export default MyOrderPage;
