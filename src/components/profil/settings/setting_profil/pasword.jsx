import React, { useState } from "react";

function ChangePassword() {
  // state لتخزين قيم الحقول الثلاثة: الحالي والجديد وتأكيد الجديد
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  // state للرسالة يلي بتظهر بعد الضغط على التحديث
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [isError, setIsError] = useState(false); // اذا كانت الرسالة خطأ او نجاح

  // مصفوفة الحقول لتسهيل عمل render
  const fields = [
    {
      label: "كلمه المرور الحاليه",
      name: "currentPassword",
      type: "password",
    },
    {
      label: "كلمه المرور الجديده",
      name: "newPassword",
      type: "password",
    },
    {
      label: "اعاده كلمه المرور",
      name: "confirmPassword",
      type: "password",
    },
  ];

  // هاي الفنكشن لتحديث state كل ما المستخدم يكتب بالحقل
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswordData((prev) => ({
      ...prev,        // بنحتفظ بباقي القيم
      [name]: value,  // وبنغير بس الحقل يلي تعدل
    }));
  };

  // هاي الفنكشن بتشتغل لما المستخدم يضغط تحديث
  const handleSubmit = (e) => {
    e.preventDefault(); // منع الصفحة تعيد تحميل نفسها

    // تحقق اذا كلمة المرور الجديدة متطابقة مع التأكيد
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      setMessage("كلمة المرور الجديدة غير متطابقة ❌");
      setIsError(true); // الرسالة خطأ
    } 
    // تحقق اذا الحقول الرئيسية فارغة
    else if (!passwordData.currentPassword || !passwordData.newPassword) {
      setMessage("الرجاء تعبئة جميع الحقول");
      setIsError(true);
    } 
    // اذا كلشي تمام
    else {
      setMessage("تم تحديث كلمة المرور بنجاح ✅");
      setIsError(false); // الرسالة نجاح
    }

    // عرض الرسالة
    setShowMessage(true);

    // اخفاء الرسالة بعد ثانيتين
    clearTimeout(window.passTimer);
    window.passTimer = setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <div className="profile-container">
      <form onSubmit={handleSubmit} className="profile-form">
        {/* رسم الحقول بشكل ديناميكي */}
        {fields.map((field) => (
          <div className="form-group" key={field.name}>
            <label>{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              value={passwordData[field.name]}
              onChange={handleChange}
            />
          </div>
        ))}

        {/* زر تحديث كلمة المرور */}
        <div className="update-btn">
          <button type="submit"> تحديث كلمه المرور </button>
        </div>
      </form>

      {/* الرسالة يلي بتظهر إذا في خطأ أو نجاح */}
      {showMessage && (
        <p className={isError ? "error-msg" : "success-msg"}>{message}</p>
      )}
    </div>
  );
}

export default ChangePassword;
