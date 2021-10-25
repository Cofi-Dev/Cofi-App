import { FC } from 'react';

export type SideBarProps = {
  color?: String
}

const SideBar: FC<SideBarProps> = ({
  color
}) => {
  return (
    <div className="flex">
      <div className=" bg-gray-900 w-20 flex-none flex flex-col min-h-screen h-screen px-2 py-2">
        <div className="channel-bar overflow-y-auto">
          <ul className="text-center">
            <li><a href="#"><img src="/icon_discord.svg" alt="discord" className="w-12 h-12 rounded-full mx-auto" /></a></li>
            <li className="border-b border-gray-700 mx-4 mt-3"></li>
            <li className="mt-3">Test 1</li>
            <li className="mt-3">Test 2</li>
            <li className="mt-3">Test 3</li>
            <li className="mt-3">
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-teal-500 text-teal-500 hover:text-white inline-block rounded-full">
                <svg fill="currentColor" className="mt-3 mx-auto" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
              </a>
            </li>
            <li className="mt-2">
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-teal-500 text-teal-500 hover:text-white inline-block rounded-full">
                <svg fill="currentColor" className="mt-3 mx-auto" viewBox="0 0 24 24" width="24" height="24"><path className="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
              </a>
            </li>
            <li className="border-b border-gray-700 mx-4 mt-3"></li>
            <li className="mt-3">
              <a href="#" className="w-12 h-12 bg-gray-800 hover:bg-teal-500 text-teal-500 hover:text-white inline-block rounded-full">
                <svg fill="currentColor" className="mt-3 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path className="heroicon-ui" d="M11 14.59V3a1 1 0 0 1 2 0v11.59l3.3-3.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-1.4 0l-5-5a1 1 0 0 1 1.4-1.42l3.3 3.3zM3 17a1 1 0 0 1 2 0v3h14v-3a1 1 0 0 1 2 0v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3z"></path></svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar;