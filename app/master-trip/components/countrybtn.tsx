import { CountryButtonProps } from '@/interfaces/SchceduleInterfaces'
import { cn } from '@/lib/utils'

export function CountryButton({
  children,
  isSelected,
  onClick
}: CountryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'px-4 py-2 text-sm font-medium transition-all duration-200 ease-in-out rounded-md',
        isSelected
          ? 'bg-white text-blue-600 shadow-sm'
          : 'bg-transparent text-gray-600 hover:bg-gray-200'
      )}
    >
      {children}
    </button>
  )
}
