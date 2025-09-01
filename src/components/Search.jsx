import React, { useState } from 'react'
import { search } from '../apis'
import { SearchIcon } from 'lucide-react'

const Search = () => {

  const [searchResults, setSearchResults] = useState([])
  const [query, setQuery] = useState("")

  const handleSearch = async (e) => {
    const searchValue = e.target.value
    setQuery(searchValue)

    if (!searchValue.trim()) {
      setSearchResults([])
      return
    }
    try {
      const response = await search(searchValue)
      setSearchResults(response || [])
    } catch (err) {
      console.error('Search error:', err)
      setSearchResults([])
    }
  }

  return (
    <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
      <div className="relative w-full max-w-xl">
        {/* Search Input */}
        <div className='flex items-center justify-center'>
          <input
            type="text"
            onChange={handleSearch}
            className="w-full border rounded-2xl px-4 py-2 text-sm sm:text-base focus:outline-none shadow-sm"
            placeholder="Search for restaurants & dishes"
          />
          <SearchIcon className='absolute right-4 text-placeholder pointer-events-none w-5 h-5' />
        </div>

        {query.trim() && (
          <div className="absolute left-0 right-0 mt-2 bg-white border rounded-xl shadow-lg z-10">
            {searchResults.length > 0 ? (
              <ul className="max-h-64 overflow-y-auto">
                {searchResults.map((result, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base"
                  >
                    {result.name || result.title || 'Result'}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="px-4 py-2 text-gray-500 text-sm sm:text-base">
                No results found
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default Search
