
/** Runs through tables, finds th-tags, copies them over to data-th-attributes, for usage in CSS responsive tables
**/

function ResponsiveTables() {
  const headertext = [];
  const headers = document.querySelectorAll('th');
  const tablebody = document.querySelectorAll('tbody');

  if (tablebody.length > 0) {
    for (let i = 0; i < headers.length; i += 1) {
      headertext[i] = [];
      const current = headers[i];
      // headers[i].setAttribute('data-test', 'test');
      headertext[i].push(current.textContent);
    }

    for (let h = 0; h < tablebody.length; h += 1) {
      const tbody = tablebody[h];
      for (let i = 0; i < tbody.rows.length; i += 1) {
        const row = tbody.rows[i];
        for (let j = 0; j < row.cells.length; j += 1) {
          const col = row.cells[j];
          col.setAttribute('data-th', headertext[j]);
        }
      }
    }
  }
}
ResponsiveTables();
