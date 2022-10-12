/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
;
import { FragmentRefs as  } from "@graphitation/apollo-react-relay-duct-tape";
export type ContactProfileFragment = {
    readonly defaultName: {
        readonly displayName: string | null;
    } | null;
    readonly defaultEmailAddress: {
        readonly " $fragmentRefs": FragmentRefs<"EmailAddressFragment">;
    } | null;
    readonly " $refType": "ContactProfileFragment";
};
export type ContactProfileFragment$data = ContactProfileFragment;
export type ContactProfileFragment$key = {
    readonly " $data"?: ContactProfileFragment$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"ContactProfileFragment">;
};
