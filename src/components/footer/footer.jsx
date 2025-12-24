import { Link } from "react-router-dom";
import "../footer/footer.css";
import "../../styles/global.css";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer_tob flex">
          <div className="footer_logo flex">
            <Link to="/">
              <img
                src="/public/headerLogo.png"
                alt="footer_img"
                className="img"
              />
            </Link>
          </div>
          <div className="footer_links ">
            <ul>
              <li>
                <Link className="Flinks" to="/">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link className="Flinks" to="/About">
                  حول
                </Link>
              </li>

              <li>
                <Link className="Flinks" to="/Blog">
                  الأخبار
                </Link>
              </li>
              <li>
                <Link className="Flinks" to="/Contact">
                  للتواصل
                </Link>
              </li>
              <li>
                <Link className="Flinks" to="/pages/FAQ">
                  الأسئلة الشائعة
                </Link>
              </li>
              <li>
                <Link className="Flinks" to="/profile">
                الملف الشخصي
                </Link>
              </li>
              <li>
                <Link className="Flinks" to="/Teachersprofil">
               الشخصي معلم
                </Link>
              </li>
            </ul>
          </div>
          <div className="social_media">
            <a href="https://facebook.com" target="_blank">
              <FaFacebookF />
            </a>
            <a href="https://facebook.com" target="_blank">
              <FaInstagram />
            </a>
            <a href="https://facebook.com" target="_blank">
              <FaTwitter />
            </a>
            <a href="https://facebook.com" target="_blank">
              <FaYoutube />
            </a>
            <a href="https://facebook.com" target="_blank">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
        <div className="footer_bottom flex">
          <div className="privacy">
            <ul>
              <li>
                <Link className="Flinks" to="/PrivacyPolicy">
                  الخصوصية والسياسة
                </Link>
              </li>
              <li>
                <Link className="Flinks" to="/TermsConditions">
                  الشروط والأحكام
                </Link>
              </li>
            </ul>
          </div>
          <div className="Privacy_protection">
            جميع الحقوق محفوظة لشركة brogrammers4u © 2025{" "}
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
