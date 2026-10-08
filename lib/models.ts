import models from '@/lib/data/models.json'
import type { Model } from '@/lib/types'

export async function getModels({search, sort, categorySlug, page, modelsPerPage}:{
  search?:string,
  sort?:string,
  categorySlug?:string,
  page:number,
  modelsPerPage:number
}){
  const result = (models as Model[]).filter((model) => {
    const matchesSearch = !search ||
      model.name.toLowerCase().includes(search.toLowerCase()) ||
      model.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = !categorySlug || model.category === categorySlug
    return matchesSearch && matchesCategory
  })

  if (sort === 'alpha') {
    result.sort((a, b) => a.name.localeCompare(b.name))
  } else if (sort === 'popular') {
    result.sort((a, b) => b.likes - a.likes)
  } else if (sort === 'recent') {
    result.sort((a, b) => b.dateAdded.localeCompare(a.dateAdded))
  }

  if (page && modelsPerPage) {
    const offset = (page - 1) * modelsPerPage
    return result.slice(offset, offset + modelsPerPage)
  }

  return result
}

export async function getModelById(id:string){
  return (models as Model[]).find((model) => model.id === Number(id))
}

export async function getModelCount({search, categorySlug}:{
  search?:string,
  categorySlug?:string
}){
  return (models as Model[]).filter((model) => {
    const matchesSearch = !search ||
      model.name.toLowerCase().includes(search.toLowerCase()) ||
      model.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = !categorySlug || model.category === categorySlug
    return matchesSearch && matchesCategory
  }).length
}