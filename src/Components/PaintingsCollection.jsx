
const imag = {
    title: "Collection of drawings",
    images: [
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Vincent_Willem_van_Gogh_007.jpg/248px-Vincent_Willem_van_Gogh_007.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Vincent_Willem_van_Gogh%2C_Dutch_-_Rain_-_Google_Art_Project.jpg/248px-Vincent_Willem_van_Gogh%2C_Dutch_-_Rain_-_Google_Art_Project.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Landscape_with_Wheat_Sheaves_and_Rising_Moon_%28F735%29.jpg/248px-Landscape_with_Wheat_Sheaves_and_Rising_Moon_%28F735%29.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Vincent_van_Gogh_-_House_at_Auvers_-_Google_Art_Project.jpg/248px-Vincent_van_Gogh_-_House_at_Auvers_-_Google_Art_Project.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Vincent_van_Gogh_-_De_roze_boomgaard_-_Google_Art_Project.jpg/248px-Vincent_van_Gogh_-_De_roze_boomgaard_-_Google_Art_Project.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Van_Gogh_-_Bl%C3%BChender_Obstgarten%2C_von_Zypressen_umgeben.jpeg/248px-Van_Gogh_-_Bl%C3%BChender_Obstgarten%2C_von_Zypressen_umgeben.jpeg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vincent_Van_Gogh_0018.jpg/248px-Vincent_Van_Gogh_0018.jpg",
    ],
  };


function PaintingsCollection() {
    return (
        <div>
          <h1>{ imag.title}</h1>
          <hr />
          { imag.images.map((image, index) => (
            <img key={index} src={image} style={{ margin: '5px' }}/>
          ))}
        </div>
    );
  }

  export default PaintingsCollection;
  