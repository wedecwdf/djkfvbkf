import './App.css'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Workflow from './sections/Workflow'
import CodeExample from './sections/CodeExample'
import ContactCTA from './sections/ContactCTA'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Workflow />
        <CodeExample />
        <ContactCTA />
      </main>
      <Footer />
    </div>
  )
}

export default App