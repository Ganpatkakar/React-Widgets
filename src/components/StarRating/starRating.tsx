import React, { useCallback, useEffect, useRef, useState } from 'react';
import { StarRatingContainer, Star, IStarRatingStyles } from './styled';

interface IStarRating {
  value: number;
  starsCount: number;
  readOnly?: boolean;
  onClick?: (envet, rating) => void
  styles?: IStarRatingStyles;
}

type DefaultProps = Partial<IStarRating>;

const defaultProps: DefaultProps = {
  value: 0,
  starsCount: 5,
  readOnly: false,
  onClick: (event, rating) => {},
  styles: {}
}

export default function StarRating(props: IStarRating) {
  const { value, starsCount, readOnly, onClick: handleClickCallback, styles } = props;

  const ref = useRef(value);
  const [starRating, setStarRating] = useState(value);

  useEffect(() => {
    ref.current = value;
    setStarRating(value);
  }, [value]);

  // hover effect postion
  const handleMouseEnter = useCallback((event) => {
    event.preventDefault();
    if (readOnly) return;
    const target = event.target
    if (target.dataset.hasOwnProperty("value")) {
      const starValue = target.dataset.value;
      setStarRating(starValue);
    }
  }, []);

  // on hover remove remember previous postion, check if this is a read only star or editable star
  const handleMouseLeave = useCallback((event) => {
    event.preventDefault();
    if (readOnly) return;
    setStarRating(ref.current);
  }, []);

  // onClick effect
  const handleClick = useCallback((event) => {
    event.preventDefault();
    if (readOnly) return;
    const target = event.target
    if (target.dataset.hasOwnProperty("value")) {
      const starValue = target.dataset.value;
      ref.current = starValue;
      setStarRating(starValue);
      handleClickCallback(event, starValue);
    }
  }, []);

  const stars = [];
  const activeValue = Math.floor(starRating);
  for (let i = 0; i < starsCount; i++) {
    const active = i + 1<= activeValue;
    stars.push(
      <Star
        key={i} 
        data-value={i + 1} 
        $active={active}
        $styles={styles.star || {}}
      >
        &#9734;
      </Star>
    )
  }

  return (
    <StarRatingContainer
      onMouseOver={handleMouseEnter} 
      onMouseLeave={handleMouseLeave} 
      onClick={handleClick}
      $styles={styles.starContainer || {}}
    >
      {stars}
    </StarRatingContainer>
  )
}

StarRating.defaultProps = defaultProps;
