import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Workflow from './sections/Workflow'
import CodeExample from './sections/CodeExample'
import ContactCTA from './sections/ContactCTA'
import Footer from './sections/Footer'
import Profile from './sections/Profile'

function App() {
  const path = window.location.pathname;
  const isProfilePage = path === '/profile';

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {isProfilePage ? (
        <Profile />
      ) : (
        <>
          <Hero />
          <Services />
          <Workflow />
          <CodeExample />
          <ContactCTA />
        </>
      )}
      <Footer />
    </div>
  )
}

export default App
