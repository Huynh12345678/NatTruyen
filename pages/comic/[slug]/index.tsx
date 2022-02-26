import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import React, { useState } from 'react';
import { getComicInfo } from '../../../shared/api/comic';
import { ComicProps } from '../../../shared/types';
import { RiSortDesc } from 'react-icons/ri';

const Comic: NextPage<ComicProps> = ({ info, slug }) => {
    // const { data, error } = useSWR('/api/profile-data', async() => {
    //    await getComicInfo(params?.slug as string);
    // })

    // if (error) return <div>Failed to load</div>
    // if (!data) return <div>Loading...</div>

    const [dt, setDt] = useState<any>(info);
    const handleSort = () => {
        setDt({
            ...dt,
            chapters: dt.chapters.slice().reverse()
        });
    }

    return (
        <div className='px-[5vw] lg:h-[92.5vh] py-10 flex flex-col lg:flex-row'>
            <div className='lg:w-[60vw] lg:pr-10'>
                <div className='flex mb-2 gap-4 flex-col sm:flex-row'>
                    <img className='h-[300px] w-[200px] object-cover mx-auto sm:mx-0' src={info.cover} alt="" />
                    <div className='info gap-2 flex flex-col'>
                        <h1 className=' font-bold text-2xl'>{info.title}</h1>
                        <p>Tác giả: {info.author}</p>
                        <p>Trạng thái: {info.status}</p>
                        <p>Thể loại: {info.genres.join(", ")}</p>
                        <div className='my-2'>
                            <Link href={{
                                pathname: `/comic/${slug}/${info.chapters.slice(-1)[0].chap}`,
                                query: { id: info.chapters.slice(-1)[0].id },
                            }}>
                                <a className=' bg-link p-2 mr-2 rounded-sm hover:bg-link-hover transition duration-300'>Đọc từ đầu</a>
                            </Link>
                            <Link href={{
                                pathname: `/comic/${slug}/${info.chapters[0].chap}`,
                                query: { id: info.chapters[0].id },
                            }}>
                                <a className=' bg-link p-2 rounded-sm hover:bg-link-hover  transition duration-300'>Đọc mới nhất</a>
                            </Link>
                        </div>
                    </div>
                </div>
                <p className=' break-words text-justify'>{info.desc}</p>
            </div>
            <p className='lg:hidden font-bold text-xl my-2'>Chapters</p>
            <div className='chapters lg:w-[40vw] max-h-[100vh] overflow-auto pr-3 border-gray-700 border lg:border-0'>
                <ul>
                    <div className='px-3 py-1 hidden lg:block sticky bg-primary top-0 text-xl font-bold'>
                        <h1 className='inline'>Chapters</h1>
                        <RiSortDesc title='Sort' onClick={() => handleSort()} className='float-right font-bold hover:brightness-75' size={25} />
                    </div>
                    {
                        dt.chapters.map((item: any) => (
                            <Link key={item.id} href={{
                                pathname: `/comic/${slug}/${item.chap}`,
                                query: { id: item.id }
                            }}>
                                <a className='border-gray-700 px-3 py-1 lg:border-0 border-b flex justify-between hover:text-link visited:text-link visited:hover:text-link-hover'>
                                    <span className='transition duration-150 w-auto sm:w-8/12 text-left'>{item.name}</span>
                                    <span className=' text-gray-400 w-auto sm:w-1/4 text-right sm:text-center italic'>{item.updateAt}</span>
                                    <span className=' text-gray-400 w-1/12 text-sm text-right italic hidden sm:block'>{item.view}</span>
                                </a>
                            </Link>
                        ))
                    }
                </ul>
            </div>
        </div>
    );
};


export const getServerSideProps: GetServerSideProps = async ({ params }) => {
    try {
        const data = await getComicInfo(params?.slug as string);

        return {
            props: {
                slug: params?.slug,
                info: data,
            }
        };
    } catch (error) {
        console.log(error);
        return {
            notFound: true,
        };
    }
};

export default Comic;