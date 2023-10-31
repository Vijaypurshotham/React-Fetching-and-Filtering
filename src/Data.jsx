import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Data = () => {

    // ! Storing the values so we the below state
 const [data, setData] = useState([])

//  ! Below State is used to filter the data  

const [records, setRecords] = useState([])


  useEffect(() => {
  axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => {
    setData(res.data)
     setRecords(res.data);
})
  .catch(err => console.log(err));
 
  }, [])

  const Filter = (event) => {

    // ? Filtering based on name 
    setRecords(data.filter(f => f.name.toLowerCase().includes(event.target.value)))

 }


  return (
    <div className='div'>
        <div>
            <div className='container'>
            <input type='text' placeholder='Enter the Name to Search.....' onChange={Filter}/>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email-Id</th>
                    </tr>
                </thead>
                <tbody>
                    {records.map((d, i) => (
                        <tr key={i}>

                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.username}</td>
                            <td>{d.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>



        </div>

      
    </div>
  )
}

export default Data
