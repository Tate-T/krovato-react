import { Outlet } from 'react-router-dom'
import Header from '../../components/Header/Header.jsx'
import { Footer } from '../../components/Footer/Footer'

const HeaderFooter = () => {
	return (
		<>
			<Header />
			<Outlet />
			<Footer />
		</>
	)
}

export default HeaderFooter