# ndla-licenses

A simple library for retrieving license information by abbreviation (and locale).

## Installation

```sh
$ npm install ndla-licenses
```

## Usage

### Get license by abbreviation
```js
import getLicenseByAbbreviation from 'ndla-licenses';

const license = getLicenseByAbbreviation('by-nc', 'en');

console.log(license);
//> { short: 'Free use', title: 'Attribution-NonCommercial', description: 'This license...', rights: ['by', 'sa'] }


// defaults to Norsk Bokmål (nb)
const license = getLicenseByAbbreviation('by-nc', 'unknown-locale');
console.log(license);
//> { short: 'Fri bruk', title: 'Navngivelse-IkkeKommersiell', description: 'Denne lisensen...', rights: ['by', 'sa'] }


// returns abbreviation if license is unknown
const license = getLicenseByAbbreviation('unknown-license', 'en');
console.log(license);
//> { short: 'unknown-license', title: 'unknown-license', description: 'unknown-license', rights: [] }
```

### License right constants

```js

import React from 'react';
import { BY, SA } from 'ndla-licenses';
import Icon from './Icons';

const LicenseIcon = ({ licenseRight }) => {
  switch (licenseRight) {
    case BY: return <Icon.LicenseBy />;
    case SA: return <Icon.LicenseSa />;
    default: return undefined;
  }
};
```

**Available constants:**

| Exported name | Value | Description |
| --- | --- | --- |
| `BY` | `'by'` | Attribution |
| `SA` | `'sa'` | Share-alike |
| `NC` | `'nc'` | Non-commercial |
| `ND` | `'nd'` | No derivative work |
