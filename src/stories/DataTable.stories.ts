import type { Meta, StoryObj } from '@storybook/react';
import { movies } from "../components/DataTable/data";

import DataTableComponent from '../components/DataTable/DataTable'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'DataTable',
  component: DataTableComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
  },
} satisfies Meta<typeof DataTableComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

const tableHeaders2 = {
  title: { label: "Title", minWidth: 150, visible: true },
  year: { label: "Year", minWidth: 50, sortable: true, visible: true },
  runtime: { label: "RunTime", minWidth: 50, sortable: true, visible: true },
  director: { label: "Director", minWidth: 100, sortable: true, visible: true }
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Table: Story = {
  args: {
    title: "Data Table Example",
    tableHeaders: tableHeaders2,
    tableData: movies,
    searchEnabled:true,
    searchBy:"title",
    paginationEnabled: true,
    settingsEnabled: true
  },
};