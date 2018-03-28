# Polymorphism

## Domain

You are writing a web app that will run in the Browser, Android, and iOS. Several map links need to be set up, some that take you to a map with a single location on it, others that open the map with directions from your current location.

### Available APIs
```
//returns the platform: web, ios, android
function platformType() {} 

function openBrowserMap(link) {}

function openAndroidMap(lat, lng) {}

function openIOSMap(link) {}
```

### Map Link Format

**Directions**

```
https://maps.apple.com/?q=DriveTime Dealership&daddr=${address},${city},${state}&dirflg=d&latLng=${lat},${lng}
```

**Location**

```
https://maps.apple.com/?q=${pinLabel} ${address}, ${city}, ${state}&latLng=${lat},${lng}
```

**Links On iOS**

Links opened on iOS need to be prefixed with `maps://` instead of `https://`.

### On Click Event

When the button is created, metadata can be attached. When the button is clicked, the metadata can be used to call the map API and open the correct map type.
