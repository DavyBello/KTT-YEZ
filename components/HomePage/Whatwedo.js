

const Whatwedo = (props) => {
    return (

    <section className="about-area section-padding" style={{paddingBottom : '10px'}}>
        <div className="container">
            <div className="row">
                <div className="col-md-8 col-md-offset-2 text-center">
                    <div className="title">
                        <h2>{props.title || "What We Do"}</h2>
                        <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iusto eos est expedita, quas ab adipisci consectetur tempora jet.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-5">
                    <div className="about-img">
                        <img src="/static/img/youth.jpg" alt=""/>
                    </div>
                </div>
                <div className="col-sm-7">
                    <div className="about-details">
                        <p>We care for children, protect their welfare, and prepare them for the future. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. </p>
                        <p>We care for children, protect their welfare, and prepare them for the future. Aenean sollicitudin, lorem quis bibendum auctor.</p>
                        {/* <a href="#" className="donate-btn more-btn hvr-shutter-out-horizontal">read more</a> */}
                    </div>
                </div>
            </div>
            
        </div>
    </section>
    )
  }
  export default Whatwedo
  