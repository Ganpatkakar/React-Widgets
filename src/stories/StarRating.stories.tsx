import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import StarRating, {IStarRatingStyles} from "../components/StarRating";


const meta: Meta<typeof StarRating> = {
  title: "Components/StarRating",
  component: StarRating,
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

const styles: IStarRatingStyles = {
  starContainer: {
    fontSize: '20px',
    fontWeight: 700
  }
}

const StarRatingComponent = ({ }) => {
  return (
    <StarRating value={1} styles={styles}/>
  );
}

export const StarRatings = StarRatingComponent.bind({});

const example = `
import React from "react";
import StarRating, {IStarRatingStyles} from "./components/StarRating";

const styles: IStarRatingStyles = {
  starContainer: {
    fontSize: '20px',
    fontWeight: 700
  }
}

function App() {
  return (
    <>
      <StarRating value={1} styles={styles}/>
    </>
  );
}
`;

StarRatings.parameters = {
  docs: {
    source: {
      code: example,
    },
  },
};


const MultipleStarsComponent = ({ }) => {
  return (
    <>
      <StarRating value={5} styles={styles}/>
      <br />
      <StarRating value={3} styles={styles}/>
    </>
  );
}

export const MultipleStarRatings = MultipleStarsComponent.bind({});

const MultipleStarRatingsExample = `
import React from "react";
import StarRating, {IStarRatingStyles} from "./components/StarRating";

const styles: IStarRatingStyles = {
  starContainer: {
    fontSize: '20px',
    fontWeight: 700
  }
}

function App() {
  return (
    <>
      <StarRating value={1} styles={styles}/>
      <br />
      <StarRating value={1} styles={styles}/>
    </>
  );
}
`;

MultipleStarRatings.parameters = {
  docs: {
    source: {
      code: MultipleStarRatingsExample,
    },
  },
};
