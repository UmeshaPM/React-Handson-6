import React from 'react'
import { useState } from 'react'
import './Compo.css'

const Student = () => {
  
  let Details = {
  
    Name: '',
    Age : '',
    Course:'',
    Batch:''
  }

  const [store, setStore] = useState(Details);
  const [arrayData, setArrayData] = useState([]);
  const [hide, setHide] = useState(false);
  const [change, setChange] = useState(false);
 
  const changeHandler = (e) => {
    const value = e.target.value
    setStore(store =>({...store,[e.target.name] : value}))
  }

  const cancelHandle = (e) => {
    setHide(false)
  }


  const addNewData = () => {
    if(change){
      
      const updateNewData = arrayData.map((item)=>item.id=== store.id ? store:item);
      setArrayData(updateNewData);
      setChange(false);
      setStore(Details)
      setHide(!hide)
    }
    else{
      let inputItems = arrayData;
       const item = {
        id:arrayData.length,
        ...store
       }
       inputItems = [...arrayData,item];
       setArrayData(inputItems);
       clearData();
       setHide(!hide)
    }
  }
  const clearData = () => {
    setStore(Details);
  }
  const editItem = (item) => {
    setStore(item);
    setChange(true);
    setHide(!hide)
  }
  
  return (
    <div>
      {
        hide ? null 
        :
        <>
          <button className='button' id='btn-add' onClick={() => {setHide(!hide)}}>
          Add New Details
          </button>
          
        <center>
          <table className="GeneratedTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Batch</th>
              <th>Course</th>
              <th>Change</th>
            </tr>
          </thead>
          <tbody>
            {
              arrayData.map((item,index)=>
              <tr key={index}>
                <td>{item.Name}</td>
                <td>{item.Age}</td>
                <td>{item.Course}</td>
                <td>{item.Batch}</td>
                <td className='edit' onClick={()=>{editItem(item)}}>Edit</td>
              </tr>
              )
            }
            
          </tbody>
        </table>
        </center>
        </>
      }

      {
        hide?
        <div>
          <div className='edit-div'>
            
            <input name='Name' required onChange={changeHandler} value={store.Name} placeholder='Name' type="text" />
           
            <input name='Age' required onChange={changeHandler} value={store.Age} placeholder='Age' type="text" />
            
            <input name='Course' required onChange={changeHandler} value={store.Course} placeholder='Course' type="text" />
            
            <input name='Batch' required onChange={changeHandler} value={store.Batch} placeholder='Batch' type="text" />
          </div>
       
          <div className="button" onClick={addNewData}>
            {change? "Update" : "Submit"}
          <div></div>
          </div>
          <button className='btn-cancel' onClick={cancelHandle}>Cancel</button>
        </div>
        :
        null
    
      }
    </div>
    
  )
}
export default Student;
