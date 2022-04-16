[ghibli](../README.md) / [Exports](../modules.md) / API

# Class: API

## Table of contents

### Constructors

- [constructor](API.md#constructor)

### Properties

- [Film](API.md#film)
- [Location](API.md#location)
- [People](API.md#people)
- [Species](API.md#species)
- [Vehicle](API.md#vehicle)

## Constructors

### constructor

• **new API**()

#### Defined in

API/handlers/index.ts:12

## Properties

### Film

• **Film**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Get` | (`limit`: `number`) => `Promise`<`Film`[]\> |
| `GetByID` | (`id`: `string`) => `Promise`<`Film`\> |

#### Defined in

API/handlers/index.ts:15

___

### Location

• **Location**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Get` | (`limit`: `number`) => `Promise`<`Location`[]\> |
| `GetByID` | (`id`: `string`) => `Promise`<`Location`\> |

#### Defined in

API/handlers/index.ts:32

___

### People

• **People**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Get` | (`limit`: `number`) => `Promise`<`People`[]\> |
| `GetByID` | (`id`: `string`) => `Promise`<`People`\> |

#### Defined in

API/handlers/index.ts:49

___

### Species

• **Species**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Get` | (`limit`: `number`) => `Promise`<`Species`[]\> |
| `GetByID` | (`id`: `string`) => `Promise`<`Species`\> |

#### Defined in

API/handlers/index.ts:66

___

### Vehicle

• **Vehicle**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `Get` | (`limit`: `number`) => `Promise`<`Vehicle`[]\> |
| `GetByID` | (`id`: `string`) => `Promise`<`Vehicle`\> |

#### Defined in

API/handlers/index.ts:83
