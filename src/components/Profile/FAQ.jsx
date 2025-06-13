import React from "react";
import Footer from "../Footer/Footer";

function FAQ() {
  return (
    <>
      <section className="bsb-faq-3 py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-12 col-md-10 col-lg-8 col-xl-7 col-xxl-6">
              <h2 className="mb-4 display-5 text-center">
                Frequently Asked Questions
              </h2>
              <p className="text-secondary text-center lead fs-4">
                Welcome to our FAQ page, your one-stop resource for answers to
                commonly asked questions.
              </p>
              <p className="mb-5 text-center">
                Whether you're a new customer looking to learn more about what
                we offer or a long-time user seeking clarification on specific
                topics, this page has clear and concise information about our
                products and services.
              </p>
              <hr className="w-50 mx-auto mb-5 mb-xl-9 border-dark-subtle" />
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-11 col-xl-10">
                <div className="d-flex align-items-end mb-5">
                  <i className="bi bi-person-gear me-3 lh-1 display-5"></i>
                  <h3 className="m-0">Your Account</h3>
                </div>
              </div>
              <div className="col-11 col-xl-10">
                <div className="accordion accordion-flush" id="faqAccount">
                  <div className="accordion-item bg-transparent border-top border-bottom py-3">
                    <h2 className="accordion-header" id="faqAccountHeading1">
                      <button
                        className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqAccountCollapse1"
                        aria-expanded="false"
                        aria-controls="faqAccountCollapse1"
                      >
                        What is an account?
                      </button>
                    </h2>
                    <div
                      id="faqAccountCollapse1"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqAccountHeading1"
                    >
                      <div className="accordion-body">
                        <p>
                          An account is a personal or organizational record that
                          allows you to access and manage various services,
                          often requiring authentication through a username and
                          password.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-transparent border-bottom py-3">
                    <h2 className="accordion-header" id="faqAccountHeading2">
                      <button
                        className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqAccountCollapse2"
                        aria-expanded="false"
                        aria-controls="faqAccountCollapse2"
                      >
                        How do I create an account?
                      </button>
                    </h2>
                    <div
                      id="faqAccountCollapse2"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqAccountHeading2"
                    >
                      <div className="accordion-body">
                        <p>
                          To create an account, visit the website or application
                          and look for a "Sign Up" or "Create Account" button.
                          Follow the instructions to enter your information and
                          create a username and password.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-transparent border-bottom py-3">
                    <h2 className="accordion-header" id="faqAccountHeading3">
                      <button
                        className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqAccountCollapse3"
                        aria-expanded="false"
                        aria-controls="faqAccountCollapse3"
                      >
                        How do I secure my account?
                      </button>
                    </h2>
                    <div
                      id="faqAccountCollapse3"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqAccountHeading3"
                    >
                      <div className="accordion-body">
                        <p>
                          To secure your account, use a robust and unique
                          password, enable two-factor authentication if
                          available, and be cautious about sharing your login
                          information. Regularly update your password and avoid
                          using easily guessable information like birthdays or
                          names.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-transparent border-bottom py-3">
                    <h2 className="accordion-header" id="faqAccountHeading4">
                      <button
                        className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqAccountCollapse4"
                        aria-expanded="false"
                        aria-controls="faqAccountCollapse4"
                      >
                        What should I do if I forget my password?
                      </button>
                    </h2>
                    <div
                      id="faqAccountCollapse4"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqAccountHeading4"
                    >
                      <div className="accordion-body">
                        <p>
                          If you forget your password, most websites and
                          services offer a "Forgot Password" or "Reset Password"
                          option. Follow the steps to reset your password, often
                          involving an email or SMS verification.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-transparent border-bottom py-3">
                    <h2 className="accordion-header" id="faqAccountHeading5">
                      <button
                        className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqAccountCollapse5"
                        aria-expanded="false"
                        aria-controls="faqAccountCollapse5"
                      >
                        What should I do if my account is compromised or hacked?
                      </button>
                    </h2>
                    <div
                      id="faqAccountCollapse5"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqAccountHeading5"
                    >
                      <div className="accordion-body">
                        <p>
                          If you suspect your account has been compromised,
                          change your password immediately. Contact the service
                          provider for further assistance, and consider enabling
                          two-factor authentication for added security.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-11 col-xl-10">
                <div className="d-flex align-items-end mb-5">
                  <i className="bi bi-cart-plus me-3 lh-1 display-5"></i>
                  <h3 className="m-0">Placing an Order</h3>
                </div>
              </div>
              <div className="col-11 col-xl-10">
                <div className="accordion accordion-flush" id="faqOrder">
                  <div className="accordion-item bg-transparent border-top border-bottom py-3">
                    <h2 className="accordion-header" id="faqOrderHeading1">
                      <button
                        className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqOrderCollapse1"
                        aria-expanded="false"
                        aria-controls="faqOrderCollapse1"
                      >
                        Do I need to create an account to place an order?
                      </button>
                    </h2>
                    <div
                      id="faqOrderCollapse1"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqOrderHeading1"
                    >
                      <div className="accordion-body">
                        <p>
                          You can order as a guest if you create an account.
                          However, creating an account allows for faster
                          checkout and order tracking.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-transparent border-bottom py-3">
                    <h2 className="accordion-header" id="faqOrderHeading2">
                      <button
                        className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqOrderCollapse2"
                        aria-expanded="false"
                        aria-controls="faqOrderCollapse2"
                      >
                        Can I change or cancel my order after it's been placed?
                      </button>
                    </h2>
                    <div
                      id="faqOrderCollapse2"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqOrderHeading2"
                    >
                      <div className="accordion-body">
                        <p>
                          Orders can be modified or canceled within a short time
                          after placing them. Contact our customer support as
                          soon as possible to make any changes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-transparent border-bottom py-3">
                    <h2 className="accordion-header" id="faqOrderHeading3">
                      <button
                        className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqOrderCollapse3"
                        aria-expanded="false"
                        aria-controls="faqOrderCollapse3"
                      >
                        What payment methods do you accept?
                      </button>
                    </h2>
                    <div
                      id="faqOrderCollapse3"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqOrderHeading3"
                    >
                      <div className="accordion-body">
                        <p>
                          We accept various payment methods, including
                          credit/debit cards, PayPal, and other online payment
                          options. You can choose your preferred payment method
                          during the checkout process.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-transparent border-bottom py-3">
                    <h2 className="accordion-header" id="faqOrderHeading4">
                      <button
                        className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqOrderCollapse4"
                        aria-expanded="false"
                        aria-controls="faqOrderCollapse4"
                      >
                        Is my payment information secure?
                      </button>
                    </h2>
                    <div
                      id="faqOrderCollapse4"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqOrderHeading4"
                    >
                      <div className="accordion-body">
                        <p>
                          Yes, we take security seriously. We use
                          industry-standard encryption to protect your payment
                          information, and we do not store your payment details
                          on our servers.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-transparent border-bottom py-3">
                    <h2 className="accordion-header" id="faqOrderHeading5">
                      <button
                        className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqOrderCollapse5"
                        aria-expanded="false"
                        aria-controls="faqOrderCollapse5"
                      >
                        How do I track the status of my order?
                      </button>
                    </h2>
                    <div
                      id="faqOrderCollapse5"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqOrderHeading5"
                    >
                      <div className="accordion-body">
                        <p>
                          You can track your order by logging into your account
                          (if you have one) and accessing the order history.
                          We'll also send you email updates as your order
                          progresses through the fulfillment process.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-0">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-11 col-xl-10">
                <div className="d-flex align-items-end mb-5">
                  <i className="bi bi-bag-dash me-3 lh-1 display-5"></i>
                  <h3 className="m-0">Refunds and Exchanges</h3>
                </div>
              </div>
              <div className="col-11 col-xl-10">
                <div className="accordion accordion-flush" id="faqRefund">
                  <div className="accordion-item bg-transparent border-top border-bottom py-3">
                    <h2 className="accordion-header" id="faqRefundHeading1">
                      <button
                        className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqRefundCollapse1"
                        aria-expanded="false"
                        aria-controls="faqRefundCollapse1"
                      >
                        How do I request a refund or exchange?
                      </button>
                    </h2>
                    <div
                      id="faqRefundCollapse1"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqRefundHeading1"
                    >
                      <div className="accordion-body">
                        <p>
                          To request a refund or exchange, please follow these
                          steps:
                        </p>
                        <ul>
                          <li>
                            Contact our customer support team within 30 days of
                            the purchase.
                          </li>
                          <li>
                            Provide your order number and a detailed reason for
                            the request.
                          </li>
                          <li>
                            Wait for our customer support team to assess your
                            request and provide further instructions.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-transparent border-bottom py-3">
                    <h2 className="accordion-header" id="faqRefundHeading2">
                      <button
                        className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqRefundCollapse2"
                        aria-expanded="false"
                        aria-controls="faqRefundCollapse2"
                      >
                        What items are eligible for a refund or exchange?
                      </button>
                    </h2>
                    <div
                      id="faqRefundCollapse2"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqRefundHeading2"
                    >
                      <div className="accordion-body">
                        <p>
                          Eligible items for a refund or exchange must meet the
                          following criteria:
                        </p>
                        <ul>
                          <li>
                            They are in their original condition, unused, and in
                            their original packaging.
                          </li>
                          <li>
                            The request is made within the specified timeframe.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-transparent border-bottom py-3">
                    <h2 className="accordion-header" id="faqRefundHeading3">
                      <button
                        className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqRefundCollapse3"
                        aria-expanded="false"
                        aria-controls="faqRefundCollapse3"
                      >
                        What if I receive a damaged or defective item?
                      </button>
                    </h2>
                    <div
                      id="faqRefundCollapse3"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqRefundHeading3"
                    >
                      <div className="accordion-body">
                        <p>
                          If you receive a damaged or defective item, please
                          contact our customer support team immediately. We will
                          guide you on the return process and offer a refund or
                          replacement, as appropriate.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-transparent border-bottom py-3">
                    <h2 className="accordion-header" id="faqRefundHeading4">
                      <button
                        className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqRefundCollapse4"
                        aria-expanded="false"
                        aria-controls="faqRefundCollapse4"
                      >
                        Who covers the shipping costs for exchanges?
                      </button>
                    </h2>
                    <div
                      id="faqRefundCollapse4"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqRefundHeading4"
                    >
                      <div className="accordion-body">
                        <p>
                          Shipping costs for returning the item for an exchange
                          and sending the new item are usually the
                          responsibility of the customer, unless the exchange is
                          due to an error on our part.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-transparent border-bottom py-3">
                    <h2 className="accordion-header" id="faqRefundHeading5">
                      <button
                        className="accordion-button collapsed bg-transparent fw-bold shadow-none link-primary"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqRefundCollapse5"
                        aria-expanded="false"
                        aria-controls="faqRefundCollapse5"
                      >
                        Can I change my mind and cancel my refund or exchange
                        request?
                      </button>
                    </h2>
                    <div
                      id="faqRefundCollapse5"
                      className="accordion-collapse collapse"
                      aria-labelledby="faqRefundHeading5"
                    >
                      <div className="accordion-body">
                        <p>
                          If you change your mind about a refund or exchange
                          request, please contact our customer support team as
                          soon as possible. We will do our best to accommodate
                          your request, but once a refund or exchange is
                          processed, it may not be reversible.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default FAQ;
