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

export default App;
