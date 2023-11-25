import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CiEdit, CiFileOn, CiFolderOn, CiVideoOn } from 'react-icons/ci';
import { IoMdPeople } from 'react-icons/io';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { CgProfile } from "react-icons/cg";

import {
  Table,
  TableHeader,
  TableHeaderRow,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell
} from "../components/Table";
import styled from "styled-components";

// const meta = {
//   title: "Components/Table2",
//   component: Table,
//   parameters: {
//     layout: "padded",
//   },
//   tags: ["autodocs"],
//   argTypes: {},
// } satisfies Meta<typeof Table>;

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ margin: '1em', padding: '2em', background: '#f8f7f7' }}>
        <Story />
      </div>
    ),
  ],
};


export default meta;
type Story = StoryObj<typeof meta>;


const columns = [
  { columnKey: "file", label: "File", maxWidth: 150 },
  { columnKey: "author", label: "Author", maxWidth: 150 },
  { columnKey: "lastUpdated", label: "Last updated", maxWidth: 150 },
  { columnKey: "lastUpdate", label: "Last update", maxWidth: 150 },
];

const items = [
  {
    file: { label: "Meeting notes", icon: <CiFileOn /> },
    author: { label: "Max Mustermann", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
    lastUpdate: {
      label: "You edited this",
      icon: <CiEdit />
    },
  },
  {
    file: { label: "Thursday presentation", icon: <CiFolderOn /> },
    author: { label: "Erika Mustermann", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <CiFolderOn />
    },
  },
  {
    file: { label: "Training recording", icon: <CiVideoOn /> },
    author: { label: "John Doe", status: "away" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <CiVideoOn />
    },
  },
  {
    file: { label: "Purchase order", icon: <IoDocumentTextOutline /> },
    author: { label: "Jane Doe", status: "offline" },
    lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
    lastUpdate: {
      label: "You shared this in a Teams chat",
      icon: <IoMdPeople />
    },
  },
];

const SpanIcon = styled.span`
  margin-right: 8px;
  font-size: 18px;
  display: flex;
  align-items: center;
`


const DataTable = ({}) => (
  <Table selectionEnabled>
        <TableHeader>
          <TableHeaderRow>
            {columns.map((column) => (
              <TableHeaderCell
                key={column.columnKey}
                onClick={(event, data) => {
                  console.log("header cell click", column.columnKey)
                }}
              >
                {column.label}
              </TableHeaderCell>
            ))}
          </TableHeaderRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.file.label} id={item.file.label}>
              <TableCell>
                {item.file.icon && <SpanIcon>{item.file.icon}</SpanIcon>}
                {item.file.label}
              </TableCell>
              <TableCell>
                <SpanIcon><CgProfile /></SpanIcon>
                {item.author.label}
              </TableCell>
              <TableCell>{item.lastUpdated.label}</TableCell>
              <TableCell>
                {item.lastUpdate.icon && <SpanIcon>{item.lastUpdate.icon}</SpanIcon>}
                {item.lastUpdate.label}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
);

export const TabsList = DataTable.bind({});

const example = `
const columns = [
  { columnKey: "file", label: "File", maxWidth: 150 },
  { columnKey: "author", label: "Author", maxWidth: 150 },
  { columnKey: "lastUpdated", label: "Last updated", maxWidth: 150 },
  { columnKey: "lastUpdate", label: "Last update", maxWidth: 150 },
];

const items = [
  {
    file: { label: "Meeting notes", icon: <CiFileOn /> },
    author: { label: "Max Mustermann", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
    lastUpdate: {
      label: "You edited this",
      icon: <CiEdit />
    },
  },
  {
    file: { label: "Thursday presentation", icon: <CiFolderOn /> },
    author: { label: "Erika Mustermann", status: "busy" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <CiFolderOn />
    },
  },
  {
    file: { label: "Training recording", icon: <CiVideoOn /> },
    author: { label: "John Doe", status: "away" },
    lastUpdated: { label: "Yesterday at 1:45 PM", timestamp: 2 },
    lastUpdate: {
      label: "You recently opened this",
      icon: <CiVideoOn />
    },
  },
  {
    file: { label: "Purchase order", icon: <IoDocumentTextOutline /> },
    author: { label: "Jane Doe", status: "offline" },
    lastUpdated: { label: "Tue at 9:30 AM", timestamp: 3 },
    lastUpdate: {
      label: "You shared this in a Teams chat",
      icon: <IoMdPeople />
    },
  },
];

const SpanIcon = styled.span\`
  margin-right: 8px;
  font-size: 18px;
  display: flex;
  align-items: center;
\`


const DataTable = ({}) => (
  <Table selectionEnabled>
        <TableHeader>
          <TableHeaderRow>
            {columns.map((column) => (
              <TableHeaderCell
                key={column.columnKey}
                onClick={(event, data) => {
                  // use it for sorting data and provide updated data using App component state
                  console.log("header cell click", column.columnKey)
                }}
              >
                {column.label}
              </TableHeaderCell>
            ))}
          </TableHeaderRow>
        </TableHeader>
        <TableBody>
          {items.map((item) => (
            <TableRow key={item.file.label} id={item.file.label}>
              <TableCell>
                {item.file.icon && <SpanIcon>{item.file.icon}</SpanIcon>}
                {item.file.label}
              </TableCell>
              <TableCell>
                <SpanIcon><CgProfile /></SpanIcon>
                {item.author.label}
              </TableCell>
              <TableCell>{item.lastUpdated.label}</TableCell>
              <TableCell>
                {item.lastUpdate.icon && <SpanIcon>{item.lastUpdate.icon}</SpanIcon>}
                {item.lastUpdate.label}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
);
`;

TabsList.parameters = {
  docs: {
    source: {
      code: example,
    },
  },
};