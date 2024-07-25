import React from 'react'
import { Button } from '../ui/button'
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react'

export interface PaginationProps {
  pageIndex: number,
  totalCount: number,
  onPageChange: (pageIndex: number) => Promise<void> | void
}

export  function Pagination({ pageIndex, totalCount, onPageChange }: PaginationProps) {


  return (
    <div className="flex items-center justify-between my-3">
    <span className="text-sm text-muted-foreground"></span>
    <div className="flex items-center gap-6 lg:gap-8">
      <div className="text-sm font-medium">Página {pageIndex + 1} de {totalCount + 1}</div>
      <div className="flex items-center gap-2">
        <Button
          onClick={() => onPageChange(0)}
          variant="outline"
          className="h-8 w-8 p-0"
          disabled={pageIndex === 0}
        >

          <ChevronsLeft className="h-4 w-4" />
          <span className="sr-only">Primeira página</span>
        </Button>
        <Button
          onClick={() => onPageChange(pageIndex - 1)}
          variant="outline"
          className="h-8 w-8 p-0"
          disabled={pageIndex === 0}
        >
          <ChevronLeft className="h-4 w-4" />
          <span className="sr-only">Página anterior</span>
        </Button>
        <Button
          onClick={() => onPageChange(pageIndex + 1)}
          variant="outline"
          className="h-8 w-8 p-0"
          disabled={pageIndex >= totalCount}
        >
          <ChevronRight className="h-4 w-4" />
          <span className="sr-only">Próxima página</span>
        </Button>
        <Button
          onClick={() => onPageChange(totalCount - 1)}
          variant="outline"
          className="h-8 w-8 p-0"
          disabled={totalCount <= pageIndex + 1}
        >
          <ChevronsRight className="h-4 w-4" />
          <span className="sr-only">Última página</span>
        </Button>
      </div>
    </div>
  </div>
  )
}
