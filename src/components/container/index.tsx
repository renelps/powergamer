import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode
}
export function Container({ children }: ContainerProps ) {
  return (
    <div className="max-w-screen-xl mx-auto px-3">
      {children}
    </div>
  )
}