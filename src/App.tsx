import React, { useReducer, useState } from "react";
import CheckBox from "./components/CheckBox";

const group1 = [
  {
    name: 'group1check1',
    checked: false,
    label: "first checkbox"
  },
  {
    name: 'group1check2',
    checked: false,
    label: "second checkbox"
  },
  {
    name: 'group1check3',
    checked: true,
    label: "second checkbox"
  }
];

const group2 = [
  {
    name: 'group2check1',
    checked: false,
    label: "first checkbox"
  },
  {
    name: 'group2check2',
    checked: false,
    label: "second checkbox"
  },
  {
    name: 'group2check3',
    checked: false,
    label: "second checkbox"
  }
];

const group3 = [
  {
    name: 'group3check1',
    checked: false,
    label: "first checkbox"
  },
  {
    name: 'group3check2',
    checked: false,
    label: "second checkbox"
  },
  {
    name: 'group3check3',
    checked: false,
    label: "second checkbox"
  }
];

const initialState = {
  name: 'CheckBoxesGroups',
  checked: false,
  label: "Check Boxex Group",

  groups: [
    {
      name: 'CheckBoxesGroups1',
      checked: false,
      label: "Check Boxex Group",
      groups: group1
    },
    {
      name: 'CheckBoxesGroups2',
      checked: false,
      label: "Check Boxex Group",
      groups: group2
    },
    {
      name: 'CheckBoxesGroups3',
      checked: false,
      label: "Check Boxex Group",
      groups: group3
    }
  ]
};

const FindStructure = (state, name) => {
  console.log(state, name);
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case 'updateCheckBoxes':
      const { value, name } = payload;
      const structure = FindStructure(state, name)
      return { ...state };

    default:
      return state
  }
}

function CheckBoxesWithGroup(props: any) {
  const { state, handleCheckBox } = props;
  const { label, name } = state;
  let { checked } = state;

  const len = state?.groups?.length;
  if (len) {
    let checkedLen = 0
    state?.groups.forEach(group => {
      if (group.checked) {
        checkedLen++;
      }
    });
    if (checkedLen === len) {
      checked = true;
    } else if (checked > 0) {
      checked = 'mixed';
    } else if (checked === 0) {
      checked = false;
    }
  }

  return (
    <div key={name}>
      <CheckBox
        checked={checked}
        label={label}
        name={name}
        handleClick={(value) => handleCheckBox(value, name)}
      />
      <ul>
        {
          state?.groups?.map((group) => {
            const { name } = group;
            return CheckBoxesWithGroup({ state: group, handleCheckBox });
          })
        }
      </ul>
    </div>
  )
}


function App() {

  const [state, dispatchState] = useReducer(reducer, initialState);

  const handleCheckBox = (value, name) => {
    console.log(value, name);
    dispatchState({
      type: 'updateCheckBoxes',
      payload: {
        value,
        name
      }
    })
  }

  return (
    <div className="App">
      <h1>Hello React..!</h1>
      <CheckBoxesWithGroup state={state} handleCheckBox={handleCheckBox} />
    </div>
  );
}

export default App;