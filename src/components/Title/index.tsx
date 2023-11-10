import "./Title.css";

const Title = () => {
  return (

    <div className="container">

      <span className="blur"></span>

      <div className="content">
        <div className="content-title">
          Hello I'm <br />
          <span className="content-title-inverted">
            Davide
          </span>
        </div>
        <div className="content-subtitle">
          I am a passionate software developer,
          <br /> specialized in backend development
          <br /> <span className="content-subsubtitle">... just look at this ugly website</span>
        </div>
      </div>
    </div>
  );
};

export default Title;
