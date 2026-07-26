import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Navigation from '@navigation';
import colors from '@tokens/Colors';
import { QueryClientProvider } from '@apiConfigs/QueryClientProvider';

function App() {

  return (
    <QueryClientProvider>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
        <SafeAreaView style={styles.container} edges={['top']}>
          <Navigation />
        </SafeAreaView>
      </SafeAreaProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

export default App;
