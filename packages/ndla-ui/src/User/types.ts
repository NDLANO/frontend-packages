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
type AffiliationType = 'student' | 'faculty' | 'staff' | 'affiliate' | 'employee';

export interface FeideMembershipType {
  basic: 'member' | 'admin' | 'owner'; // Basic membership role of user.
  affiliation: AffiliationType[] | AffiliationType;
  primarySchool?: boolean;
  primaryAffiliation?: AffiliationType;
  displayName?: string;
}

export interface FeideGroupType {
  id: string;
  displayName: string;
  eduOrgLegalName: string;
  membership: FeideMembershipType;
  orgType: OrgType[];
  parent?: string;
}

export interface FeideUser {
  uid: string;
  displayName: string;
  eduPersonPrimaryAffiliation: string;
  mail?: string[];
}

export interface FeideUserWithGroups extends FeideUser {
  groups: FeideGroupType[];
  primarySchool?: FeideGroupType;
}
