// TypedText.js
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
"Welcome to GoalMaster, the ultimate tool for tracking and achieving your goals."],
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
    };

    // elRef refers to the <span> in the render method
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, []);

  return (
    <div className="wrap">
      <span style={{ whiteSpace: 'normal' }} ref={el} />
    </div>
  );
}

export default TypedText;
