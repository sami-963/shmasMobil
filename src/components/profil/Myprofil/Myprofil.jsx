function Myprofil({ info_label, info_value }) {
  // بيانات الشخصيه

  return (
    <div className="info-row ">
      <span className="info-label infosActiv">{info_label} :</span>
      <span className="info-value infosActiv">{info_value}</span>
    </div>
  );
}

export default Myprofil;
