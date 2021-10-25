import { FC } from 'react'
import SideBar from "../SideBar";

export type LayoutProps = {
  children: JSX.Element,
}

const Layout: FC<LayoutProps> = ({
  children
}) => {
  return (
    <div className={'flex'}>
      <SideBar />
      <main className={'p-5'}>
        {children}
      </main>
    </div>
  )
}

export default Layout;