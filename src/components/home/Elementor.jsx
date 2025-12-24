function Elementor({ namber, el_icon, eltext, color }) {
  return (
    <div className="num_box">
      <div className="num">
        <span className="num_icon" style={{ color }}>
          {el_icon}
        </span>
        <span className="num_number">{namber}</span>
      </div>

      <div className="el_text">{eltext}</div>
    </div>
  );
}
export default Elementor;
