import "./PartnerCompanies.css"
import "../../pages/FAQ/Faq"
import companies1 from "/public/companies1.png"
import companies2 from "/public/companies2.png"
import companies3 from "/public/companies3.png"
import { Link } from 'react-router-dom'
export default function PartnerCompanies(){
    return(
        <>
            <div className="outerContainer container flex">
                <div className="partnersContainer container flex">
                    <div className="partnercontainerTitle">
                        <h2>نحن نتعاون مع المصممين المحترفين في جميع أنحاء العالم</h2>
                    </div>
                    <div className="companiesLogoImgs flex">
                        <img src={companies1} alt="company logo" />
                        <img src={companies2} alt="company logo" />
                        <img src={companies3} alt="company logo" />
                    </div>
                </div>
                <div className="elementorDivider"></div>
                <div className="contact">
                    <p>إذا كان لديك أي أسئلة في ذهنك، فقط <Link to={"../../pages/FAQ"}>انقر هنا</Link> للكتابة</p>
                </div>
            </div>
        </>
    )
}