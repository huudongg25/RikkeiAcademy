import './App.css';
import { useEffect, useState } from 'react'
function App() {
  const [mainData, setMainData] = useState([])
  const [isUpdate, setIsUpdate] = useState(false)
  const [isEdit, setIsEdit] = useState(false)
  const [form, setForm] = useState({
    name: "",
    age: ""
  })
  useEffect(() => {
    fetch("http://localhost:8080/students", {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => data ? setMainData(data) : setMainData([]))
  }, [isUpdate])

  const handleChangeValue = (e) => {
    if (e.target.name === "name") setForm({ ...form, name: e.target.value })
    if (e.target.name === "age") setForm({ ...form, age: e.target.value })
  }

  const handleAddData = (e) => {
    e.preventDefault()
    fetch("http://localhost:8080/students", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form)
    })
      .then((res) => res.json())
      .then(data => {
        setIsUpdate(!isUpdate)
        setForm({ name: "", age: "" })
      })
  }

  const handleEditData = (e) => {
    e.preventDefault()
    fetch(`http://localhost:8080/students/${form.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form)
    })
      .then((res) => res.json())
      .then(data => {
        setIsUpdate(!isUpdate)
        setIsEdit(false)
        setForm({ name: "", age: "" })
      })
  }

  const deleteData = (id) => {
    fetch(`http://localhost:8080/students/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(data => {
        setIsUpdate(!isUpdate)
      })
  }

  const editData = (item) => {
    setIsEdit(true)
    setForm({
      name: item.name,
      age: item.age,
      id: item.id
    })
  }

  return (
    <div className="App">
      <table style={{ width: '70%', textAlign: 'center', borderCollapse: 'collapse', marginTop: '20px' }} border={1}>
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Age</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {mainData && mainData.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.age}</td>
                <td>
                  <button onClick={() => editData(item)}>Edit</button>
                  <button onClick={() => deleteData(item.id)}>Delete</button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <form>
        <label htmlFor="">Name</label>
        <input type="text" name='name' value={form.name} onChange={handleChangeValue} />

        <label htmlFor="">Age</label>
        <input type="text" name='age' value={form.age} onChange={handleChangeValue} />

        {!isEdit ? <button onClick={handleAddData}>Add</button> : <button onClick={handleEditData}>Edit</button>}
      </form>
    </div>
  );
}

export default App;
