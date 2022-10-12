import { graphql } from "@nova/react";

export const emailAddressFragment = graphql`
    fragment EmailAddressFragment on PersonaEmailAddress {
        address
    }
`;

export function EmailAddress() {
    
}