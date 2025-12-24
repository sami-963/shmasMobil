import "./orderHistory.css";
import Orderhistorycard from "./orderhistorycard";
function OderHistory() {
  const orderData = [
    {
      orderID: "4524",
      courserName: "HTML and Css",
      data: "Janary, 21,2025",
      price: "450TL",
      status: "مكتمل",
    },
    {
      orderID: "4524",
      courserName: "HTML and Css",
      data: "Janary, 21,2025",
      price: "450TL",
      status: "قيد المراجعه",
    },
    {
      orderID: "4524",
      courserName: "HTML and Css",
      data: "Janary, 21,2025",
      price: "450TL",
      status: "مرفوض",
    },
    {
      orderID: "4524",
      courserName: "HTML and Css",
      data: "Janary, 21,2025",
      price: "450TL",
      status: "مكتمل",
    },
    {
      orderID: "4524",
      courserName: "HTML and Css",
      data: "Janary, 21,2025",
      price: "450TL",
      status: "قيد المراجعه",
    },
    {
      orderID: "4524",
      courserName: "HTML and Css",
      data: "Janary, 21,2025",
      price: "450TL",
      status: "مرفوض",
    },
    {
      orderID: "4524",
      courserName: "HTML and Css",
      data: "Janary, 21,2025",
      price: "450TL",
      status: "مكتمل",
    },
    {
      orderID: "4524",
      courserName: "HTML and Css",
      data: "Janary, 21,2025",
      price: "450TL",
      status: "قيد المراجعه",
    },
    {
      orderID: "4524",
      courserName: "HTML and Css",
      data: "Janary, 21,2025",
      price: "450TL",
      status: "مرفوض",
    },
  ];
  return (
    <div className="order-H-cotnainer">
      <div className="order-H-header flex">
        <span>رقم الطلب</span>
        <span>اسم الدوره</span>
        <span>التاريخ</span>
        <span>السعر</span>
        <span>الحاله</span>
      </div>
      <div className="order-H-orders">
        {orderData.map((order, index) => (
          <Orderhistorycard
            key={order.orderID}
            orderID={order.orderID}
            courserName={order.courserName}
            data={order.data}
            price={order.price}
            status={order.status}
            isEven={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}
export default OderHistory;
