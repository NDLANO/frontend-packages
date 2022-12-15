/**
 * Copyright (c) 2018-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

const downloadPdf = ({ title, content }) => {
  const docDefinition = {
    footer: (currentPage, pageCount) => ({
      text: `${currentPage.toString()} of ${pageCount}`,
      style: 'footer',
    }),
    pageSize: 'A4',
    pageMargins: [60, 60, 60, 80],
    content,
    styles: {
      header: {
        fontSize: 24,
        lineHeight: 1.2,
        bold: true,
        marginBottom: 15,
      },
      ingress: {
        fontSize: 16,
        lineHeight: 1.2,
        color: '#333',
        marginBottom: 15,
      },
      paragraph: {
        fontSize: 12,
        lineHeight: 1.2,
        marginBottom: 15,
      },
      footer: {
        alignment: 'center',
        fontSize: 9,
        lineHeight: 1.1,
        marginTop: 40,
      },
    },
  };

  pdfMake.createPdf(docDefinition).download(title);
};

export { downloadPdf as default };
