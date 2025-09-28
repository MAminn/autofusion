import { Classes, About } from "@/components";

const ServicesPage = () => {
  return (
    <section>
      <div className='pt-28 pb-16'>
        <div className='container mx-auto'>
          <div className='text-center mb-16'>
            <h1 className='h2 text-accent mb-4'>Our Services</h1>
            <p className='max-w-2xl mx-auto text-lg'>
              Comprehensive automotive solutions tailored to meet your every
              need
            </p>
          </div>
        </div>
      </div>
      <Classes />
      <About />
    </section>
  );
};

export default ServicesPage;
