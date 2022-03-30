import React, { useState, useEffect } from 'react'

export function EffectHooksMouse() {

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    console.log("useEffect Called");
    window.addEventListener("mousemove", logMousePosition);

    return (() => {
      console.log("Unmounte the event");
      window.removeEventListener("mousemove", logMousePosition);
    });

  }, []);

  const logMousePosition = (e) => {
    console.log("Mouse Event Call");
    setX(e.clientX);
    setY(e.clientY);
  }


  return (
    <>
      <div>EffectHooksMouse</div>
      Hook Mouse X - {x} Y - {y}
    </>
  )
}

