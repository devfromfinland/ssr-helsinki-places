import React, { useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { DEFAULT_PAGE_SIZE } from '../utils/helpers'

const Pagination = ({ page, size, totalCount }) => {
  const [goTo, setGoTo] = useState('')
  const [itemsPerPage, setItemsPerPage] = useState(size || DEFAULT_PAGE_SIZE)
  const [errors, setErrors] = useState(null)
  const numPages = size
    ? Math.ceil(totalCount / size)
    : Math.ceil(totalCount / DEFAULT_PAGE_SIZE)

  const redirect = (newPage) => {
    if (itemsPerPage === DEFAULT_PAGE_SIZE && newPage === 1) {
      window.location.href = '/places'
    } else if (itemsPerPage === DEFAULT_PAGE_SIZE) {
      window.location.href = `/places/?page=${newPage}`
    } else {
      window.location.href = `/places/?page=${newPage}&size=${itemsPerPage}`
    }
  }

  const handlePrev = () => {
    if (page > 1) redirect(page - 1)
  }

  const handleNext = () => {
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
    <Wrapper data-cy="pagination">
      <div>
        Page:
        {' '}
        {page}
        {' '}
        <button type="button" onClick={handlePrev} data-cy="btn-prev">Prev</button>
        {' '}
        <button type="button" onClick={handleNext} data-cy="btn-next">Next</button>
        <div style={{ marginTop: '5px' }}>
          Go to page:
          {' '}
          <input
            type="number"
            width={30}
            min={1}
            value={goTo}
            onChange={(e) => setGoTo(parseInt(e.target.value, 10))}
            data-cy="input-page"
          />
          {' '}
          <button type="button" onClick={handleGoToPage} data-cy="btn-go">Go</button>
        </div>
        { errors && errors.goTo ? <ErrorMessage data-cy="err-goto">{errors.goTo}</ErrorMessage> : null }
      </div>

      <div>
        <div>
          Items per page:
          {' '}
          <input
            type="number"
            min={1}
            max={50}
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(e.target.value)}
            data-cy="input-size"
          />
          {' '}
          <button type="button" onClick={handleChangePageSize} data-cy="btn-update">Update</button>
        </div>
        { errors && errors.itemsPerPage ? <ErrorMessage data-cy="err-page-size">{errors.itemsPerPage}</ErrorMessage> : null }
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  margin-top: 10px;
`

const ErrorMessage = styled.div`
  color: red;
`

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  totalCount: PropTypes.number.isRequired,
  size: PropTypes.number,
}

export default Pagination
