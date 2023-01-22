import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { TiMicrophone } from 'react-icons/ti'
import { BsYoutube, BsCameraVideo, BsBell } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoAppsSharp } from 'react-icons/io5'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function NavBar() {
	return (
		<div className='navBar'>
			<div className='navigation'>
				<div>
					<GiHamburgerMenu className='navIcon' />
				</div>
				<Link to='/'>
					<div className='youtubeBlock'>
						<BsYoutube className='youtubeBlock__icon' />
						<span className='youtubeBlock__name'>YouTube</span>
					</div>
				</Link>
			</div>
			<div className='search'>
				<form
					onSubmit={e => {
						e.preventDefault()
					}}
					className='formSearch'
				>
					<div className='searchBlock'>
						<div className='searchBlock__firstiItem'>
							<div>
								<AiOutlineSearch className='iconDef' />
							</div>
							<input type='text' className='input' />
							<AiOutlineClose />
						</div>
						<button className='buttonSearch'>
							<AiOutlineSearch className='iconDef' />
						</button>
					</div>
				</form>
				<div className='micro'>
					<TiMicrophone />
				</div>
			</div>
			<div className='settings'>
				<BsCameraVideo />
				<IoAppsSharp />
				<div className='bringls'>
					<BsBell />
					<span className='numbers'>9+</span>
				</div>
				<img
					src='https://i.ibb.co/jfVc2Bf/89-F8-F15-E-8047-430-C-9-C99-CA09-C721-FD55.jpg'
					className='logoImg'
					alt='logo'
				/>
			</div>
		</div>
	)
}
