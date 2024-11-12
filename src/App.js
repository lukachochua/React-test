import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="bg-white flex flex-col items-stretch">
      <header className="flex w-full flex-col items-stretch max-md:max-w-full">
        <div className="flex w-full items-stretch justify-between gap-5 px-20 py-6 max-md:max-w-full max-md:flex-wrap max-md:px-5">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e9c1e7b6-9c7c-4f0a-9a3a-1f8a8c8a8f8a?apiKey=d9eca8b0cf294176bf6a3b6fd4e31d91&"
            alt="Company Logo"
            className="aspect-[3.23] object-contain object-center w-[100px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="items-stretch self-center flex gap-8 my-auto max-md:justify-center">
            <a href="#" className="text-zinc-900 text-base font-medium leading-6 tracking-wide">
              Home
            </a>
            <a href="#" className="text-zinc-900 text-base font-medium leading-6 tracking-wide">
              About
            </a>
            <a href="#" className="text-zinc-900 text-base font-medium leading-6 tracking-wide">
              Contact
            </a>
          </div>
          <div className="items-stretch flex justify-between gap-4">
            <button className="text-zinc-900 text-base font-medium leading-6 tracking-wide whitespace-nowrap justify-center items-stretch border border-[color:var(--Gray-300,#D0D5DD)] aspect-[1.9444444444444444] px-4 py-2 rounded-lg border-solid">
              Log in
            </button>
            <button className="text-white text-base font-medium leading-6 tracking-wide whitespace-nowrap justify-center items-stretch bg-zinc-900 aspect-[2.1666666666666665] px-4 py-2 rounded-lg">
              Sign up
            </button>
          </div>
        </div>
        <div className="bg-zinc-100 flex w-full flex-col items-center mt-4 px-16 py-12 max-md:max-w-full max-md:px-5">
          <div className="flex w-full max-w-[1216px] flex-col items-stretch mt-16 mb-10 max-md:max-w-full max-md:my-10">
            <h1 className="text-zinc-900 text-center text-6xl font-bold leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[54px]">
              Unleash Your Potential with Our Innovative Solutions
            </h1>
            <p className="text-zinc-500 text-center text-xl leading-7 self-center max-w-[768px] mt-6 max-md:max-w-full">
              Discover how our cutting-edge technology can transform your business and drive success in today's competitive landscape.
            </p>
            <div className="items-stretch flex gap-3 mt-12 self-center max-md:mt-10">
              <button className="text-white text-base font-semibold leading-6 whitespace-nowrap justify-center items-stretch bg-zinc-900 grow px-5 py-3 rounded-lg">
                Get started
              </button>
              <button className="text-zinc-900 text-base font-semibold leading-6 whitespace-nowrap justify-center items-stretch border border-[color:var(--Gray-300,#D0D5DD)] grow px-5 py-3 rounded-lg border-solid">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </header>
      <main className="flex flex-col items-center px-20 py-12 max-md:px-5">
        <section className="flex w-full max-w-[1216px] flex-col items-stretch mt-16 mb-10 max-md:max-w-full max-md:my-10">
          <h2 className="text-zinc-900 text-center text-4xl font-bold leading-[44px] self-center max-w-[768px] max-md:max-w-full">
            Empowering Businesses with Innovative Solutions
          </h2>
          <p className="text-zinc-500 text-center text-xl leading-7 self-center max-w-[768px] mt-5 max-md:max-w-full">
            Our comprehensive suite of services is designed to meet your unique needs and drive your business forward.
          </p>
          <div className="mt-16 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              {[1, 2, 3].map((index) => (
                <div key={index} className="flex flex-col items-stretch w-1/3 max-md:w-full max-md:ml-0">
                  <div className="border border-[color:var(--Gray-200,#EAECF0)] flex grow flex-col items-stretch w-full px-6 py-8 rounded-2xl border-solid max-md:mt-8">
                    <img
                      loading="lazy"
                      src={`https://cdn.builder.io/api/v1/image/assets/TEMP/icon${index}.svg?apiKey=d9eca8b0cf294176bf6a3b6fd4e31d91&`}
                      alt={`Service Icon ${index}`}
                      className="aspect-square object-contain object-center w-12 overflow-hidden self-center"
                    />
                    <h3 className="text-zinc-900 text-center text-xl font-semibold leading-8 self-stretch mt-5">
                      Service {index}
                    </h3>
                    <p className="text-zinc-500 text-center text-base leading-6 mt-2">
                      Description of Service {index} and its benefits for your business.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-zinc-900 flex w-full flex-col items-stretch mt-24 px-20 py-12 max-md:max-w-full max-md:mt-10 max-md:px-5">
        <div className="flex w-full items-stretch justify-between gap-5 mt-4 mb-8 max-md:max-w-full max-md:flex-wrap">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/logo-white.svg?apiKey=d9eca8b0cf294176bf6a3b6fd4e31d91&"
            alt="Company Logo"
            className="aspect-[3.23] object-contain object-center w-[100px] overflow-hidden shrink-0 max-w-full"
          />
          <div className="items-stretch flex justify-between gap-8 max-md:justify-center">
            <a href="#" className="text-white text-base font-medium leading-6 tracking-wide">
              Home
            </a>
            <a href="#" className="text-white text-base font-medium leading-6 tracking-wide">
              About
            </a>
            <a href="#" className="text-white text-base font-medium leading-6 tracking-wide">
              Contact
            </a>
          </div>
        </div>
        <div className="bg-zinc-800 shrink-0 h-px mt-4 max-md:max-w-full" />
        <div className="flex w-full items-stretch justify-between gap-5 mt-8 max-md:max-w-full max-md:flex-wrap">
          <div className="text-zinc-400 text-base leading-6">
            © 2023 Company Name. All rights reserved.
          </div>
          <div className="flex items-stretch justify-between gap-6">
            <a href="#" aria-label="Twitter">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/twitter.svg?apiKey=d9eca8b0cf294176bf6a3b6fd4e31d91&"
                alt="Twitter Icon"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
            </a>
            <a href="#" aria-label="LinkedIn">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/linkedin.svg?apiKey=d9eca8b0cf294176bf6a3b6fd4e31d91&"
                alt="LinkedIn Icon"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
            </a>
            <a href="#" aria-label="Facebook">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/facebook.svg?apiKey=d9eca8b0cf294176bf6a3b6fd4e31d91&"
                alt="Facebook Icon"
                className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
