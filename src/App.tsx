import Sidebar from "./components/sidebar/Sidebar.component"
import Header from "./components/header/Header.component"
import Realtor from "./components/realtor/Realtor.component"
import Features from "./components/features/Features.component"
import Story from "./components/story/Story.component"
import Homes from "./components/homes/Homes.component"
import Gallery from "./components/gallery/Gallery.component"
import Footer from "./components/footer/Footer.component"

const App: React.FunctionComponent = () => {

  return (
    <div className="container">
      <Sidebar />
      <Header />
      <Realtor />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  )
}

export default App
