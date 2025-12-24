import Enroled_couresescard from "../Enrolled_Courses/enroled_couresescard";

function Allcuourses() {
  const coursesDatasAll = [
    {
      couresesImg: "/public/course-online-02.jpg", // صورة الدورة
      id: 1, // معرف الدورة
      reviewss: 3, // تقييم النجوم
      lessonsNum: 15, // عدد الدروس
      titles: "PHP للمبتدئين والمتقدمين", // عنوان الدورة المعروض
      studentsNum: 54, // عدد الطلاب
      Percentage: 100, // نسبة الإنجاز
      reviews: 10, // عدد التقييمات
    },
    {
      couresesImg: "/public/course-online-02.jpg",
      id: 2,
      reviewss: 5,
      lessonsNum: 10,
      titles: "دورت جافا CSS and HTML",
      studentsNum: 44,
      Percentage: 98, // نسبة الإنجاز
      reviews: 150,
    },
    {
      couresesImg: "/public/course-online-02.jpg",
      id: 2,
      reviewss: 5,
      lessonsNum: 10,
      titles: "دورت جافا CSS and HTML",
      studentsNum: 44,
      Percentage: 99, // نسبة الإنجاز
      reviews: 150,
    },
    {
      couresesImg: "/public/course-online-02.jpg",
      id: 3,
      reviewss: 4,
      lessonsNum: 110,
      titles: "دورات تمريض  و اسعافات اوليه",
      studentsNum: 120,
      Percentage: 10, // نسبة الإنجاز
      reviews: 11,
    },
    {
      couresesImg: "/public/course-online-02.jpg",
      id: 3,
      reviewss: 4,
      lessonsNum: 110,
      titles: "دورات تمريض  و اسعافات اوليه",
      studentsNum: 120,
      Percentage: 100, // نسبة الإنجاز
      reviews: 11,
    },
    
  ];

  return (
    <div className="courses-content">
      {coursesDatasAll.map((course) => (
        <Enroled_couresescard
          key={course.id}
          id={course.id}
          couresesImg={course.couresesImg}
          titles={course.titles}
          reviewss={course.reviewss}
          lessonsNum={course.lessonsNum}
          studentsNum={course.studentsNum}
          Percentage={course.Percentage}
          reviews={course.reviews}
        />
      ))}
    </div>
  );
}

export default Allcuourses;
