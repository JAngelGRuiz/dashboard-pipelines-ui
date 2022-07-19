export const useLocalStorage = () => {
  const uploadToLS = (key, data) => {
    localStorage.setItem(key, data)
  }

  const getFromLS = (key) => {
    const value = localStorage.getItem(key)
    return value
  }

  return { uploadToLS, getFromLS }
}
