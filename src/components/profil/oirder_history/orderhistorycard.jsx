function Orderhistorycard({
  orderID,
  courserName,
  data,
  price,
  status,
  isEven,
}) {
  const statusClass =
    status === "قيد المراجعه"
      ? "status-review"
      : status === "مكتمل"
      ? "status-done"
      : status === "مرفوض"
      ? "status-rejected"
      : "";

  return (
    <div className={`order_box flex ${isEven ? "" : "even"}`}>
      {" "}
      <div className="orderID">{orderID}#</div>
      <div className="courserName">{courserName}</div>
      <div className="data">{data}</div>
      <div className="price">{price}</div>
      <div className={`status ${statusClass}`}>{status}</div>
    </div>
  );
}

export default Orderhistorycard;
