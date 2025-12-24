import "./ShareOpinionCard.css"
// import "."
import "../JoinUs/JoinUs.css"
import leftCorner from "../../../public/leftCorner.png"
import rightCorner from "../../../public/rightCorner.png"
import { Link } from "react-router-dom";

export default function ShareOpinionCard(){
    return(
        <>
            <div className="contactCard shareOpinoin container flex">
              {/* <div className="ShareOpinionSectionImg">
                <img src={generalCardImg} alt="generalImg"  className="ShareOpinionSubsucribeFirstImg"/>
              </div> */}
              <div className="ShareOpinionCardContent flex">
                  <div className="ShareOpinionSmallTitle">
                    <span>شارك رأيك</span>
                  </div>
                  <div className="ShareOpinionSectionMainTitle">
                    <h2>دعونا نتحدث عن التعليم والتطوير</h2>
                  </div>
                  <div className="ShareOpinionSectionDescription">
                    <p> نحن نؤمن بأن التعلم المستمر هو الطريق للنمو الشخصي والمهني، 
                      وأن مشاركة الأفكار والتجارب تصنع مجتمعًا أكثر وعيًا وإبداعًا. 
                      من خلال منصتنا نسعى لتقديم محتوى واضح وفعّال يساعدك على تطوير مهاراتك، 
                      ويمنحك الفرصة للتفاعل مع الآخرين، وتبادل المعرفة التي تفتح آفاقًا جديدة 
                      نحو مستقبل أفضل للجميع.</p>
                  </div>

                  <Link to="/contact" className="contactUs">
                    <button>تواصل معنا</button>
                  </Link>
              </div>
              {/* <div className="ShareOpinionSectionImg">
                <img src={generalCardImg} alt="generalImg"  className="ShareOpinionSubsucribeLastImg" />
              </div> */}

               <div className="cardImgs flex">
                  <div className="joinUsSectionImg rightCorner flex">
                    <img src={rightCorner} alt="threeDDesignImg"  className="JoinUsFirstImg"/>
                  </div>
                  <div className="joinUsSectionImg leftCorner flex">
                    <img src={leftCorner} alt="threeDDesignImg"  className="JoinUsLastImg" />
                  </div>
                </div>
            </div>
        </>
    )
}
