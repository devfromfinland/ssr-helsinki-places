const filterData = (dataArr, pageSize, pageNumber) => {
  // TODO: check if reaching the final items
  
  const index = (pageNumber - 1) * pageSize
  console.log('filter', index, index + pageSize)
  return dataArr.slice(index, index + pageSize)
}

module.exports = {
  DEFAULT_PAGE_SIZE: 10,
  DEFAULT_PAGE: 1,
  filterData,
}