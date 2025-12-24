import Enroled_couresescard from "../Enrolled_Courses/enroled_couresescard";

function Wishlist() {
  const coursesDatas = [
    {
      couresesImg: "/public/course-online-02.jpg",
      id: 1,
      reviewss: 3,
      lessonsNum: 15,
      titles: "PHP للمبتدئين والمتقدمين",
      studentsNum: 54,
      Percentage: 70,
      reviews: 10,
    },
    {
      couresesImg: "/public/course-online-02.jpg",
      id: 2,
      reviewss: 5,
      lessonsNum: 10,
      titles: "دورت جافا CSS and HTML",
      studentsNum: 44,
      Percentage: 50,
      reviews: 150,
    },
    {
      couresesImg: "/public/course-online-02.jpg",
      id: 3,
      reviewss: 4,
      lessonsNum: 110,
      titles: "دورات تمريض  و اسعافات اوليه",
      studentsNum: 120,
      Percentage: 21,
      reviews: 11,
    },
  ];

  return (
    <div className="courses-content">
      {coursesDatas.map((course) => (
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
          iconColor="#facc15" // ← هنا السحر
        />
      ))}
    </div>
  );
}

export default Wishlist;
