/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/F41nr23hlHV
 */
import { Outlet, useNavigate, useLocation } from "react-router-dom"
import { useCallback, useMemo } from "react"
import { TabsTrigger, TabsList, Tabs } from "@/components/ui/tabs"
import { SheetContent, Sheet } from "@/components/ui/sheet"

export const AuthSheet = () => {
  const location = useLocation()
  const isLogin = location.pathname === `/auth/login`
  const isRegister = location.pathname === `/auth/register`

  const navigate = useNavigate()

  const handlTabsChange = useCallback(
    (value: string) => {
      navigate(`/auth/${value}`)
    },
    [navigate]
  )

  const defaultValue = useMemo(() => {
    if (isLogin) return `login`
    if (isRegister) return `register`
    return `login`
  }, [isLogin, isRegister])
  return (
    <Sheet
      key="1"
      defaultOpen
      onOpenChange={(open) => {
        if (open === false) {
          navigate(`/`)
        }
      }}
    >
      <SheetContent className="overflow-y-auto" side="left">
        <div className="flex justify-center space-x-4 p-4">
          <Tabs
            className="w-full"
            defaultValue={defaultValue}
            onValueChange={handlTabsChange}
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="login">Login</TabsTrigger>
              <TabsTrigger value="register">Register</TabsTrigger>
            </TabsList>
            <div className="mt-8">
              <Outlet />
            </div>
          </Tabs>
        </div>
      </SheetContent>
    </Sheet>
  )
}