import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';
import { imageResouces } from '../../resouces/index';

class IconButton extends Component {
  static propTypes = {
    onPress: PropTypes.func,
    iconSource: PropTypes.any,
    iconSize: PropTypes.number,
    iconColor: PropTypes.string,
    iconPadding: PropTypes.number,
    buttonHeight: PropTypes.number,
    buttonWidth: PropTypes.number,
    isEnable: PropTypes.bool
  };

  static defaultProps = {
    iconSource: imageResouces.icons.back,
    iconSize: 32,
    iconColor: '#222',
    iconPadding: 5,
    buttonHeight: 48,
    buttonWidth: 48,
    isEnable: true
  };

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render = function () {
    const { buttonStyle } = styles;
    const {
      onPress,
      iconSource,
      // iconSize,
      // iconColor,
      iconPadding,
      buttonHeight,
      buttonWidth,
      isEnable
    } = this.props;
    console.log(isEnable);
    return (
      <TouchableOpacity
        style={[buttonStyle, {
          height: buttonHeight,
          width: buttonWidth
        }]}
        onPress={onPress}
        disabled={!isEnable}
      >
        <Image
          source={iconSource}
          padding={iconPadding}
        />
      </TouchableOpacity>
    );
  }
}

const styles = {
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
};

export { IconButton };
