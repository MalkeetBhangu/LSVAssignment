import colors from '@tokens/Colors';
import React from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';

interface LoaderProps {
  visible: boolean;
}

const Loader: React.FC<LoaderProps> = ({ visible }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
        <ActivityIndicator size="large" color={colors.activeTabGreen} />
    </View>
  );
};

export default Loader;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFill,
    backgroundColor: colors.overlayDark,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  
});