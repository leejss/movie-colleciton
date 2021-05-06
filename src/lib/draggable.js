export const draggable = (ref, document = window.document) => {
  let pos = {
    x: 0,
    left: 0,
  };
  const onMouseDown = (e) => {
    pos = {
      left: ref.current.scrollLeft,
      //   top: ref.current.scrollTop,
      x: e.clientX,
      //   y: e.clientY,
    };

    document.addEventListener("mousemove", onMousemove);
    document.addEventListener("mouseup", onMouseup);
  };

  const onMousemove = (e) => {
    const dx = e.clientX - pos.x;

    // const dy = e.clientY - pos.y;
    // ref.current.scrollTop = pos.top - dy;

    ref.current.scrollLeft = pos.left - dx;
  };

  const onMouseup = (e) => {
    document.removeEventListener("mousemove", onMousemove);
    document.removeEventListener("mouseup", onMouseup);
  };

  return ref.current.addEventListener("mousedown", onMouseDown);
};
