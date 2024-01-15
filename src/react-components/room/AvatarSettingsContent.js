import React from "react";
import PropTypes from "prop-types";
import { Button, AcceptButton } from "../input/Button";
import styles from "./AvatarSettingsContent.scss";
import { TextInputField } from "../input/TextInputField";
import { Column } from "../layout/Column";
import { FormattedMessage } from "react-intl";

export function AvatarSettingsContent({
  displayName,
  pronouns,
  displayNameInputRef,
  pronounsInputRef,
  disableDisplayNameInput,
  onChangeDisplayName,
  onChangePronouns,
  avatarPreview,
  displayNamePattern,
  pronounsPattern,
  onChangeAvatar,
  ...rest
}) {
  return (
    <Column as="form" className={styles.content} {...rest}>
      <TextInputField
        disabled={true}
        // label={<FormattedMessage id="avatar-settings-content.display-name-label" defaultMessage="Display Name" />}
        value={displayName}
        pattern={displayNamePattern}
        spellCheck="false"
        required
        onChange={onChangeDisplayName}
        description={
          <FormattedMessage
            id="avatar-settings-content.display-name-description"
            defaultMessage="Your Name that other see you as"
          />
        }
        ref={displayNameInputRef}
      />
      {/* <TextInputField
        label={<FormattedMessage id="avatar-settings-content.pronouns-label" defaultMessage="User" />}
        value={pronouns}
        pattern={pronounsPattern}
        spellCheck="false"
        onChange={onChangePronouns}
        ref={pronounsInputRef}
        disabled={true}
      /> */}
      <h5>This is your Avatar</h5>
      <div className={styles.avatarPreviewContainer}>
        {avatarPreview || <div />}
        {/* <Button type="button" preset="basic" onClick={onChangeAvatar}>
          <FormattedMessage id="avatar-settings-content.change-avatar-button" defaultMessage="Change Avatar" />
        </Button> */}
      </div>
      <AcceptButton preset="accept" type="submit" />
    </Column>
  );
}

AvatarSettingsContent.propTypes = {
  className: PropTypes.string,
  displayName: PropTypes.string,
  pronouns: PropTypes.string,
  displayNameInputRef: PropTypes.func,
  pronounsInputRef: PropTypes.func,
  disableDisplayNameInput: PropTypes.bool,
  displayNamePattern: PropTypes.string,
  pronounsPattern: PropTypes.string,
  onChangeDisplayName: PropTypes.func,
  onChangePronouns: PropTypes.func,
  avatarPreview: PropTypes.node,
  onChangeAvatar: PropTypes.func
};
