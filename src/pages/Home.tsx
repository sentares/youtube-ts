import { useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Card from '../components/Card'
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import Spinner from '../components/Spiner'
import Spiner from '../components/Spiner'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos'
import { HomePageVideos } from '../Types'

export default function Home() {
	const dispatch = useAppDispatch()
	const videos = useAppSelector(state => state.youtubeApp.videos)

	useEffect(() => {
		dispatch(getHomePageVideos(false))
	}, [dispatch])
	console.log(videos)

	return (
		<div className='homePage'>
			<div style={{ height: '7.5vh' }}>
				<NavBar />
			</div>
			<div className='flex' style={{ height: '92.5vh' }}>
				<Sidebar />
				{videos.length ? (
					<InfiniteScroll
						dataLength={videos.length}
						next={() => dispatch(getHomePageVideos(true))}
						hasMore={videos.length < 500}
						loader={<Spinner />}
						height={650}
					>
						<div className='contentBlock'>
							{videos.map((item: HomePageVideos) => {
								return <Card data={item} key={item.videoId} />
							})}
						</div>
					</InfiniteScroll>
				) : (
					<Spiner />
				)}
			</div>
		</div>
	)
}
