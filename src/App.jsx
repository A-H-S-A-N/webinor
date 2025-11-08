import './App.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import AboutPage from './pages/About-page';
import ServicesPage from './pages/services-page';
import Contact from './pages/Contact';
import Started from './pages/Started';
import WebLearn from './pages/web-learn';
import EcommLearn from './pages/ecom-learn';
import SEOLearn from './pages/Seo';
import TemplateLearn from './pages/Template-page';
import ContentLearn from './pages/Content';
function App() {
 

  return (
    <>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="about" element={<AboutPage/>} />
          <Route path="service" element={<ServicesPage/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="get-start" element={<Started/>} />
          <Route path="learn-more/web" element={<WebLearn/>} />
<Route path="learn-more/eccomerence" element={<EcommLearn/>} />
<Route path="learn-more/seo" element={<SEOLearn/>} />
<Route path="learn-more/template" element={<TemplateLearn/>} />
<Route path="learn-more/content" element={<ContentLearn/>} />

        </Route>
      </Routes>
     </>
  )
}

export default App;
