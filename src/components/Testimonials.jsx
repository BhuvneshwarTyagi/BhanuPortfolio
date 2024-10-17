import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "MARCUS",
      role: "Co Founder",
      text: "Perfect Communication And Exceptional Skills. This Guy Is King."
    },
    {
      name: "PETER",
      role: "Manager",
      text: "Did A Great Job. Understood All The Requirements."
    },
    {
      name: "JANE",
      role: "CEO",
      text: "Jimmy Was Wonderful To Work With. Will Definitely Hire Him Again"
    }
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-black  overflow-x-hidden" id="testimonials">
      <h2 className="text-3xl font-bold mb-12 text-center">TESTIMONIALS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-purple-600 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">{testimonial.name}</h3>
            <p className="text-sm text-gray-200 mb-4">{testimonial.role}</p>
            <p className="text-gray-100">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;