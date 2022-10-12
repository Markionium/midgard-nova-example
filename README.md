# midgard-nova-example

Packages generally do something like the following in their local package (which works great if everything is in the same package)

```
"generate": "nova-graphql-compiler --schema ../../schema.all.graphql --src ./src --watchman false"
```

But that won't work cross packages in the mono repo as it can not find the Fragments. So something like the following where a fragment comes from another package.

```ts
import { graphql } from "@nova/react";
import { emailAddressFragment } from "@1js/email-address";

export const componentQuery = graphql`
    fragment ContactProfileFragment on Person {
        defaultName {
            displayName
        }
        defaultEmailAddress {
            ...EmailAddressFragment
        }
    }

    ${emailAddressFragment}
`;

export function ContactProfile() {
    
}
```

The error I get in that case is the following

```
Writing ts
ERROR:
- Unknown fragment 'EmailAddressFragment'.

  ContactProfile.ts:6:8
  5 |   defaultEmailAddress {
  6 |     ...EmailAddressFragment
    |        ^
  7 |   }
error Command failed with exit code 100.
```

I can make it work by running the compiler on the whole `./packages` folder but that is not ideal :)

```
"generate": "nova-graphql-compiler --schema ../../schema.all.graphql --src ../ --watchman false"
```

My latest iteration adds a duplicate of the Fragment in another package. When running the generator on the whole `packages` folder the generation runs nto a duplicate definition problem.

```
Writing ts
ERROR:
Duplicate definition of 'EmailAddressFragment'.
error Command failed with exit code 100.
```
