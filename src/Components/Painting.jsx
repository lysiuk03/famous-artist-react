import "./styles.css";

const painting = {
    title: "Starry night",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/450px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    text: "Starry Night is a painting by the Dutch post-impressionist artist Vincent van Gogh, created in June 1889. This widely renowned artwork showcases van Gogh's unique and individual style of painting, reflecting his distinctive vision of the surrounding world. The sky, stars, and crescent moon move in a unified and ecstatic wave-like rhythm. The painting depicts the view from the eastern window of his room in the asylum in Saint-Rémy-de-Provence, shortly before sunrise, with the addition of an imaginary village. The artwork has been a part of the permanent collection of the Museum of Modern Art in New York since 1941, acquired through the bequest of Lillie P. Bliss."
  };

 function Painting() {
    return (

        <div className="container">
          <img className="primary-img"  src={painting.photo} alt={painting.title} />
          <div>
            <h1>{painting.title}</h1>
            <hr />
            <p>{painting.text}</p>
          </div>
        </div>
    );
  }
  export default Painting;