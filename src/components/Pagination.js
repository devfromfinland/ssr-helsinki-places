import React, { useState } from 'react'
import { DEFAULT_PAGE_SIZE } from '../utils/helpers'

const Pagination = ({ page, size, totalCount }) => {
  const [goTo, setGoTo] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState(size)
  const numPages = Math.ceil(totalCount / size)

  const redirect = (newPage) => {
    size === DEFAULT_PAGE_SIZE
      ? window.location.href = `/page/${newPage}`
      : window.location.href = `/page/${newPage}?size=${size}`
  }

  const handlePrev = (e) => {
    // e.preventDefault()
    if (page > 1) redirect(page - 1)
  }

  const handleNext = (e) => {
    // e.preventDefault()
    if (page < numPages) redirect(page + 1)
  }

  const handleGoToPage = (e) => {
    e.preventDefault()
    
    if (goTo === page) {
      // TODO: show notification
      console.log('you are on that page already')
    } else if (goTo > 0 && goTo <= numPages) {
      redirect(goTo)
    } else {
      // TODO: show notification
      console.log(`page should be > 0 and < ${numPages}`)
    }
  }

  const handleChangePageSize = (e) => {
    e.preventDefault()

    if (itemsPerPage >= 1 && itemsPerPage <= 50) {
      window.location.href = `/page/1?size=${itemsPerPage}`
    } else {
        // TODO: show notification
        console.log('items per page should be > 0 and < 50')
      }
  }

  return (
    <div style={{ marginBottom: '10px' }}>
      <div>
        <span>Current page: {page}</span>

        {page > 1 ? (
          <>
            {' '}<button onClick={handlePrev}>Prev</button>
          </>
        ) : null}

        {page < numPages ? (
          <>
            {' '}<button onClick={handleNext}>Next</button>
          </>
        ) : null}
      </div>
      <div>
        Items per page: <input type='number' min={1} max={50} value={itemsPerPage} onChange={(e) => setItemsPerPage(e.target.value)}/>{' '}
        <button onClick={handleChangePageSize}>Set</button>
      </div>
      <div>
        Go to page: <input type='number' min={1} max={numPages} value={goTo} onChange={(e) => setGoTo(parseInt(e.target.value))}/>{' '}
        <button onClick={handleGoToPage}>Go</button>
      </div>
    </div>
  )
}

export default Pagination
