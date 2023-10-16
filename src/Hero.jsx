import heroImg from "./assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
            porro tempore! Delectus dolorem amet ullam quae excepturi provident
            a ratione.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
