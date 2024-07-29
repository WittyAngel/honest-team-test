import React from "react";

import "./css/custom_fonts.css";
import "./css/style-parent.css";
import "./css/cc_components.min.css";
import "./css/custom.css";
import "./css/main.css";
import "./css/custom_header_13.css";
import "./css/custom_mega_menu.css";
import "./css/shortcodes.css";
import "./css/bootstrap.min.css";
import "./css/new-design-2021.css";
import "./css/custom_footer.css";
import "./css/font-awesome.min.css";
import "./css/screen.min.css";
import "./css/blocks.style.build.css";
import "./css/fontawesome-webfont.woff2";

import FooterComponent from "./components/Footer";
import HeaderComponent from "./components/Header";
import ContentComponent from "./components/Content";

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <ContentComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
