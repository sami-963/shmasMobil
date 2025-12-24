import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/header";
import Team from "./pages/Team/Team.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import FAQ from "./pages/FAQ/Faq.jsx";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Courses from "./pages/courses/Courses";
import Sadaqah from "./pages/Sadaqah/Sadaqah.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy/PrivacyPolicy.jsx";
import TermsConditions from "./pages/TermsConditions/TermsConditions.jsx";
import CourseDetails from "./pages/CourseDetails/CourseDetails.jsx";
import Footer from "./components/footer/footer";
import InformationAboutTheWeb from "./pages/InformationAboutTheWeb/SingleBlogInfo.jsx";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop.jsx";
import NotFoundPage from "./components/NotFoundPage404/NotFoundPage.jsx";
import Profil from "./pages/profil/Profile.jsx";
import LongIn from "./pages/LongIn/LongIn.jsx";
import CardsOfCoursess from "./pages/CardsOfCoursess/CardsOfCoursess.jsx";
import Teacjers_profile from "./pages/profil/teachersprofile/teachersprofil.jsx";
function App() {

  const location = useLocation()
  const IsFooter = location.pathname !== "/LongIn"


  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/pages/FAQ" element={<FAQ />} />
        <Route path="/profile" element={<Profil />} />
        <Route path="/teachersprofil" element={<Teacjers_profile />} />
        <Route path="/LongIn" element={<LongIn />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/Sadaqah" element={<Sadaqah />} />
        <Route path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/TermsConditions" element={<TermsConditions />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
        <Route path="/Team" element={<Team />} />

        <Route
          path="/Blog/BlogCard/:id"
          element={<InformationAboutTheWeb />}
        />

        <Route path="/NotFoundPage" element={<NotFoundPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/CardsOfCoursess/:id" element={<CardsOfCoursess />} />
      </Routes>

      <ScrollToTop />
      {IsFooter && <Footer />}

    </>
  );
}
export default App;
