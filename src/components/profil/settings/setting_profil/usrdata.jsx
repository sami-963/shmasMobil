import React, { useState } from "react";

function ProfileForm() {
  // state فيها كل بيانات الفورم (الحقول)
  // القيم الموجودة هون هي القيم الافتراضية يلي بتطلع أول ما تفتح الصفحة
  const [formData, setFormData] = useState({
    firstName: "sami",
    lastName: "simesim",
    userName: "sami-963",
    phone: "+49 1521 0379018",
    occupation: "Full Stack Developer",
    bio: " hallo ich bin sami ich kommme aus Sieyre",
    emil: "simesimsami@gmil.com",
  });

  // مصفوفة الحقول
  // كل عنصر فيها بيمثل حقل بالفورم (label + name + type)
  // بنستخدمها حتى نعمل render للحقول تلقائي بدون تكرار كود
  const fields = [
    { label: "الاسم", name: "firstName", type: "text" },
    { label: "الاسم الاخير ", name: "lastName", type: "text" },
    { label: "اسم المستخدم", name: "userName", type: "text" },
    { label: "رقم الهاتف ", name: "phone", type: "text" },
    { label: "الايمبل", name: "emil", type: "text" },
    { label: "نبده عني", name: "bio", type: "textarea" },
  ];
  
  // هاي الفنكشن بتشتغل كل ما تغيّر قيمة بأي input
  // بتاخد الاسم والقيمة من الحقل وبتحدث الـ state مباشرة
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,        // بنحتفظ بباقي القيم
      [name]: value,  // وبنغيّر بس الحقل يلي تعدّل
    }));
  };

  // state للرسالة يلي بتطلع بعد التحديث
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  // هاي الفنكشن بتشتغل عند الضغط على زر التحديث
  const handleSubmit = (e) => {
    e.preventDefault(); // منع إعادة تحميل الصفحة

    // تعيين رسالة النجاح
    setMessage("تم تديث المعلومات بي نجاح");
    setShowMessage(true);

    // إلغاء أي تايمر قديم حتى ما يصير تداخل
    clearTimeout(window.msgTimer);

    // إخفاء الرسالة بعد ثانيتين
    window.msgTimer = setTimeout(() => {
      setShowMessage(false);
    }, 2000);
  };

  return (
    <div className="profile-container">
      {/* الفورم الرئيسي */}
      <form onSubmit={handleSubmit} className="profile-form">

        {/* نعمل map على الحقول حتى نرسمهم ديناميك */}
        {fields.map((field) => (
          <div className="form-group" key={field.name}>
            <label>{field.label}</label>

            {/* إذا النوع textarea نعرض textarea */}
            {field.type === "textarea" ? (
              <textarea
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                rows="4"
              />
            ) : (
              // غير هيك نعرض input عادي
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
              />
            )}
          </div>
        ))}

        {/* زر تحديث المعلومات */}
        <div className="update-btn">
          <button type="submit"> تحديث المعلومات </button>
        </div>
      </form>

      {/* رسالة النجاح بتظهر بس لما showMessage = true */}
      {showMessage && <p className="success-msg">{message}</p>}
    </div>
  );
}

export default ProfileForm;
