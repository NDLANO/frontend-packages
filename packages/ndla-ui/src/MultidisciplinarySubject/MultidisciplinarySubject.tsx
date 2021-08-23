import React, { ReactChildren } from 'react';

import { injectT, tType } from '@ndla/i18n';
import styled from '@emotion/styled';
import { breakpoints, fonts, mq } from '@ndla/core';
import LayoutItem, { OneColumn } from '../Layout';
import List from './List';
import { ListItemProps } from './ListItem';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledBackground = styled.div`
  width: 100%;
  background: linear-gradient(179.64deg, rgba(255, 255, 255, 0.6) 80.1%, rgba(255, 255, 255) 99.05%),
    linear-gradient(318.9deg, rgb(239, 238, 220, 0.6) 35.53%, rgb(250, 246, 235) 74.23%), rgb(221, 216, 175);

  ${mq.range({ until: breakpoints.tablet })} {
  }
  ${mq.range({ until: breakpoints.mobileWide })} {
  }
`;

const StyledLayoutWrapper = styled.div`
  margin-top: 0;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const Heading = styled.h1`
  margin: 10px 0 10px 0;
  font-size: 20px;
  line-height: 25px;
  font-weight: ${fonts.weight.bold};

  ${mq.range({ from: breakpoints.mobileWide })} {
    margin: 40px 0 22px;
    ${fonts.sizes('40px', '48px')};
  }

  ${mq.range({ from: breakpoints.desktop })} {
    margin: 50px 0 24px;
    ${fonts.sizes('52px', '65px')};
  }
`;

const InfoText = styled.div`
  max-width: 720px;
  font-size: 16px;
  line-height: 24px;
  ${mq.range({ from: breakpoints.mobileWide })} {
    font-size: 20px;
    line-height: 32px;
  }
`;

const Illustration = styled.div`
  background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='1030px' height='174px' viewBox='0 0 1030 174' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3Esvgexport-7 (3)%3C/title%3E%3Cg id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'%3E%3Cg id='svgexport-7-(3)' transform='translate(1.000000, 0.000000)'%3E%3Crect id='backgroundrect' x='0' y='0' width='994' height='165'%3E%3C/rect%3E%3Cg id='Layer-1' transform='translate(0.000000, 14.000000)'%3E%3Cpath d='M830.7,130.4 C824.9,130.4 0.3,130.8 0.3,130.8' id='svg_1' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M639.5,83.3 C639.5,83.3 632.5,101.8 635.1,107.7 C637.7,113.6 642.1,109 642.1,109 C642.1,109 641,91.6 640.9,89 C640.8,86.3 641,82.8 639.5,83.3 Z' id='svg_2' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M641.7,73.3 C641.7,73.3 637.8,75.8 638.1,78.8 C638.4,81.8 640.3,83.6 642.2,81.1 C644.2,78.6 644.1,73.7 641.7,73.3 Z' id='svg_3' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M636,109.2 C634.7,113.2 634.1,117.4 634,121.6 C633.7,129.2 634.1,130.3 634.1,130.3 C634.1,130.3 628.7,128 628.6,130.2 C628.5,131.2 634.1,130.6 634.1,130.6' id='svg_4' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M641.3,110 C641.6,113 642.3,116 643.5,118.8 C645.3,122.4 648.2,130.4 648.2,130.4 C648.2,130.4 642.8,128.3 642.8,130.3 C642.8,131.3 648.1,130.8 648.1,130.8' id='svg_5' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M638.8,84.9 C638.8,84.9 635.2,93.2 631.8,97' id='svg_6' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M639,76.5 C639.4,76.2 641.1,76.7 641.6,76.9' id='svg_7' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M619.9,95.9 C619.9,95.9 632,92.6 634.3,91.9 C636.6,91.2 646.8,88.7 651.1,87.4 C655.4,86.1 661.1,83.9 663.1,83.8 C665.1,83.6 667,83.2 668.9,82.7 L672.9,99.8 C672.9,99.8 663.7,103.8 661.6,104.1 C659.5,104.4 643.3,109.2 643.3,109.2 C643.3,109.2 624.4,114 624.4,113.6 C624.5,113.1 619.9,95.9 619.9,95.9 Z' id='svg_8' stroke='%23000000' stroke-width='0.76' fill='%23FFFFFF' fill-rule='nonzero' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cline x1='633.7' y1='97.6' x2='653.5' y2='92.8' id='svg_9' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/line%3E%3Cpath d='M629.2,105.1 C629.6,105 664.1,96 664.1,96' id='svg_10' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M640.8,84.5 C640.8,84.5 645.2,94.7 645.5,96.8 C645.8,99.5 644.7,105.3 644.7,105.3 C644.8,105.1 642.2,105.6 642.6,107 C642.9,108 644.5,106.4 644.5,106.4' id='svg_11' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M480.8,69 L494,69 C497.3,69 531.8,68.4 531.8,68.4 C531.8,68.4 555.8,69.2 555.8,68.8 C555.3,67 555,65.1 555.1,63.2 C555.4,60.6 555.8,57.4 555.8,57.4 L480.5,57.5 L480.8,69 Z' id='svg_12' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M518.9,60.9 L495.1,61 C494.1,61 492.3,61.5 492.4,63.3 C492.5,65.5 494.3,65.1 494.9,65.1 C497.4,65.2 535.1,65 541.9,65 C542,65 542.2,65 542.3,64.9 C542.4,64.8 542.6,64.8 542.7,64.7 C542.8,64.6 542.9,64.5 542.9,64.3 C543,64.2 543,64 543,63.9 C543,63.1 543.4,61.8 542.8,61.4 C541.8,60.8 537.7,61 537.7,61' id='svg_13' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M480.8,69 C480.8,69 481.9,80.2 481.3,83.1 C480.7,86 479.6,114.1 480,115.7 C480.4,117.3 480,129.8 480,129.8' id='svg_14' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M555.8,68.9 C555.8,68.9 556.1,82.2 556.1,83.5 C556.1,84.8 555.2,115.2 555.2,116.1 L555.2,129.3' id='svg_15' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M502.8,86.1 C503.9,85.7 531.7,87.2 531.7,87.2 L532.6,114.7 C532.6,114.7 520,114 515.6,114.3 C511.5,114.5 507.3,114.4 503.2,114.1 C503.2,114.1 503.6,97.4 503.6,93.9 C503.4,91.3 503.2,88.7 502.8,86.1 L502.8,86.1 Z' id='svg_16' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M509.8,94.9 C511.1,94.7 518.5,105.9 518.5,105.4 C518.5,104.8 525.9,94.4 525.9,94.4' id='svg_17' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M523.3,64.6 L510,53.3 C510,53.3 532,33.3 535.5,30.4 C539,27.5 544.4,20.9 544.4,20.9 L562.2,35 L533.7,65 L523.3,64.6 Z' id='svg_18' stroke='%23000000' stroke-width='0.76' fill='%23FFFFFF' fill-rule='nonzero' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M539.8,33.8 C539.8,33.8 525,48.5 525,47.9 L539.8,33.8 Z' id='svg_19' fill='%23FFFFFF' fill-rule='nonzero'%3E%3C/path%3E%3Cpath d='M539.8,33.8 C539.8,33.8 525,48.5 525,47.9' id='svg_20' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cline x1='550.4' y1='36' x2='529.7' y2='54.1' id='svg_21' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/line%3E%3Cpath d='M559.1,36.7 C559.1,36.7 557.5,38.4 558.6,38.8 C559.7,39.1 559.5,39.3 559.5,39.3 C559.5,39.3 561.8,51.6 564.6,56.1 C567.4,60.6 566.9,59.7 566.9,59.7' id='svg_22' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M556.6,41.1 C556.6,41.1 558.6,48.2 560.2,52.4 C561.3,55.1 564.9,59.5 564.9,59.5' id='svg_23' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M566.2,57 C565.9,57 561.7,72.3 564.4,77 C567.8,80.6 570.3,77.6 570.3,77.3 C570.3,77 570.4,75.9 569.3,71.9 C568.1,67.8 568.1,62.4 567.9,59.9 C567.7,57.3 567.5,56.9 566.2,57 Z' id='svg_24' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M567.6,49 C567.9,48.9 570.7,49 570.9,51.3 C571,53.6 569.1,56.2 567.7,56.2 C567.3,56.2 566.9,56.1 566.6,55.9 C566.2,55.7 565.9,55.4 565.7,55.1 C565.5,54.8 565.3,54.4 565.3,54 C565.2,53.6 565.3,53.2 565.4,52.8 C566.3,49.8 567.9,49.8 569,49.6' id='svg_25' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M566.5,50.7 C566.5,50.7 568,51.3 568.3,51.9' id='svg_26' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M565.7,78.4 C565.8,78.7 570.9,103.3 571,103.7 C571.1,104.1 569.8,108.4 570.6,108.5 C572.7,108.7 571.4,104.9 571.2,104.1' id='svg_27' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M569,78.9 C569.3,79.3 577.9,100.7 580.3,103 C582.7,105.3 583.8,105.7 583.4,104.2 C583.1,102.7 580.3,102.7 580.3,102.7' id='svg_28' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M567.8,110.3 C567.8,110.3 566,112 567.2,113.2 C568.4,114.4 572.2,111.8 575.4,112.4 C578.6,113.1 579.4,116 581.4,116.2 C583.4,116.3 586.5,114.1 585.4,112 C584.2,110 578.5,104.8 567.8,110.3 Z' id='svg_29' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M562.8,107.5 C562,108.3 561.5,109.3 561.3,110.4 C561.1,111.5 561.2,112.6 561.6,113.6 C563.1,117 565.6,114.8 565.8,113.5 C565.9,111.7 565.7,109.9 565.2,108.1 C564.9,107.7 564.5,107.5 564.1,107.4 C563.7,107.3 563.2,107.3 562.8,107.5 L562.8,107.5 Z' id='svg_30' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M561.6,111.2 C561.6,111.2 563.1,110.5 563.8,111.1' id='svg_31' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M582,115.1 C579.9,116.4 577.8,117.8 575.8,119.4 C575.7,119.7 582.8,129.5 582.8,129.8 C582.8,130.1 579.8,127.8 578.6,129.4 C577.6,130.7 582.6,130.1 582.8,130.1' id='svg_32' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M569.2,113.2 C572,112.4 574.8,111.8 577.6,111.3 C577.9,111.4 576.9,117.8 576.9,117.8 C576.9,117.8 574.1,117.5 574.1,118.5 C574.1,119.5 575.8,119.2 575.8,119.2 L575.2,129.7 C575.2,129.7 571.6,127.9 571,129.5 C570.5,130.6 574.9,129.9 574.9,129.9' id='svg_33' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M234.1,88.4 C233.8,88.4 233.5,88.5 233.2,88.6 C232.9,88.8 232.7,89 232.6,89.3 C231.9,90.9 231.1,94.1 232.6,96.2 C234.7,99 236.9,96.1 237.2,94.1 C237.5,92.3 237.1,88.4 234.1,88.4 Z' id='svg_34' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M232.9,89 C233.1,88.8 234.3,87.2 236.1,88' id='svg_35' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M237,91.5 C236.2,91.3 235.4,91.4 234.7,91.7' id='svg_36' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M231.2,94.8 C226.2,95.9 221.6,98.6 218.2,102.4 C212.6,108.8 214.8,110.9 217.6,110.1 C220.4,109.3 222.9,104.2 227,101.3 C231.1,98.4 232.4,96.4 232.4,96.4' id='svg_37' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M218.2,110.1 C218.6,110.2 225.7,115.9 225.9,117 C226.1,118.1 220.7,129.2 220.7,129.5 C220.7,129.8 228.1,128.9 226.5,129.9 C225,131 221.8,131.3 220.7,129.8' id='svg_38' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M215.3,110 C215.3,110 210.7,118.8 210.1,119.8 C208.3,122.6 202.3,128.8 202.3,128.8 C202.3,128.8 208.5,128.4 207.1,130.2 C205.7,132 202.1,129 202.1,129' id='svg_39' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M227.5,98.3 C227.5,98.5 222.3,106.3 224.4,108.8 C225.9,110.4 227.8,111.5 229.9,111.9 C229.9,111.9 233.1,110.2 233.3,111.3 C233.5,113 230,111.9 230,111.9' id='svg_40' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M230.2,98.8 C230.3,99.1 232.3,106.1 233.9,106.3 C235.5,106.5 243,102.5 243.8,102.4 C244.6,102.3 245.6,103.9 245.3,104.3' id='svg_41' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M250.9,85.4 C250.4,85.7 250.1,86.1 249.8,86.6 C249.2,88.3 248.5,94.1 252.1,94 C255.9,93.9 256.4,90.2 255.9,88.6 C255.4,87 254,83.6 250.9,85.4 Z' id='svg_42' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M249.4,89.1 C249.5,88.9 250.4,88 252.2,88.5' id='svg_43' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M256.1,92.2 C256.5,92.2 273.2,100.5 273,104.8 C272.8,108.2 270.3,109 268.9,108.5 C268.6,108.4 268.3,108.2 268,107.9 C267.1,106.6 260.6,97.9 258,96 C255.3,94.2 255.1,92.2 256.1,92.2 Z' id='svg_44' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M268.4,108.4 C267.9,108.4 254.6,113.3 254.4,114.2 C254.2,115.1 252.2,129.8 251.9,129.9 C251.6,130 246.6,127.7 246.9,129.6 C247.2,131.5 251.1,130.2 251.6,130' id='svg_45' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M271.2,108.1 C270.8,108.4 263.7,115.9 264.5,117.4 C265.3,118.9 276,129 275.9,129.5 C275.8,130.1 268.9,128 270.2,130 C271.4,131.8 276,130 276,130' id='svg_46' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M257.7,94.8 C257.7,94.8 249.8,103.6 247.2,104.5 C244.5,105.4 242.5,103.3 243.4,103' id='svg_47' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M206.3,49.3 C206.1,49.5 206,49.7 206,49.9 C205.9,50.1 205.9,50.4 206,50.6 C206.2,52.3 207.2,56.2 210,56.6 C213.6,57 214.1,52.9 212.2,50.6 C210.4,48.4 208.4,47.3 206.3,49.3 Z' id='svg_48' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M209.4,51.6 C208.3,51.8 207.4,52.4 206.6,53.2' id='svg_49' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M215,58.7 C214,57 212.6,55 211.8,57.4 C211.5,59 211.3,60.6 211.5,62.2 C211.5,65.5 208.3,71.7 210.2,75.2 C213.7,81.3 217.5,72.7 216.7,65.3 C216.4,61.7 215.7,59.9 215,58.7 Z' id='svg_50' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M210.2,75.1 C209.6,75.2 202.3,79.7 201.6,80.8 C200.9,82 194.1,93.5 193.8,94.3 C193.3,95.2 188.6,93.4 188.7,95.1 C188.8,96.9 193.2,95.5 193.6,94.8' id='svg_51' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M213.9,76.6 C214,77 213.3,85.8 214.2,87 C215.1,88.1 225.1,95.8 225.1,96.6 C225.1,97.4 220.5,100 221.1,98.3 C221.4,97.7 221.8,97.3 222.2,96.9 C222.7,96.5 223.2,96.2 223.8,96' id='svg_52' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M200.9,52.6 C200.9,52.6 199.9,51.6 200.1,50.8 C200.2,50 198.8,49.8 198.3,51.2 C197.7,52.6 199.8,53.2 199.8,53.2 C201,55.8 202.6,58.2 204.5,60.4 C206.9,63 210.5,60.6 211.4,59.9' id='svg_53_2_' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M242.6,48.1 C242.6,48.1 237.9,46.8 236.3,50.7 C234.7,54.6 238,55.7 240.5,54.5 C243.6,53 244.7,48.9 242.6,48.1 Z' id='svg_54' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M239.1,48.2 C239.1,48.2 241.2,50 240.9,51.1' id='svg_55' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M235.1,55.6 C235.1,55.6 228.7,65.5 231.5,71.6 C232,72.8 232.7,73.8 233.6,74.8 C236.1,77.5 238.5,76.6 237.7,73 C236.6,68.4 234.9,65 236,60.8 C236.9,56.5 236.5,54.8 235.1,55.6 Z' id='svg_56' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M233.8,75.1 C233.8,75.1 225.7,83 225.8,83.8 C225.9,84.5 227.7,95.7 227.7,95.7' id='svg_57' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M237.4,76.1 C237.4,76.1 243.5,95.3 244.5,97.3 C245.4,99.3 245.9,102.9 244.5,102.3 C243.1,101.7 243.1,97.7 244,96.2' id='svg_58' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M236.4,57.5 C236.4,57.5 239.8,71.2 241.6,73.1 C243.4,75 246,74.3 244.6,73.5 L243.1,72.8' id='svg_59' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M223.9,12.3 C224.2,12.4 238.9,17.7 239.9,17.8 C240.9,17.9 242.1,18.7 241.6,19.3 C241.1,19.9 240.1,19.4 239.6,18.5' id='svg_68' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M226.3,31.6 C226.2,32 218.6,53.4 218.4,53.4 C216.7,54.1 215.1,55.3 214,56.8 C213.6,58.1 215.6,58.6 218.4,53.5' id='svg_69' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M228.8,31.9 L232.7,52.4 C233.3,53.9 235.3,54.8 234.7,56.1' id='svg_70' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M232.9,52.8 C232.9,52.8 232.3,57.2 234,57.3 C231.4,58.5 228.7,59.5 226,60.3 C223.7,60.8 217.2,61.1 216,60.1' id='svg_71' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M218.9,1.2 C218.6,1.3 214.6,5.1 218.2,9.1 C221.8,13.1 224,8.3 223.7,5.6 C223.4,3 221.2,-0.1 218.9,1.2 Z' id='svg_78' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M220,4.6 C219.4,4.6 218.8,4.6 218.3,4.9 C217.8,5.1 217.3,5.5 216.9,5.9' id='svg_79' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M222.3,11 C221,11.9 219.9,22.7 223.1,27.9 C226.3,33.1 231,33.3 229.4,28.1 C227.8,22.9 225.3,20.5 225.1,18 C224.9,15.5 224,10.3 222.3,11 Z' id='svg_80' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M51.5,67.3 C51.5,67.3 46.2,69 48.5,73.3 C50.8,77.6 56.9,79.8 57.5,76.1 C58,72.4 52.5,67.1 50.7,68.2' id='svg_81' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M53.5,69.3 C53.5,69.3 51.8,71.1 51.9,72' id='svg_82' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M51,78.9 C46.4,82.1 45.8,94.4 48.7,102.5 C51.3,109.6 55.1,106.3 54.7,102.5 C54.3,98.7 52.6,93.7 52.7,89.3 C52.8,84.9 53.6,81.3 53.5,79.9 C53.3,78.7 52.4,77.9 51,78.9 Z' id='svg_83' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M51,106.3 C51,106.7 52.7,116.4 52.7,117.8 C52.7,118.7 50.1,130.4 50.1,130.4 C50.1,130.4 53.3,128.3 55.7,130 C56.2,130.3 55.7,130.9 53.8,131 C52.5,131 51.3,130.9 50,130.7' id='svg_84' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M53.8,106.3 C53.8,106.7 55.7,116.7 55.9,117.6 C56.2,118.5 54.5,129.6 54.5,129.6 C55,129.5 57.8,129.1 58.8,129.6 C60.1,130.3 59,131.1 58,131' id='svg_85' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M50.6,81.3 L49.6,106.7 C49.6,106.7 49.6,113.1 48.6,112 C47.6,110.9 48.3,107.7 48.7,107.4' id='svg_86' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M1028.1,129.8 C1027.6,129.2 1027.5,128.7 1026.7,128.9 C1025.8,129 1025,129.3 1024.2,129.7 C1023.7,130.1 1023,129.9 1020.8,129.7 C1018.7,129.5 1016,130.1 1015.5,129.7 L1015,129.3 C1014,130.3 1014.9,131.1 1014,130.3 C1013.1,129.6 1013.1,128.5 1012.6,128.9 L1012.1,129.3 C1012.1,129.3 1008.7,127.3 1008.5,127.6 C1008.3,127.9 1009.6,128.5 1009.2,129.2 C1008.8,129.8 1008.1,129.8 1007.1,129.6 C1006.1,129.4 1005.6,129.8 1004.7,129.8 C1003.8,129.8 1004.2,129.3 1002.7,129.5 C1001.2,129.7 1000.6,129.8 1000.6,129.8 C1000.6,129.8 999.4,128.7 1000,128.1 C1000.6,127.6 999.1,127.4 998.6,128.1 C998.1,128.8 996.7,130.2 996.1,130.1 C995.5,130 992.5,130.1 992,129.9 C991.5,129.7 992.9,127.7 992.4,127.4 C991.9,127.1 989.9,127.7 989.7,128.6 C989.5,129.5 988.1,128 988.1,128 C988.1,128 987.6,129.5 987.1,129.7 C986.2,130 985.2,130 984.2,129.9 C983,129.8 981.1,129.8 980.5,129.5 C979.9,129.2 980.6,128.7 978.9,129.3 C977.2,129.9 977.2,130.7 976.4,129.9 C975.7,129.2 976.2,128.7 975,129.1' id='svg_87' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M942.4,129.3 C941.7,129.6 940.9,129.6 940.2,129.5 C939.5,129.2 938.7,129.2 938,129.3 C936.9,129.4 936.1,129.8 935.6,129.5 C935.1,129.1 934.3,128.4 934.1,128.4 C933.9,128.5 934.7,129 934.5,129.3 C933.6,129.6 932.6,129.7 931.6,129.4 C931,129.2 930.5,128.8 930.3,128.2 C930.3,128.2 930.8,129.2 930.2,129.2 C929.7,129.2 928.1,129.2 926.9,129.2 C925.7,129.2 925.3,129.6 925,129.3 C924.7,129 925.5,127.9 926,127.8 C926.5,127.7 924.5,127.9 923.9,128.8 C923.4,129.6 922.1,130.2 921.7,129.7 C921.3,129.2 920.4,128 920.4,128 C920.4,128 921.4,129.1 920.8,129.3 C919.2,129.5 915.9,129.4 914.3,129.3' id='svg_88' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M950.2,83.5 C950.1,83.4 949.9,83.4 949.8,83.3 C949.6,83.3 949.5,83.3 949.3,83.3 C949.2,83.3 949,83.4 948.9,83.5 C948.8,83.6 948.7,83.7 948.6,83.8 C947.9,85 946.2,88.4 947.5,91.2 C948.1,92.5 949,92.6 949.9,92.2 C951.4,91.4 952.7,88.7 951.8,86.1 C951.6,85.1 951,84.2 950.2,83.5 L950.2,83.5 Z' id='svg_91' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M950,87.3 C949.7,87.2 948.7,86.7 947.9,87.1' id='svg_92' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M950.3,92.1 C950.6,92.8 950.9,93.5 951.1,94.2' id='svg_93' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M951.3,94.4 C951.3,94.4 948.6,97.3 952,106.6 C955.4,115.8 958,114.9 958.4,114.2 C958.9,113.5 959.8,110.8 957.7,104.4' id='svg_94' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M950.4,96.5 C950.4,96.5 951.7,103.6 955.1,105.2' id='svg_95' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M950.3,96.2 C950.3,96.2 948.6,103.1 945.6,104.9 C942.6,106.7 937.6,106.4 936.9,106.6 C936.2,106.8 935.6,107.3 936.2,107.3 C936.7,107.2 937.4,107.6 937.3,107.8 C937.2,108 936.1,109.9 937,109.6 C937.9,109.3 938.1,107.4 938.8,107.3' id='svg_96' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M951.5,94.3 C952.8,94.4 960.8,99.2 961.4,100.1 C962,101 955.6,105.1 955.3,105.9 C955,106.7 954.8,108 955.7,107 C956.2,106.4 956.7,105.7 957.1,105' id='svg_97' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M952.5,95 C954.2,97.5 956.9,102.7 957.1,104.1' id='svg_98' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M958.4,104.6 C958.9,104.7 961.9,109.4 961.1,112.3 C960.9,113.1 960.4,113.7 959.8,114.1 C959.1,114.5 958.3,114.6 957.6,114.5' id='svg_99' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M955.2,113.1 C955.1,113.5 951.3,126.3 950.4,128.2 C949.5,130.1 945.3,126.1 944.8,127.2 C944.3,128.3 947.4,129.8 948.9,129.4' id='svg_100' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M959.1,114.8 C959.7,115.6 961.4,119.8 963.1,120.9 C964.7,122 972.9,125 973,125.2 C973.1,125.4 970.5,130.5 969.9,129.1 C969.3,127.7 970.8,126.5 971.7,125.8' id='svg_101' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M934,109.7 C933.8,109.7 932.7,110.6 933,111 C933.3,111.4 933.7,110.7 933.7,110.7' id='svg_102' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M935,112 C934.9,112.1 934.9,112.2 934.9,112.4 C934.7,113 934.5,113.8 934.8,113.6' id='svg_103' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M936.2,115.3 C936.5,116 936.1,116.6 935.8,116.4 C935.5,116.2 935.5,115.3 935.5,115.3' id='svg_104' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M932,113.4 C931.6,114.1 932.1,115.2 932.3,114.8 C932.6,114.4 932,113.4 932,113.4 Z' id='svg_105' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M933.6,117.5 C933.8,118.3 933.4,119.2 933.1,118.8' id='svg_106' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M931.2,117 C930.5,117.7 930.7,118.4 930.9,118.4 C931.1,118.4 931.6,117.6 931.6,117.6' id='svg_107' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M934.8,121.2 C935,122.1 935.1,123 934.5,122.7 C933.9,122.4 934,122 934,122' id='svg_108' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M931.3,121.2 C930.8,121.9 930.8,122.8 931.3,122.7 C931.8,122.5 932.2,122.2 932.6,121.9' id='svg_109' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M929.1,120.5 C928.4,121.1 928,121.6 928.4,121.8 C928.8,122 929.3,121.4 929.3,121.4' id='svg_110' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M932.5,124.8 C932.5,124.8 933.3,125.3 933.4,125' id='svg_111' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M928.5,125.3 C928.5,125.3 928.3,126 928,125.8' id='svg_112' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M872,159.6 C895.6,159.6 914.8,141 914.8,118 C914.8,95 895.6,76.4 872,76.4 C848.4,76.4 829.2,95 829.2,118 C829.2,141 848.4,159.6 872,159.6 Z' id='svg_138' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M842.8,88 C843.3,88 845.8,87.8 847.4,89 C849,90.1 853.2,86.1 855.6,87.5 C858.1,89 857.4,89.6 858.9,89.8 C860.4,90 863.9,91.6 862.9,92.9 C861.9,94.2 858.8,92.9 861.9,94.2 C865,95.5 866.5,93.4 867.7,96.2 C868.9,99 875,101.9 873.5,104.8 C872,107.7 871.4,108.7 868.5,106.8 C865.7,104.8 863.5,105.5 861.1,104.8 C858.7,104.1 858,102.4 857,103.5 C856,104.6 858,108.7 855.5,110 C853,111.3 850.2,108.7 849.4,110.8 C848.6,112.9 849.7,118.8 846.4,120.1 C843.1,121.4 842,119.9 839.6,119.9 C837.3,119.9 835.2,120.9 836.8,117.6 C838.5,114.3 841.8,112.2 839.3,112.4 C836.8,112.6 834,115.2 832.1,115.2 L830.1,115.2' id='svg_139' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M859.3,109.4 C860.1,108.3 859.6,105.7 862.8,107.4 C865.9,109.2 865.1,110.3 868.4,109.7 C871.7,109 870.9,108.9 873.7,112 C876.5,115.1 879.5,116.9 877.8,118.2 C876.2,119.5 876.5,117.1 875.3,120.5 C874.1,123.9 877.1,125.7 872.5,125.9 C867.9,126.1 868.4,122.5 866.1,124.4 C863.8,126.4 863.3,125.2 862.1,128 C860.9,130.8 861.9,129.1 862.1,134.9 C862.3,140.7 860.1,149.9 857.7,149.5 C855.2,149.2 855.7,148.2 852.4,146.9 C849.1,145.6 847.1,145.9 846.8,140.5 C846.5,135.1 848,135.3 846.6,131.2 C845.2,127.1 842.5,128 845.3,125.3 C848.1,122.7 847.9,124.8 849.3,121.9 C850.6,119 850.8,119.1 851.3,116.7 C851.8,114.3 849.7,114.1 852.3,113.1 C854.9,112.1 852.6,112.9 855.9,111.6 C859.1,110.4 859.3,109.4 859.3,109.4 Z' id='svg_140' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M874.4,81.3 C871.7,81.3 870.3,83.7 872.8,85.2 C875.3,86.7 877.9,86.3 877.9,88.9 C877.9,91.5 878.7,89.9 881.9,91.5 C885.1,93.1 886.7,97.2 887.3,93.5 C888,89.8 886.3,89.3 888.5,88.3 C890.6,87.3 895.8,85.7 890.8,84.2 C885.4,82.9 880,81.9 874.4,81.3 L874.4,81.3 Z' id='svg_141' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M899.3,86.6 C898.1,87.1 892.2,88.1 893.2,90.8 C894.2,93.6 896.3,91.5 895,95.4 C893.7,99.3 890,98.5 893.4,100.1 C895.4,101.1 897.5,101.9 899.7,102.4 C901.5,102.9 904.8,102.9 906.3,106.8 C907.8,110.7 910.3,111.8 909.8,115.3 C909.3,118.7 910.3,120.8 911.5,119.5 C912.7,118.2 914.5,115.6 914.5,115.6' id='svg_142' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M913.3,126.3 C912.6,125 912.3,124.8 910.8,123.4 C909.3,121.9 907.8,122.1 904.2,123.4 C900.6,124.7 894.6,123.6 894.3,125.7 C894,127.8 895,127.3 894,127.8 C893,128.3 887.9,125.4 888.2,130.6 C888.5,135.8 890.8,137.1 889.9,140.5 C888.9,143.9 892.5,144.7 894.5,147.7 C896.5,150.6 900.5,149.7 900.5,149.7' id='svg_143' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M846.1,84.3 C845.4,83.7 841.8,81.4 840.8,79.4 C840.5,78.7 840.1,78.1 839.5,77.6 C839,77.1 838.3,76.7 837.6,76.5 C836.4,76 835.5,74.9 834.5,77.5 C833.5,80.1 834.7,83.8 832.7,83.2 C830.7,82.6 831.9,80.8 829.6,82.7 C827.3,84.7 826.1,86.1 824,84.8 C821.9,83.5 820.4,82.7 820.4,80.9 C820.4,79.1 819.9,78.6 818.9,78.5 C817.9,78.3 814.9,79.3 813.9,77 C812.9,74.7 811.4,74.1 812.2,72.6 C813,71.1 812.4,73.1 813,71.1 C813.6,69.1 812.2,69 813.2,66.4 L814.2,63.8 C813.3,63.4 812.5,62.8 812,62 C811.5,61.2 811.2,60.2 811.2,59.2 C811.4,55.8 811.7,55.6 813,54.3 C814.3,53 813,52.7 815.5,51.4 C818,50.1 819,49.9 820.3,50.1 C821.6,50.3 820.6,48.6 822.9,47.3 C825.2,46 826,47.3 826.2,46 C826.4,44.7 825.9,43.4 827,42.4 C828.2,41.4 828.2,41.9 829.1,42.1 C830,42.3 830.3,40.8 831.6,40 C832.9,39.2 834.6,39 835.1,40.2 C835.6,41.4 837.1,42.2 837.4,42.5 C837.7,42.8 838.7,41.2 840.5,41.5 C842.3,41.8 843.6,43 844.8,41.8 C846,40.7 847.9,38.6 849.3,39.7 C850.6,40.8 851.9,44.6 851.9,44.6 C851.9,44.6 850.9,39.4 852.2,38.9 C853.5,38.4 855.7,37.9 855.5,36.3 C855.3,34.7 855.8,31.3 857.8,31.3 C859,31.3 860.2,31.6 861.3,32.1 C861.3,32.1 861.1,29 863.6,29.8 C866.1,30.6 867.7,31.8 868.6,30.5 C869.4,29.2 869.9,28.1 871.9,28.4 C873.9,28.7 876,30.2 877,28.6 C878,27 879.1,23.7 881.5,25.7 C883.8,27.7 884.1,28.8 885.3,28.3 C886.5,27.8 887.3,26.3 887.4,28.9 C887.5,30.4 887.7,31.9 888.1,33.3 C888.1,33.3 891.9,32.2 893.2,34.3 C894.5,36.4 898.5,34.1 899.2,37.2 C899.6,39.1 899.4,41.1 898.7,42.9 C898.7,42.9 901.5,40.8 903,42.6 C904.5,44.4 905.6,40.5 907.4,42.4 C909.2,44.4 910,46.1 910.7,45.5 C911.4,44.9 915.2,45.3 916.3,46.6 C917.5,47.9 920.1,43.8 922.1,46.4 C923,47.7 924.1,48.9 925.2,50 C925.2,50 929.8,48.4 929.3,51.3 C929,53.1 928,54.7 926.5,55.9 C926.5,55.9 930.1,56.6 930.5,58.3 L930.8,60.1 C930.8,60.1 934.8,58.1 934.8,61.2 C934.8,64.3 930.7,67.2 929.7,67.1 C928.7,67 929.4,72.8 928.1,73.5 C926.8,74.1 931.4,78.7 928.6,80.4 C927.8,80.9 926.8,81.1 925.9,81.2 C924.9,81.2 924,81 923.2,80.6 C923.2,80.6 923.2,84.3 920.9,84.5 C918.6,84.7 916.6,83.2 916.6,81.1 L916.6,77.3 C916.6,77.3 914.1,79.4 913,77.8 C911.8,76.2 910.5,73.7 908.4,74.7 C906.3,75.7 900.4,84.1 900.3,85' id='svg_144' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M857.7,78 C856.5,77 857.2,74.1 855.7,74.8 C854.7,75.3 853.5,75.5 852.4,75.4 C851.2,75.4 851.4,78.5 849.1,77.4 C846.8,76.3 846,75.9 846,75.9 C846,75.9 845.7,78.7 843.2,76.4 C840.7,74.1 840.9,72 840.9,72 C840.9,72 835.5,72.5 836.3,70.2 C837.1,67.9 839.1,68.1 838.6,66.5 C838.1,64.9 838.6,65.4 838.8,62.6 C839,59.8 836.3,57.6 839.1,56.2 C841.9,54.9 844.9,57.3 845.1,55.1 C845.3,52.8 844.3,51.9 847.4,51.4 C850.5,50.9 852.4,51.1 852.4,50.6 C852.4,50.1 854.9,46.9 858,48 C859.5,48.5 860.9,49.1 862.3,50 C862.3,50 863.3,48.7 863.9,51.1 C864.6,53.5 864.9,55.2 865.6,55.2 C866.3,55.2 867.6,58.3 868.9,56.8 C870.2,55.3 870.7,54.7 872.2,55.5 C873.7,56.3 873,59.1 875.3,57.1 C877.6,55.1 878.9,55.3 879.9,55.3 C880.9,55.3 880.6,54.3 882,53 C883.5,51.7 884.5,53.2 886,52.5 C887.5,51.9 887.5,51.2 888.8,52.2 C890.1,53.2 890.9,55 891.9,53.7 C892.5,53 893.4,52.5 894.3,52.3 C895.2,52.1 896.2,52.2 897,52.6 C898.8,53.4 900,51.6 901.1,53.2 C902.2,54.8 901.8,56.1 902.6,55.6 C903.4,55.1 906.6,55.8 905.2,58.2 C903.9,60.6 907.2,60.6 906.7,62.4 C906.5,62.9 906.1,63.4 905.7,63.8 C905.2,64.1 904.7,64.4 904.1,64.4 C904.1,64.4 904.4,66.8 903.9,67.8 C903.4,68.8 907.2,70.7 904.6,71.2 C903,71.5 901.4,71.2 900,70.4 C900,70.4 901.3,72.8 899.2,73.2 C898.4,73.4 897.5,73.4 896.6,73.2 C895.8,73 895,72.5 894.4,71.9 C892.9,70.6 890.4,70.4 889.9,71.6 C889.4,72.7 887.3,75.3 887.4,78.1' id='svg_145' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M883.3,77 C884.2,75.5 884.6,73.8 884.5,72.1 C884.3,70 883.3,69 882.5,69 C881.7,69 881.3,70 880.2,69 C879,68 877.4,69.7 876.7,68 C876,66.4 878,66.2 876.4,64.7 C874.7,63.2 873.4,64.1 875.1,61.5 C876.8,58.9 877.2,59.9 877.1,58.1 C876.9,56.3 877.1,55.8 878.1,55.2' id='svg_146' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M872,55.3 C871.8,56.4 871.7,62.8 872.7,63.9' id='svg_147' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M868.7,56.6 C868.7,56.6 869,59.4 868,60.2 C867,61 866.2,61.2 866.8,62.3 C867.5,63.4 869.6,63.4 867,64.7 C864.4,66 863.5,66.5 863.5,65.4 C863.5,64.3 865.3,63.4 863.5,64.3 C861.7,65.1 860.5,67.9 860,66.4 C859.5,64.9 860.3,63.5 858.5,64.9 C856.7,66.4 856.4,62.3 855.5,63.4 C854.7,64.5 856.8,67.1 855,67.6 C853.2,68.1 850.4,68.4 851.4,68.7 C852.4,69 855.7,70.2 856.2,71.3' id='svg_148' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M861.4,76.8 C861.1,76.2 856.6,74 859.3,68' id='svg_149' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M868.7,65.2 C869.5,66.4 870,67.7 870,69.1 C869.9,71.2 869.8,73.3 869.5,75.5' id='svg_150' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M875.9,69.5 C875.9,69.5 875.7,74.5 876.1,75.4' id='svg_151' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M886.3,70.9 C886.5,68.1 884.5,66.7 885.6,66.2 C886.8,65.7 885.9,68.6 888.1,67.8 C890.2,67 890.2,66.3 891.9,67.2 C892.9,67.7 893.8,68.5 894.5,69.5' id='svg_152' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M896.7,73.9 C896.8,75.5 896.7,77.2 896.4,78.8 C896,80 895.4,81 894.4,81.7' id='svg_153' stroke='%23000000' stroke-width='0.75' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3Cpath d='M220.9,13.4 C220.7,13.6 208.1,23 207.5,23.8 C206.9,24.6 205.5,25.1 205.3,24.4 C205.1,23.7 206,23.1 207,23.2' id='svg_68_1_' stroke='%23000000' stroke-width='0.76' stroke-linecap='round' stroke-linejoin='round'%3E%3C/path%3E%3C/g%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
  height: 88px;
  margin: 0 0 -15px;

  ${mq.range({ from: breakpoints.mobileWide })} {
    margin: 32px 0 -15px;
  }
  ${mq.range({ from: breakpoints.tablet })} {
    height: 114px;
    margin: 40px 0 -15px;
  }
  ${mq.range({ from: breakpoints.tabletWide })} {
    height: 146px;
    margin: 56px 0 -15px;
  }
  ${mq.range({ from: breakpoints.desktop })} {
    height: 175px;
    margin: 56px 0 -15px;
  }
`;

type Props = {
  cards: ListItemProps[];
  children: ReactChildren;
  totalCardCount: number;
  hideCards?: boolean;
};

export const MultidisciplinarySubject = ({ t, cards, children, totalCardCount, hideCards }: Props & tType) => {
  return (
    <StyledWrapper>
      <StyledBackground>
        <OneColumn wide>
          <Header>
            <LayoutItem layout="extend">
              <Heading>{t('frontpageMultidisciplinarySubject.heading')}</Heading>
              <InfoText>{t('frontpageMultidisciplinarySubject.text')}</InfoText>
            </LayoutItem>
            <Illustration />
          </Header>
        </OneColumn>
      </StyledBackground>
      <StyledLayoutWrapper>
        <OneColumn wide>
          <LayoutItem layout="extend">
            <>
              {children}
              {hideCards || <List items={cards} totalCount={totalCardCount} />}
            </>
          </LayoutItem>
        </OneColumn>
      </StyledLayoutWrapper>
    </StyledWrapper>
  );
};

export default injectT(MultidisciplinarySubject);
