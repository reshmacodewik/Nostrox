const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const mergedConfig = mergeConfig(defaultConfig, {
  resolver: defaultConfig.resolver,
  transformer: defaultConfig.transformer,
});

module.exports = wrapWithReanimatedMetroConfig(mergedConfig);
