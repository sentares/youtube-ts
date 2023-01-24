import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import NavBar from '../components/NavBar'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getRecommendedVideos } from '../store/reducers/getRecommendedVideos'
import { getVideoDetails } from '../store/reducers/getVideoDetails'
import { BiLike, BiDislike } from 'react-icons/bi'
import { FaShare } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'
import WatchCard from '../components/WatchCard'

export default function Watch() {
	const [showMoreStatus, setShowMoreStatus] = useState<boolean>(false)
	const { id } = useParams()
	const dispatch = useAppDispatch()
	const navigate = useNavigate()
	const currentPlaying = useAppSelector(
		state => state.youtubeApp.currentPlaying
	)
	const recommendedVideos = useAppSelector(
		state => state.youtubeApp.recommendedVideos
	)

	useEffect(() => {
		if (id) {
			dispatch(getVideoDetails(id))
			setShowMoreStatus(false)
		} else {
			navigate('/')
		}
	}, [id, navigate, dispatch])

	useEffect(() => {
		if (currentPlaying && id) dispatch(getRecommendedVideos(id))
	}, [currentPlaying, dispatch, id])

	return (
		<>
			{currentPlaying && currentPlaying?.videoId === id && (
				<div className='watchPage'>
					<div style={{ height: '7.5vh' }}>
						<NavBar />
					</div>
					<div className='watchBlock' style={{ height: '92.5vh' }}>
						<div className='content'>
							<div className='content__video'>
								<div>
									<iframe
										width='800'
										height='502'
										src={`https://www.youtube.com/embed/${id}?autoplay=1`}
										title='YouTube video player'
										frameBorder='0'
										allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
										allowFullScreen
									></iframe>
									<div className='Block'>
										<p className='Block__title'>{currentPlaying.videoTitle}</p>
										<div className='Block__shortInfo'>
											<div className='views'>
												<span className='viewsCount'>
													{currentPlaying.videoViews} views
												</span>
												<span> {currentPlaying.videoAge} ago</span>
											</div>
											<div className='actions'>
												<div className='actions__likes'>
													<BiLike />
													<strong>{currentPlaying.videoLikes}</strong>
												</div>
												<div className='actions__likes'>
													<BiDislike />
													<strong>dislike</strong>
												</div>
												<div className='actions__likes'>
													<FaShare />
													<strong>share</strong>
												</div>
												<div className='actions__likes'>
													<BsThreeDots />
												</div>
											</div>
										</div>
										<div className='Block__longInfo'>
											<div className='channelInfo'>
												<div>
													<img
														src={currentPlaying.channelInfo.image}
														alt=''
														className='channelInfo__img'
													/>
												</div>
												<div className='name'>
													<h5 className='name__text'>
														<strong>{currentPlaying.channelInfo.name}</strong>
													</h5>
													<h6 className='name__sub'>
														{currentPlaying.channelInfo.subscribers} subscribers
													</h6>
												</div>
												<div>
													<button className='subscribe'>subscribe</button>
												</div>
											</div>
											<div
												className={`${
													!showMoreStatus ? 'showMore' : ''
												} text-sm w-11/12`}
											>
												<pre
													style={{
														fontFamily: `"Roboto", sans-serif`,
													}}
													className='whitespace-pre-wrap'
												>
													{currentPlaying.videoDescription}
												</pre>
											</div>
											<div>
												<button
													className='closeMore'
													onClick={() => setShowMoreStatus(!showMoreStatus)}
												>
													Show {showMoreStatus ? 'less' : 'more'}
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='mr-24 flex flex-col gap-3'>
								{getRecommendedVideos.length &&
									recommendedVideos.map(item => {
										return <WatchCard data={item} key={item.videoId} />
									})}
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	)
}
