return (
  <div className={`${bg[0]}`}>
    <Animation />
    <div className="main-conatiner">
      <div className="text-conatiner">
        <a
          href="www.facebook.com"
          className={`${bg[1]}`}
          onMouseEnter={() => setHidden(false)}
          onMouseLeave={() => setHidden(true)}
        >
          {hidden ? "Hey." : "About"}
        </a>
        <a
          href="www.facebook.com"
          className="iam-section"
          onMouseEnter={() => setWork(false)}
          onMouseLeave={() => setWork(true)}
        >
          {work ? "I am" : "Projects"}
        </a>
        <a
          href="www.facebook.com"
          className="name-section"
          onMouseEnter={() => setContact(false)}
          onMouseLeave={() => setContact(true)}
        >
          {contact ? "Praveen" : "Contact"}
        </a>
      </div>
      <img className="img-" src="" alt="" />
      <div className="theme">
        <h1 className={`${bg[1]}`}>Light</h1>
        <ToggleSwitch bgChange={background} />
        <h1 className={`${bg[1]}`}>Dark</h1>
      </div>
    </div>
  </div>
);
