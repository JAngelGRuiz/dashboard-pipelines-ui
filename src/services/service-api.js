const router = (method, body) => {
  if (method === 'PUT' || method === 'POST' || method === 'DELETE') {
    return {
      method,
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(body)
    }
  }

  return {
    method,
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer'
  }
}

export const serviceAPI = async ({ url, method = 'GET', body = {} }) => {
  try {
    const response = await fetch(url, router(method, body))

    if (!response.ok) {
      console.error(`Ups! Something went wrong with a status code of ${response.status}`)
      return {
        messagge: response.messagge,
        status: response.status
      }
    }

    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
    return error
  }
}
