import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './styles';

class DropdownItem extends PureComponent {
  static defaultProps = {
    color: 'transparent',
    disabledColor: 'transparent',
    rippleContainerBorderRadius: 0,
    shadeBorderRadius: 0,
  };

  static propTypes = {
    index: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);

    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const { onPress, index } = this.props;

    if (typeof onPress === 'function') {
      onPress(index);
    }
  }

  render() {
    const { children } = this.props;
    return (
      <TouchableOpacity onPress={this.onPress} style={styles.container}>
        <Text>
          {children}
        </Text>
      </TouchableOpacity>
    );
  }
}

export default DropdownItem;
