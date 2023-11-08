import FeaturedCard from "./FeaturedCard";
import Title from "./Title";

const Features = () => {
  return (
    <div className="my-6 px-4">
      <Title>Our Main Features</Title>
      {/* <div className="grid grid-cols-2 w-[99%] mx-auto"> */}
      <div className="flex justify-around item-center flex-col md:flex-row">
        <div>
          <FeaturedCard
            image={`https://i.ibb.co/6yvFvS1/images1-2.png`} title={`Web Development`}
          ></FeaturedCard>
        </div>
        <div>
          <img
            className="w-[450px]"
            src="https://i.ibb.co/DCPMRjT/undraw-Static-website-re-x70h.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-around item-center flex-col md:flex-row-reverse">
        <div>
          <FeaturedCard
            image={`https://i.ibb.co/9yPxC3b/services-details1-2.png`} title={`Database Management`}
          ></FeaturedCard>
        </div>
        <div>
          <img
            className="w-[450px]"
            src="https://i.ibb.co/f2cmFG0/undraw-Server-re-twwj.png"
            alt=""
          />
        </div>
      </div>

      <div className="flex justify-around item-center flex-col md:flex-row">
        <div>
          <FeaturedCard
            image={`https://i.ibb.co/1JkMhyS/Rectangle-72.png`} title={`Mathematics`}
          ></FeaturedCard>
        </div>
        <div>
          <img
            className="w-[450px]"
            src="https://i.ibb.co/Q9Gc5jX/undraw-mathematics-4otb.png"
            alt=""
          />
        </div>
      </div>

      {/*  <div className=" flex justify-end">
        <FeaturedCard
          image={`https://i.ibb.co/9yPxC3b/services-details1-2.png`}
        ></FeaturedCard>
      </div>
      <div>
        <FeaturedCard
          image={`https://i.ibb.co/1JkMhyS/Rectangle-72.png`}
        ></FeaturedCard>
      </div>
      <div className=" flex justify-end">
        <FeaturedCard
          image={`https://i.ibb.co/9g6dFf3/Islamic-studies-2.png`}
        ></FeaturedCard>
      </div> */}
    </div>
  );
};

export default Features;
