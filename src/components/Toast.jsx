import { toast } from 'react-hot-toast'

const className = 'bg-default-50 text-default-500 h-9'

export function toastError ({ text }) {
  return toast.error(text,
    {
      className
    })
}

export function toastPromise ({ success, error, loading, promise }) {
  return toast.promise(
    promise,
    {
      loading,
      success,
      error: error || ((err) => `${err.message}`)
    },
    {
      className
    }
  )
}
