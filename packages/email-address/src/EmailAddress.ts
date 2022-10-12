import { graphql } from "@nova/react";

export const emailAddressFragment = graphql`
    fragment EmailAddressFragment on PersonaEmailAddress {
        address
        displayName
    }
`;

export function Component1() {
    
}