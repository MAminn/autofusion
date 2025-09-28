import { Classes, Testimonial } from "@/components";

const PortfolioPage = () => {
  return (
    <section>
      <div className='pt-28 pb-16 bg-gray-50'>
        <div className='container mx-auto'>
          <div className='text-center mb-16'>
            <h1 className='h2 text-accent mb-4'>Our Portfolio</h1>
            <p className='max-w-2xl mx-auto text-lg'>
              Showcasing our finest automotive projects and customer success
              stories
            </p>
          </div>
        </div>
      </div>
      <Classes />
      <Testimonial />
    </section>
  );
};

export default PortfolioPage;
