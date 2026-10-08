import PaginationButton from '@/components/PaginationButton'

export default function PaginationControls({totalPages, currentPage}:{
  totalPages:number,
  currentPage:number
}){
  return (
    <div className="flex justify-center gap-1">  
      {currentPage !== 1 && (
        <PaginationButton page={1} label="<<"/>
      )}
      {currentPage !== 1 && (
        <PaginationButton page={currentPage-1}/>
      )}
      <PaginationButton page={currentPage} isActive={true}/>
      {currentPage !== totalPages && (
        <PaginationButton page={currentPage+1}/>
      )}
      {currentPage !== totalPages && (
        <PaginationButton page={totalPages} label=">>"/>
      )}
    </div>
  )
}