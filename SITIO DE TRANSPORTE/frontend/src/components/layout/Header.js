import "../../styles/layout.css";

const Header = (props) => {
    return (
        <header>
            <div class="holder">
                <img src="img/logo.png" width="100" alt="Transporte x" />
                <h1>Transportes X</h1>
            </div>
        </header>

    );
}
export default Header;

// siempre tiene que haber un div contenedor
//o etiqueta semantica