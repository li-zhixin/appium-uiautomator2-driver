import {AndroidDriver} from 'appium-android-driver';

export const newMethodMap = {
  ...AndroidDriver.newMethodMap,
  '/session/:sessionId/appium/device/get_clipboard': {
    POST: {
      command: 'getClipboard',
      payloadParams: {optional: ['contentType']},
    },
  },
  '/session/:sessionId/appium/cdp/execute': {
    POST: {
      command: 'executeCdp',
      payloadParams: {required: ["cmd", "params"]},
    },
  },
} as const;
