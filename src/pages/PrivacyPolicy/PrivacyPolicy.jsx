import PageMainTitle from "../../components/PagemainTitle/PageMainTitle";
import "./PrivacyPolicy.css"
function PrivacyPolicy() {

  // عنصر واحد من السياسة
function PolicyItem({ title, description1, description2 }) {
  return (
    <div className="policyItem flex">
      <h3>{title}</h3>
      <div className="descriptons">
        <p className="description1">{description1}</p>
        <p className="description2">{description2}</p>
      </div>
    </div>
  );
}

// كل البنود
function Terms() {
  const policyData = [
    { title: "البيان الشخصي", description1: "نحن ملتزمون بخلق تجربة آمنة وسهلة الاستخدام لكل عميل. ولتحقيق ذلك، نسعى لأن نكون واضحين قدر الإمكان في جميع سياساتنا، وذلك من خلال شروطنا وأحكامنا الشفافة.", description2: "عند زيارتك لموقعنا skillstwins.com، قد يتم جمع بعض معلوماتك الشخصية التي زودتنا بها أثناء طلبك أو من خلال سياسة ملفات تعريف الارتباط الخاصة بنا." },
    { title: "ما هي ملفات تعريف الارتباط ؟", description1: "ملفات تعريف الارتباط هي ملفات نصية صغيرة تُخزَّن داخل متصفحك وتساعد الموقع على العمل بطريقة صحيحة.", description2: "نستخدم ملفات الارتباط من الدرجة الأولى والثالثة لأغراض الوظائف، والإحصاءات، والإعلانات." },
    { title: "لماذا نستخدم ملفات تعريف الارتباط؟", description1: "بعض ملفات الارتباط ضرورية لعمل الموقع بشكل صحيح، فهي تساعد في تذكّر إعداداتك وتقديم تجربة مخصصة بناءً على تفضيلاتك.", description2: "تساعدنا ملفات الارتباط أيضاً في جمع بيانات تحليلية مثل مدة الجلسة، الصفحات التي تمت زيارتها، والعمر أو الجنس، دون تتبّع هويتك الشخصية." },
    { title: "ما المعلومات التي نجمعها تحديداً؟", description1: "نجمع البيانات التي تزودنا بها عند التسجيل أو الشراء، مثل الاسم، العنوان، معلومات الاتصال، والبيانات الديموغرافية الأساسية.", description2: "كما تجمع ملفات الارتباط بيانات الاستخدام مثل الصفحات التي تمت زيارتها، مدّة الجلسة، عدد المشاهدات، والنشاط أثناء التصفح." },
    { title: "مع من نشارك معلوماتك؟", description1: "يتم مشاركة المعلومات فقط مع الشركات الشريكة لأغراض تحليلية تساعد في تحسين خدماتنا.", description2: "لا نشارك أي معلومات شخصية خارج نطاق علامتنا التجارية وشركائنا الموثوقين." },
    { title: "وسائط الموقع", description1: "نحن في skillstwins.com نمتلك كل الوسائط الموجودة على الموقع ما لم يُذكر خلاف ذلك.", description2: "جميع الصور الفوتوغرافية هي من أعمال Dina Deykun (dinadeykun.com)." },
    { title: "إفصاح المعلومات الخاصة بك", description1: "يحق لك طلب بياناتك الشخصية، سواء لتعديلها أو حذفها في حال كانت غير صحيحة أو لم تعد ترغب في الاحتفاظ بها.", description2: "يمكنك أيضاً تعطيل ملفات الارتباط من خلال إعدادات المتصفح أو استخدام أدوات مثل NAIs opt-out أو Google Analytics opt-out، لكن ذلك قد يؤثر على عمل الموقع." },
    { title: "التحديثات", description1: "قد يتم تحديث سياسة الخصوصية الخاصة بنا بشكل دوري لضمان توافقها مع التحديثات المتعلقة بالخدمة أو المتطلبات القانونية.", description2: "ستظهر جميع التغييرات مباشرة على هذه الصفحة ليتمكن المستخدمون من الاطلاع عليها في أي وقت." },
  ];

  return (
    <div>
      {policyData.map((item, index) => (
        <PolicyItem
          key={index}
          title={item.title}
          description1={item.description1}
          description2={item.description2}
        />
      ))}
    </div>
  );
}

  return (
    <div className=" container">
      <div className="policyPage flex">
        <h1 className="flex"> الخصوصية والسياسة</h1>
        <p>بياننا الشخصي، ملفات تعريف الارتباط (Cookies)</p>
      </div>
      <Terms />
    </div>
  );
}

export default PrivacyPolicy;