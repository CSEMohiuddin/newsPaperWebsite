import { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";

function Frontend({children}) {

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'dark' : '' } font-poppin`}>
        <Header setDarkMode={setDarkMode} darkMode={darkMode} />
        <div>
            {children}
        </div>
        <Footer />
    </div>
  )
}

export default Frontend