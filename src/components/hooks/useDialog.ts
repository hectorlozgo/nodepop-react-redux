import { useEffect, useEffectEvent, useRef } from 'react'

export const useDialog = (isOpen: boolean) => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const handleDialog = useEffectEvent((shouldOpen: boolean) => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (shouldOpen && !dialog.open) dialog.showModal()
    if (!shouldOpen && dialog) return dialog.close()
  })

  useEffect(() => {
    handleDialog(isOpen)
  }, [isOpen])

  return dialogRef
}
