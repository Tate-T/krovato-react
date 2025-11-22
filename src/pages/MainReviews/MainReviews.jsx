import { Navigation } from "./Navigation/Navigation";
import { Reviews } from "./Reviews/Reviews";
import { PostReview } from './PostReview/PostReview';
import { Advantages } from "../../components/Advantages/Advantages";
import Container from "../../components/Container/Container";

import style from './MainReviews.module.scss';

function MainReviewsPage() {
    return (
        <section className="MainReviewsPage">
            <Container>
                <div className={style.reviews__reviewsFormBox}>
                    <div>
                        <Navigation />
                        <Reviews />
                    </div>
                    <PostReview />
                </div>
                <Advantages />
            </Container>
        </section>
    );
}

export default MainReviewsPage;
