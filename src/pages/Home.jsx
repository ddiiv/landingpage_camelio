import '../css/Home.css';

function Home () {
    return (
        <div className="container-home">
            <h1 className='title-home'>CAMELLIA NATURALS</h1>
            Carrousel
            <div className="card-container-home">
                <div className="card-home">
                    <h4>Our Company</h4>
                    <p>Camellia Naturals is a company dedicated to consulting and advising on the development of herbal products for health purposes.</p>
                </div>
                <div className="card-home">
                    <h4>Our Experience</h4>
                    <p>We have a team of experts in the use of medicinal herbs and phytotherapy.</p>
                </div>
                <div className="card-home">
                    <h4>Our Goal</h4>
                    <p>To provide specialized support and guidance to other companies or individuals in the process of creating, developing and marketing products based on medicinal plants and other natural ingredients.</p>
                </div>
            </div>
        </div>
    )
}

export default Home;