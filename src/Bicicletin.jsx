import { useState } from "react";
function Bicicletin() {
  const [sapo] = useState(
    "https://img.freepik.com/fotos-gratis/sapo-de-arvore-litoria-infrafrenata-em-folhas-verdes_488145-1765.jpg"
  );
  return (
    <>
      <h4>Sapin: Izazin é uma bicicletin</h4>
      <img
        src="https://img.freepik.com/fotos-gratis/sapo-de-arvore-litoria-infrafrenata-em-folhas-verdes_488145-1765.jpg"
        width="300"
      />

      <img src={sapo} alt="bicycle" width="300" />
    </>
  );
}

export default Bicicletin;
