import ItemListContainer from "../ItemListContainer/ItemListContainer"


const Home = () => {
    return (
        <div>
            <section id="home" className="d-flex flex-column justify-content-center align-items-start">
                <h1>To Get</h1>
            </section>
            <section id="productos">
                <ItemListContainer/ >
            </section>
        </div>
    )
}

export default Home;
