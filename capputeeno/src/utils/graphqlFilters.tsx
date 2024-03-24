import { FilterType } from "@/types/filterTypes"
import { PriorityTypes } from "@/types/priorityTypes"

export const getCategoryName = (type: FilterType) => {
    if (type === FilterType.SHIRT) {
        return 't-shirts'
    }
    else if (type === FilterType.MUG) {
        return 'mugs'
    }
}

export const getPriorityName = (priority: PriorityTypes) => {
    if (priority === PriorityTypes.BIGGEST_PRICE) {
        return 'sortField: "price_in_cents", sortOrder: "DESC"'
    }
    else if (priority === PriorityTypes.MENOR_PRICE) {
        return 'sortField: "price_in_cents", sortOrder: "ASC"'
    }
    else if (priority === PriorityTypes.POPULARITY) {
        return 'sortField: "sales", sortOrder: "DESC"'
    }
    else if (priority === PriorityTypes.NEWS) {
        return 'sortField: "created_at", sortOrder: "DESC"'
    }
}

export const formatQuery = (type: FilterType, priority: PriorityTypes): string => {
    const queryCategory = getCategoryName(type)
    const queryPriority = getPriorityName(priority)  

    if (type == FilterType.MUG || type == FilterType.SHIRT) {
        return `
        query {
            allProducts(filter: {category: "${queryCategory}"}, ${queryPriority}) {
            id
            name
            price_in_cents
            image_url
            category
            created_at
            }
        }
        `
    }
    else {
        return `
        query {
            allProducts (${queryPriority}){
            id
            name
            price_in_cents
            image_url
            category
            created_at
            }
        }
        `
    }
}