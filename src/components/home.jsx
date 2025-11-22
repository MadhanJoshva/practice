import { Link } from "react-router-dom";
function Home(){
    console.log("this is ony execute when it is neede");
    
    return(
        <>
        <header>
            <h1>This is madan content</h1>
            <nav>
                <a  href="#home" >Home</a>
                <a  href="#about" >About</a>
                <a  href="#contact" >Contact</a>
            </nav>
        </header>
        <main className="flex h-sull-screen">
            <section id="home" className>
                <article>
                    <h1>we are from hello tech one company</h1>
                    <p className="flex flex-wrap">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio fuga porro 
                        explicabo repudiandae, 
                        aliquid voluptate delectus sit debitis
                        et vel aperiam quia hic neque culpa! Consequatur nam eum tenetur id?</p>
                </article>
            </section>
            <section id="about">
                <article>
                    <h1>no 6th street</h1>
                </article>
            </section>
            <section id="contact">
                <article>
               <h1>
                Number: 6382344150
               </h1>
                </article>
            </section>
        </main>
        
        </>
    )
}

export default Home;