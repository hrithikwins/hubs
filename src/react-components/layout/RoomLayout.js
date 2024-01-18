import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./RoomLayout.scss";
import { Toolbar } from "./Toolbar";
import { FormattedMessage } from "react-intl";
import { Button } from "../home/Button";
import Store from "../../storage/store";

export function RoomLayout({
  className,
  viewportClassName,
  sidebar,
  sidebarClassName,
  toolbarLeft,
  toolbarCenter,
  toolbarRight,
  toolbarClassName,
  modal,
  viewport,
  objectFocused,
  streaming,
  viewportRef,
  ...rest
}) {
  const store = new Store();
  return (
    <div
      ref={viewportRef}
      className={classNames(styles.roomLayout, { [styles.objectFocused]: objectFocused }, className)}
      {...rest}
    >
      {/* {entered && !isIframeOpen && (
        <Button
          label={<FormattedMessage id="room.iframe-button-label" defaultMessage="Select Profiles" />}
          onClick={() => {
            toggleIFrame();
          }}
          className={(styles.modalContainer, styles.iframeButton)}
        >
          <img src="https://i.imgur.com/9bZkp7q.png" className={styles.iframeButtonImage} />
          <FormattedMessage id="room.iframe-button" defaultMessage="Select Profiles" />
        </Button>
      )} */}
      {sidebar && <div className={classNames(styles.sidebar, sidebarClassName)}>{sidebar}</div>}
      <div className={classNames(styles.modalContainer, styles.viewport)}>{modal}</div>
      {(toolbarLeft || toolbarCenter || toolbarRight) && (
        <Toolbar
          className={classNames(styles.main, styles.toolbar, toolbarClassName)}
          left={toolbarLeft}
          center={toolbarCenter}
          right={toolbarRight}
        />
      )}
      <div
        className={classNames(styles.main, styles.viewport, { [styles.streaming]: streaming }, viewportClassName)}
        ref={viewportRef}
      >
        {viewport}
      </div>
    </div>
  );
}

RoomLayout.propTypes = {
  className: PropTypes.string,
  viewportClassName: PropTypes.string,
  entered: PropTypes.bool,
  toggleIFrame: PropTypes.func,
  sidebar: PropTypes.node,
  sidebarClassName: PropTypes.string,
  toolbarLeft: PropTypes.node,
  toolbarCenter: PropTypes.node,
  toolbarRight: PropTypes.node,
  toolbarClassName: PropTypes.string,
  modal: PropTypes.node,
  viewport: PropTypes.node,
  objectFocused: PropTypes.bool,
  streaming: PropTypes.bool,
  viewportRef: PropTypes.any,
  isIframeVisible: PropTypes.bool,
  toggleIframeVisibility: PropTypes.func
};
