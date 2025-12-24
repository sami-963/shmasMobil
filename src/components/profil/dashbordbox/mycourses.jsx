// استيراد ملف CSS الخاص بصندوق لوحة التحكم
import "./mycourses.css";

function Mycourses() {
  return <div className="reviews-cont" >
    <p className="reviews-title" >دوراتي</p>
    <div className="reviews-content">
      <table className="reviews-table">
        <thead>
          <tr>
            <th>إسم الدورة</th>
            <th>الدورات المسجل فيها</th>
            <th>التقييم</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>دورة Java Script</td>
            <td>50</td>
            <td>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>
            </td>
          </tr>
          <tr>
            <td>دورة Figma</td>
            <td>40</td>
            <td>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
            </td>
          </tr>
          <tr>
            <td>تصميم مواقع الويب</td>
            <td>80</td>
            <td>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star "></span>
            </td>
          </tr>
          <tr>
            <td>دورة Css</td>
            <td>45</td>
            <td>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="browse-all"><a href="">كل الدورات<span> &#129032;</span></a></div>
  </div>;
  
}
export default Mycourses;
