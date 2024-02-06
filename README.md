## Getting Started

**Clone the Github Repository**

The repo can be found at [scouting-app-rn](https://github.com/FairportRobotics/scouting-app-rn)

**Install Dependencies**

Once the repo is cloned, open a terminal to the folder containing the source an execute the following to install all the dependencies we will need.

```
npm install
```

We only need to do this one time.

**Install the Expo CLI**

Expo is the tool used to transpile the React Code into iOS and Android.

```
npm install -g expo-cli
```

We only need to do this one time.

## Running the Project

In order to debug and see the application, we need to install the "Expo Go" app on your iOS device. The iPads will have this installed already, but if you want to test on a personal device, you will need the app.

**Run the Project**

Open a terminal to the folder containing the source and execute the following command:

```
npm expo start
```

This will load a launcher that can be used to refresh the app, connect to simulators and provides a QR code which can be used to load the application into Expo Go.

The easiest thing to do is scan the QR code and allow Expo Go to open the application. The application should open.

If there are ever any issues, shake the device to bring up the debug menu and select "Reload". This will refresh the application code on the device.

Any changes made to code should immediately be deployed and available on the device making development very nice.

## Setup

### Github

The repo is named `scouting-app-rn` and the repository name is [scouting-app-rn](https://github.com/FairportRobotics/scouting-app-rn).

### Expo

I created an Expo Dev account using

scouting@fairportrobotics.org
scouting.fairportrobotics
(same password as Apple ID for now)

I then created a new organization as this seems to be required in order to connect Expo to Github.

From the source code folder, I ran the following commands to bind the repository to Expo:

```
npm install --global eas-cli
eas init --id a90a99f4-e77c-475d-9318-74c9c62a3396
```

Once that was completed, I kicked off a build and publish with:

```
eas update
```

## Resources and Technologies

**Icons**

Using [FontAwesome](https://fontawesome.com/search?o=r&m=free) for icons as SVGs in React Native are not trivial.

**Expo**

**Axios**
https://axios-http.com/docs/intro

**SQLite Storage**
https://docs.expo.dev/versions/latest/sdk/sqlite/

## Todo

App:

- [ ] Create a better TextInput with a clear icon and use that in place of existing TextInput.
- [ ] Do we want a whole-app header?
- [N] For QR of JSON and CSV, should we use Stack navigation so the QR image modal close button just returns to the triggering location?
- [x] For Share of JSON and CSV, just call into a global function and pass the key and string content.

Match Scouting:

- [?] Header
- [ ] Better navigation UI
- [?] Retain tab visibility? Is this desirable or possible?

Match Results:

- [ ] All Upload
- [x] All Share JSON
- [ ] All Share CSV
- [ ] Match Upload
- [x] Match JSON QR
- [ ] Match CSV QR
- [x] Match Share JSON
- [ ] Match Share CSV
- [?] Retain tab visibility? Is this desirable or possible?

Pit Scouting:

- [ ] Header
- [ ] Better navigation UI
- [ ] All Upload
- [x] All Share JSON
- [ ] All Share CSV
- [ ] Scout Upload
- [x] Scout JSON QR
- [ ] Scout CSV QR
- [x] Scout Share JSON
- [ ] Scout Share CSV
- [ ] Disable share/QR buttons if the team has not been scouted.
- [ ] Change opacity on buttons where the function has been triggered.
- [?] Retain tab visibility? Is this desirable or possible?

Settings:

- [ ] Within the tab, use Drawer navigation to isolate the different features instead of listing them all on the landing screen.

Fairport Robotics Settings:

- [x] Save endpoint
- [ ] Retrieve endpoint?

The Blue Alliance Settigns:

- [x] API Key

Database:

- [x] Share
- [x] Delete data and initialize tables
- [x] Drop tables and initialize tables
