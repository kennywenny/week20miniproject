import React, { useState } from 'react';
import BucketForm from './BucketForm';

function Bucket(props) {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
    eagerness: '',
  });

  console.log(props.bucket);

  const submitUpdate = (value) => {
    props.editBucketItem(edit.id, value)
    setEdit({
      id: null,
      value: '',
      eagerness: '',
    })

  };

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  return props.bucket.map((item, index) => (
    <div className={`bucket row ${item.eagerness} ` + (item.complete ? 'complete' : '')} key={index} >
      <div key={index}>{item.text}</div>
      <div className="icons">
        <p onClick={() => setEdit(item)}> ✏️</p>
        <p onClick={() => props.removeBucketItem(item.id)}> 🗑️</p >
        <p onClick={() => props.completeBucketItem(item.id)}> C</p>
      </div >
    </div >
  ));
}

export default Bucket;
