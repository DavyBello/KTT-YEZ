

const Whatwedo = (props) => {
    return (
    <section className="home-blog section-padding" style={{paddingBottom : '80px'}}>
        <div className="container">
          <div className="title text-center">
            <h2>{props.title || "LATEST BLOG"}</h2>
            <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi tempora veritatis nemo aut ea iusto eos est expedita, quas ab adipisci consectetur tempora jet.</p>
          </div>

            <div className="row">
              <div class="col-md-4 col-sm-6">
                  {/* <!-- Single news --> */}
                  <article class="news-info">
                      <div class="news-img">
                          <img src="/static/images/blog/b1.jpg" alt=""/>
                          <div class="post-date-info">
                              <span>26</span> feb/18
                          </div>
                      </div>
                      <div class="news-content">
                          <div class="post-meta">
                              <ul>
                                  <li><a href="#"><i class="fa fa-user"></i> By Smith</a></li>
                                  <li><a href="#"><i class="fa fa-thumbs-up" aria-hidden="true"></i>253 likes</a></li>
                                  <li><a href="#"><i class="fa fa-commenting-o"></i> 23 Comments</a></li>
                              </ul>
                          </div>
                          <h2><a href="#">post title here</a></h2>
                          <p>We care for children, protect their welfare, and prepare them for the future.</p>
                          <a href="#" class="donate-btn more-btn hvr-shutter-out-horizontal">read more</a>
                      </div>
                  </article>
              </div>
              <div class="col-md-4 col-sm-6">
                  {/* <!-- Single news --> */}
                  <article class="news-info">
                      <div class="news-img">
                          <img src="/static/images/blog/b2.jpg" alt=""/>
                          <div class="post-date-info">
                              <span>26</span> feb/18
                          </div>
                      </div>
                      <div class="news-content">
                          <div class="post-meta">
                              <ul>
                                  <li><a href="#"><i class="fa fa-user"></i> By Smith</a></li>
                                  <li><a href="#"><i class="fa fa-thumbs-up" aria-hidden="true"></i>253 likes</a></li>
                                  <li><a href="#"><i class="fa fa-commenting-o"></i> 23 Comments</a></li>
                              </ul>
                          </div>
                          <h2><a href="#">post title here</a></h2>
                          <p>We care for children, protect their welfare, and prepare them for the future.</p>
                          <a href="#" class="donate-btn more-btn hvr-shutter-out-horizontal">read more</a>
                      </div>
                  </article>
              </div>
              <div class="col-md-4 col-sm-6">
                  {/* <!-- Single news --> */}
                  <article class="news-info">
                      <div class="news-img">
                          <img src="/static/images/blog/b3.jpg" alt=""/>
                          <div class="post-date-info">
                              <span>26</span> feb/18
                          </div>
                      </div>
                      <div class="news-content">
                          <div class="post-meta">
                              <ul>
                                  <li><a href="#"><i class="fa fa-user"></i> By Smith</a></li>
                                  <li><a href="#"><i class="fa fa-thumbs-up" aria-hidden="true"></i>253 likes</a></li>
                                  <li><a href="#"><i class="fa fa-commenting-o"></i> 23 Comments</a></li>
                              </ul>
                          </div>
                          <h2><a href="#">post title here</a></h2>
                          <p>We care for children, protect their welfare, and prepare them for the future.</p>
                          <a href="#" class="donate-btn more-btn hvr-shutter-out-horizontal">read more</a>
                      </div>
                  </article>
              </div>
            </div>

        </div>
        <style jxs>{`
          .home-blog {
            background: url(/static/images/d2s-texture-pixels.jpg) repeat center center !important;
          }
          d2s-texture-pixels
        `}</style>
    </section>
    )
  }
  export default Whatwedo
