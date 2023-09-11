
//Performance Hooks
import React from 'react'


// to avaiod  the re render the block where we use performence hook
//usememo
//useCallback
//useTransition
//useDeferredValue

const Performence = ({todos, tab , theme}) => {
    const visibleTodos = useMemo(()=> filterTodos(todos,tab), [todos,tab])
  return (
    <div>Performence</div>
  )
}

export default Performence