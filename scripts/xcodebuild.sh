xcodebuild \
  -project "ios/novelsapp.xcodeproj" \
  -scheme "novelsapp" \
  archive \
  -archivePath "./ios-build/archive/novelsapp.xcarchive"

xcodebuild \
  -allowProvisioningUpdates \
  -exportArchive \
  -archivePath "./ios-build/archive/novelsapp.xcarchive" \
  -exportPath "./ios-build/" \
  -exportOptionsPlist "./ios/build.plist"
