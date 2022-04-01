## Overview

- One user may log in to the 'Phone IP Locator' using his or her cellphone number and OTP ('Passwordless', thanks to 'SAWO' for such an excellent passwordless SDK).
- After a successful login, the user may view his or her own IP address, timezone, and ISP data, as well as their current position on the map.
- The user may also use the search box to look for an IP address or a domain name.

### Links


<!-- - Live Site URL: [Netlify]() -->

### APIs USED

- IP-Address Geo Api: [Ipify API](https://geo.ipify.org/)
- Map- [leaflet](https://leafletjs.com/)
- AUthentication- [SAWO LABS](https://sawolabs.com/)

### Development Setup

- Install all the required `node_modules`

```
    npm i or yarn
```

- First go to [Ipify](https://geo.ipify.org/) create an account for `free` and `copy` the API key.
- Then go to [SAWO](https://sawolabs.com/) register for an account by creating a new project host named as `localhost` and `copy` the `SAWO API KEY`.

- Create a `.env.dev` file in the root of the project directory. Then add

```
REACT_APP_ENV = "dev"
REACT_APP_IP_GEO_API=***your geo api key***
REACT_APP_GEO_API_PATH=https://geo.ipify.org/api/v1
REACT_APP_SAWO_API_KEY=***your dev-project sawo api***

```

- Run the `development` server by

```
npm run start:dev or yarn start:dev
```

### Production Setup

- Then go to [SAWO](https://sawolabs.com/) register for an account by creating a new project host named as `your deploy hostname` and `copy` the `SAWO API KEY`.

- Create a `.env.prod` file in the root of the project directory. Then add

```
REACT_APP_ENV = "prod"
REACT_APP_IP_GEO_API=***your geo api key***
REACT_APP_GEO_API_PATH=https://geo.ipify.org/api/v1
REACT_APP_SAWO_API_KEY=***your prod-project sawo api***

```

- Build the project by

```
    npm run build or yarn build
```

### Hosting

- Cloudflare
