###

## JavaScript Array Methods

| Method | Kya return karta hai? |
|---|---|
| `find()` | Pehla matching element |
| `some()` | Boolean — kya koi ek element match karta hai? |
| `every()` | Boolean — kya sabhi elements match karte hain? |
| `filter()` | Saare matching elements ka array |

###


###

1. { ...user } ek shallow copy banata hai. Top-level properties copy hoti hain, lekin nested object ka reference shared rehta hai.


2. Memory ko aise imagine karo
user
name: Amit
address → shared object


copy
name: Raj
address → shared object


Shared address object
city: Noida

Outer objects alag hain, lekin nested address object same hai.

Shallow copy nested object ki alag copy nahi banata; dono objects usi nested object ko refer karte hain.

3. Interview notes

| Concept | Meaning |
|---|---|
| `Shallow copy` | Outer object/array ki copy; nested objects ke references shared rehte hain |
| `Deep copy` | Nested objects/arrays ki bhi independent copy |
| `Spread operator { ...obj }` | Shallow copy banata hai |

4. Deep copy ka ek modern JavaScript option:
   
   const copy = structuredClone(user);
###


###
1. Object Destructuring - Isse object ki properties ko variables mein extract kar sakte hain.

2. Array Destructuring - Isse Array ki values ko variables mein extract kar sakte hain.

3. Rest Operator (...)

4. Spread vs Rest Operator

Interview Notes:

| Operator | Kya karta hai? |
|---|---|
| `Spread ...` | Elements ko expand karta hai |
| `Rest ...` | Multiple elements/arguments ko collect karta hai |
	
Yaad rakhne ka shortcut:
- Spread = phailana
- Rest = baaki ko collect karna

5. Object Spread

Interview mein kya yaad rakhna hai?

- ...user existing object ki properties copy karta hai.
- age: 29 purani age: 28 value ko overwrite kar deta hai.
- city: "Kanpur" ek nayi property add karta hai.
- Original user_4 object change nahi hota.

Important: Object mein agar same property multiple times likhi ho, toh last value apply hoti hai.

###

###

- Optional Chaining (?.)
  - ?. ka matlab: Agar left side ki value null ya undefined hai, toh error throw karne ke bajay undefined return karo.


- Nullish Coalescing (??)
  - Rule: ?? right-side ki default value tab use karta hai jab left-side value null ya undefined ho.

###

## `??` vs `||` in JavaScript

| Value | `value ?? 10` | `value OR 10` |
|---|---|---|
| `0` | `0` | `10` |
| `""` | `""` | `10` |
| `false` | `false` | `10` |
| `null` | `10` | `10` |
| `undefined` | `10` | `10` |

### Key Difference

- **Nullish Coalescing (`??`):** Uses the default value only when the value is `null` or `undefined`.
- **Logical OR (`||`):** Uses the default value when the value is falsy, such as `0`, `""`, `false`, `null`, or `undefined`.
###


###

## JavaScript map() vs forEach()

- Interview notes:

| Feature | map() | forEach() |
|---|---|---|
| `Purpose` | `Elements transform karna` | `Har element par operation karna` |
| `Return value` | `Naya array` | `undefined` |
| `Original array` | `Normally unchanged` | `Normally unchanged, jab tak callback mutate na kare` |
| `Chaining` | `Transformed array par kar sakte hain` | `Directly returned array par nahi` |

- Key Difference
    - map(): Jab har element ko transform karke naya array chahiye.
    - forEach(): Jab har element par koi operation perform karna ho aur naye array ki zaroorat na ho.	

###


###

## sort() and find()

- Difference yaad rakho

    - products.sort() : Original array ka order change karta hai.
    - [...products].sort() : Naya array sort karta hai; original array ka order safe rehta hai.

- Interview point: 
    - sort() original array ko mutate/modify karta hai.

    - Spread operator (...) sirf outer array ki shallow copy banata hai; 
    andar ke product objects ab bhi shared references hain.

- Remeber these concpets
    - [...numbers] → array ki shallow copy banata hai.
    - (a, b) => a - b → ascending order mein sort karta hai.
    - Original numbers array unchanged rehta hai.

- find() aur filter()

    |Method | Return |
    |---|---|
    |`find()` |	Pehla matching element |
    |`filter()` |	Sabhi matching elements ka array |

###