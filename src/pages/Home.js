import React from "react";
import heroImage from "../assets/images/hero-image.png";

const Home = () => {
  return (
    <div>
      <div style={styles.hero}>
        <div></div>
      </div>
    </div>
  );
};

const styles = {
  hero: {
    background: `url(https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcRAtyOmP3lTutl-QOPfxOq6NWAnXenmm84X05J6xlsgJ2CBYQ_BOVX6qPXFXXXsEKXeSdGQ9EGZ8nQi1teWCgaUceEnHg)`,
    height: "50vh",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center, right",
  },
};

export default Home;
