import React from 'react'
import { usePage, useDispatch } from '../Hooks/appContext'

export const Pagination = () => {
  const page = usePage()
  const dispatch = useDispatch()

  const prePage = () => dispatch({ type: 'PREVIOUS_PAGE' })
  const nextPage = () => dispatch({ type: 'NEXT_PAGE' })
  
  return (
    <div>
      <button disabled={page === 1} name='prev' onClick={prePage}>Previous</button>
      <button  name='next' onClick={nextPage}>Next</button>
    </div>
  )
}
