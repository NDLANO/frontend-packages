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

export interface FeideBaseGroup {
  id: string;
  displayName: string;
  membership: FeideMembershipType;
  type: 'fc:gogroup' | 'fc:org';
}

export interface GoGroup extends FeideBaseGroup {
  type: 'fc:gogroup';
  notBefore: string;
  notAfter: string;
  go_type: 'b' | 'u' | 'a';
  parent: string;
  go_type_displayName: string;
}

export type GoGroupType = 'basic' | 'teaching' | 'other';

export interface FeideGroupType extends FeideBaseGroup {
  type: 'fc:org';
  eduOrgLegalName: string;
  orgType: OrgType[];
  parent?: string;
  groups: Record<GoGroupType, GoGroup[]>;
}

export type FeideGroup = GoGroup | FeideGroupType;

export interface FeideUser {
  uid: string;
  displayName: string;
  eduPersonPrimaryAffiliation: string;
  mail?: string[];
}

export interface FeideUserWithGroups extends FeideUser {
  groups: FeideGroup[];
  primarySchool?: FeideGroupType;
}
