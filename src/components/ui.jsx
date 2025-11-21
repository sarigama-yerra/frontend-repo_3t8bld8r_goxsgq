import { twMerge } from 'tailwind-merge'
import { forwardRef } from 'react'

export const Section = ({ className = '', id, children }) => (
  <section id={id} className={twMerge('py-20 md:py-28', className)}>
    <div className="container mx-auto px-6">{children}</div>
  </section>
)

export const Button = forwardRef(function Button(
  { as = 'button', variant = 'primary', className = '', ...props },
  ref
) {
  const base = 'inline-flex items-center justify-center font-medium px-5 py-2.5 rounded-md transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none'
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-400',
    secondary: 'bg-slate-100 text-slate-900 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700',
    ghost: 'bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800',
  }
  const Comp = as === 'a' ? 'a' : 'button'
  return (
    <Comp ref={ref} className={twMerge(base, variants[variant], className)} {...props} />
  )
})

export const Card = ({ className = '', children }) => (
  <div className={twMerge('rounded-xl border border-slate-200 bg-white shadow-sm dark:bg-slate-900/60 dark:border-slate-800', className)}>
    {children}
  </div>
)

export const CardHeader = ({ className = '', children }) => (
  <div className={twMerge('p-6 border-b border-slate-200/60 dark:border-slate-800', className)}>{children}</div>
)

export const CardContent = ({ className = '', children }) => (
  <div className={twMerge('p-6', className)}>{children}</div>
)

export const CardFooter = ({ className = '', children }) => (
  <div className={twMerge('p-6 border-t border-slate-200/60 dark:border-slate-800', className)}>{children}</div>
)

export const Container = ({ className = '', children }) => (
  <div className={twMerge('container mx-auto px-6', className)}>{children}</div>
)
