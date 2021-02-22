const filterData = (dataArr, pageSize, pageNumber) => {
  const index = (pageNumber - 1) * pageSize
  const numPages = Math.ceil(dataArr.length / pageSize)

  // check if reaching the final page
  if (pageNumber === numPages) {
    return dataArr.slice(index, dataArr.length)
  }
  
  return dataArr.slice(index, index + pageSize)
}

module.exports = {
  DEFAULT_PAGE_SIZE: 10,
  DEFAULT_PAGE: 1,
  filterData,
}