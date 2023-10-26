# ndla-licenses

A simple library for retrieving license information by abbreviation (and locale).

## Installation

```sh
yarn add @ndla/licenses
```

```sh
npm install @ndla/licenses
```

## Usage

### Get license by abbreviation

```js
import getLicenseByAbbreviation from '@ndla/licenses';

const license = getLicenseByAbbreviation('CC-BY-NC-4.0', 'en');

console.log(license);
//> { short: 'Free use', title: 'Attribution-NonCommercial', description: 'This license...', rights: ['by', 'sa'] }

// defaults to Norsk Bokmål (nb)
const license = getLicenseByAbbreviation('CC-BY-NC-4.0', 'unknown-locale');
console.log(license);
//> { short: 'Fri bruk', title: 'Navngivelse-IkkeKommersiell', description: 'Denne lisensen...', rights: ['by', 'sa'] }

// returns abbreviation if license is unknown
const license = getLicenseByAbbreviation('unknown-license', 'en');
console.log(license);
//> { short: 'unknown-license', title: 'unknown-license', description: 'unknown-license', rights: [] }
```

### Get license right info by abbreviation/constant

```js
import { getLicenseRightByAbbreviation, BY, CC } from '@ndla/licenses';

const licenseRight = getLicenseRightByAbbreviation(BY, 'en');

console.log(licenseRight);
//> { short: 'cc', title: 'Copyright', userFriendlyTitle: 'Copyright', description: 'Only the creator can derive...' }

// defaults to Norsk Bokmål (nb)
const licenseRight = getLicenseRightByAbbreviation(CC, 'unknown-locale');
console.log(licenseRight);
//> { short: 'cc', title: 'Copyright', userFriendlyTitle: 'Opphavsrett', description: 'Bare opphavspersonen kan bearbeide...' }

// returns abbreviation if licenseRight is unknown
const licenseRight = getLicenseRightByAbbreviation('unknown-lr', 'en');
console.log(licenseRight);
//> { short: 'unknown-lr', title: 'unknown-lr', userFriendlyTitle: 'unknown-lr', description: 'unknown-lr'}
```

### License right constants

```js
import { BY, SA } from '@ndla/licenses';
import Icon from './Icons';

const LicenseIcon = ({ licenseRight }) => {
  switch (licenseRight) {
    case BY:
      return <Icon.LicenseBy />;
    case SA:
      return <Icon.LicenseSa />;
    default:
      return undefined;
  }
};
```

**Available constants:**

| Exported name | Value   | Description              |
| ------------- | ------- | ------------------------ |
| `BY`          | `'by'`  | Attribution              |
| `SA`          | `'sa'`  | Share-alike              |
| `NC`          | `'nc'`  | Non-commercial           |
| `ND`          | `'nd'`  | No derivative work       |
| `PD`          | `'pd'`  | Public Domain            |
| `CC0`         | `'cc0'` | Public Domain Dedication |
| `CC`          | `'cc'`  | Copyright                |
