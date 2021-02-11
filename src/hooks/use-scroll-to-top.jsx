// eslint-disable-next-line no-unused-vars
import React, { useEffect } from "react";

function UseScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

export default UseScrollToTop;
