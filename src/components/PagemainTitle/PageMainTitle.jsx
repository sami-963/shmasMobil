import "./PageMainTitle.css"
export default function PageMainTitle({title, description}){
    return(
      <section className="pageMainSection container flex">
        <div className="sectionTitle flex">
          <div className="title">
            <h1>{title}</h1>
            <p>{description}</p>
          </div>
      
          <div className="heroImg flex">
            <img src="/courses-img.png" alt="الدورات" className="courses-hero-image" />
          </div>
        </div>
    </section>
    );
}