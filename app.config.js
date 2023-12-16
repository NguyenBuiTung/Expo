import "dotenv/config";

export default {
  "expo": {
    "name": "AppSoanHang",
    "slug": "DuAn",
    "version": "1.0.0",
    "orientation": "portrait",
    "icon": "./assets/icon.png",
    "scheme": "yourscheme",
    "userInterfaceStyle": "light",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#ffffff"
    },
    "assetBundlePatterns": ["**/*"],
    "ios": {
      "bundleIdentifier": "com.tung99.AppSoanHang",
      "supportsTablet": true,
      "infoPlist": {
        "NSCameraUsageDescription": "Allow $(PRODUCT_NAME) to access camera.",
        "NSMicrophoneUsageDescription": "Allow $(PRODUCT_NAME) to access your microphone"
      }
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#ffffff"
      },
      "permissions": ["android.permission.CAMERA"],
      "package": "com.tung99.AppSoanHang"
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "plugins": [
      [
        "expo-barcode-scanner",
        {
          "cameraPermission": "Allow $(PRODUCT_NAME) to access camera."
        }
      ]
    ],
    "extra": {
      "apiUrl": process.env.API_URL,
      // eas: {
      //   "projectId": "8cf277b0-fd4e-4650-a7d0-4441b972332e"
      // }
    }

  }
}