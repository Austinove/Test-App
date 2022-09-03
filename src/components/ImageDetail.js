import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
// import PropTypes from 'prop-types';

const ImageDetail = ({title, imageSource}) => {
  //   ImageDetail.propTypes = {
  //     title: PropTypes.string,
  //     imageSource: PropTypes.string,
  //   };
  return (
    <View style={style.viewLayout}>
      <Image source={imageSource} />
      <Text style={style.textStyle}>{title}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  textStyle: {
    fontSize: 20,
  },
  viewLayout: {},
});

export default ImageDetail;
