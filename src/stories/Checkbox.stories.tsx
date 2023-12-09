import React, { useReducer } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import Checkbox from "../components/CheckBox/checkbox";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {},
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checked = () => {
  const [checked, setChecked] = React.useState(true);

  return (
    <Checkbox
      name="abc"
      checked={checked}
      handleClick={(event, data) => setChecked(data)}
      label="Checked"
    />
  );
};

export const MultiCheckBoxWithParentControl = () => {
  const [option1, setOption1] = React.useState(false);
  const [option2, setOption2] = React.useState(true);
  const [option3, setOption3] = React.useState(false);

  return (
    <>
      <Checkbox
        name="abc"
        checked={
          option1 && option2 && option3
            ? true
            : !(option1 || option2 || option3)
            ? false
            : "mixed"
        }
        handleClick={(data) => {
          setOption1(!!data);
          setOption2(!!data);
          setOption3(!!data);
        }}
        label="All options"
      />

      <Checkbox
        name="abc"
        checked={option1}
        handleClick={() => setOption1((checked) => !checked)}
        label="Option 1"
      />
      <Checkbox
        name="abc"
        checked={option2}
        handleClick={() => setOption2((checked) => !checked)}
        label="Option 2"
      />
      <Checkbox
        name="abc"
        checked={option3}
        handleClick={() => setOption3((checked) => !checked)}
        label="Option 3"
      />
    </>
  );
};

const level3Groups = [
  {
    name: "level3Check1",
    checked: false,
    label: "level 3 checkbox 1",
  },
  {
    name: "level3Check2",
    checked: false,
    label: "level 3 checkbox 2",
  },
];

const group1 = [
  {
    name: "group1check1",
    checked: false,
    label: "group 1 checkbox 1",
    groups: level3Groups,
  },
  {
    name: "group1check2",
    checked: false,
    label: "group 1 checkbox 2",
  },
  {
    name: "group1check3",
    checked: false,
    label: "group 1 checkbox 3",
  },
];

const group2 = [
  {
    name: "group2check1",
    checked: false,
    label: "group 2 checkbox 1",
  },
  {
    name: "group2check2",
    checked: false,
    label: "group 2 checkbox 2",
  },
  {
    name: "group2check3",
    checked: false,
    label: "group 2 checkbox 3",
  },
];

const group3 = [
  {
    name: "group3check1",
    checked: false,
    label: "group 3 checkbox 1",
  },
  {
    name: "group3check2",
    checked: false,
    label: "group 3 checkbox 2",
  },
  {
    name: "group3check3",
    checked: false,
    label: "group 3 checkbox 3",
  },
];

const initialState = {
  name: "CheckBoxesGroups",
  checked: false,
  label: "Parent control checkbox",

  groups: [
    {
      name: "CheckBoxesGroups1",
      checked: false,
      label: "Check Boxex Group 1",
      groups: group1,
    },
    {
      name: "CheckBoxesGroups2",
      checked: false,
      label: "Check Boxex Group 2",
      groups: group2,
    },
    {
      name: "CheckBoxesGroups3",
      checked: false,
      label: "Check Boxex Group 3",
      groups: group3,
    },
  ],
};

function updateState(state, nodeName, value) {
  let finalPath = [];
  let found = false;

  const traverse = (node, path = []) => {
    if (!node || found) {
      return;
    }
    path.push(node);
    if (node.name === nodeName) {
      finalPath = [...path];
      found = true;
      return;
    }

    const len = node?.groups?.length;
    if (len) {
      node?.groups.forEach((group) => {
        traverse(group, path);
        path.pop();
      });
    }
  };
  traverse(state);

  // navigate downwards to check all the child and subchilds of this parent
  const node = finalPath.pop();
  const checkAllChilds = (node) => {
    if (!node) return;

    node.checked = value;
    const len = node?.groups?.length;
    if (len) {
      node?.groups.forEach((group) => {
        checkAllChilds(group);
      });
    }
  };

  checkAllChilds(node);

  // navigate top ward to determine parents needs to be checked true or in mixed condition
  finalPath.reverse();
  finalPath.forEach((node) => {
    let checked;
    const len = node?.groups?.length;
    if (len) {
      let checkedLen = 0;
      let mixed = 0;
      node?.groups.forEach((group) => {
        if (group.checked === true) {
          checkedLen++;
        }
        if (group.checked === "mixed") {
          mixed++;
        }
      });
      if (checkedLen === len) {
        checked = true;
      } else if (checkedLen > 0 || mixed > 0) {
        checked = "mixed";
      } else if (checkedLen === 0) {
        checked = false;
      }
    }
    node.checked = checked;
  });

  return state;
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "updateCheckBoxes":
      const { value, name } = payload;
      state = updateState(state, name, value);
      return { ...state };

    default:
      return state;
  }
};

function CheckBoxesWithGroup(props: any) {
  const { state, handleCheckBox } = props;
  const { label, name, disabled = false } = state;
  let { checked } = state;

  return (
    <div key={name}>
      <Checkbox
        checked={checked}
        label={label}
        name={name}
        disabled={disabled}
        handleClick={(event, value) => handleCheckBox(value, name)}
      />
      <ul>
        {state?.groups?.map((group) => {
          return CheckBoxesWithGroup({ state: group, handleCheckBox });
        })}
      </ul>
    </div>
  );
}

const MultiLevelCheckBoxesCode = () => {
  const [state, dispatchState] = React.useReducer(reducer, initialState);

  const handleCheckBox = (value, name) => {
    dispatchState({
      type: "updateCheckBoxes",
      payload: {
        value,
        name,
      },
    });
  };

  return <CheckBoxesWithGroup state={state} handleCheckBox={handleCheckBox} />;
};

export const MultiLevelCheckBoxes = MultiLevelCheckBoxesCode.bind({});

const example = `
// import React, { useReducer, useState } from "react";
//import Checkbox from "./components/Checkbox";

const level3Groups = [
  {
    name: 'level3Check1',
    checked: false,
    label: "level 3 checkbox 1"
  },
  {
    name: 'level3Check2',
    checked: false,
    label: "level 3 checkbox 2"
  }
]

const group1 = [
  {
    name: 'group1check1',
    checked: false,
    label: "group 1 checkbox 1",
    groups: level3Groups
  },
  {
    name: 'group1check2',
    checked: false,
    label: "group 1 checkbox 2"
  },
  {
    name: 'group1check3',
    checked: false,
    label: "group 1 checkbox 3"
  }
];

const group2 = [
  {
    name: 'group2check1',
    checked: false,
    label: "group 2 checkbox 1"
  },
  {
    name: 'group2check2',
    checked: false,
    label: "group 2 checkbox 2"
  },
  {
    name: 'group2check3',
    checked: false,
    label: "group 2 checkbox 3"
  }
];

const group3 = [
  {
    name: 'group3check1',
    checked: false,
    label: "group 3 checkbox 1"
  },
  {
    name: 'group3check2',
    checked: false,
    label: "group 3 checkbox 2"
  },
  {
    name: 'group3check3',
    checked: false,
    label: "group 3 checkbox 3"
  }
];

const initialState = {
  name: 'CheckBoxesGroups',
  checked: false,
  label: "Parent control checkbox",

  groups: [
    {
      name: 'CheckBoxesGroups1',
      checked: false,
      label: "Check Boxex Group 1",
      groups: group1
    },
    {
      name: 'CheckBoxesGroups2',
      checked: false,
      label: "Check Boxex Group 2",
      groups: group2
    },
    {
      name: 'CheckBoxesGroups3',
      checked: false,
      label: "Check Boxex Group 3",
      groups: group3
    }
  ]
};

function updateState(state, nodeName, value) {
  let finalPath = [];
  let found = false;

  const traverse = (node, path = []) => {
    if (!node || found) {
      return;
    }
    path.push(node);
    if (node.name === nodeName) {
      finalPath = [...path];
      found = true;
      return;
    }

    const len = node?.groups?.length;
    if (len) {
      node?.groups.forEach((group) => {
        traverse(group, path);
        path.pop();
      })
    }
  }
  traverse(state);

  // navigate downwards to check all the child and subchilds of this parent
  const node = finalPath.pop();
  const checkAllChilds = (node) => {
    if (!node)
      return;

    node.checked = value;
    const len = node?.groups?.length;
    if (len) {
      node?.groups.forEach((group) => {
        checkAllChilds(group);
      })
    }
  }
  
  checkAllChilds(node);

  // navigate topward to determine parents needs to be checked true or in mixed condition
  finalPath.reverse();
  finalPath.forEach((node) => {
    let checked;
    const len = node?.groups?.length
    if (len) {
      let checkedLen = 0;
      let mixed = 0;
      node?.groups.forEach(group => {
        if (group.checked === true) {
          checkedLen++;
        }
        if (group.checked === 'mixed') {
          mixed++;
        }
      });
      if (checkedLen === len) {
        checked = true;
      } else if (checkedLen > 0 || mixed > 0) {
        checked = 'mixed';
      } else if (checkedLen === 0) {
        checked = false;
      }
    }
    node.checked = checked;
  });

  return state;
}

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case 'updateCheckBoxes':
      const { value, name } = payload;
      state = updateState(state, name, value);
      return { ...state };

    default:
      return state
  }
}

function CheckBoxesWithGroup(props: any) {
  const { state, handleCheckBox } = props;
  const { label, name, disabled = false } = state;
  let { checked } = state;

  return (
    <div key={name}>
      <Checkbox
        checked={checked}
        label={label}
        name={name}
        disabled={disabled}
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
`;

MultiLevelCheckBoxes.parameters = {
  docs: {
    source: {
      code: example,
    },
  },
};
