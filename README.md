name: Build Ar Backup APK

on:
  workflow_dispatch:

permissions:
  contents: read

jobs:
  build:
    runs-on: ubuntu-latest
    timeout-minutes: 25

    steps:
      - name: Download repository files
        uses: actions/checkout@v4

      - name: Set up Java
        uses: actions/setup-java@v4
        with:
          distribution: temurin
          java-version: '17'

      - name: Set up Android
        uses: android-actions/setup-android@v3

      - name: Set up Gradle
        uses: gradle/actions/setup-gradle@v4
        with:
          gradle-version: '8.9'

      - name: Install Android build tools
        run: sdkmanager "platforms;android-35" "build-tools;35.0.0"

      - name: Unpack your project
        run: unzip Ar-Backup-app-Android-Source.zip -d source

      - name: Build test APK
        working-directory: source/Ar-Backup-app
        run: gradle --no-daemon :app:assembleDebug

      - name: Save APK for download
        uses: actions/upload-artifact@v4
        with:
          name: Ar-Backup-APK
          path: source/Ar-Backup-app/app/build/outputs/apk/debug/app-debug.apk
          if-no-files-found: error
