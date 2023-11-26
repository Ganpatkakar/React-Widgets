import React from "react";
import { CiEdit, CiFileOn, CiFolderOn, CiVideoOn } from 'react-icons/ci';
import { IoMdPeople } from 'react-icons/io';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { CgProfile } from "react-icons/cg";
import { FixedSizeList } from 'react-window';

import {
  Table,
  TableHeader,
  TableHeaderRow,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell
} from "./components/Table";
import styled from "styled-components";

const columns = [
  { columnKey: "file", label: "File", maxWidth: 150 },
  { columnKey: "author", label: "Author", maxWidth: 150 },
  { columnKey: "lastUpdated", label: "Last updated", maxWidth: 150 },
  { columnKey: "lastUpdate", label: "Last update", maxWidth: 150 },
];

const baseItems = [
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

const items = new Array(1500).fill(0).map(((_,i)=> {
  let {file, ...res} = baseItems[i % baseItems.length];
  let {label} = file;
  label = `[${i}] ${label}`
  file = {...file, label};
  return ({
    file,
    ...res,
    index: i
  })
}))

const SpanIcon = styled.span`
  margin-right: 8px;
  font-size: 18px;
  display: flex;
  align-items: center;
`

function App() {
  return (
    <>
      <h1>Hello React</h1>
      <Table
        selectionEnabled
      >
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
          <FixedSizeList
            className="List"
            height={310}
            disableWidth
            itemCount={items.length}
            itemSize={44}
          >
            {({ index, style }) => {
                const item = items[index];
                return (
                  <TableRow key={item.file.label} id={item.file.label} style={style}>
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
                )
            }}
          </FixedSizeList>
        </TableBody>
      </Table>
    </>
  );
}

export default App;
