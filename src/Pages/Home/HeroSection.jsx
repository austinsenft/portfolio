export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section-content">
                    <p className="section--title">Hey, I'm Austin</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section-title--color"> Full Stack</span>{" "}
                        <br /> 
                        Developer
                    </h1>
                    <p className="hero--section-description">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                    <br /> Nulla repellat, accusamus laboriosam enim explicabo velit voluptate commodi cupiditate
                    </p>
                    
                </div>
                <button className="btn btn-primary">
                    Get In Touch
                </button>

            </div>
            <div className="hero--section--img">
                <img src="./img/hero_img.png" alt="Hero Section" style={{height:500, width:550}} />
            </div>
        </section>
    )
}