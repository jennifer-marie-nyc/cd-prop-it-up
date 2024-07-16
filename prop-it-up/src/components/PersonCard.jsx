const PersonCard = (props) => {
  const { lastName, firstName, age, hairColor } = props;
  return (
    <div className="card shadow w-25 mb-3 mx-auto">
      <div className="card-body">
        <h3 className="card-title fw-bold">
          {lastName}, {firstName}
        </h3>
        <p className="card-text">Age: {age}</p>
        <p>Hair Color: {hairColor}</p>
      </div>
    </div>
  );
};

export default PersonCard;
