import categories from '@/lib/data/categories.json'
import type {Category} from '@/lib/types'

export async function getCategories(){
  return categories as Category[]
}

export async function getCategoryBySlug(categorySlug:string){
  return (categories as Category[]).find((category) => category.slug === categorySlug)
}