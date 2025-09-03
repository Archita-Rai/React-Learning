import "./product.css";
import Price from "./Price";

function Product({ title, price, idx }) {
  let oldPrices = ["12,495", "11,900", "1,599", "599"];
  let newPrices = ["8,999", "9,199", "899", "278"];
  let description = [
    ["8,000 DPI", "5 Programeble buttons"],
    ["intutive surface", "design for iPad Pro"],
    ["design for iPad Pro", "intutive surface"],
    ["wireless", "optical orientation"],
  ];
  return (
    <div className="Product">
      <p>{title}</p>
      <p>Description: &nbsp;&nbsp;{description[idx][0]}</p>
      <p>Description: &nbsp;&nbsp;{description[idx][1]}</p>

      <Price oldPrices={oldPrices[idx]} newPrices={newPrices[idx]} />
    </div>
  );
}

export default Product;
