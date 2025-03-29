import style from './MainReviews.module.scss'
import { Navigation } from "./Navigation/Navigation";
import { Reviews } from "./Reviews/Reviews";
import { PostReview } from './PostReview/PostReview';

function MainReviewsPage() {
    return (
        <section className="MainReviewsPage">
            <div className="container">
                <div className={style.reviews__reviewsFormBox}>
                    <div>
                        <Navigation />
                        <Reviews />
                    </div>
                    <PostReview />
                </div>
            </div>
        </section>
    );
}

export default MainReviewsPage;
