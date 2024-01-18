/* eslint-disable react/prop-types */
/** @jsx createElementEntity */
import buttonSrc from "../assets/hud/button.9.png";
import { Layers } from "../camera-layers";
import { BUTTON_TYPES } from "../prefabs/button3D";
import { createElementEntity, createRef } from "../utils/jsx-entity";
import { textureLoader } from "../utils/media-utils";

const buttonTexture = textureLoader.load(buttonSrc);

// eslint-disable-next-line react/prop-types
export function Button({ text, width, height, texture = buttonTexture, type = BUTTON_TYPES.DEFAULT, ...props }) {
  const labelRef = createRef();

  return (
    <entity
      name={"Button"}
      slice9={{ size: [width, height], insets: [64, 66, 64, 66], texture }}
      cursorRaycastable
      remoteHoverTarget
      hoverButton={{ type }}
      textButton={{ labelRef }}
      singleActionButton
      layers={1 << Layers.CAMERA_LAYER_UI}
      {...props}
    >
      <entity
        ref={labelRef}
        layers={1 << Layers.CAMERA_LAYER_UI}
        text={{ value: text, color: "#000000", textAlign: "center", anchorX: "center", anchorY: "middle" }}
        position={[0, 0, 0.01]}
        name={props.name ? `${props.name} Label` : "Button Label"}
      />
    </entity>
  );
}
