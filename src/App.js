import React from "react";
import "./App.css";
import { TinaProvider, TinaCMS } from "tinacms";
import { PageContent } from "./pageData";
function App() {
  const cms = new TinaCMS({
    sidebar: true,
    enabled: false,
  });
  return (
    <TinaProvider cms={cms}>
      <div className="App">
        <PageContent />
      </div>
    </TinaProvider>
  );
}

export default App;
