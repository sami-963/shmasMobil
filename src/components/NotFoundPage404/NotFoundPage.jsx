
import { Link } from "react-router-dom"
import "../../../src/components/NotFoundPage404/NotFoundPage.css"
import SearchIcon from "../../../public/loupe-sign-icon.webp"
function NotFoundPage() {

    return <div className="Halil-NotFpounPage">
        <p className="Error">404</p>
        <div className="content">
            <img src={SearchIcon} alt="photo" className="Img" />
            <div>
                <p className="p-1">لم يتم العثور على أي نتيجة</p>
                <p className="p-2"> تحقق من الرابط أو حاول الرجوع إلى الصفحة السابقة.</p>
                <Link to={"/"}>
                    <p className="p-3">
                        الرئيسية
                    </p>
                </Link>
            </div>
        </div>
    </div>
}
export default NotFoundPage