import React from 'react';
import Typed from 'typed.js';
export default function TypedReactHooksDemo() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: ['build things for the web.', 'Brings ideas to life with code.'],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };

    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);

    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    };
  }, []);

  return <span style={{ whiteSpace: 'pre' }} ref={el} />;
}
