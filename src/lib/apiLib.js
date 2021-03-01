import fetch from 'node-fetch'
import { API_BASE_URL } from '../utils/config'

export const fetchPlaces = async (page, size, lang) => {
  const response = await fetch(`${API_BASE_URL}/?limit=${size}&start=${(page-1)*size}&language_filter=${lang}`)
  const result = await response.json()
  return result
}