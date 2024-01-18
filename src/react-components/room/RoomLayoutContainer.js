import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { RoomLayout } from "../layout/RoomLayout";
import { useResizeViewport } from "./hooks/useResizeViewport";

export function RoomLayoutContainer({
  store,
  scene,
  entered,
  isEventListenerAdded,
  toggleEventListenerAdded,
  changeIframeUrl,
  toggleIframeVisibility,
  ...rest
}) {
  const viewportRef = useRef();

  useResizeViewport(viewportRef, store, scene);
  useEffect(() => {
    if (isEventListenerAdded) return;
    toggleEventListenerAdded();
    scene.addEventListener("iframe_open", function (data) {
      toggleIframeVisibility();
      console.log(data);
      changeIframeUrl(data.detail.toString());
    });
  }, []);
  return <RoomLayout entered={entered} viewportRef={viewportRef} {...rest} />;
}

RoomLayoutContainer.propTypes = {
  store: PropTypes.object.isRequired,
  entered: PropTypes.bool,
  isEventListenerAdded: PropTypes.bool,
  toggleEventListenerAdded: PropTypes.func,
  toggleIframeVisibility: PropTypes.func,
  changeIframeUrl: PropTypes.bool,
  isIframeOpen: PropTypes.bool,
  scene: PropTypes.object.isRequired
};
