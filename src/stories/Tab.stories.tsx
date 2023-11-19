import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tab, TabList, ITabList } from '../components/Tabs';

const meta = {
  title: 'Components/TabList',
  component: TabList,
  parameters: {
    layout: 'fullScreen',
  },
  tags: ['autodocs'],
  argTypes: {
    onTabClick: {
      description: 'Callback function on change of active tab',
      type: 'function',
      default: '(value: string) => void',
      defaultValue: '(value: string) => void',
    },
    defaultSelectedTab: {
      description: 'Default selected tab value',
      type: 'string',
      default: '',
      defaultValue: ''
    }
  },
} satisfies Meta<typeof TabList>;

export default meta;
type Story = StoryObj<typeof meta>;

const TabsTemplate = ({}) => (
  <TabList defaultSelectedTab='Tab1'>
    <Tab value='Tab1'>First Tab</Tab>
    <Tab value='Tab2'>Second Tab</Tab>
    <Tab value='Tab3'>Third Tab</Tab>
  </TabList>
);

export const TabsList = TabsTemplate.bind({});

const example = `
Only Tabs

<TabList>
  <Tab value='Tab1'>First Tab</Tab>
  <Tab value='Tab2'>Second Tab</Tab>
  <Tab value='Tab3'>Third Tab</Tab>
</TabList>

In case you want to control tabs

const defaultSelectedTab = 'Tab1';
const [selectedTab, setSelectedTab] = React.useState(defaultSelectedTab);
const handleSelectedTab = (value: string) => {
  setSelectedTab(value)
}

return (
  <>
    <TabList defaultSelectedTab={defaultSelectedTab} onTabClick={handleSelectedTab}>
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
  </>
)
`;

TabsList.parameters = {
  docs: {
    source: {
      code: example,
    },
  },
};



// export const TabListComponent: Story = {
//   args: {
//     onTabClick: () => {},
//     defaultSelectedTab: 'Tab1',
//     children: [
//       <Tab value='Tab1'>First Tab</Tab>,
//       <Tab value='Tab2'>Second Tab</Tab>,
//       <Tab value='Tab3'>Third Tab</Tab>
//     ]
//   },
// };
