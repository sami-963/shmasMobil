function UserInfoCard({
  profileImg, // صورة المستخدم
  fullName, // اسم المستخدم
  coursesNum, // عدد الكورسات
  certNum, // عدد الشهادات
  courseIcon, // أيقونة الكورسات
  certIcon, // أيقونة الشهادات
  Certificates,
  Courses,
  profileImgST,
  fullNameST,
}) {
  return (
    <div className="user-card">
      <div className="user-box">
        <div className="banner">
          <img className="avatar" src={profileImg} alt={fullName} />
        </div>
        <div className="bannerST">
          <img className="avatarST" src={profileImgST} alt={fullNameST} />
        </div>
        <div className="user-info">
          <h2 className="username">{fullName}</h2>

          <div className="stats">
            <span className="stat-item">
              {Courses} {coursesNum} {courseIcon}
            </span>

            <span className="stat-item">
              {Certificates} {certNum} {certIcon}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfoCard;
