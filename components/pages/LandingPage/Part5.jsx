import styles from "./Part5.module.css"


function Part5() {
    return (
        <div id="section4" className={styles.container}>
          <div className={styles.half2}>
                 <div className={styles.half2Main}>
                    <div className={styles.half2MainInner1}>
                        <div className={styles.imgContainer}>
                         <img alt ="image 5"  className={styles.group14Img} src="/img/Group 14.png" />
                        </div>
                     </div>
                    <div className={styles.half2MainInner2}>
                        <div className={styles.half2MainInner2Main}>
                         <div className={styles.half2MainInner2Content}>
                           We are here to <br /> 
                           give you true 
                           <br/>
                           banking
                           <br />
                            freedom.
                         </div>
                         <div className={styles.half2MainInner2ContentMobile}>
                           We are here to 
                           give you true 
                           banking
                            freedom.
                         </div>
                         <div className={styles.half2MainInner2Socials}>
                          <div className={styles.socialHeader}>
                               Socials
                          </div>
                         <div className={styles.socialContents}>
                            <div className={styles.socialContent1}>
                               Facebook
                             </div>
                             <div className={styles.socialContent2}>
                               Twitter
                             </div>
                             <div className={styles.socialContent3}>
                               Instagram
                             </div>
                             <div className={styles.socialContent4}>
                               Linkedin
                             </div>
                          </div>
                         </div>
                        </div>
                     </div>
                 </div>
             </div>
             <div className={styles.half3}>
             <svg className={styles.rectangle9} xmlns="http://www.w3.org/2000/svg" width="1440" height="220%" viewBox="0 0 1440 196" fill="none">
               <path d="M0 0L1440 107V196H0V0Z" fill="#FF7A00"/>
               <g>
                 <text x="10%" y="40%" fill="black" fontWeight="bold">Email:</text>
                 <text x="13.5%" y="40%" fill="black"> hello@switchbank.ng</text>
                 <text x="10%" y="55%" fill="black" fontWeight="bold">Tel:</text>
                 <text x="12%" y="55%" fill="black"> 234 8-- --- ----</text>
                 <text x="10%" y="70%" fill="black" fontWeight="bold">Address:</text>
                 <text x="14.8%" y="70%" fill="black" > 7, Internet Ave. Figma, Linux State</text>
               </g>
               <g>
                 <text x="70%" y="70%" fill="black">© 2021. SwitchBank NG - All Rights Reserved.</text>
               </g>
             </svg> 
             </div>
             <div className={styles.half3Mobile}>
              <div className={styles.half3MobileInner}>
               <div className={styles.half3MobileInnerHalf1}>
                  <div className={styles.half3MobileInnerHalf11}>
                    <p> <span style={{fontWeight:500}}>Email: </span> hello@switchbank.ng</p>
                  </div>   
                  <div className={styles.half3MobileInnerHalf12}>
                  <p> <span style={{fontWeight:500}}>Tel: </span> 234 8-- --- ----</p>
                  </div>   
                  <div className={styles.half3MobileInnerHalf13}>

                      <div className={styles.half3MobileInnerHalf13Inner2}>
                        About
                      </div>
                  </div>   
                 </div>
               <div className={styles.half3MobileInnerHalf2}>
                    7, Internet Ave. Figma, Linux State
                 </div>
               <div className={styles.half3MobileInnerHalf3}>
                     © 2021. SwitchBank NG - All Rights Reserved.
                 </div>
              </div>
             </div>
        </div>
    )
}

export default Part5
