import { FC } from 'react';
import { SidebarProps } from 'shared/types';
import Link from 'next/link';
import { usePosition } from 'hooks/usePosition';
import { logout } from 'shared/firebase';

const RightSideBar: FC<SidebarProps> = ({ id, closeNav, user }) => {
  const { handlePosition } = usePosition();

  return (
    <div id={id} className='sidenav z-20 !w-[270px] p-6 !bg-[#191a1c]' style={{ "right": "-270px" }}>
      <p className="closebtn" onClick={closeNav}>×</p>

      {!user ? (
        <>
          <div className='flex flex-col items-center gap-4'>
            <svg data-v-20f285ec="" data-v-316b5106="" width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-icon-black dark:text-icon-white text-false icon" id="avatar">
              <path data-v-20f285ec="" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <span className='text-white text-xl font-bold'>Guest</span>
          </div>

          <hr className='my-6 w-full' />

          <div className='flex gap-4 justify-between'>
            <Link href='/login'>
              <a onClick={closeNav} className='w-full text-center py-3 font-semibold rounded-[4px] text-white bg-[#e6613e]'>Log In</a>
            </Link>
            <Link href='/register'>
              <a onClick={closeNav} className='w-full text-center py-3 font-semibold rounded-[4px] text-white bg-[#4f4f4f]'>Register</a>
            </Link>
          </div>
        </>
      ) : (
        <div className='flex flex-col items-center gap-4'>
          <img
            src={user?.photoURL!}
            className='rounded-full'
            alt="Photo"
            width={64}
            height={64}
          />
          <span className='text-white text-2xl font-bold'>{user.displayName}</span>
          <span className='px-2 py-1 rounded-[3px] text-sm bg-white text-black'>Member</span>

          <hr className='my-3 w-full' />

          <div className="w-full flex flex-col gap-3">
            <Link href="/dashboard">
              <a onClick={closeNav} className='flex text-white text-[17px] items-center space-x-2'>
                <svg data-v-20f285ec data-v-a376878c width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 text-icon-black dark:text-icon-white text-false icon"><path data-v-20f285ec d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span className='font-semibold'>My Profile</span>
              </a>
            </Link>
            <Link href="/bookmarks">
              <a className='flex text-white text-[17px] items-center space-x-2' onClick={() => { handlePosition(0); closeNav(); }}>
                <svg data-v-20f285ec data-v-a376878c width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 text-icon-black dark:text-icon-white text-false icon"><path data-v-20f285ec d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span className='font-semibold'>My Follows</span>
              </a>
            </Link>
            <Link href="/recents">
              <a className='flex text-white text-[17px] items-center space-x-2' onClick={() => { handlePosition(0); closeNav(); }}>
                <svg data-v-20f285ec data-v-a376878c width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 text-icon-black dark:text-icon-white text-false icon"><path data-v-20f285ec d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span className='font-semibold'>List Recents</span>
              </a>
            </Link>
          </div>

          <hr className='my-3 w-full' />

          <span onClick={logout} className='text-start w-full flex space-x-2 text-white text-[17px]'>
            <svg data-v-20f285ec data-v-6bf95648 width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 text-icon-black dark:text-icon-white text-false icon"><path data-v-20f285ec d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4M16 17l5-5-5-5M21 12H9" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span className='font-semibold'>Sign Out</span>
          </span>
        </div>
      )}

    </div>
  );
};

export default RightSideBar;