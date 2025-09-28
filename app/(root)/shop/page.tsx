import { Brands } from "@/components";

const ShopPage = () => {
  return (
    <section>
      <div className='pt-28 pb-16'>
        <div className='container mx-auto'>
          <div className='text-center mb-16'>
            <h1 className='h2 text-accent mb-4'>Shop</h1>
            <p className='max-w-2xl mx-auto text-lg'>
              Explore our curated selection of premium automotive products and
              accessories
            </p>
          </div>
        </div>
      </div>
      <div className='min-h-[60vh] flex items-center justify-center'>
        <div className='text-center'>
          <h3 className='h3 text-gray-400 mb-4'>Coming Soon</h3>
          <p className='text-gray-600'>Our online shop is under development</p>
        </div>
      </div>
      <Brands />
    </section>
  );
};

export default ShopPage;
