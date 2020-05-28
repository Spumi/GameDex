import React from 'react'

const PageContext = React.createContext({page: 1})
export const PageProvider = PageContext.Provider
export default PageContext