import React from 'react';
import '../Styles/Table.css'

function Table() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Address</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>123 Main Street</td>
          <td>35</td>
        </tr>
        <tr>
          <td>Jane Smith</td>
          <td>456 Park Avenue</td>
          <td>28</td>
        </tr>
        <tr>
          <td>Bob Johnson</td>
          <td>789 Elm Road</td>
          <td>42</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
