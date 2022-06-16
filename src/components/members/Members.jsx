import "./Members.css";

const Members = () => {
  return (

    <div>

      <div>
        <h1 className="card-txt">Tecnologies I use</h1>
      </div>

      <div className="container card-container">

        <div className="card card-1">
          <div className="card-img"></div>
          <div className="card-info">
            <h1 className="name">NodeJS</h1>
          </div>
        </div>
        <div className="card card-2">
          <div className="card-img"></div>
          <div className="card-info">
            <h1 className="name">React</h1>
          </div>
        </div>
        <div className="card card-3">
          <div className="card-img"></div>
          <div className="card-info">
            <h1 className="name">JavaScript</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Members;