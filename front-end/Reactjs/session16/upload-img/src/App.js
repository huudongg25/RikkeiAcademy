import logo from './logo.svg';
import './App.css';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import storage from './firebase';
import { useState } from 'react'

function App() {
  const [listImg, setListImg] = useState([])
  const handleChangeUpload = (e) => {
    const data = e.target.files[0]
    const storages = storage
    const storageRef = ref(storages, `/img/${data.name}`);
    uploadBytes(storageRef, data).then((snapshot) => {
      getDownloadURL(snapshot.ref).then(data => setListImg([...listImg, data]))
    });
  }
  return (
    <div className="App">
      <input type="file" onChange={handleChangeUpload} />

      <br />
      {listImg && listImg.map((item, index) => {
        return <img src={item} key={index} alt="" />
      })}
    </div>
  );
}

export default App;
