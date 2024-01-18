import { defineQuery, hasComponent } from "bitecs";
import { Interacted, SceneEventTool } from "../bit-components";

//returns boolean...
function clicked(eid) {
  return hasComponent(APP.world, Interacted, eid);
}
const sceneEventToolQuery = defineQuery([SceneEventTool]);

export function sceneEventButtonTool(world) {
  const scene = AFRAME.scenes[0];
  sceneEventToolQuery(world).forEach(eid => {
    if (clicked(SceneEventTool.buttonRef[eid])) {
      scene.emit("iframe_open", APP.getString(SceneEventTool.sceneEventProps[eid]));
    }
  });
}
