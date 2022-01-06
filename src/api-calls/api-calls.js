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

export {fetchAllRes, postData}