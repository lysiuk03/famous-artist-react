import "./styles.css";

const bio = {
    title: "Vincent van Gogh",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg/330px-Vincent_van_Gogh_-_Self-Portrait_-_Google_Art_Project_%28454045%29.jpg",
    text: "Vincent Willem van Gogh (1853–1890) was a Dutch Post-Impressionist artist, a prominent figure in the history of Western art. Over a span of 10 years, he created approximately 2100 works, including 860 paintings. His pieces are characterized by vibrant colors, symbolism, and expressive brushstrokes that contributed to the foundations of modern art. Only one painting was sold during his lifetime. Born into an affluent family, van Gogh showed an interest in drawing from a young age. He worked as an art dealer but experienced depression after moving to London. Turning to religion, he served as a missionary in Belgium, later leading a life of solitude and declining health. Recognizing modern art trends, he started painting in 1881 while financially supported and corresponded with his brother, Theo. In Paris, van Gogh engaged with the artistic avant-garde before moving to Arles in 1888 to establish an artistic retreat. His art underwent a transformation, featuring brighter paintings of local landscapes, olive groves, and sunflowers. Inviting Gauguin to join him, their friendship soured after van Gogh severed part of his own ear during a confrontation. He spent time in psychiatric hospitals, including Saint-Rémy, and under the care of Dr. Paul Gachet in Auvers-sur-Oise. Van Gogh's depression persisted, and he likely shot himself on July 27, 1890, dying two days later. Posthumously, van Gogh gained recognition, his life story emblematic of misunderstood genius. His use of color and expressive style influenced avant-garde movements like the Fauves and German Expressionists. His works achieved critical and commercial success, making them among the world's most expensive paintings. The Van Gogh Museum in Amsterdam preserves his legacy with the largest collection of his paintings and drawings."
  };

 function Biography() {
    return (
     
        <div className="container">
          <img className="primary-img" src={bio.photo} alt={bio.title} />
          <div>
            <h1>{bio.title}</h1>
            <hr />
            <p>{bio.text}</p>
          </div>
        </div>
    );
  }
  export default Biography;