import UserInfoCard from "../../UserInfoCard";
import "./settingprofil.css";
import ProfileForm from "./usrdata";
function Settingprofil() {
  const FullName = "Sami Simeism"; // اسم المستخدم
  return (
    <div className="st-profil-conanier">
      <div className="profil_header profil_header-sttintgs ">
        <img className="profilimgs" src="/public/profilheader.png" alt="" />
        <UserInfoCard
          profileImg="/public/prifil.img.png" // صورة المستخدم
          fullName={FullName} // الاسم الكامل
        />
        {/* صورة جانبية للملف الشخصي */}
      </div>
      <div className="userData">
        <ProfileForm />
      </div>
    </div>
  );
}
export default Settingprofil;
