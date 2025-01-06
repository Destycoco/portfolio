'use client';

import React, { useState, useEffect } from 'react';

const Typewriter = ({ writeups, delay }) => {
  const [text, setText] = useState(''); // Current text being typed
  const [index, setIndex] = useState(0); // Index of the current writeup
  const [charIndex, setCharIndex] = useState(0); // Index of the character being typed
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const showText = setTimeout(() => {
      setIsVisible(true);
    }, [delay]);
    return () => clearTimeout(showText);
  }, []);
  useEffect(() => {
    // Typing effect
    if (charIndex < writeups[index].length && isVisible) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + writeups[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100); // Typing speed (adjust as needed)

      return () => clearTimeout(timeout);
    } else {
      // Wait for 2 seconds after completing the current writeup
      const timeout = setTimeout(() => {
        setCharIndex(0); // Reset character index
        setText(''); // Clear current text
        setIndex((prev) => (prev + 1) % writeups.length); // Move to the next writeup
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [charIndex, index, writeups]);

  return <div>{text}</div>;
};

export default Typewriter;
