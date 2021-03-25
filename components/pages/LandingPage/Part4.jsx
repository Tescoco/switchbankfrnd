import styles from "./Part4.module.css"
import { Link } from "react-scroll";

function Part4() {
    return (
        <div id="section3" className={styles.container}>

           <div className={styles.half1}>
                  
           </div>
           <div className={styles.half2}>
            <div className={styles.half2Main}>
              <div className={styles.half2Inner1}>
                  <div className={styles.half2Inner1Desc}>
                      <h2>WHAT EVER HAS A BEGINNING...</h2>
                  </div>
                  <div className={styles.half2Inner1Content}>
                   <p> 
                    After confirmation, the switching process starts. Depending on the bank you switched to/from, your old/new account type and how much you have in your account, your switch can take from few seconds to several days.
                    <br />
                    <br />
                    Finally, once the switch is completed, you’ll receive a notification containng your banking details from the new bank and there ends your worry until...
                  </p>
                  </div>
               </div>
               <div className={styles.half2Inner2}>
                 <div className={styles.half2Inner2Main}>
                    <div className={styles.half2MainHalf1}>
                      <div className={styles.half2Inner2Number}>
                         <h1>3</h1>
                      </div>
                      <div className={styles.half2Inner2DownIcon}>
                      <Link
                        to="section4"
                        spy={true}
                        smooth={true}
                        duration={600}
                        >
                         <img alt ="arrow" className={styles.arrowImg} src="/img/Arrow 1.png" />
                       </Link>
                      </div>
                    </div>
                    <div className={styles.half2MainHalf2}>
                       <img alt ="image 4"  className={styles.group12Img} src="/img/Group 20.png" />
                    </div>
                 </div>
               </div>
            </div>
           </div>
        </div>
    )
}

export default Part4
