import React from 'react'
import './course_Details.css'
import Rating from "./Rating/rating.js";
const Course_Details = () => {
       return (
              <div>
                     <div className="main_course_Details">
                            <div className="conent_CD">
                                   <div className="features_CD">
                                          <div className="Certificates">
                                                 <div>
                                                        <h1>5+</h1>
                                                        <p>Certificates</p>
                                                 </div>

                                          </div>
                                          <div className="ETE">
                                                 <div>
                                                        <h1>10+</h1>
                                                        <p>End to End Projects</p>
                                                 </div>
                                          </div>
                                          <div className="live_Hour">
                                                 <div>
                                                        <h1>120+</h1>
                                                        <p>Hours of live training</p>
                                                 </div>

                                          </div>

                                   </div>
                                   <div className="details_CD">
                                          <div className="top_details">
                                                 <div>
                                                        <p>MENTORSHIP PROGRAM FEES</p>
                                                        <h1>Masters in Full Stack</h1>
                                                 </div>


                                                 <Rating
                                                        ratingInPercent={92}
                                                        iconSize="l"
                                                        showOutOf={true}
                                                        enableUserInteraction={false}
                                                 />

                                          </div>


                                          <hr />
                                          <div className="bottom_details">
                                                 <div>
                                                        <div className="students_enrolled">
                                                               <h1>3654+ STUDENTS ENROLLED</h1>
                                                        </div>
                                                        {/* <div className="rating">
                                                               <h1>4.95/5 RATING</h1>
                                                        </div> */}
                                                 </div>
                                                 <div className="price_CD">
                                                        <div>
                                                               <h1>&#36;56,000</h1>
                                                               <p>Without Placement Assistance</p>
                                                               <p>(EXCLUDING GST, PAY IN INSTALLMENTS/EMIS)</p>
                                                        </div>
                                                        <div>
                                                               <h1>&#36;60,000</h1>
                                                               <p>With Placement Assistance</p>
                                                               <p>(EXCLUDING GST, PAY IN INSTALLMENTS/EMIS)</p>
                                                        </div>
                                                 </div>


                                          </div>

                                   </div>
                            </div>

                     </div>
              </div >
       )
}

export default Course_Details
