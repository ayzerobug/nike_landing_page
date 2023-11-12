import CustomerReviewCard from "../components/CustomerReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Say?
      </h3>
      <p className="text-center m-auto max-w-lg mt-4 info-text">
        Hear genuine stories from out satisfied customers about their
        exceptional expriences with us
      </p>
      <div className="flex justify-evenly items-center max-lg:flex-col gap-14 mt-24 flex-1">
        {reviews.map((review) => (
          <CustomerReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
