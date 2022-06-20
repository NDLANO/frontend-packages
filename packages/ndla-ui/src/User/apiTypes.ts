/**
 * Copyright (c) 2022-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

type OrgType =
  | 'higher_education'
  | 'primary_and_lower_secondary'
  | 'primary_and_lower_secondary_owner'
  | 'upper_secondary'
  | 'upper_secondary_owner';

type AffiliationType = 'member' | 'student' | 'faculty' | 'staff' | 'affiliate' | 'employee';

export interface FeideMembershipType {
  basic: 'member' | 'admin' | 'owner'; // Basic membership role of user.
  affiliation?: AffiliationType[] | AffiliationType;
  primarySchool?: boolean;
  primaryAffiliation?: AffiliationType;
  displayName?: string;
}

interface FeideBaseGroup {
  id: string;
  type: 'fc:org' | 'fc:gogroup';
  displayName: string;
  membership: FeideMembershipType;
}

export interface FeideOrg extends FeideBaseGroup {
  type: 'fc:org';
  orgType: OrgType[];
  norEduOrgNIN?: string;
  eduOrgLegalName?: string;
  mail?: string;
  parent?: string;
  public: boolean;
}

export interface FeideGoGroup extends FeideBaseGroup {
  type: 'fc:gogroup';
  notBefore: string;
  notAfter: string;
  go_type: 'b' | 'u' | 'a';
  parent: string;
  go_type_displayName: string;
  grep?: {
    displayName: string;
    code: string;
  };
}

export type FeideGroup = FeideOrg | FeideGoGroup;

interface FeideUser {
  cn: string[];
  displayName: string;
  eduPersonAffiliation: AffiliationType[] | AffiliationType;
  eduPersonPrimaryAffiliation: string;
  eduPersonPrincipalName: string;
  givenName: string[];
  mail?: string[];
  schacHomeOrganization?: string;
  sn: string[];
  uid: string[];
}

export interface FeideUserApiType extends FeideUser {
  groups: FeideGroup[];
  primarySchool?: FeideGroup;
}
