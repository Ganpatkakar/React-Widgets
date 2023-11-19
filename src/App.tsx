import React, { useState } from "react";
import { SnakeGame } from "./components/Snake";
import { Tab, TabList } from "./components/Tabs";

function App() {
  const [selectedTab, setSelectedTab] = useState('');

  const handleSelectedTab = (value: string) => {
    setSelectedTab(value);
  }

  return (
    <div className="App">
      <h1>Hello React..!</h1>
      <TabList onTabClick={handleSelectedTab}>
        <Tab value='Tab1'>First Tab</Tab>
        <Tab value='Tab2'>Second Tab</Tab>
        <Tab value='Tab3'>Third Tab</Tab>
      </TabList>
      {
        selectedTab === 'Tab1' && (
          <>
            The HyperText Markup Language or HTML is the standard markup language 
            for documents designed to be displayed in a web browser.
          </>
        )
      }
      {
        selectedTab === 'Tab2' && (
          <>
            Cascading Style Sheets is a style sheet language used for
             describing the presentation of a document written in a markup language such as HTML or XML.
          </>
        )
      }
      {
        selectedTab === 'Tab3' && (
          <>
            JavaScript, often abbreviated as JS, is a programming language 
            that is one of the core technologies of the World Wide Web, alongside HTML and CSS.
          </>
        )
      }
    </div>
  );
}

export default App;