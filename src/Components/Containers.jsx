import React from "react";
import "./Containers.css";
import Cards from "./Cards";
const Containers = () => {
  return (
    <>
      <div className="container-box">
        <div className="container1">
          <div className="cont1-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96eJO6M3UN6pgkp1NU3S_77tUxwJ1iYNhza-91-ms5xEl88pQRQXkZw-xdO1P5obrhnI&usqp=CAU"
              alt=""
            />
          </div>
          <div className="cont1-detail">
            <div className="detail-heading">
              <h3>Comfort or Constraint: The Choice Is Yours.</h3>
            </div>
            <div className="detail-para">
              Don’t let sales reps with limited financial savvy dictate your
              decisions. You know yourself best. Elevate your spending strategy
              by selecting the perfect Credit Card tailored to your needs or
              habits through Select.
              <ul>
                <li>
                  Genie: Discover the ideal Credit Card based on Network,
                  Income, and Benefits.
                </li>
                <li>
                  Expert Comparisons: Access detailed comparisons with insights
                  and data-driven reviews.
                </li>
                <li>
                  Hidden Insights: Uncover the details that cards often don’t
                  reveal.
                </li>
                <li>
                  Community Reviews: Benefit from strong reviews from other
                  users to make an informed choice.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container2">
          <div className="cont2-detail">
            <div className="detail-heading">
              <h3>Demat Account: Ensuring smart decisions every time.</h3>
            </div>
            <div className="detail-para">
              Let your money do the talking. Gain the advantage with Select's
              smart tools, advanced features, and reliable data to choose a
              broker that will maximize your investments for a lifetime.
              <ul>
                <li>Discover the perfect broker tailored to your needs.</li>
                <li>
                  Compare up to three brokers with accurate data and
                  cutting-edge features
                </li>
                <li>
                  Uncover exclusive insights about brokers unavailable
                  elsewhere.
                </li>
                <li>
                  Brokerage Calculators: Understand fees before they apply.
                </li>
              </ul>
            </div>
          </div>
          <div className="cont2-img">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1XK3ZQziSku_foS473y347A0pY-48GEoTGONKWl-CCBjnUJlFrhmotGk2so72Muaz9NY&usqp=CAU"
              alt=""
            />
          </div>
        </div>

        <div className="container2">
          <div className="cont2-img">
            <img
              src="https://www.glassdoor.com/employers/app/uploads/sites/2/2021/03/GoogleDrive_640X469_Heres-What-Your-Turnover-and-Retention-Rates-Should-Look-Like-02.png"
              alt=""
            />
          </div>
          <div className="cont2-detail">
            <div className="detail-heading">
              <h3>Demat Account: Ensuring smart decisions every time.</h3>
            </div>
            <div className="detail-para">
              Let your money do the talking. Gain the advantage with Select's
              smart tools, advanced features, and reliable data to choose a
              broker that will maximize your investments for a lifetime.
              <ul>
                <li>Discover the perfect broker tailored to your needs.</li>
                <li>
                  Compare up to three brokers with accurate data and
                  cutting-edge features
                </li>
                <li>
                  Uncover exclusive insights about brokers unavailable
                  elsewhere.
                </li>
                <li>
                  Brokerage Calculators: Understand fees before they apply.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="methodology">
        <button className="methodology-button">Our Methodology</button>
      </div>
      <div className="asked-questions">
        <h2 className="animated-underline question-heading">
          Frequently Asked Questions
        </h2>
      </div>
      <Cards
        question="How does select works?"
        answer="Select is a comparison platform that helps users find the right stock broker and credit card. Select has a Broker questionnaire and the Card Genie feature to help you find the right broker and credit card for you."
      />
      <Cards
        question="Can I trust the ratings and reviews on Select?"
        answer="Yes, you can trust the reviews and ratings on Select. Select takes the authenticity and accuracy of its reviews and ratings very seriously.

The integrity of the review system is maintained through various systems, like users needing to create an account to submit a review, internal moderation of reviews to avoid spams.

The review system is also made comprehensive by letting users rate the brokers and cards on various parameters like fees, features, services, reputation, and customer support. The rating is given on a scale of 1 to 5 stars.

Select also maintains unbiasedness of its reviews by displaying both positive and negative reviews submitted by various users without favouring any particular brand."
      />
       <Cards
      question="How can I compare Brokers on Select?"
      answer="There are many options to choose from when it comes to brokers, so many that it can get confusing. To ease this confusion, you can go to https://select.finology.in/compare and compare up to three brokers together."
      />
     
      <Cards
        question="Can I trust the ratings and reviews on Select?"
        answer="Yes, you can trust the reviews and ratings on Select. Select takes the authenticity and accuracy of its reviews and ratings very seriously.

The integrity of the review system is maintained through various systems, like users needing to create an account to submit a review, internal moderation of reviews to avoid spams.

The review system is also made comprehensive by letting users rate the brokers and cards on various parameters like fees, features, services, reputation, and customer support. The rating is given on a scale of 1 to 5 stars.

Select also maintains unbiasedness of its reviews by displaying both positive and negative reviews submitted by various users without favouring any particular brand."
      />
    </>
  );
};

export default Containers;
