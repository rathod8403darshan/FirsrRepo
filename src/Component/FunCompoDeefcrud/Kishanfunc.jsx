import { useState } from "react";

const Kishanfunc = () => {
  let [blankObj, setblankObj] = useState({});
  let [obj, setObj] = useState({});
  let [data, setData] = useState([]);
  let [count, setcount] = useState(0);

  const getValue = (e) => {
    if (e.target.type == "checkbox") {
      obj[e.target.name] = obj[e.target.name] ?? [];
      blankObj[e.target.name] = [];

      if (e.target.checked) {
        obj[e.target.name] = [...obj[e.target.name], e.target.value];
      } else {
        obj[e.target.name] = obj[e.target.name].filter(
          (x) => x != e.target.value
        );
      }
    } else {
      obj[e.target.name] = e.target.value;
      blankObj[e.target.name] = "";
    }

    setObj({ ...obj });
  };

  const addData = () => {
    if (obj.id == undefined) {
      count++;
      setcount(count);
      obj.id = count;
      data.push(obj);
    } else {
      let index = data.findIndex((x) => x.id == obj.id);
      data.splice(index, 1, obj);
    setblankObj({ ...blankObj });
    }

    // obj.id == undefined;
    // // count++;
    // obj.id = 0;
    //  setData([...data , obj ]);

    setData([...data]);
    setObj(blankObj );

    // obj.id == undefined
    // setcount(count);
  };

  const editData = (editId) => {
    let editObj = data.find((x) => x.id == editId);
    setObj({ ...editObj });
    //  obj.id == undefined;
  };

  const deleteData = (deleteId) => {
    if (window.confirm("Are You sure You want To Delete This Data !")) {
      let index = data.findIndex((x) => x.id == deleteId);
      data.splice(index, 1);
      setData([...data]);
    }
    obj.id = undefined;
    setObj({ ...obj });
  };

  console.log(data, "data");
  return (
    <>
      <form className="w-50 mx-auto p-4 shadow-lg mb-3">
        <label>First Name</label>
        <input
          type="text"
          name="fname"
          className="w-100"
          onChange={getValue}
          value={obj.fname}
        />
        <label>Last Name</label>
        <input
          type="text"
          name="lname"
          className="w-100"
          onChange={getValue}
          value={obj.lname}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          className="w-100"
          onChange={getValue}
          value={obj.email}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          className="w-100"
          onChange={getValue}
          value={obj.password}
        />
        <label className="w-100">Gender</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={getValue}
          checked={obj.gender == "Male"}
        />
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={getValue}
          checked={obj.gender == "Female"}
        />
        Female
        <input
          type="radio"
          name="gender"
          value="Other"
          onChange={getValue}
          checked={obj.gender == "Other"}
        />{" "}
        Other
        <label className="w-100 ">Skill</label>
        <input
          type="checkbox"
          name="skill"
          value="HTML"
          onChange={getValue}
          checked={obj.skill?.includes("HTML")}
        />
        HTML
        <input
          type="checkbox"
          name="skill"
          value="CSS"
          onChange={getValue}
          checked={obj.skill?.includes("CSS")}
        />
        CSS <br />
        <input
          type="checkbox"
          name="skill"
          value="JAVACSRIPT"
          onChange={getValue}
          checked={obj.skill?.includes("JAVACSRIPT")}
        />
        JAVACSRIPT
        <input
          type="checkbox"
          name="skill"
          value="BOOTSTRAP"
          onChange={getValue}
          checked={obj.skill?.includes("BOOTSTRAP")}
        />
        BOOTSTRAP
        <br />
        <br />
        <button type="button" className="btn btn-success" onClick={addData}>
          Save
        </button>
      </form>

      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Gender</th>
            <th>Skill</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((x, i) => (
            <tr key={i}>
              <td>{x.id}</td>
              <td>{x.fname}</td>
              <td>{x.lname}</td>
              <td>{x.email}</td>
              <td>{x.password}</td>
              <td>{x.gender}</td>
              <td>{x.skill?.join(",")}</td>
              <td>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => editData(x.id)}
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => deleteData(x.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Kishanfunc;
