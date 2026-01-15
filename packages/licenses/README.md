# @ndla/licenses

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
import { licenses, getLicenseByAbbreviation } from "@ndla/licenses";

const license = getLicenseByAbbreviation(licenses.CC_BY_NC_4, "en");

console.log(license);
//> { short: 'Free use', title: 'Attribution-NonCommercial', description: 'This license...', rights: ['by', 'sa'] }

// defaults to Norsk Bokmål (nb)
const license = getLicenseByAbbreviation(licenses.CC_BY_NC_4, "unknown-locale");
console.log(license);
//> { short: 'Fri bruk', title: 'Navngivelse-IkkeKommersiell', description: 'Denne lisensen...', rights: ['by', 'sa'] }

// returns abbreviation if license is unknown
const license = getLicenseByAbbreviation("unknown-license", "en");
console.log(license);
//> { short: 'unknown-license', title: 'unknown-license', description: 'unknown-license', rights: [] }
```

### Get license right info by abbreviation/constant

```js
import { getLicenseRightByAbbreviation, rights } from "@ndla/licenses";

const licenseRight = getLicenseRightByAbbreviation(rights.BY, "en");

console.log(licenseRight);
//> { short: 'cc', title: 'Copyright', description: 'Only the creator can derive...' }

// defaults to Norsk Bokmål (nb)
const licenseRight = getLicenseRightByAbbreviation(rights.CC, "unknown-locale");
console.log(licenseRight);
//> { short: 'cc', title: 'Copyright', description: 'Bare opphavspersonen kan bearbeide...' }

// returns abbreviation if licenseRight is unknown
const licenseRight = getLicenseRightByAbbreviation("unknown-lr", "en");
console.log(licenseRight);
//> { short: 'unknown-lr', title: 'unknown-lr', description: 'unknown-lr'}
```

### License right constants

```js
import { rights } from "@ndla/licenses";
import Icon from "./Icons";

const LicenseIcon = ({ licenseRight }) => {
  switch (licenseRight) {
    case rights.BY:
      return <Icon.LicenseBy />;
    case rights.SA:
      return <Icon.LicenseSa />;
    default:
      return undefined;
  }
};
```

**Available constants in rights object:**

| Exported name | Value           | Description              |
| ------------- | --------------- | ------------------------ |
| `BY`          | `'by'`          | Attribution              |
| `SA`          | `'sa'`          | Share-alike              |
| `NC`          | `'nc'`          | Non-commercial           |
| `ND`          | `'nd'`          | No derivative work       |
| `PD`          | `'pd'`          | Public Domain            |
| `CC0`         | `'cc0'`         | Public Domain Dedication |
| `CC`          | `'cc'`          | Creative Commons         |
| `COPYRIGHTED` | `'copyrighted'` | Copyrighted              |
| `NA`          | `'n/a'`         | Not Appliccable          |
