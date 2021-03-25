import styles from "./Part2.module.css"
import { Link } from "react-scroll";

function Part2() {
    return (
        <div id="section1" className={styles.container}>

           <div className={styles.half1}>
                  
           </div>
           <div className={styles.half2}>
            <div className={styles.half2Main}>
              <div className={styles.half2Inner1}>
                  <div className={styles.half2Inner1Desc}>
                      <h2>IN THE BEGINNING</h2>
                  </div>
                  <div className={styles.half2Inner1Content}>
                  <p> Enter the name of the bank you intend to switch from.
                    Once you start typing, even from the first letter, 
                    our auto-suggest feature starts to give you suggestions 
                    from where you can select the bank.
                    <br />
                    <br />
                    Then you input your account number. 
                    <br />
                    <br />
                    Finally input the name of the bank you wish to 
                    switch to (auto-suggest also works here)</p>
                  </div>
               </div>
               <div className={styles.half2Inner2}>
                 <div className={styles.half2Inner2Main}>
                    <div className={styles.half2MainHalf1}>
                      <div className={styles.half2Inner2Number}>
                         <h1>1</h1>
                      </div>
                      <div className={styles.half2Inner2DownIcon}>
                       <Link
                        to="section2"
                        spy={true}
                        smooth={true}
                        duration={600}
                        >
                        <img alt ="arrow" className={styles.arrowImg} src="/img/Arrow 1.png" />
                       </Link>
                      </div>
                    </div>
                    <div className={styles.half2MainHalf2}>
                       <img alt ="image 1"  className={styles.group12Img} src="/img/Group 12.png" />
                    </div>
                 </div>
               </div>
            </div>
           </div>
        </div>
    )
}

export default Part2
