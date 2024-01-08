/* eslint-disable react/prop-types */


const PopularCard = ({item}) => {
  return (
    <div>
      <div className="card ">
        <figure>
          <img
            src={item?.ImageUrl}
            alt="Shoes"
            className="rounded-xl h-[230px] "
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2>{item?.Name}</h2>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
