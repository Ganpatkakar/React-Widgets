import React, { useReducer } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { CiEdit, CiFileOn, CiFolderOn, CiVideoOn } from 'react-icons/ci';
import { IoMdPeople } from 'react-icons/io';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { CgProfile } from "react-icons/cg";

import {
  Table,
  TableHeader,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  TableSelectionCell
} from "../components/Table";
import styled from "styled-components";
import { FixedSizeList as List } from 'react-window';


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

const items = [...baseItems];

const SpanIcon = styled.span`
  margin-right: 8px;
  font-size: 18px;
  display: flex;
  align-items: center;
`

function tableReducer(state, { type, payload }) {
  if (type === "UpdateRowSelection") {
    const { selectedRows } = state;
    if (selectedRows.has(payload)) {
      selectedRows.delete(payload);
    } else {
      selectedRows.add(payload);
    }
    return { ...state, selectedRows }
  }

  if (type === "UpdateTableHeaderSelection") {
    let { items, isHeaderSelected, selectedRows } = state;
    isHeaderSelected = !isHeaderSelected;
    if (isHeaderSelected) {
      selectedRows = new Set([...items.map(({ id }) => id)]);
    } else {
      selectedRows.clear();
    }
    return { ...state, isHeaderSelected, selectedRows }
  }
}

const DataTable = ({ }) => {
  const [state, dispatchState] = useReducer(tableReducer, {
    items: [...items.map((data) => {
      return {
        ...data,
        id: data.file.label
      }
    })],
    isHeaderSelected: false,
    selectedRows: new Set(),
  });

  const toggleAllRows = (event) => {
    event.preventDefault();
    console.log("Header selection clicked");
    dispatchState({
      type: "UpdateTableHeaderSelection",
      payload: ''
    })
  }

  const handleRowClick = (event, id) => {
    event.preventDefault();
    console.log("Table row clicked", id);
    dispatchState({
      type: "UpdateRowSelection",
      payload: id
    })
  }

  const handleRowCheckboxClick = (event, id) => {
    event.preventDefault();
    console.log("Table row clicked", id);
    dispatchState({
      type: "UpdateRowSelection",
      payload: id
    })
  }

  return (
    <>
      <Table aria-label="Table with multiselect">
        <TableHeader>
          <TableRow>
            <TableSelectionCell
              id="headerSelection"
              selected={state.isHeaderSelected}
              onClick={toggleAllRows}
            />

            <TableHeaderCell>File</TableHeaderCell>
            <TableHeaderCell>Author</TableHeaderCell>
            <TableHeaderCell>Last updated</TableHeaderCell>
            <TableHeaderCell>Last update</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {state.items.map((item) => (
            <TableRow
              key={item.file.label}
              onClick={handleRowClick}
            >
              <TableSelectionCell
                id={item.id}
                selected={state.selectedRows.has(item.id)}
                onClick={handleRowCheckboxClick}
              />
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
    </>
  );
}

export const TableList = DataTable.bind({});

const example = `
import React, { useReducer } from "react";
import { CiEdit, CiFileOn, CiFolderOn, CiVideoOn } from 'react-icons/ci';
import { IoMdPeople } from 'react-icons/io';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { CgProfile } from "react-icons/cg";
import { FixedSizeList as List } from "react-window";

import {
  Table,
  TableHeader,
  TableSelectionCell,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell
} from "./components/Table";
import styled from "styled-components";

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

const items = [...baseItems];

const SpanIcon = styled.span\`
  margin-right: 8px;
  font-size: 18px;
  display: flex;
  align-items: center;
\`

function tableReducer(state, {type, payload}) {
  if (type === "UpdateRowSelection") {
    const {selectedRows} = state;
    if (selectedRows.has(payload)) {
      selectedRows.delete(payload);
    } else {
      selectedRows.add(payload);
    }
    return {...state, selectedRows}
  }

  if (type === "UpdateTableHeaderSelection") {
    let {items, isHeaderSelected, selectedRows} = state;
    isHeaderSelected = !isHeaderSelected;
    if (isHeaderSelected) {
      selectedRows = new Set([...items.map(({id}) => id)]);
    } else {
      selectedRows.clear();
    }
    return {...state, isHeaderSelected, selectedRows}
  }
}

const DataTable = ({}) => {
  const [state, dispatchState] = useReducer(tableReducer, {
    items: [...items.map((data) => {
      return {
        ...data,
        id: data.file.label
      }
    })],
    isHeaderSelected: false,
    selectedRows: new Set(),
  });

  const toggleAllRows = (event) => {
    event.preventDefault();
    console.log("Header selection clicked");
    dispatchState({
      type: "UpdateTableHeaderSelection",
      payload: ''
    })
  }

  const handleRowClick = (event, id) => {
    event.preventDefault();
    console.log("Table row clicked", id);
    dispatchState({
      type: "UpdateRowSelection",
      payload: id
    })
  }

  const handleRowCheckboxClick = (event, id) => {
    event.preventDefault();
    console.log("Table row clicked", id);
    dispatchState({
      type: "UpdateRowSelection",
      payload: id
    })
  }
  
  return (
    <>
      <h1>Hello React</h1>
      <Table aria-label="Table with multiselect">
        <TableHeader>
          <TableRow>
            <TableSelectionCell
              id="headerSelection"
              selected={state.isHeaderSelected}
              onClick={toggleAllRows}
            />

            <TableHeaderCell>File</TableHeaderCell>
            <TableHeaderCell>Author</TableHeaderCell>
            <TableHeaderCell>Last updated</TableHeaderCell>
            <TableHeaderCell>Last update</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {state.items.map((item) => (
            <TableRow
              key={item.file.label}
              onClick={handleRowClick}
            >
              <TableSelectionCell
                id={item.id}
                selected={state.selectedRows.has(item.id)}
                onClick={handleRowCheckboxClick}
              />
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
    </>
  );
}
`;

TableList.parameters = {
  docs: {
    source: {
      code: example,
    },
  },
};

const items2 = new Array(1500).fill(0).map(((_, i) => {
  let { file, ...res } = baseItems[i % baseItems.length];
  let { label } = file;
  label = `[${i}] ${label}`
  file = { ...file, label };
  return ({
    file,
    ...res,
    index: i
  })
}))

const InfiniteLoadTable = ({ }) => {
  const [state, dispatchState] = useReducer(tableReducer, {
    items: [...items2.map((data) => {
      return {
        ...data,
        id: data.file.label
      }
    })],
    isHeaderSelected: false,
    selectedRows: new Set(),
  });

  const toggleAllRows = (event) => {
    event.preventDefault();
    console.log("Header selection clicked");
    dispatchState({
      type: "UpdateTableHeaderSelection",
      payload: ''
    })
  }

  const handleRowClick = (event, id) => {
    event.preventDefault();
    console.log("Table row clicked", id);
    dispatchState({
      type: "UpdateRowSelection",
      payload: id
    })
  }

  const handleRowCheckboxClick = (event, id) => {
    event.preventDefault();
    console.log("Table row clicked", id);
    dispatchState({
      type: "UpdateRowSelection",
      payload: id
    })
  }

  return (
    <>
      <Table aria-label="Table with multiselect">
        <TableHeader>
          <TableRow>
            <TableSelectionCell
              id="headerSelection"
              selected={state.isHeaderSelected}
              onClick={toggleAllRows}
            />

            <TableHeaderCell>File</TableHeaderCell>
            <TableHeaderCell>Author</TableHeaderCell>
            <TableHeaderCell>Last updated</TableHeaderCell>
            <TableHeaderCell>Last update</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          <List
            height={310}
            width={"100%"}
            itemCount={state?.items?.length}
            itemSize={44}
          >
            {({ index, style }) => {
              const item = state.items[index];
              return (
                <TableRow
                  key={item.file.label}
                  onClick={handleRowClick}
                  style={style}
                >
                  <TableSelectionCell
                    id={item.id}
                    selected={state.selectedRows.has(item.id)}
                    onClick={handleRowCheckboxClick}
                  />
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
            }
            }
          </List>
        </TableBody>
      </Table>
    </>
  );
}

export const InfiniteLoadTableList = InfiniteLoadTable.bind({});

const example2 = `
import React, { useReducer } from "react";
import { CiEdit, CiFileOn, CiFolderOn, CiVideoOn } from 'react-icons/ci';
import { IoMdPeople } from 'react-icons/io';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { CgProfile } from "react-icons/cg";
import { FixedSizeList as List } from "react-window";

import {
  Table,
  TableHeader,
  TableSelectionCell,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell
} from "./components/Table";
import styled from "styled-components";

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

const items2 = new Array(1500).fill(0).map(((_, i) => {
  let { file, ...res } = baseItems[i % baseItems.length];
  let { label } = file;
  label = \`[\${i}] \${label}\`
  file = { ...file, label };
  return ({
    file,
    ...res,
    index: i
  })
}))

const SpanIcon = styled.span\`
  margin-right: 8px;
  font-size: 18px;
  display: flex;
  align-items: center;
\`

function tableReducer(state, {type, payload}) {
  if (type === "UpdateRowSelection") {
    const {selectedRows} = state;
    if (selectedRows.has(payload)) {
      selectedRows.delete(payload);
    } else {
      selectedRows.add(payload);
    }
    return {...state, selectedRows}
  }

  if (type === "UpdateTableHeaderSelection") {
    let {items, isHeaderSelected, selectedRows} = state;
    isHeaderSelected = !isHeaderSelected;
    if (isHeaderSelected) {
      selectedRows = new Set([...items.map(({id}) => id)]);
    } else {
      selectedRows.clear();
    }
    return {...state, isHeaderSelected, selectedRows}
  }
}

const DataTable = ({}) => {
  const [state, dispatchState] = useReducer(tableReducer, {
    items: [...items.map((data) => {
      return {
        ...data,
        id: data.file.label
      }
    })],
    isHeaderSelected: false,
    selectedRows: new Set(),
  });

  const toggleAllRows = (event) => {
    event.preventDefault();
    console.log("Header selection clicked");
    dispatchState({
      type: "UpdateTableHeaderSelection",
      payload: ''
    })
  }

  const handleRowClick = (event, id) => {
    event.preventDefault();
    console.log("Table row clicked", id);
    dispatchState({
      type: "UpdateRowSelection",
      payload: id
    })
  }

  const handleRowCheckboxClick = (event, id) => {
    event.preventDefault();
    console.log("Table row clicked", id);
    dispatchState({
      type: "UpdateRowSelection",
      payload: id
    })
  }
  
  return (
    <Table aria-label="Table with multiselect">
      <TableHeader>
        <TableRow>
          <TableSelectionCell
            id="headerSelection"
            selected={state.isHeaderSelected}
            onClick={toggleAllRows}
          />

          <TableHeaderCell>File</TableHeaderCell>
          <TableHeaderCell>Author</TableHeaderCell>
          <TableHeaderCell>Last updated</TableHeaderCell>
          <TableHeaderCell>Last update</TableHeaderCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        <List
          height={310}
          width={"100%"}
          itemCount={state?.items?.length}
          itemSize={44}
        >
          {({ index, style }) => {
            const item = state.items[index];
            return (
              <TableRow
                key={item.file.label}
                onClick={handleRowClick}
                style={style}
              >
                <TableSelectionCell
                  id={item.id}
                  selected={state.selectedRows.has(item.id)}
                  onClick={handleRowCheckboxClick}
                />
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
            )}
          }
        </List>
      </TableBody>
    </Table>
  );
}
`;

InfiniteLoadTableList.parameters = {
  docs: {
    source: {
      code: example2,
    },
  },
};
