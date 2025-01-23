export const Table = (users) => {
  return `
  <div class="table-container">
  <table id="main__table" class="table">
    <thead>
      <tr>
        <th class="table__th">User</th>
        <th class="table__th">Văn Phòng Làm Việc</th>
        <th class="table__th">Chức Vụ</th>
        <th class="table__th">Email</th>
        <th class="table__th"></th>
      </tr>
    </thead>
    <tbody id="table__tbody">
     ${users
       .map(
         (user) =>
           `
      <tr>
        <td>${user.name}</td>
        <td>${user.office}</td>
        <td>${user.position}</td>
        <td>${user.email}</td>
         <td class="table__td">
              <button class="edit-btn" data-id="${user.id}">Edit</button>
              <button class="delete-btn" data-id="${user.id}">Delete</button>
            </td>
      </tr>
    `
       )
       .join("")}
</tbody>
  </table>
</div>
  `;
};
