import produce, { Draft } from "immer"
import { useState } from "react"

const useProduceState = <T>(val: T): [T, (recipe: (draft: Draft<T>) => void) => void] => {
   const [v, setV] = useState(val)
   const setter = (recipe: (draft: Draft<T>) => void) => {
      setV(produce(v, recipe))
   }
   return [v, setter]
}

export default useProduceState
