import FAQAccordion from "./faqs";

const FAQ = () => {


  return (
    <div className='py-4 md:py-7'>
      <div className="main_container">
        <div className="text-center">
          <h5 className="text-primary font-bold capitalize md:text-sm">Need Help?</h5>
          <h2 className="section_title text-2xl md:text-4xl mt-2">
            All Your Parcel Delivery Questions Answered
          </h2>
          <p className="my-2 md:my-4 max-w-2xl mx-auto">
            Have questions about sending, receiving, or tracking parcels? Find answers about creating shipments, checking status, and managing your deliveries easily.
          </p>
        </div>

        <FAQAccordion></FAQAccordion>
      </div>
    </div>
  )
}

export default FAQ;
