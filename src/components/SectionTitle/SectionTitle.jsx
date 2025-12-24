import "./SectionTitle.css";

export default function SectionTitle({ subTitle, mainTitle, description }) {
  return (
    <section className="sectionTitleWrapper">
      <div className="subTitle">{subTitle}</div>
      <h1 className="mainTitle">{mainTitle}</h1>
      <p className="description">{description}</p>
    </section>
  );
}
