import React from 'react'
import './create.css'
export const Create = () => {
  return (
    <div className='create'>
      <h2>Add new article</h2>
          <form>
            <input type="text" name="title" id="title" placeholder='Title'/>
            <input type="text" name="content" id="content" placeholder='Content'/>
            <input type="file" name="file" id="file" />
            <input type="submit" value='Guardar' />
      </form>
    </div>
  )
}
