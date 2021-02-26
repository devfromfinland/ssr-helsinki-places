import React, { useState } from 'react'
import { DEFAULT_PAGE_SIZE } from '../utils/helpers'

const Pagination = ({ page, size, totalCount }) => {
  const [goTo, setGoTo] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState(size)
  const [errors, setErrors] = useState(null)
  const numPages = Math.ceil(totalCount / size)

  const redirect = (newPage) => {
    if (size === DEFAULT_PAGE_SIZE && newPage === 1) {
      window.location.href = `/places`
    } else if (size === DEFAULT_PAGE_SIZE) {
      window.location.href = `/places/?page=${newPage}`
    } else {
      window.location.href = `/places/?page=${newPage}&size=${size}`
    }
  }

  const handlePrev = (e) => {
    if (page > 1) redirect(page - 1)
  }

  const handleNext = (e) => {
    if (page < numPages) redirect(page + 1)
  }

  const handleGoToPage = (e) => {
    e.preventDefault()
    
    if (goTo === page) {
      setErrors({ goTo: `You are currently on page ${goTo}` })
    } else if (goTo > 0 && goTo <= numPages) {
      redirect(goTo)
    } else {
      setErrors({ goTo: `Page should be > 0 and < ${numPages}` })
    }
  }

  const handleChangePageSize = (e) => {
    e.preventDefault()

    if (itemsPerPage >= 1 && itemsPerPage <= 50) {
      window.location.href = `/places/?size=${itemsPerPage}`
    } else {
      setErrors({ itemsPerPage: 'Items per page should be > 0 and < 50' })
    }
  }

  return (
    <div style={{
      marginTop: '10px',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: '10px',
    }}>
      <div>
        Page: {page}
        {' '}<button onClick={handlePrev}>Prev</button>
        {' '}<button onClick={handleNext}>Next</button>
        <div style={{ marginTop: '5px' }}>
          Go to page: <input type='number' width={30} min={1} max={numPages} value={goTo} onChange={(e) => setGoTo(parseInt(e.target.value))}/>{' '}
          <button onClick={handleGoToPage}>Go</button>
        </div>
        { errors && errors.goTo ? <div style={{ color: 'red' }}>{errors.goTo}</div> : null }
      </div>

      <div>
        <div>
          Items per page: <input type='number' min={1} max={50} value={itemsPerPage} onChange={(e) => setItemsPerPage(e.target.value)}/>{' '}
          <button onClick={handleChangePageSize}>Update</button>
        </div>
        { errors && errors.itemsPerPage ? <div style={{ color: 'red' }}>{errors.itemsPerPage}</div> : null }  
      </div>
    </div>
  )
}

export default Pagination
