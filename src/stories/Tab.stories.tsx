import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { TabList, Tabs, TabsHeader, TabsBody, TabContent } from "../components/Tabs";

const meta = {
  title: "Components/Tabs",
  component: Tabs,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultActiveTab: String
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const TabsTemplate = ({}) => (
  <Tabs defaultActiveTab="Tab1">
    <TabsHeader>
      <TabList value='Tab1'>First Tab</TabList>
      <TabList value='Tab2'>Second Tab</TabList>
      <TabList value='Tab3'>Third Tab</TabList>
    </TabsHeader>
    <TabsBody>
      <TabContent value='Tab1'>
        Tab 1
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </TabContent>
      <TabContent value='Tab2'>
        Tab 2
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </TabContent>
      <TabContent value='Tab3'>
        Tab 3
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </TabContent>
    </TabsBody>
  </Tabs>
);

export const TabsComponent = TabsTemplate.bind({});

const example = `
Tabs Complete implementation

<Tabs defaultActiveTab="Tab1">
    <TabsHeader>
      <TabList value='Tab1'>First Tab</TabList>
      <TabList value='Tab2'>Second Tab</TabList>
      <TabList value='Tab3'>Third Tab</TabList>
    </TabsHeader>
    <TabsBody>
      <TabContent value='Tab1'>
        Tab 1
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </TabContent>
      <TabContent value='Tab2'>
        Tab 2
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </TabContent>
      <TabContent value='Tab3'>
        Tab 3
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
        took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
        It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </TabContent>
    </TabsBody>
  </Tabs>

In case you want to control tabs

const defaultSelectedTab = 'Tab1';
const [selectedTab, setSelectedTab] = React.useState(defaultSelectedTab);
const handleSelectedTab = (value: string) => {
  setSelectedTab(value)
}

return (
  <>
    <Tabs defaultActiveTab="tab1" handleTabClickCb={handleSelectedTab}>
      <TabsHeader>
        <TabList value='Tab1'>First Tab</TabList>
        <TabList value='Tab2'>Second Tab</TabList>
        <TabList value='Tab3'>Third Tab</TabList>
      </TabsHeader>
    </Tabs>
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
  </>
)
`;

TabsComponent.parameters = {
  docs: {
    source: {
      code: example,
    },
  },
};