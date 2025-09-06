import './App.css'
import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import { Header } from './components/Header/Header'
// const Header = lazy(() => import('./components/Header/Header.jsx'))
// // import { MainPage } from "./pages/MainPage/MainPage";
// const MainPage = lazy(() => import('./pages/MainPage/MainPage.jsx'))
// // import { Footer } from "./components/Footer/Footer";
// const Footer = lazy(() => import('./components/Footer/Footer.jsx'))
// // import { Catalog } from "./pages/Catalog/Catalog";
// const Catalog = lazy(() => import('./pages/Catalog/Catalog.jsx'))
// // import {Basket} from "./pages/Basket/Basket";
// const Basket = lazy(() => import('./pages/Basket/Basket.jsx'))
// // import { AgreeTerms } from "./pages/Basket/AgreeTerms/AgreeTerms";
// const AgreeTerms = lazy(() => import('./pages/Basket/AgreeTerms/AgreeTerms.jsx'))
// // import { About } from "./components/About/About";
// const About = lazy(() => import('./components/About/About.jsx'))
// // import { PaymentPage } from "./pages/PaymentPage/PaymentPage";
// const PaymentPage = lazy(() => import('./pages/PaymentPage/PaymentPage.jsx'))
// // import Delivery from "./pages/Delivery/Delivery";
// const Delivery = lazy(() => import('./pages/Delivery/Delivery.jsx'))
// // import MainReviewsPage from "./pages/MainReviews/MainReviews";
// const MainReviewsPage = lazy(() => import('./pages/MainReviews/MainReviews.jsx'))
// // import BlogPage from "./pages/Blog/BlogPage";
// const BlogPage = lazy(() => import('./pages/Blog/BlogPage.jsx'))
// // import { BlogMain } from "./pages/Blog/BlogMain/BlogMain";
// const BlogMain = lazy(() => import('./pages/Blog/BlogMain/BlogMain.jsx'))
// // import BlogArticle from "./pages/BlogArticle/BlogArticle";
// const BlogArticle = lazy(() => import('./pages/BlogArticle/BlogArticle.jsx'))
// // import ContactsPage from "./pages/ContactsPage/ContactsPage";
const ContactsPage = lazy(() => import('./pages/ContactsPage/ContactsPage.jsx'))

// const HeaderFooter = lazy(() => import('./pages/HeaderFooter/HeaderFooter.jsx'))

function App() {
	return (
		<div className='App'>
			<Suspense>
				<Routes>
					{/* <Route path='/' element={<HeaderFooter />}>
							<Route index element={<MainPage />} />
							<Route path='catalog' element={<Catalog />} />
							<Route path='/basket' element={<Basket />} />
							<Route path='/agree' element={<AgreeTerms />} />
							<Route path='/aboutUs' element={<About />} />
							<Route path='/pay' element={<PaymentPage />} />
							<Route path='/delivery' element={<Delivery />} />
							<Route path='/reviews' element={<MainReviewsPage />} />
							<Route path='/blog' element={<BlogPage />} />
							<Route path='/blogMain' element={<BlogMain />} />
							<Route path='/blogArticle' element={<BlogArticle />} />
							<Route path='/contacts' element={<ContactsPage />} />
							<Route path='*' element={<MainPage />} />
						</Route> */}
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
