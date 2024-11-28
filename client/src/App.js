import { Container } from "react-bootstrap";
import { Header } from "./utils/components/Header";
import { NavbarComponent } from "./utils/components/Navbar";
import { Footer } from "./utils/components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import 'bootstrap/dist/css/bootstrap.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { CategoryPage } from "./pages/CategoryPage";
import { AuthorPage } from "./pages/AuthorPage";
import { ArticlePage } from "./pages/ArticlePage";
import { Wrapper } from "./utils/components/Wrapper";

function App() {
  return (
    <Container>
      <Header />
      <BrowserRouter >
        <NavbarComponent />
        <Wrapper>
          <Routes >
            <Route index element={<Home />} />
            <Route path="/category/:id" element={<CategoryPage />} />
            <Route path="/author/:id" element={<AuthorPage />} />
            <Route path="/article/:id" element={<ArticlePage />} />
            {/* <Route path="*" element={<NoPage />} /> */}
          </Routes>

        </Wrapper>

      </BrowserRouter>

      <Footer />
    </Container>
  );
}

export default App;
library.add(fab, fas, far)