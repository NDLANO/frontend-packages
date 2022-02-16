/**
 * Copyright (c) 2021-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import React, { useState } from 'react';
// @ts-ignore
import Button from '@ndla/button';
import { Spinner } from '@ndla/ui';

const ResourceStats = () => {
  const [isLoading, setIsLoading] = useState(false);
  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch('https://api.ndla.no/taxonomy/v1/subjects?language=nb');
    const subjectsData = await response.json();
    const subjects: any = [];
    subjectsData.forEach((subject: any) => {
      if (subject.metadata?.visible) {
        subjects[subject.path] = { name: subject.name, id: subject.id };
      }
    });

    const responseResources = await fetch('https://api.ndla.no/taxonomy/v1/resources');
    const resourcesData = await responseResources.json();

    let csvString = '"Artikkel","Fag","Artikkel-id","Fag-id"\n';

    resourcesData.forEach((resource: any) => {
      if (resource.metadata?.visible) {
        const { paths } = resource;
        paths.forEach((path: string) => {
          const pathArray = path.split('/').filter(Boolean);
          const subjectPath = `/${pathArray[0]}`;
          if (subjects[subjectPath]) {
            csvString += `"${resource.name.replaceAll('"', '""')}","${subjects[subjectPath].name.replaceAll(
              '"',
              '""',
            )}","${resource.id}","${subjects[subjectPath].id}"\n`;
          }
        });
      }
    });

    const encodedUri = 'data:text/csv;charset=utf-8,' + encodeURIComponent(csvString);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', 'NDLA_ressurser_stats.csv');
    document.body.appendChild(link);
    link.click();
    setIsLoading(false);
  };

  return <>{isLoading ? <Spinner /> : <Button onClick={fetchData}>Hent data</Button>}</>;
};

export default ResourceStats;
