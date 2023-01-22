import { useEffect } from 'react'
import NavBar from '../components/NavBar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos'

export default function Home() {
	const dispatch = useAppDispatch()
	const videos = useAppSelector(state => state.youtubeApp.videos)

	useEffect(() => {
		dispatch(getHomePageVideos(false))
	}, [dispatch])

	return (
		<div className='homePage'>
			<div style={{ height: '7.5vh' }}>
				<NavBar />
			</div>
			<div className='flex' style={{ height: '92.5vh' }}>
				<Sidebar />
			</div>
		</div>
	)
}
