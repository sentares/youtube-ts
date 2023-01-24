import { HomePageVideos } from '../Types'
import { Link } from 'react-router-dom'

export default function SearchCard({ data }: { data: HomePageVideos }) {
	return (
		<div className='searchCard'>
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
			<div className='titleBlock'>
				<h3 className='titleBlock__text'>
					<a href='#' className='title'>
						{data.videoTitle}
					</a>
				</h3>
				<div className='titleBlock__info'>
					<div>
						<div>
							<span className='views'>{data.videoViews} views</span>
							<span>{data.videoAge}</span>
						</div>
					</div>
				</div>
				<div className='titleBlock__channel'>
					<a href='#' className='channelInfo'>
						<img
							src={data.channelInfo.image}
							alt='channel'
							className='channelInfo__img'
						/>
						<span className='channelInfo__name'>{data.channelInfo.name}</span>
					</a>
				</div>
				<div className='titleBlock__description'>
					<p>{data.videoDescription}</p>
				</div>
			</div>
		</div>
	)
}
