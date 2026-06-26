import * as React from "react"

const Button = React.forwardRef(({ className = "", variant = "default", size = "default", ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50"
  
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    destructive: "bg-red-500 text-white hover:bg-red-600",
    outline: "border border-slate-300 bg-white hover:bg-slate-100 text-slate-900",
  }

  const sizes = {
    default: "h-10 px-4 py-2",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
  }

  const finalClassName = `${baseStyles} ${variants[variant] || variants.default} ${sizes[size] || sizes.default} ${className}`

  return (
    <button
      className={finalClassName}
      ref={ref}
      {...props}
    />
  )
})

Button.displayName = "Button"

export { Button }