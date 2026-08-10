# LoyaltyApp

A React Native loyalty and rewards application built with **Expo SDK 54**, **React Native**, **TypeScript**, and **React Navigation**.

This project is a React Navigation version of the LoyaltyApp, replacing Expo Router with an explicit navigation architecture.

## Tech Stack

- React Native
- Expo SDK 54
- TypeScript
- React Navigation 7
- React Native Screens
- React Native Safe Area Context
- Expo Go

## Navigation

This project uses **React Navigation** instead of Expo Router.

The navigation structure is managed explicitly through navigators rather than file-based routing.

### project Structure

```text
LoyaltyApp/
│
├── src/
│   ├── navigation/
│   │   └── AppNavigator.tsx
│   │
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   ├── RewardsScreen.tsx
│   │   └── ProfileScreen.tsx
│   │
│   ├── components/
│   │   └── ...
│   │
│   ├── types/
│   │   └── navigation.ts
│   │
│   └── ...
│
├── assets/
│   └── ...
│
├── App.tsx
├── app.json
├── package.json
├── tsconfig.json
└── README.md
```

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```