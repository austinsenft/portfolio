export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'm Austin</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color"> Full Stack</span>{" "}
                        <br /> 
                        Developer
                    </h1>
                    <p className="hero--section-description">
                    Fully committed to the philosophy of life-long learning, I’m a full stack developer with a deep passion for JavaScript, React, Python, SQL and all things web development. The unique combination of creativity, logic, and technology drives my excitement and passion for all forms of development.
                    </p>
                    
                </div>
                <button className="btn btn-primary">
                    {/* Don't want clicked link to have underline or be blue */}
                <a href="mailto:austinsenft@gmail.com" style={{textDecoration: 'none', color: 'inherit'}} >Get In Touch</a>
                </button>

            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section"  />
            </div>
        </section>
    )
}