// ✅ CORRECT
data.forEach((item, index) => {
    let row = `<tr>
        <td>${index + 1}</td> <!-- S.No -->
        <td>${item.day}</td>
        <td>${item.month}</td>
        <td>${item.year}</td>
        <td>${item.sale}</td>
    </tr>`;
    document.querySelector('#categories tbody').innerHTML += row;
});
