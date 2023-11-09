import FeaturedCard from "./FeaturedCard";
import Title from "./Title";

const Features = () => {
  return (
    <div className="my-6 px-4 lg:px-0">
      <Title>Our Main Features</Title>
      <h1 className="text-2xl text-center -mt-7 mb-4">You can take exam of these topics</h1>
      {/* <div className="grid grid-cols-2 w-[99%] mx-auto"> */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div>
          <FeaturedCard
            image={`https://i.ibb.co/6yvFvS1/images1-2.png`}
            title={`Web Development`}
          ></FeaturedCard>
        </div>
      <div>
        <FeaturedCard
          image={`https://i.ibb.co/1qtb0dY/retina-1708x683-0712-Bad-Practices-in-Database-Design-Are-You-Making-These-Mistakes-Dan-Newsletter-f.png`}
          title={`DBMS`}
        ></FeaturedCard>
      </div>

      
      <div>
        <FeaturedCard
          image={`https://i.ibb.co/3CNGGyr/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon-3942.jpg`}
          title={`JavaScript`}
        ></FeaturedCard>
      </div>
      <div>
        <FeaturedCard
          image={`https://i.ibb.co/X42HcZc/1632416410836-e-2147483647-v-beta-t-Pdex-X0-WZr-AZygw-Bj28s2x-Vx-L-b-Ya-I-A25c-Twv-NDLV9w.jpg`}
          title={`React`}
        ></FeaturedCard>
      </div>
      <div>
        <FeaturedCard
          image={`https://i.ibb.co/qYSsssB/images-q-tbn-ANd9-Gc-QZXOZHUy-Nl-Ch-T3lm-MXfika-MOWK-NHw-JN9sdw-usqp-CAU.jpg`}
          title={`HTML`}
        ></FeaturedCard>
      </div>
      <div>
        <FeaturedCard
          image={`https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png`}
          title={`CSS`}
        ></FeaturedCard>
      </div>
      </div>
    </div>
  );
};

export default Features;
