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

    // TODO: Write logic to update the `edit` value in state after a user updates an entry in the list

    // TODO: Set the key:value pairs in the `edit` object back to empty strings

  };

  // If the user is attempting to edit an item, render the bucket form with the edit variable passed as a prop
  if (edit.id) {
    return <BucketForm edit={edit} onSubmit={submitUpdate} />;
  }

  {/*
    // TODO: Add a className of `bucket row complete ${item.eagerness}` for completed items, and `bucket-row ${item.eagerness}` for non-completed items
    // Hint: use a ternary operator
    // TODO: Completed items
  */}
  return props.bucket.map((item, index) => (
    <div className={`bucket row ${item.eagerness} ` + (item.complete ? 'complete' : '')} key={index} >
      <div key={index} onClick={() => { }}>
        {item.text}
      </div>
      <div className="icons">
        <p onClick={() => setEdit(item)}> ✏️</p>
        <p onClick={() => props.removeBucketItem(item.id)}> 🗑️</p >
        <p onClick={() => props.completeBucketItem(item.id)}> C</p>
      </div >
    </div >
  ));
}

export default Bucket;
