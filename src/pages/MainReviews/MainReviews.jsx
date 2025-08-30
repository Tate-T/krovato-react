import { Navigation } from "./Navigation/Navigation";
import { Reviews } from "./Reviews/Reviews";
import { PostReview } from './PostReview/PostReview';
import { Advantages } from "../../components/Advantages/Advantages";

import style from './MainReviews.module.scss';

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
                <Advantages />
            </div>
        </section>
    );
}

export default MainReviewsPage;
