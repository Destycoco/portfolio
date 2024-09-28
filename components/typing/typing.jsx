'use client';

import { useEffect, useState } from 'react';

const Typed = ({ text, speed, delay = 10 }) => {
  const [displayText, setDisplayText] = useState('');
  const [index, setIndex] = useState(0);
  const [isVisisble, setIsVisible] = useState(false);

  useEffect(() => {
    const showText = setTimeout(() => {
      setIsVisible(true);
    }, [delay]);
    return () => clearTimeout(showText);
  }, []);
  useEffect(() => {
    if (index < text.length && isVisisble) {
      const fastType = setTimeout(() => {
        setDisplayText((prev) => prev + text[index]);
        setIndex((prev) => prev + 1);
      }, [speed]);
      return () => clearTimeout(fastType);
    }
  }, [index, displayText, speed, isVisisble]);

  return <div>{displayText}</div>;
};

export default Typed;
