import React from "react";
import PropTypes from "prop-types";
import { Modal } from "../modal/Modal";
import { Button } from "../input/Button";
import { ReactComponent as MicrophoneIcon } from "../icons/Microphone.svg";
import { ReactComponent as MicrophoneMutedIcon } from "../icons/MicrophoneMuted.svg";
import { ReactComponent as VolumeOffIcon } from "../icons/VolumeOff.svg";
import { ReactComponent as InfoIcon } from "../icons/Info.svg";
import styles from "./ProfileSwipeContainer.scss";
import { BackButton } from "../input/BackButton";
import { SelectInputField } from "../input/SelectInputField";
import { ToggleInput } from "../input/ToggleInput";
import { Column } from "../layout/Column";
import { Row } from "../layout/Row";
import { FormattedMessage } from "react-intl";
import { Popover } from "../popover/Popover";
import { PermissionStatus } from "../../utils/media-devices-utils";
import classNames from "classnames";
// import { Spinner } from "../misc/Spinner";

export function ProfileSwipeModal({
  toggleMapOpen,
  src,
  isIframeForMobile
  //   className,
  //   microphoneOptions,
  //   onChangeMicrophone,
  //   speakerOptions,
  //   onChangeSpeaker,
  //   isMicrophoneEnabled,
  //   onPlaySound,
  //   isMicrophoneMuted,
  //   onChangeMicrophoneMuted,
  //   onEnterRoom,
  //   onBack,
  //   permissionStatus,
  //   isAudioInputSelectAvailable,
  //   isAudioOutputSelectAvailable,
  //   micLevelBar,
  //   speakerLevelBar,
  //   ...rest
}) {
  //   alert(isIframeForMobile);
  return (
    <Column padding grow className={!isIframeForMobile ? styles.contentContainer : styles.contentContainerSmall}>
      {/* <audio controls autoPlay>
        <source src="http://demobucket-graphity.s3.amazonaws.com/only_music.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      <audio controls autoPlay>
        <source src="http://demobucket-graphity.s3.amazonaws.com/only_music.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio> */}

      <>
        <iframe
          className={!isIframeForMobile ? styles.contentContainer : styles.contentContainerSmall}
          // togglePanel={this.toggleInstructionPanel}
          src={src}
        />
        {/* <button onClick={toggleMapOpen}>
          <FormattedMessage id="yes-close" defaultMessage="Yes to Pledge" />
          <FormattedMessage id="no-close" defaultMessage="No to pledge" />
        </button> */}
      </>
      <div
        onClick={() => {
          toggleMapOpen();
        }}
        className={(styles.modalContainer, styles.iframeButton)}
      >
        <FormattedMessage id="room.iframe-button-close-now" defaultMessage="DONE" />
      </div>
    </Column>
  );
}

ProfileSwipeModal.propTypes = {
  toggleMapOpen: PropTypes.func,
  src: PropTypes.string.isRequired,
  isIframeForMobile: PropTypes.bool.isRequired
  //   className: PropTypes.string,
  //   onPlaySound: PropTypes.func,
  //   micLevelBar: PropTypes.node,
  //   speakerLevelBar: PropTypes.node,
  //   isMicrophoneEnabled: PropTypes.bool,
  //   isMicrophoneMuted: PropTypes.bool,
  //   onChangeMicrophoneMuted: PropTypes.func,
  //   microphoneOptions: PropTypes.object,
  //   onChangeMicrophone: PropTypes.func,
  //   speakerOptions: PropTypes.object,
  //   onChangeSpeaker: PropTypes.func,
  //   onEnterRoom: PropTypes.func,
  //   onBack: PropTypes.func,
  //   permissionStatus: PropTypes.string,
  //   isAudioInputSelectAvailable: PropTypes.bool,
  //   isAudioOutputSelectAvailable: PropTypes.bool
};

ProfileSwipeModal.defaultProps = {
  permissionStatus: PermissionStatus.PROMPT
  //   isIframeForMobile: false
};
