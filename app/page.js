import Nav from "./Components/Nav/page";
import Footer from "./Pages/Footer/page";
import Hero from "./Pages/Hero/page";


export default function Home() {
  return (
    <main className="Home min-h-screen">
      <Nav />
      <Hero />
      <Footer />
    </main>
  )
}
