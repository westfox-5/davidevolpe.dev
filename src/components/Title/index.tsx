import classes from "./Title.module.css";

const Title = () => {
  return (

    <div className={classes.container}>

      <span className={classes.blur}></span>

      <div className={classes.content}>
        <div className={classes.content_title}>
          Hello I'm <br />
          <span className={classes.content_title_inverted}>
            Davide!
          </span>
        </div>
        <div className={classes.content_subtitle}>
          I am a passionate software developer,
          <br /> specialized in backend development...
          <br /> <span className={classes.content_subsubtitle}>... as you can tell by looking at this website</span>
        </div>
      </div>
    </div>
  );
};

export default Title;
