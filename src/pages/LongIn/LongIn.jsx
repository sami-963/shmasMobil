import { Link } from "react-router-dom";
import "./LongIn.css";
import TeamBanner from "../../components/team-banner/team-banner.jsx";

function LongIn() {
    return (
        <div>
        <div className="login-wrapper">
            <div className="login-container">
                {/* Left Side (Welcome/Register) */}
                <div className="login-side welcome-side">
                    <div className="welcome-content">
                        <h2>أهلاً بك في منصة شمس التعليمية</h2>
                        <p>هل لا تملك حساباً بعد؟</p>

                    </div>
                </div>

                {/* Right Side (Login Form) */}
                <div className="login-side form-side">
                    <div className="form-content">
                        <div className="form-header">
                            <h1>تسجيل الدخول</h1>
                            <p>مرحباً بك مجدداً، يرجى إدخال بياناتك</p>
                        </div>

                        <form className="login-form">
                            <div className="input-group">
                                <label htmlFor="email">البريد الإلكتروني</label>
                                <input type="email" id="email" placeholder="example@email.com" />
                            </div>

                            <div className="input-group">
                                <label htmlFor="password">كلمة المرور</label>
                                <input type="password" id="password" placeholder="••••••••" />
                            </div>

                            <button className="btn-primary" type="submit">
                                تسجيل الدخول
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

          <TeamBanner
             text= "تم تطوير هذه الصفحة من قبل الطالب خليل"
         />
        </div>
    );
}

export default LongIn;
