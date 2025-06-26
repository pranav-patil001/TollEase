fetch('/report/count-passes-today')
  .then(res => res.json())
  .then(dataList => {
    const tableBody = document.getElementById('passTableBody');
    tableBody.innerHTML = '';

    dataList.forEach((data, index) => {
      const row = `
        <tr>
          <td>${index + 1}</td>
          <td>${data.day || 'N/A'}</td>
          <td>${data.month || 'N/A'}</td>
          <td>${data.year || 'N/A'}</td>
          <td>${data.saley || 'N/A'}</td>
        </tr>
      `;
      tableBody.innerHTML += row;
    });
  })
  .catch(err => console.error('Fetch error:', err));
