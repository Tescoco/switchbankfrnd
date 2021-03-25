import styles from "./Part3.module.css"
import { Link } from "react-scroll";

function Part3() {
    return (
        <div id="section2" className={styles.container}>

           <div className={styles.half1}>
                  
           </div>
           <div className={styles.half2}>
            <div className={styles.half2Main}>
              <div className={styles.half2Inner1}>
                  <div className={styles.half2Inner1Desc}>
                      <h2>ENTER DETAILS</h2>
                  </div>
                  <div className={styles.half2Inner1Content}>
                   <p> 
                      If you are not logged in you will be required to, then you will have to fill other neccessary details the bank you want to switch to might require.
                    <br />
                    <br />
                     After this, you’ll have to confirm the switch by inputting the OTP that would be sent to you.
                  </p>
                  </div>
               </div>
               <div className={styles.half2Inner2}>
                 <div className={styles.half2Inner2Main}>
                    <div className={styles.half2MainHalf1}>
                      <div className={styles.half2Inner2Number}>
                         <h1>2</h1>
                      </div>
                      <div className={styles.half2Inner2DownIcon}>
                       <Link
                        to="section3"
                        spy={true}
                        smooth={true}
                        duration={600}
                        >
                       <img alt ="arrow" className={styles.arrowImg} src="/img/Arrow 1.png" />
                       </Link>
                      </div>
                    </div>
                    <div className={styles.half2MainHalf2}>
                       <img alt ="image 1"  className={styles.group12Img} src="/img/Group 19.png" />
                    </div>
                 </div>
               </div>
            </div>
           </div>
        </div>
    )
}

export default Part3
