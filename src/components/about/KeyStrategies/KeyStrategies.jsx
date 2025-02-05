import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const KeyStrategies = () => {
  return (
    <div>
      <section className="dark:bg-gray-200 dark:text-gray-800 mt-24">
        <div className="container max-w-7xl p-6 mx-auto space-y-6 sm:space-y-12">
          <div className="md:flex justify-between items-center gap-10">
            <img
              src="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="object-cover w-full h-64 sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <div>
              <h3 className="text-3xl font-semibold md:text-4xl mt-10 md:mt-0 font-playfair pb-4">
                Key <span className="text-orange-500">Strategies</span>
              </h3>
              <div className="bg-black h-[1px]"></div>
              <p className="font-nunito font-light mt-3">
                The travel industry is a highly competitive industry with
                everyone competing to become the best travel agency in
                Bangladesh. In order to secure our position as a leader in this
                industry and also to become the best tour operator agency in
                Bangladesh, World Holidays is keen on focusing in four strategic
                areas, namely:
              </p>

              <p className="flex items-center gap-3 font-nunito font-light mt-3">
              <FaCircleCheck className="text-orange-500 text-base flex-shrink-0 mt-1" />
                IATA Certified Agent Keeping the company financially and
                economically healthy at all times.
              </p>
              <p className="flex items-center gap-3 font-nunito font-light mt-3">
              <FaCircleCheck className="text-orange-500 text-base flex-shrink-0 mt-1" />
                Presenting high-quality service to customers that translate to
                customer loyalty resulting in repetition of orders and referrals
                that create new and bigger opportunities.
              </p>
              <p className="flex items-center gap-3  font-nunito font-light mt-3">
              <FaCircleCheck className="text-orange-500 text-base flex-shrink-0 mt-1" />
                Maintaining a high-performing team that consistently displays competence in customer orientation and 
driving for results with the highest regard for professional ethics and doing all of the above at the lowest cost 
in the industry.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default KeyStrategies;
