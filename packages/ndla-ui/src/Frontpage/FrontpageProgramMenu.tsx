import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { fonts, breakpoints, mq } from '@ndla/core';
import { useTranslation } from 'react-i18next';
import FrontpageProgramCard from './FrontpageProgramCard';

const FrontpageProgramMenu = ({}) => {
  return (
    <div>
      <FrontpageProgramCard
        programTitel="Helse- og oppvekstfag"
        programIMG="https://api.test.ndla.no/image-api/raw/twPSlbya.svg?width=600&ts=1680164639160"
      />
    </div>
  );
};

export default FrontpageProgramMenu;
