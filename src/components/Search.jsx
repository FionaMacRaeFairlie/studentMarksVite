import React, { useState } from "react";
import Item from "./Item";

function Search({ data }) {
  const [searchField, setSearchField] = useState("");
  const [checkField, setCheckField] = useState(data);

  const filtered = checkField.filter((entry) => {
    return (
      entry.student.toLowerCase().includes(searchField.toLowerCase()) ||
      entry.programme.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  function handleFilter(e) {
    const checkedArray = document.querySelectorAll(
      'input[type="checkbox"]:checked'
    );
    let selected = Array.from(checkedArray).map((x) => x.value);
    console.log(selected);
    let checked = data;

    for (let i = 0; i < selected.length; i++) {
      checked = data.filter((checkedEntry) => {
        return (
          checkedEntry.programme.includes(selected[0]) ||
          checkedEntry.programme.includes(selected[1])
        );
      });
    }
    if (selected == []) {
      checked = data;
    }
    setCheckField(checked);
  }

  return (
    <div>
      <div>
        <input
          className="form-control"
          type="text"
          placeholder="Search ..."
          onChange={(e) => setSearchField(e.target.value)}
        />
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="Computing"
            id="Computing"
            onChange={(e) => handleFilter(e)}
          />
          <label class="form-check-label" for="Computing">
            Computing
          </label>
        </div>
      </div>
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value="Software Development"
          id="Software Development"
          onChange={(e) => handleFilter(e)}
        />
        <label class="form-check-label" for="SD">
          Software Development
        </label>
      </div>

      <table className="table-style">
        {filtered.map((item) => {
          return (
            <tr>
              <td className="name-style">{item.student}</td>{" "}
              <td>{item.programme}</td>
              <td>
                <Item modules={item.modules} />
              </td>
            </tr>
          );
        })}
      </table>

      {/* <table className="table-style">
        {checkField.map((item) => {
          return (
            <tr>
              <td className="name-style">{item.student}</td>{" "}
              <td>{item.programme}</td>
              <td>
                <Item modules={item.modules} />
              </td>
            </tr>
          );
        })}
      </table> */}
    </div>
  );
}
export default Search;
