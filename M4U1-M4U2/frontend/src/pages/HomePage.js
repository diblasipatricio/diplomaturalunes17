import "../styles/HomePage.css"
const HomePage = (props) => {
    return (
        <main className="holder">
        <div className="homeimg">
            <img src="img/home/img01.jpg" alt="avion"/>
        </div>
        <div className="columnas">
            <div className="bienvenidos">
                <h2>Bienvenidos</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deserunt eveniet sapiente. Labore
                    consectetur, fuga sit facere repellat nisi alias velit repudiandae, ut placeat minima quibusdam
                    dolore tempore fugiat ex.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat deserunt eveniet sapiente. Labore
                    consectetur, fuga sit facere repellat nisi alias velit repudiandae, ut placeat minima quibusdam
                    dolore tempore fugiat ex.</p>
            </div>
       
        <div className="testimonios">
            <h2>Testimonios</h2>
            <div className="testimonio">
                <span class="cita">Muy bueno</span>
                <span class="autor">Jairo</span>
            </div>
        </div>
    </div>
    </main>
    );
}
export default HomePage;