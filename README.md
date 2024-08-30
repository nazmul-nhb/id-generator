# ID Generator

A simple utility package to generate unique ID based on user preference.

## @nazmul-nhb/id-generator

`ID Generator` is a TypeScript library for generating unique ID strings with customizable options. It allows you to create IDs with optional prefixes, suffixes, timestamps, and custom separators.

## Installation

To install `ID Generator`, use npm or yarn:

```bash
npm install @nazmul-nhb/id-generator
```

or

```bash
yarn add @nazmul-nhb/id-generator
```

## Usage

Import the `generateID` function into your project and use it with various options to generate unique IDs.

```typescript
import { generateID } from "@nazmul-nhb/id-generator";
```

or

```javascript
const { generateID } = require('@nazmul-nhb/id-generator');
```

### Options

The `generateID` function accepts an optional `options` object with the following properties:

- **`prefix`** (`string`, optional): A string to prepend to the ID. Default is an empty string.
- **`suffix`** (`string`, optional): A string to append to the ID. Default is an empty string.
- **`timeStamp`** (`boolean`, optional): Whether to include the current timestamp in the ID. Default is `true`.
- **`length`** (`number`, optional): The length of the random alphanumeric string. Default is `13`.
- **`separator`** (`string`, optional): The separator to use between parts of the ID. Default is a period (`"."`).
- **`caseOption`** (`"upper" | "lower"`, optional): Specifies the case for the random alphanumeric string.

### Examples

#### Generate an ID with all default options

```typescript
const id = generateID();
// Example output: "1725026144072.8rp09zp5ewa4z"
console.log(id);
```

#### Generate an ID with a custom prefix and separator

```typescript
const id = generateID({ prefix: "ID", separator: "-" });
// Example output: "ID-1725026185691-128g0f6vdhyh5"
console.log(id);
```

#### Generate an ID without a timestamp

```typescript
const id = generateID({ timeStamp: false });
// Example output: "1xq66nqnlplu9"
console.log(id);
```

#### Generate an ID with a custom length for the random string

```typescript
const id = generateID({ length: 8 });
// Example output: "1725026316314.fkdwry5e"
console.log(id);
```

#### Generate an ID with a custom suffix

```typescript
const id = generateID({ suffix: "END" });
// Example output: "1725026349832.cl3j5he8k8sih.END"
console.log(id);
```

#### Generate an ID with a uppercase random string

```typescript
const id = generateID({ caseOption: "upper" });
// Example output: "1725026408246.33BN8WNK9VZ4Y"
console.log(id);
```

**You can use all the options at the same time!**

#### Generate an ID with all options customized

```typescript
const id = generateID({
   prefix: 'ID',
   suffix: 'END',
   timeStamp: true,
   length: 10,
   separator: '~',
   caseOption: "upper"
 });
 // Example output: "ID~1725026458372~UIH1JU9NT1~END"
console.log(id);
```

## API

### `generateID(options?: Options): string`

Generates a `unique ID` string based on the provided `options`.

**Parameters:**

- `options` (`Options`, optional): Configuration `options` for ID generation.

**Returns:**

- `string`: The generated `ID`.

## License

This project is licensed under the MIT License.

## Author

Created by [Nazmul Hassan](https://github.com/nazmul-nhb).
