[lowest](README.md) / Exports

# lowest

## Table of contents

### Functions

- [assign](modules.md#assign)
- [chunk](modules.md#chunk)
- [compact](modules.md#compact)
- [drop](modules.md#drop)
- [every](modules.md#every)
- [filter](modules.md#filter)
- [find](modules.md#find)
- [flow](modules.md#flow)
- [fromPairs](modules.md#frompairs)
- [head](modules.md#head)
- [identity](modules.md#identity)
- [keys](modules.md#keys)
- [map](modules.md#map)
- [omit](modules.md#omit)
- [pick](modules.md#pick)
- [some](modules.md#some)
- [sortBy](modules.md#sortby)
- [tail](modules.md#tail)
- [take](modules.md#take)
- [toPairs](modules.md#topairs)
- [uniq](modules.md#uniq)
- [update](modules.md#update)
- [values](modules.md#values)

## Functions

### assign

▸ **assign**<A, B\>(`a`: A, `b`: B): A \| B

#### Type parameters:

Name | Type |
:------ | :------ |
`A` | AnyObject |
`B` | AnyObject |

#### Parameters:

Name | Type |
:------ | :------ |
`a` | A |
`b` | B |

**Returns:** A \| B

Defined in: [object/assign.ts:3](https://github.com/oren-hollander/lowest/blob/641fc07/src/object/assign.ts#L3)

▸ **assign**<A, B\>(`a`: A): *Func*<B, A \| B\>

#### Type parameters:

Name | Type |
:------ | :------ |
`A` | AnyObject |
`B` | AnyObject |

#### Parameters:

Name | Type |
:------ | :------ |
`a` | A |

**Returns:** *Func*<B, A \| B\>

Defined in: [object/assign.ts:4](https://github.com/oren-hollander/lowest/blob/641fc07/src/object/assign.ts#L4)

___

### chunk

▸ **chunk**<T\>(`list`: *List*<T\>, `size`: *number*): *LL*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`list` | *List*<T\> |
`size` | *number* |

**Returns:** *LL*<T\>

Defined in: [list/chunk.ts:17](https://github.com/oren-hollander/lowest/blob/641fc07/src/list/chunk.ts#L17)

▸ **chunk**<T\>(`size`: *number*): *Func*<List<T\>, LL<T\>\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`size` | *number* |

**Returns:** *Func*<List<T\>, LL<T\>\>

Defined in: [list/chunk.ts:18](https://github.com/oren-hollander/lowest/blob/641fc07/src/list/chunk.ts#L18)

___

### compact

▸ **compact**<T\>(`list`: *List*<Nilable<T\>\>): *List*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`list` | *List*<Nilable<T\>\> |

**Returns:** *List*<T\>

Defined in: [collection/compact.ts:6](https://github.com/oren-hollander/lowest/blob/641fc07/src/collection/compact.ts#L6)

▸ **compact**<T\>(`dict`: *Dictionary*<Nilable<T\>\>): *Dictionary*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`dict` | *Dictionary*<Nilable<T\>\> |

**Returns:** *Dictionary*<T\>

Defined in: [collection/compact.ts:7](https://github.com/oren-hollander/lowest/blob/641fc07/src/collection/compact.ts#L7)

___

### drop

▸ **drop**<T\>(`list`: *List*<T\>, `size`: *number*): *List*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`list` | *List*<T\> |
`size` | *number* |

**Returns:** *List*<T\>

Defined in: [list/drop.ts:13](https://github.com/oren-hollander/lowest/blob/641fc07/src/list/drop.ts#L13)

▸ **drop**<T\>(`size`: *number*): *Func*<List<T\>\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`size` | *number* |

**Returns:** *Func*<List<T\>\>

Defined in: [list/drop.ts:14](https://github.com/oren-hollander/lowest/blob/641fc07/src/list/drop.ts#L14)

___

### every

▸ **every**<T\>(`collection`: *Collection*<T\>, `p`: *Predicate*<T\>): *boolean*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`collection` | *Collection*<T\> |
`p` | *Predicate*<T\> |

**Returns:** *boolean*

Defined in: [collection/every.ts:4](https://github.com/oren-hollander/lowest/blob/641fc07/src/collection/every.ts#L4)

▸ **every**<T\>(`p`: *Predicate*<T\>): *Func*<Collection<T\>, boolean\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`p` | *Predicate*<T\> |

**Returns:** *Func*<Collection<T\>, boolean\>

Defined in: [collection/every.ts:5](https://github.com/oren-hollander/lowest/blob/641fc07/src/collection/every.ts#L5)

___

### filter

▸ **filter**<T\>(`list`: *List*<T\>, `p`: *Predicate*<T\>): *List*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`list` | *List*<T\> |
`p` | *Predicate*<T\> |

**Returns:** *List*<T\>

Defined in: [collection/filter.ts:14](https://github.com/oren-hollander/lowest/blob/641fc07/src/collection/filter.ts#L14)

▸ **filter**<T\>(`dict`: *Dictionary*<T\>, `p`: *Predicate*<T\>): *Dictionary*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`dict` | *Dictionary*<T\> |
`p` | *Predicate*<T\> |

**Returns:** *Dictionary*<T\>

Defined in: [collection/filter.ts:15](https://github.com/oren-hollander/lowest/blob/641fc07/src/collection/filter.ts#L15)

▸ **filter**<T\>(`p`: *Predicate*<T\>): *Filter*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`p` | *Predicate*<T\> |

**Returns:** *Filter*<T\>

Defined in: [collection/filter.ts:16](https://github.com/oren-hollander/lowest/blob/641fc07/src/collection/filter.ts#L16)

___

### find

▸ **find**<T\>(`list`: *List*<T\>, `p`: *Predicate*<T\>): *Maybe*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`list` | *List*<T\> |
`p` | *Predicate*<T\> |

**Returns:** *Maybe*<T\>

Defined in: [collection/find.ts:8](https://github.com/oren-hollander/lowest/blob/641fc07/src/collection/find.ts#L8)

▸ **find**<T\>(`dict`: *Dictionary*<T\>, `p`: *Predicate*<T\>): *Maybe*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`dict` | *Dictionary*<T\> |
`p` | *Predicate*<T\> |

**Returns:** *Maybe*<T\>

Defined in: [collection/find.ts:9](https://github.com/oren-hollander/lowest/blob/641fc07/src/collection/find.ts#L9)

▸ **find**<T\>(`p`: *Predicate*<T\>): *function*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`p` | *Predicate*<T\> |

**Returns:** (`collection`: *Collection*<T\>) => *Maybe*<T\>

Defined in: [collection/find.ts:10](https://github.com/oren-hollander/lowest/blob/641fc07/src/collection/find.ts#L10)

___

### flow

▸ **flow**<T, TX1, TX2, TX3, TX4, TX5\>(`values`: T, `f1`: *Func*<T, TX1\>, `tx2`: *Func*<TX1, TX2\>, `tx3`: *Func*<TX2, TX3\>, `tx4`: *Func*<TX3, TX4\>, `tx5`: *Func*<TX4, TX5\>): TX5

#### Type parameters:

Name |
:------ |
`T` |
`TX1` |
`TX2` |
`TX3` |
`TX4` |
`TX5` |

#### Parameters:

Name | Type |
:------ | :------ |
`values` | T |
`f1` | *Func*<T, TX1\> |
`tx2` | *Func*<TX1, TX2\> |
`tx3` | *Func*<TX2, TX3\> |
`tx4` | *Func*<TX3, TX4\> |
`tx5` | *Func*<TX4, TX5\> |

**Returns:** TX5

Defined in: [function/flow.ts:3](https://github.com/oren-hollander/lowest/blob/641fc07/src/function/flow.ts#L3)

▸ **flow**<T, TX1, TX2, TX3, TX4\>(`values`: T, `tx1`: *Func*<T, TX1\>, `tx2`: *Func*<TX1, TX2\>, `tx3`: *Func*<TX2, TX3\>, `tx4`: *Func*<TX3, TX4\>): TX4

#### Type parameters:

Name |
:------ |
`T` |
`TX1` |
`TX2` |
`TX3` |
`TX4` |

#### Parameters:

Name | Type |
:------ | :------ |
`values` | T |
`tx1` | *Func*<T, TX1\> |
`tx2` | *Func*<TX1, TX2\> |
`tx3` | *Func*<TX2, TX3\> |
`tx4` | *Func*<TX3, TX4\> |

**Returns:** TX4

Defined in: [function/flow.ts:11](https://github.com/oren-hollander/lowest/blob/641fc07/src/function/flow.ts#L11)

▸ **flow**<T, TX1, TX2, TX3\>(`values`: T, `f1`: *Func*<T, TX1\>, `tx2`: *Func*<TX1, TX2\>, `tx3`: *Func*<TX2, TX3\>): TX3

#### Type parameters:

Name |
:------ |
`T` |
`TX1` |
`TX2` |
`TX3` |

#### Parameters:

Name | Type |
:------ | :------ |
`values` | T |
`f1` | *Func*<T, TX1\> |
`tx2` | *Func*<TX1, TX2\> |
`tx3` | *Func*<TX2, TX3\> |

**Returns:** TX3

Defined in: [function/flow.ts:18](https://github.com/oren-hollander/lowest/blob/641fc07/src/function/flow.ts#L18)

▸ **flow**<T, TX1, TX2\>(`values`: T, `f1`: *Func*<T, TX1\>, `tx2`: *Func*<TX1, TX2\>): TX2

#### Type parameters:

Name |
:------ |
`T` |
`TX1` |
`TX2` |

#### Parameters:

Name | Type |
:------ | :------ |
`values` | T |
`f1` | *Func*<T, TX1\> |
`tx2` | *Func*<TX1, TX2\> |

**Returns:** TX2

Defined in: [function/flow.ts:19](https://github.com/oren-hollander/lowest/blob/641fc07/src/function/flow.ts#L19)

▸ **flow**<T, TX1\>(`values`: T, `f1`: *Func*<T, TX1\>): TX1

#### Type parameters:

Name |
:------ |
`T` |
`TX1` |

#### Parameters:

Name | Type |
:------ | :------ |
`values` | T |
`f1` | *Func*<T, TX1\> |

**Returns:** TX1

Defined in: [function/flow.ts:20](https://github.com/oren-hollander/lowest/blob/641fc07/src/function/flow.ts#L20)

___

### fromPairs

▸ `Const`**fromPairs**<T\>(`pairs`: *List*<Pair<T\>\>): *Dictionary*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`pairs` | *List*<Pair<T\>\> |

**Returns:** *Dictionary*<T\>

Defined in: [dictionary/fromPairs.ts:3](https://github.com/oren-hollander/lowest/blob/641fc07/src/dictionary/fromPairs.ts#L3)

___

### head

▸ `Const`**head**<T\>(`list`: *List*<T\>): T

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`list` | *List*<T\> |

**Returns:** T

Defined in: [list/head.ts:4](https://github.com/oren-hollander/lowest/blob/641fc07/src/list/head.ts#L4)

___

### identity

▸ `Const`**identity**<T\>(`value`: T): T

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`value` | T |

**Returns:** T

Defined in: [function/identity.ts:1](https://github.com/oren-hollander/lowest/blob/641fc07/src/function/identity.ts#L1)

___

### keys

▸ `Const`**keys**(`dict`: *Dictionary*<unknown\>): *List*<string\>

#### Parameters:

Name | Type |
:------ | :------ |
`dict` | *Dictionary*<unknown\> |

**Returns:** *List*<string\>

Defined in: [dictionary/keys.ts:7](https://github.com/oren-hollander/lowest/blob/641fc07/src/dictionary/keys.ts#L7)

___

### map

▸ **map**<I, O\>(`list`: *List*<I\>, `f`: *Func*<I, O\>): *List*<O\>

#### Type parameters:

Name | Description |
:------ | :------ |
`I` | The input type.   |
`O` | The output type.   |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`list` | *List*<I\> | The list to map over.   |
`f` | *Func*<I, O\> | The transform function.   |

**Returns:** *List*<O\>

The transformed list

Defined in: [collection/map.ts:21](https://github.com/oren-hollander/lowest/blob/641fc07/src/collection/map.ts#L21)

▸ **map**<I, O\>(`dict`: *Dictionary*<I\>, `f`: *Func*<I, O\>): *Dictionary*<O\>

#### Type parameters:

Name | Description |
:------ | :------ |
`I` | The input type.   |
`O` | The output type.   |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`dict` | *Dictionary*<I\> | The dictionary to map over.   |
`f` | *Func*<I, O\> | The transform function.   |

**Returns:** *Dictionary*<O\>

The transformed dictionary

Defined in: [collection/map.ts:30](https://github.com/oren-hollander/lowest/blob/641fc07/src/collection/map.ts#L30)

▸ **map**<I, O\>(`f`: *Func*<I, O\>): *Map*<I, O\>

#### Type parameters:

Name | Description |
:------ | :------ |
`I` | The input type.   |
`O` | The output type.   |

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`f` | *Func*<I, O\> | The transform function.   |

**Returns:** *Map*<I, O\>

The [[Map]] function that accepts the collection

Defined in: [collection/map.ts:38](https://github.com/oren-hollander/lowest/blob/641fc07/src/collection/map.ts#L38)

___

### omit

▸ **omit**<T\>(`dict`: T, `keys`: *Keys*<T\>): *Dictionary*<unknown\>

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *Dictionary*<unknown\> |

#### Parameters:

Name | Type |
:------ | :------ |
`dict` | T |
`keys` | *Keys*<T\> |

**Returns:** *Dictionary*<unknown\>

Defined in: [dictionary/omit.ts:18](https://github.com/oren-hollander/lowest/blob/641fc07/src/dictionary/omit.ts#L18)

▸ **omit**<T\>(`keys`: *Keys*<T\>): *Func*<T, Dictionary<unknown\>\>

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *Dictionary*<unknown\> |

#### Parameters:

Name | Type |
:------ | :------ |
`keys` | *Keys*<T\> |

**Returns:** *Func*<T, Dictionary<unknown\>\>

Defined in: [dictionary/omit.ts:19](https://github.com/oren-hollander/lowest/blob/641fc07/src/dictionary/omit.ts#L19)

___

### pick

▸ **pick**<T\>(`dict`: T, `keys`: *Keys*<T\>): *Dictionary*<unknown\>

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *Dictionary*<unknown\> |

#### Parameters:

Name | Type |
:------ | :------ |
`dict` | T |
`keys` | *Keys*<T\> |

**Returns:** *Dictionary*<unknown\>

Defined in: [dictionary/pick.ts:18](https://github.com/oren-hollander/lowest/blob/641fc07/src/dictionary/pick.ts#L18)

▸ **pick**<T\>(`keys`: *Keys*<T\>): *Func*<T, Dictionary<unknown\>\>

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | *Dictionary*<unknown\> |

#### Parameters:

Name | Type |
:------ | :------ |
`keys` | *Keys*<T\> |

**Returns:** *Func*<T, Dictionary<unknown\>\>

Defined in: [dictionary/pick.ts:19](https://github.com/oren-hollander/lowest/blob/641fc07/src/dictionary/pick.ts#L19)

___

### some

▸ **some**<T\>(`collection`: *Collection*<T\>, `p`: *Predicate*<T\>): *boolean*

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`collection` | *Collection*<T\> |
`p` | *Predicate*<T\> |

**Returns:** *boolean*

Defined in: [collection/some.ts:4](https://github.com/oren-hollander/lowest/blob/641fc07/src/collection/some.ts#L4)

▸ **some**<T\>(`p`: *Predicate*<T\>): *Func*<Collection<T\>, boolean\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`p` | *Predicate*<T\> |

**Returns:** *Func*<Collection<T\>, boolean\>

Defined in: [collection/some.ts:5](https://github.com/oren-hollander/lowest/blob/641fc07/src/collection/some.ts#L5)

___

### sortBy

▸ **sortBy**<T\>(`list`: *List*<T\>, `tx`: *SortValue*<T\>): *List*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`list` | *List*<T\> |
`tx` | *SortValue*<T\> |

**Returns:** *List*<T\>

Defined in: [list/sortBy.ts:15](https://github.com/oren-hollander/lowest/blob/641fc07/src/list/sortBy.ts#L15)

▸ **sortBy**<T\>(`dict`: *Dictionary*<T\>, `tx`: *SortValue*<T\>): *Dictionary*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`dict` | *Dictionary*<T\> |
`tx` | *SortValue*<T\> |

**Returns:** *Dictionary*<T\>

Defined in: [list/sortBy.ts:16](https://github.com/oren-hollander/lowest/blob/641fc07/src/list/sortBy.ts#L16)

▸ **sortBy**<T\>(`sortValue`: *SortValue*<T\>): *SortBy*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`sortValue` | *SortValue*<T\> |

**Returns:** *SortBy*<T\>

Defined in: [list/sortBy.ts:17](https://github.com/oren-hollander/lowest/blob/641fc07/src/list/sortBy.ts#L17)

___

### tail

▸ `Const`**tail**<T\>(`list`: *List*<T\>): *List*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`list` | *List*<T\> |

**Returns:** *List*<T\>

Defined in: [list/tail.ts:4](https://github.com/oren-hollander/lowest/blob/641fc07/src/list/tail.ts#L4)

___

### take

▸ **take**<T\>(`list`: readonly T[], `size`: *number*): *List*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`list` | readonly T[] |
`size` | *number* |

**Returns:** *List*<T\>

Defined in: [list/take.ts:13](https://github.com/oren-hollander/lowest/blob/641fc07/src/list/take.ts#L13)

▸ **take**<T\>(`size`: *number*): *Func*<List<T\>\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`size` | *number* |

**Returns:** *Func*<List<T\>\>

Defined in: [list/take.ts:14](https://github.com/oren-hollander/lowest/blob/641fc07/src/list/take.ts#L14)

___

### toPairs

▸ `Const`**toPairs**<T\>(`dict`: *Dictionary*<T\>): *List*<Pair<T\>\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`dict` | *Dictionary*<T\> |

**Returns:** *List*<Pair<T\>\>

Defined in: [dictionary/toPairs.ts:3](https://github.com/oren-hollander/lowest/blob/641fc07/src/dictionary/toPairs.ts#L3)

___

### uniq

▸ `Const`**uniq**<T\>(`list`: *List*<T\>): *List*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`list` | *List*<T\> |

**Returns:** *List*<T\>

Defined in: [list/uniq.ts:4](https://github.com/oren-hollander/lowest/blob/641fc07/src/list/uniq.ts#L4)

___

### update

▸ **update**<T, K\>(`obj`: T, `key`: K, `f`: *Func*<T[K]\>): T

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | AnyObject |
`K` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`obj` | T |
`key` | K |
`f` | *Func*<T[K]\> |

**Returns:** T

Defined in: [object/update.ts:8](https://github.com/oren-hollander/lowest/blob/641fc07/src/object/update.ts#L8)

▸ **update**<T, K\>(`key`: K, `f`: *Func*<T[K]\>): *function*

#### Type parameters:

Name | Type |
:------ | :------ |
`T` | AnyObject |
`K` | *string* \| *number* \| *symbol* |

#### Parameters:

Name | Type |
:------ | :------ |
`key` | K |
`f` | *Func*<T[K]\> |

**Returns:** (`obj`: T) => T

Defined in: [object/update.ts:9](https://github.com/oren-hollander/lowest/blob/641fc07/src/object/update.ts#L9)

___

### values

▸ `Const`**values**<T\>(`dict`: *Dictionary*<T\>): *List*<T\>

#### Type parameters:

Name |
:------ |
`T` |

#### Parameters:

Name | Type |
:------ | :------ |
`dict` | *Dictionary*<T\> |

**Returns:** *List*<T\>

Defined in: [dictionary/values.ts:7](https://github.com/oren-hollander/lowest/blob/641fc07/src/dictionary/values.ts#L7)
