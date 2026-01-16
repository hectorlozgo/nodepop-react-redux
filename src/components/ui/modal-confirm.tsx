import { Button } from './button'
import { useDialog } from '../hooks/useDialog'

interface DialogConfirmProps {
  title: string
  isOpen: boolean
  isLoading: boolean
  onClose: () => void
  onConfirm: () => Promise<void> | void
}
export const DialogConfirm = ({
  title,
  isOpen,
  isLoading,
  onClose,
  onConfirm
}: DialogConfirmProps) => {
  const dialogRef = useDialog(isOpen)

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      className="fixed top-1/2 left-1/2 m-0 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-lg border border-gray-300 bg-gray-50 p-6 shadow-md backdrop:bg-black/10 backdrop:backdrop-blur-sm"
    >
      <div className="flex max-w-sm flex-col items-center text-center">
        <p className="mb-6 text-lg font-semibold text-gray-700">{title}</p>

        <div className="flex justify-center gap-4">
          <Button
            className="rounded-xl bg-gray-300 px-4 py-2 text-gray-800 hover:bg-gray-400"
            onClick={onClose}
            disabled={isLoading}
          >
            Cancelar
          </Button>
          <Button
            className="rounded-xl bg-red-600 px-4 py-2 text-white hover:bg-red-700"
            onClick={onConfirm}
            disabled={isLoading}
          >
            {isLoading ? 'Cerrando...' : 'Confirmar'}
          </Button>
        </div>
      </div>
    </dialog>
  )
}
