import React, { Component } from 'react';
import { Animated, View } from 'react-native';

class Ball extends Component {
  componentWillMount() {
    this.position = new Animated.ValueXY(0, 0);
    Animated.spring(this.position, {
      toValue: { x: 250, y: 600 }
    }).start();
  }

  render() {
    return (
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ball} />
      </Animated.View>
    );
  }
}

const styles = {
  ball: {
    borderRadius: 30,
    borderWidth: 30,
    color: 'black',
    height: 60,
    width: 60,
  },
};

export default Ball;
