import { Dispatch, SetStateAction } from "react"

interface Props {
  setSearchText: Dispatch<SetStateAction<string>>
}

export const SearchBar = ({setSearchText}: Props) => {
  return (
    <div className="max-w-md mx-auto">   
      <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
              </svg>
          </div>
          <input 
            type="search" 
            id="product-search" 
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50" 
            placeholder="Search products..." 
            onChange={(event) => setSearchText(event.target.value)}
          />
      </div>
  </div>
  )
}
