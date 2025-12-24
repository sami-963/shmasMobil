import "./JoinUs.css"
import leftCorner from "../../../public/leftCorner.png"
import rightCorner from "../../../public/rightCorner.png"
import { Link } from "react-router-dom"
export default function JoinUs(){
    return (
        <>
            <section className="contactCard joinUsCard container flex">
              
                <div className="joinUsContent flex">
                  <div className="JoinUsSmallTitle">
                      <span>انضم إلينا</span>
                  </div>
                  <div className="sectionMainTitle">
                    <h2>اشترك في تحديثات منصّة التعلم</h2>
                  </div>
                  <div className="joinUsDescription">
                    <p>
                      انضم إلى منصتنا التعليمية واحصل على أحدث الدروس والمقالات والنصائح التي تساعدك على تطوير مهاراتك في مختلف المجالات.
                      من خلال اشتراكك ستصلك تحديثات منتظمة حول الدورات الجديدة، العروض الخاصة، والمحتوى المميز المصمم خصيصًا لدعم رحلتك التعليمية خطوة بخطوة.
                    </p>
                  </div>
      
                  <div className="joinUsEmailContainer flex">
                      <input type="email" placeholder="أدخل بريدك الإلكتروني" required/>
                      <Link to="/LongIn" className="joinNow flex">اشترك الآن</Link>
                  </div>
                </div>
                

                <div className="cardImgs flex">
                  <div className="joinUsSectionImg rightCorner flex">
                    <img src={rightCorner} alt="threeDDesignImg"  className="JoinUsFirstImg"/>
                  </div>
                  <div className="joinUsSectionImg leftCorner flex">
                    <img src={leftCorner} alt="threeDDesignImg"  className="JoinUsLastImg" />
                  </div>
                </div>
            </section>
        </>
    )
}
