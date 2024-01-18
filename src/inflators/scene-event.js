import { SceneEventTool } from "../bit-components";
import { addComponent } from "bitecs";

export function createSceneEventObject(world, eid, componentProps) {
  componentProps = Object.assign({}, componentProps);
  //   console.log(componentProps);
  addComponent(world, SceneEventTool, eid);
  const finalUrl = componentProps["0"]["additionalProps"]["url"];
  SceneEventTool.sceneEventProps[eid] = APP.getSid(finalUrl);
  SceneEventTool.buttonRef[eid] = componentProps["1"].current;
  //   console.log(SceneEventTool.buttonRef[eid]);
}
