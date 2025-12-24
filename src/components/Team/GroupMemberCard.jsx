import { FaArrowLeft, FaInstagram, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { GroubMb } from "../../pages/Team/TeamMemberInformation/TeamMemberInformation"
import { iconMap } from "../../pages/Team/TeamMemberInformation/TeamMemberInformation"
import "../../pages/Team/Team.css"

function GroupMemberCard({ img, title, icons, id }) {
  const member = GroubMb.find(m => m.id === id)


  return (
    <div className="member-card">
      <div className="member-image-wrapper">
        <img className="member-image" src={img} alt={title} />
      </div>
      <div className="member-info">
        <p className="member-title">{title}</p>
        <p className="member-role">
          {member?.text}
        </p>
        <div className="member-socials">
          {icons.map((item, index) => {
            const Icon = iconMap[item.type]
            return (
              <a
                key={index}
                href={item.url}
                target={item.type === "email" || item.type === "phone" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                className="social-link"
              >
                <Icon />
              </a>
            )
          })}
        </div>
      </div>
    </div >
  )
}
export default GroupMemberCard