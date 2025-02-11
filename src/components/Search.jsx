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
 
 function showComputing(e) {
    let isChecked = e.target.checked;
    console.log(isChecked)
    if( isChecked){
    const checked = data.filter((checkedEntry) => {
        return (
            checkedEntry.programme.includes("Computing") )
        });
        setCheckField(checked)   
    } else {setCheckField(data)

    }
  }

  function showSD(e) {
    let isChecked = e.target.checked;
    console.log(isChecked)
    if( isChecked){
    const checked = data.filter((checkedEntry) => {
        return (
            checkedEntry.programme.includes("Software Development") )
        });
        setCheckField(checked)   
    } else {
        setCheckField(data);
    }
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
            id="flexCheckDefault"  
            onChange={(e) => showComputing(e)}
          />
          <label class="form-check-label" for="flexCheckDefault">
            Computing
          </label>
        </div>
      </div>
      <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value="SD"
            id="flexCheckDefault"  
            onChange={(e) => showSD(e)}
          />
          <label class="form-check-label" for="flexCheckDefault">
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
