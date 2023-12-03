import React from "react";
import { useState, useEffect } from "react";

export const Ambiance = ({ambianceRef}) => {
  const [ambiance, setAmbiance] = useState(null);

  useEffect(() => {
    const fetchRestaurantAmbiance = async () => {
      const response = await fetch("/api/getRestaurantAmbiance");
      const data = await response.json();
      console.log(data);
      setAmbiance(data);
    };
    fetchRestaurantAmbiance();
  }, []);

  return (
    <div ref={ambianceRef}>
      <div className="relative bg-white">
        <div className="container m-auto px-4 pt-32 md:pt-32 md:px-12 lg:pt-[4.8rem] lg:px-7">
          <div className="flex items-center flex-wrap px-2 md:px-0">
            <div className=" lg:w-6/12 lg:py-24 xl:py-32">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://images.squarespace-cdn.com/content/v1/5fac753a19904608da14a085/1606268963813-NSC3YINQPJPJ24PCK286/Tacos+%26+Beer+Interior+Vibe"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://elledecor.in/wp-content/uploads/2021/10/H11_Restaurant-Listicle.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://images.squarespace-cdn.com/content/v1/57ad8de5ff7c50d12ce76b68/1557410409919-Y2VDJZ207CWG0U4LYYN7/Decor+and+Ambience+in+a+Restaurant"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://files.virgool.io/upload/users/2789310/posts/dgedo1oblbdz/mskbqr4jqp8m.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://bimsmithstorage.blob.core.windows.net/news-content/2022223_b_restaurant%20design.png"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://images.adsttc.com/media/images/610e/fe5a/f91c/8144/a700/0037/medium_jpg/ELGIN24.jpg?1628372549"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://i.ytimg.com/vi/xfLl0NIz-eY/maxresdefault.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/10/05143343/Featured-Inside-17-1-1024x576.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://res.cloudinary.com/the-infatuation/image/upload/c_scale,w_1200,q_auto,f_auto/cms/media/reviews/tuome/banners/Tuome_0"
                      alt=""
                    />
                  </div>
                </div>
                <div className="grid gap-4">
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://s3-media0.fl.yelpcdn.com/bphoto/p-8R93EPoYA3SWSn-LOGjg/348s.jpg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://www.escoffier.edu/wp-content/uploads/2021/07/Interior-of-a-dimly-lit-modern-restaurant-768.jpeg"
                      alt=""
                    />
                  </div>
                  <div>
                    <img
                      className="h-auto max-w-full rounded-lg"
                      src="https://media.istockphoto.com/id/1073455468/photo/view-inside-a-bar-no-people.jpg?s=612x612&w=0&k=20&c=srhxpa6pmgfoYZvLyH6Qj7zu7_yoVYwfr8QyjI7frKw="
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="ml-auto lg:w-6/12">
              <div className="p-6 md:p-10  text-center">
                <p className="text-yellow-900 text-lg lg:text-2xl font-extrabold">
                  {ambiance?.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
