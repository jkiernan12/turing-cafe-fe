const fetchAllRes = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
  .then(res => res.json())
}

const postData = (data) => {
  fetch('http://localhost:3001/api/v1/reservations', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
}

const deleteData = (id) => {
  fetch('http://localhost:3001/api/v1/reservations/' + id, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export { fetchAllRes, postData, deleteData }