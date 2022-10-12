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