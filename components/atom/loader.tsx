interface loaderProps {
    className ?: string
}

const Loader = ({className } : loaderProps) => {
  return (
      <div className={`w-12 h-12 border-4 border-x-transparent border-y-blue-500 rounded-full animate-spin ${className}`}></div>
  )
}

export default Loader;