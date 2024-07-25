"use client"

import React, { useCallback, useEffect, useState } from 'react'
import { searchProduct } from '@/api/search-Product'
import type { Product, ProductsResponse } from '@/api/get-all-products'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Pagination } from '@/components/Pagination'
import { LeftMenu } from './_components/LeftMenu'
import { CardItem } from '@/components/ProductCard/CardItem'
import { ProductNotFound } from './_components/ProductNotFound'

const defaultProductsResponse: ProductsResponse = {
  content: [],
  pageable: {
    pageNumber: 0,
    pageSize: 10,
    offset: 0,
    paged: true,
    unpaged: false,
    sort: {
      empty: true,
      sorted: false,
      unsorted: true
    }
  },
  totalElements: 0,
  totalPages: 1,
  number: 0,
  size: 10,
  sort: {
    empty: true,
    sorted: false,
    unsorted: true
  },
  first: true,
  last: false,
  numberOfElements: 0,
  empty: true
}


export default function products() {

  const searchParams = useSearchParams()
  const nameProduct = searchParams.get('name')


  const router = useRouter()
  const pathname = usePathname()



  const [productState, setProductState] = useState<ProductsResponse>(defaultProductsResponse)

  async function findProducts(pageIndex: number) {
    const result = await searchProduct({ page: pageIndex, product: nameProduct })
    setProductState(result)
  }

  useEffect(() => {
    if (nameProduct) {
      findProducts(0)
    }
  }, [nameProduct])

  const handlePagination = useCallback((pageIndex: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', (pageIndex).toString())

    router.replace(`${pathname}?${params.toString()}`)
    findProducts(pageIndex)
  },
    [searchParams, router, pathname]
  )

  return (
    <div className='max-w-screen-2lg m-auto'>
      {productState.content.length ? (
        <div className=''>

          <div className='w-full  h-[60px] py-3'>
            <p className='text-sm text-zinc-800'>Buscas relacionadas: <span className='text-xd text-zinc-700'> playstation 6 playstation 4 playstation 3 playstation 7 playstation 1 cd playstation 2 jogos playstation 2</span></p>
          </div>

          <div className='grid grid-cols-[290px_1fr]'>
            <div className='w-full '>
              <LeftMenu />
            </div>

          <div className='grid grid-cols-3 gap-4 '>
              {productState.content.map(item => (
                <CardItem
                  id={item.id}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                  photoUrl={item.photoUrl}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className='w-full h-[300px] flex items-end justify-center'>
          <ProductNotFound />
        </div>
      )}

      {productState.content.length > 1 &&
        <Pagination
          onPageChange={handlePagination}
          pageIndex={productState.number}
          totalCount={productState.totalPages}
        />
      }

    </div>
  )
}
