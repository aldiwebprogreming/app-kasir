import { Container } from "react-bootstrap";
import Produk from "./components/Produk";
import Hasil from "./components/Hasil";
import Listkategori from "./components/Listkategori";
import Navbarcomponent from "./components/Navbarcomponent";
import "./css/style.css";



function App() {
  return (
    <div>
      <Navbarcomponent />
      <Container>
        <div className="row mt-4">
          <div className="col-sm-2">
            <h5>List Kategori</h5>
            <hr></hr>
          </div>
          <div className="col-sm-8">
            <h5>Produk</h5>
            <hr></hr>
          </div>
          <div className="col-sm-2">
            <h5>Hasil</h5>
            <hr></hr>
          </div>

          <Produk />

        </div>
      </Container>
    </div>

  );
}

export default App;
