import { Link } from 'react-router-dom'
import { HomePageVideos } from '../Types'

export default function Card({ data }: { data: HomePageVideos }) {
	return (
		<div className='card'>
			<div className='previewBlock'>
				<span className='previewBlock__duration'>{data.videoDuration}</span>
				<Link to={`/watch/${data.videoId}`}>
					<img
						src={data.videoThumbnail}
						className='previewBlock__img'
						alt='thumbnail'
					/>
				</Link>
			</div>
			<div className='description'>
				<div className='chanel'>
					<a href='#'>
						<img
							src={data.channelInfo.image}
							alt='channel'
							className='chanel__img'
						/>
					</a>
				</div>
				<div>
					<h3>
						<a href='#' className='line-clamp-2'>
							{data.videoTitle}
						</a>
					</h3>
					<div className='chanelInfo'>
						<div>
							<a href='#' className='chanelName'>
								{data.channelInfo.name}
							</a>
						</div>
						<div>
							<span className='views'>{data.videoViews} views</span>
							<span>{data.videoAge}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
