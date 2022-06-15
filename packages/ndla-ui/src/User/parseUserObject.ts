import { groupBy } from 'lodash';
import { FeideGoGroup, FeideGroup, FeideOrg, FeideUserResponse } from './apiTypes';

type GoGroupType = 'basic' | 'teaching' | 'other';

const goGroupTypeMap: Record<'a' | 'b' | 'u', GoGroupType> = {
  a: 'basic',
  b: 'teaching',
  u: 'other',
};

const createGroupings = (groups: FeideGoGroup[]) => {
  return groups.reduce<Record<GoGroupType, FeideGoGroup[]>>(
    (acc, curr) => {
      const type = goGroupTypeMap[curr.go_type];
      acc[type] = acc[type].concat(curr);
      return acc;
    },
    {
      basic: [],
      teaching: [],
      other: [],
    },
  );
};

const parseOrgs = (groups: FeideGroup[]) => {
  const [roots, children] = groups.reduce<[FeideOrg[], FeideGoGroup[]]>(
    (acc, curr) => {
      if (curr.type === 'fc:org') {
        return [acc[0].concat(curr), acc[1]];
      } else {
        return [acc[0], acc[1].concat(curr)];
      }
    },
    [[], []],
  );

  const childrenByParentId = groupBy(children, (c) => c.parent);
  const rootsWithChildren = roots.map((root) => ({ ...root, children: childrenByParentId[root.id] ?? [] }));

  return rootsWithChildren.map((root) => ({
    ...root,
    children: createGroupings(root.children),
  }));
};

export const parseUserObject = (user: FeideUserResponse) => {
  const orgs = parseOrgs(user.groups);

  return {
    uid: user.uid,
    primaryAffiliation: user.eduPersonPrimaryAffiliation,
    displayName: user.displayName,
    mail: user.mail,
    organizations: orgs,
  };
};
