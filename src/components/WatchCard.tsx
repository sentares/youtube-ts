import { RecommendedVideos } from '../Types'
import { Link } from 'react-router-dom'

export default function WatchCard({ data }: { data: RecommendedVideos }) {
	return (
		<div className='watchCard'>
			<div className='blockPrew'>
				<span className='blockPrew__durat'>{data.videoDuration}</span>
				<Link to={`/watch/${data.videoId}`}>
					<img
						src={data.videoThumbnail}
						className='blockPrew__img'
						alt='thumbnail'
					/>
				</Link>
			</div>
			<div className='blockTitle'>
				<h4 className='blockTitle__text'>
					<a href='#' className='title'>
						{data.videoTitle}
					</a>
				</h4>
				<div className='blockTitle__channelInfo'>
					<div>
						<a href='#' className='name'>
							{data.channelInfo.name}
						</a>
					</div>
					<div>
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
