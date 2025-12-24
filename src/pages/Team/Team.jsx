import { useState } from "react";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import GroupMembers from "../../components/Team/GroupMemberCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../Team/Team.css";
import PersonRate from "../../components/Team/PersonRate";
import Elementor from "../../components/home/Elementor.jsx";
import JoinUs from "../../components/JoinUs/JoinUs.jsx";
import TeamBanner from "../../components/team-banner/team-banner.jsx";

import { FreeMode, Pagination } from "swiper/modules";
import { GroubMb } from "./TeamMemberInformation/TeamMemberInformation"
import { MdCalendarToday } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";
import { LuUsers } from "react-icons/lu";
import { LuPercent } from "react-icons/lu";

function Team() {

    const TotalPersonRate = [
        {
            id: 1,
           img:"./Man-team.png",
            title: "عميل",
            name: "Halil",
            text: "كانت تجربة مميزة وانصح بها ",
        },
        {
            id: 2,
            img:"./teamGirlProfile-removebg-preview.png",
            title: "عميل",
            name: "Arwa",
            text: "كانت تجربة مميزة وانصح بها ",
        },
        {
            id: 3,
            img:"./Man-team.png",
            title: "عميل",
            name: "Sami",
            text: "كانت تجربة مميزة وانصح بها ",
        },
        {
            id: 4,
            img:"./teamGirlProfile-removebg-preview.png",
            title: "عميل",
            name: "Lujain",
            text: "كانت تجربة مميزة وانصح بها ",
        },
        {
            id: 5,
            img:"./teamGirlProfile-removebg-preview.png",
            title: "عميل",
            name: "Sheyma",
            text: "كانت تجربة مميزة وانصح بها ",
        },
        {
            id: 6,
            img:"./teamGirlProfile-removebg-preview.png",
            title: "عميل",
            name: "Maha",
            text: "كانت تجربة مميزة وانصح بها ",
        },

        {id: 7,
            img:"./Man-team.png",
            title: "عميل",
            name: "Abdulrahman",
            text: "كانت تجربة مميزة وانصح بها ",
        },
    ];
    const [Project] = useState(80);
    const [YearExperience] = useState(90);
    const [Money] = useState(100);
    const [ExpertTeam] = useState(80);
    const [CreativePractice] = useState(280);

    return (
        <div className="team-page">
            <div className="team-header">
                <h1 className="team-title">فريقنا</h1>
                <div className="team-subtitle-wrapper">
                    <p className="team-subtitle">التقِ مع فريق الخبراء أعضاء مشروعنا</p>
                </div>
            </div>

            <div className="team-members">
                {GroubMb.map((person) => (
                    <GroupMembers
                        key={person.id}
                        img={person.gender === "male" ? person.img : person.GirlImg}
                        title={person.title}
                        id={person.id}
                        icons={person.icons}
                    />
                ))}
            </div>

           <div className="elementor-section container flex ">
              <Elementor
                color={"#7c4dff"}
                namber="8"
                el_icon={<MdCalendarToday />}
                eltext="سنوات الخبرة"
              />
              <Elementor
                color={"#00b4ff"}
                namber="35"
                el_icon={<FaTrophy />}
                eltext="تم انهاء المشروع"
              />
              <Elementor
                color={"#00b4ff"}
                namber="80"
                el_icon={<LuPercent />}
                eltext="استعادة الأموال"
              />
              <Elementor
                color={"#00b4ff"}
                namber="30"
                el_icon={<LuUsers />}
                eltext="  فريق الخبراء"
              />
              <Elementor
                color={"#7c4dff"}
                namber="150"
                el_icon={<MdAccessTime />}
                eltext="الممارسة الإبداعية"
              />
            </div>

            <div className="Testimonial container">
                <div className="testimonial-header flex">
                    <div className="text flex">
                        <p className="testimonial-label">شهادة العملاء</p>
                        <p className="testimonial-title">رأي عملائنا</p>
                        <p className="testimonial-desc">
                        خدمة مميزة وجودة عالية جعلت تجربتنا أفضل مما توقّعنا.
                        </p>
                    </div>
                    <div className="readMore">
                      <Link className="read-more-btn" to={"/"}>
                        اقرأ المزيد
                      </Link>
                    </div>
                </div>
                <div className="testimonial-slider">
                    <Swiper
                        className="my-swiper"
                        slidesPerView={"auto"}
                        spaceBetween={25}
                        loop={true}
                        freeMode={true}
                    >
                        {TotalPersonRate.map((person) => (
                            <SwiperSlide key={person.id} style={{width: 'auto'}}>
                                <PersonRate
                                    img={person.img}
                                    text={person.text}
                                    name={person.name}
                                    title={person.title}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
                <div className="swipe-hint">
                 <span>→</span> اسحب <span>←</span>
            </div>
            </div>
            <JoinUs/>
              <TeamBanner
                 text= "تم تطوير هذه الصفحة من قبل الطالب خليل"
              />
        </div>
    );
}
export default Team;