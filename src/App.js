import {
	RouterProvider,
	createHashRouter,
} from 'react-router-dom';
import Root from './routes/Root/Root';
import Catalog from './routes/Catalog/Catalog';
import Product from './routes/Product/Product';
import ProductInfoSection from './routes/Product/ProductInfoSection/ProductInfoSection';
import Cart from './routes/Cart/Cart';
import InfoPages from './routes/InfoPages/InfoPages';
import PrivacyPolicy from './routes/InfoPages/PrivacyPolicy/PrivacyPolicy';
import TermsAndConditions from './routes/InfoPages/TermsAndConditions/TermsAndConditions';
import TrackYourOrder from './routes/InfoPages/TrackYourOrder/TrackYourOrder';
import Faqs from './routes/InfoPages/Faqs/Faqs';
import Contact from './routes/InfoPages/Contact/Contact';

const router = createHashRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{ path: '/', element: <Catalog /> },
			{
				path: '/product/:id',
				element: <Product />,
				children: [{ path: 'description', element: <ProductInfoSection /> }],
			},
			{ path: '/cart', element: <Cart /> },
			{
				path: '/info_pages',
				element: <InfoPages />,
				children: [
					{ path: 'privacy_policy', element: <PrivacyPolicy /> },
					{ path: 'terms_and_conditions', element: <TermsAndConditions /> },
					{ path: 'track_your_order', element: <TrackYourOrder /> },
					{ path: 'contact_us', element: <Contact /> },
					{ path: 'faqs', element: <Faqs /> },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
