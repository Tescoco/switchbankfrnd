import styles from "../../styles/Utils/HIW.module.css"
import { Link } from "react-scroll";

function HIW({id,desc,content1,content2,content3,number,imageSrc,moveTo}) {
    return (
        <div id={id} className={styles.container}>
           <div className={styles.half1}>
                  
           </div>
           <div className={styles.half2}>
            <div className={styles.half2Main}>
              <div className={styles.half2Inner1}>
                  <div className={styles.half2Inner1Desc}>
                      <h2>{desc}</h2>
                  </div>
                  <div className={styles.half2Inner1Content}>
                  <p>{content1}
                    <br />
                    <br />
                    {content2}
                    {
                       content3 && 
                           <>
                             <br />
                             <br />
                             {content3}
                           </>
                    } 
                    </p>
                  </div>
               </div>
               <div className={styles.half2Inner2}>
                 <div className={styles.half2Inner2Main}>
                    <div className={styles.half2MainHalf1}>
                      <div className={styles.half2Inner2Number}>
                         <h1>{number}</h1>
                      </div>
                      <div className={styles.half2Inner2DownIcon}>
                       <Link
                        to={moveTo}
                        spy={true}
                        smooth={true}
                        duration={600}
                        >
                        <img alt ="arrow" className={styles.arrowImg} src="/img/Arrow 1.png" />
                       </Link>
                      </div>
                    </div>
                    <div className={styles.half2MainHalf2}>
                       <img alt ="image 1"  className={styles.group12Img} src={imageSrc} />
                    </div>
                 </div>
               </div>
            </div>
           </div>
        </div>
    )
}

export default HIW
