// Pokemon ID Generator
export const pokemonIDGenerator = (id: number) => {
  const idString = `${id}`

  const filler = '000'

  return filler.substring(0, filler.length - idString.length) + idString
}

// Handle HTTP Errors
export const handleErrors = (err: any) => {
  let errorMessage = {}

  if (err.response) {
    // The request was made and the server responded with a status code
    if (err.response.status === 400) {
      errorMessage = {
        message: 'bad-request',
        status: 400,
      }
    } else if (err.response.status === 401) {
      errorMessage = {
        message: 'unauthorized',
        status: 401,
      }
    } else if (err.response.status === 403) {
      errorMessage = {
        message: 'forbidden',
        status: 403,
      }
    } else if (err.response.status === 404) {
      errorMessage = {
        message: 'not-found',
        status: 404,
      }
    } else if (err.response.status === 405) {
      errorMessage = {
        message: 'method-not-allowed',
        status: 405,
      }
    } else if (err.response.status === 500) {
      errorMessage = {
        message: 'internal-server-error',
        status: 500,
      }
    } else {
      errorMessage = {
        message: 'something-went-wrong',
        status: 500,
      }
    }
  } else {
    errorMessage = {
      message: 'something-went-wrong',
      status: 500,
    }
  }

  return errorMessage
}
