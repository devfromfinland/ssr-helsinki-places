const filterData = (dataArr, pageSize, pageNumber) => {
  // TODO: check if reaching the final items
  let remainingCount = pageSize
  const pos = pageNumber - 1

  return dataArr.slice(pageSize * pos, pageSize * pos + remainingCount)
}

module.exports = {
  DEFAULT_PAGE_SIZE: 10,
  DEFAULT_PAGE: 1,
  filterData,
}