import { assign, cloneDeep, omit, set } from 'lodash'
import { observable } from 'mobx'
import { useRef } from 'react'

export default function useForm<T>(form: T, withRef = true) {
  const originalForm = cloneDeep(form)
  const instance = observable({
    ...form,
    /** 更新表单 */
    update(key: string, value: any) {
      set(instance, key, value)
    },
    /** 更新表单 */
    assign(updated: Partial<T>) {
      Object.assign(instance, updated)
    },
    /** 重置为初始值 */
    reset() {
      assign(instance, originalForm)
    },
    getForms() {
      return omit(instance, ['update', 'reset', 'assign', 'getForms'])
    },
  })
  if (!withRef) return instance

  // @ts-ignore eslint-disable-next-line react-hooks/rules-of-hooks
  const store = useRef!(instance).current
  return store
}
