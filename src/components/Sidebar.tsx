import {
	MdHomeFilled,
	MdOutlineSlowMotionVideo,
	MdSubscriptions,
	MdOutlineVideoLibrary,
	MdHistory,
	MdOutlineSmartDisplay,
	MdOutlineWatchLater,
	MdThumbUpOffAlt,
	MdSettings,
	MdOutlinedFlag,
	MdOutlineHelpOutline,
	MdOutlineFeedback,
	MdOutlineSportsVolleyball,
} from 'react-icons/md'
import { TbMusic, TbDeviceGamepad2 } from 'react-icons/tb'
import { FaRegCompass } from 'react-icons/fa'
import { GiFilmStrip } from 'react-icons/gi'

export default function Sidebar() {
	const mainLinks = [
		{
			icon: <MdHomeFilled className='text-xl' />,
			name: 'Home',
		},
		{
			icon: <FaRegCompass className='text-xl' />,
			name: 'Explore',
		},
		{
			icon: <MdOutlineSlowMotionVideo className='text-xl' />,
			name: 'Shorts',
		},
		{
			icon: <MdSubscriptions className='text-xl' />,
			name: 'Subscriptions',
		},
	]

	const secondaryLinks = [
		{
			icon: <MdOutlineVideoLibrary className='text-xl' />,
			name: 'Library',
		},
		{
			icon: <MdHistory className='text-xl' />,
			name: 'History',
		},
		{
			icon: <MdOutlineSmartDisplay className='text-xl' />,
			name: 'Your Videos',
		},
		{
			icon: <MdOutlineWatchLater className='text-xl' />,
			name: 'Watch Later',
		},
		{
			icon: <MdThumbUpOffAlt className='text-xl' />,
			name: 'Liked Videos',
		},
	]

	const subscriptionLinks = [
		{
			icon: <TbMusic className='text-xl' />,
			name: 'Music',
		},
		{
			icon: <MdOutlineSportsVolleyball className='text-xl' />,
			name: 'Sport',
		},
		{
			icon: <TbDeviceGamepad2 className='text-xl' />,
			name: 'Gaming',
		},
		{
			icon: <GiFilmStrip className='text-xl' />,
			name: 'Films',
		},
	]

	const helpLinks = [
		{
			icon: <MdSettings className='text-xl' />,
			name: 'Settings',
		},
		{
			icon: <MdOutlinedFlag className='text-xl' />,
			name: 'Report history',
		},
		{
			icon: <MdOutlineHelpOutline className='text-xl' />,
			name: 'Help',
		},
		{
			icon: <MdOutlineFeedback className='text-xl' />,
			name: 'Send feedback',
		},
	]

	const textLinks = [
		[
			'About',
			'Press',
			'Copyright',
			'Contact us',
			'Creator',
			'Advertise',
			'Developers',
		],
		[
			'Terms',
			'Privacy',
			'Policy & Safety',
			'How YouTube works',
			'Test new features',
		],
	]

	return (
		<div className='sidebar'>
			<ul>
				{mainLinks.map(({ icon, name }) => {
					return (
						<li
							key={name}
							className={`itemsBlocks ${name === 'Home' ? 'bg-slate-600' : ''}`}
						>
							<a href='#'>
								{icon}
								<span className='name'>{name}</span>
							</a>
						</li>
					)
				})}
			</ul>
			<ul>
				{secondaryLinks.map(({ icon, name }) => {
					return (
						<li key={name} className={`itemsBlocks `}>
							<a href='#'>
								{icon}
								<span className='name'>{name}</span>
							</a>
						</li>
					)
				})}
			</ul>
			<ul>
				{subscriptionLinks.map(({ icon, name }) => {
					return (
						<li key={name} className={`itemsBlocks `}>
							<a href='#'>
								{icon}
								<span className='name'>{name}</span>
							</a>
						</li>
					)
				})}
			</ul>
			<ul>
				{helpLinks.map(({ icon, name }) => {
					return (
						<li key={name} className={`itemsBlocks `}>
							<a href='#'>
								{icon}
								<span className='name'>{name}</span>
							</a>
						</li>
					)
				})}
			</ul>
			<ul className='textLink'>
				{textLinks[0].map(name => {
					return <li key={name}>{name}</li>
				})}
			</ul>
			<ul className='textLink'>
				{textLinks[1].map(name => {
					return <li key={name}>{name}</li>
				})}
			</ul>
			<span className='googleText'>&copy; 2022 Google</span>
			<br />
		</div>
	)
}
