import './App.css';
import {useEffect, useState} from 'react'
import UserData from './components/UserData';


const API = "https://jsonplaceholder.typicode.com/users"
function App() {

  const [users,setUsers] = useState([]);

  const fetchUsers= async(url)=>{
    try{
      const res = await fetch(url);
      const data = await res.json();
      if (data.length > 0){
        setUsers(data);
      }
    }catch(e){
      console.log(e)
    }

  }


  useEffect(()=>{
    fetchUsers(API);
  },[])
  return (
    <div className="App">
      
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          <UserData users={users}/>
        </tbody>
      </table>
    </div>
  );
}

export default App;
