import React from 'react'

import styles from './NewTweetForm.module.css'

const NewTweetForm = () => {
  return (
    <div>
        <form className={styles.form}>
        <div>
          <label htmlFor='user'>User</label>
          <input type='text' required id='user'/>
        </div>
        <div>
          <label htmlFor='address'>Date</label>
          <input type='datetime-local' required id='date'/>
        </div>
        <div>
          <label htmlFor='text'>Tweet Text</label>
          <textarea
            id='text'
            required
            rows='5'
          ></textarea>
        </div>
        <div>
          <button>Tweet Now!</button>
        </div>
      </form>
    </div>
  )
}

export default NewTweetForm