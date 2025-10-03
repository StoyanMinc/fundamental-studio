import { Route, Routes } from "react-router-dom"

import Header from "./components/header/Header"
import Products from "./components/products/Products"
import Footer from "./components/footer/Footer"


function App() {

    return (
        <div className="w-full h-full flex flex-col items-center">
            <Header />
            <main className="w-full flex flex-col">
                <Routes>
                    <Route path="/" element={<Products />} />
                    {/* <Route path="/about" element={<About />} /> */}
                    {/* <Route path="/contact" element={<Contact />} /> */}
                </Routes>
            </main>
            <footer className="w-full flex flex-col">
                <Footer />
            </footer>
        </div>
    )
}

export default App
